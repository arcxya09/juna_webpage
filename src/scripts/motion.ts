// Scroll-driven motion: reveal-on-scroll, number counters, parallax layers,
// text that lights up as it is read, reading progress, nav and sub-nav state,
// pointer glow on cards, the milestone scroller and the mobile menu.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal elements as they enter the viewport. Headings and 'clip' reveals
// start fully clipped, which hides them from the observer too, so their
// parent stands in for them.
const revealTargets = new Map<Element, Element[]>();
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        revealTargets.get(e.target)?.forEach((el) => el.classList.add('is-in'));
        revealObserver.unobserve(e.target);
      }
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => {
  const watch = el.matches(".h2, [data-reveal='clip']") && el.parentElement ? el.parentElement : el;
  revealTargets.set(watch, [...(revealTargets.get(watch) ?? []), el]);
  revealObserver.observe(watch);
});

// Count whole numbers up from zero the first time they are seen.
const countObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      countObserver.unobserve(e.target);
      const el = e.target as HTMLElement;
      const target = Number(el.dataset.count);
      if (reduce || !target) continue;
      const fmt = new Intl.NumberFormat('en-US', { useGrouping: (el.textContent ?? '').includes(',') });
      const start = performance.now();
      const dur = 1800;
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - k, 4);
        el.textContent = fmt.format(Math.round(target * eased));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  },
  { threshold: 0.6 },
);
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countObserver.observe(el));

// Scrubbed text: split into words (one per character for CJK) so each can
// brighten in turn as the paragraph moves up the screen.
const scrubs = reduce
  ? []
  : Array.from(document.querySelectorAll<HTMLElement>('[data-scrub]')).map((el) => {
      const text = el.textContent ?? '';
      el.textContent = '';
      for (const part of text.match(/[　-鿿＀-￯]|[^\s　-鿿＀-￯]+|\s+/g) ?? []) {
        if (/^\s+$/.test(part)) {
          el.append(part);
          continue;
        }
        const span = document.createElement('span');
        span.className = 'sw';
        span.textContent = part;
        el.append(span);
      }
      return { el, words: Array.from(el.querySelectorAll<HTMLElement>('.sw')), last: -1 };
    });

// Nav, sub-nav, parallax, scrubbed text and the progress bar follow scroll.
const nav = document.querySelector<HTMLElement>('[data-nav]');
const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const progress = document.querySelector<HTMLElement>('[data-progress]');
const subnav = document.querySelector<HTMLElement>('[data-subnav]');
const subLinks = Array.from(subnav?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]') ?? []);
const subTargets = subLinks.map((a) => document.getElementById(a.hash.slice(1)));
let subActive = -2;
let lastY = window.scrollY;

let ticking = false;
const onScroll = () => {
  ticking = false;
  const vh = window.innerHeight;
  const y = window.scrollY;

  if (nav) {
    nav.classList.toggle('is-scrolled', y > 40);
    // Tuck the bar away while reading down, bring it back on any scroll up.
    if (y < 200 || y < lastY - 6) nav.classList.remove('is-tucked');
    else if (y > lastY + 6 && !nav.classList.contains('is-open')) nav.classList.add('is-tucked');
  }
  if (Math.abs(y - lastY) > 6) lastY = y;

  if (subLinks.length) {
    let current = -1;
    subTargets.forEach((s, i) => {
      if (s && s.getBoundingClientRect().top < vh * 0.4) current = i;
    });
    if (current !== subActive) {
      subActive = current;
      subLinks.forEach((a, i) => a.classList.toggle('is-active', i === current));
      // Keep the active pill in view when the bar scrolls sideways on phones.
      const a = subLinks[current];
      const strip = a?.parentElement;
      if (a && strip && strip.scrollWidth > strip.clientWidth) {
        const left = strip.scrollLeft + a.getBoundingClientRect().left - strip.getBoundingClientRect().left - 24;
        strip.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' });
      }
    }
  }

  if (progress) {
    const max = document.documentElement.scrollHeight - vh;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
  }

  if (reduce) return;

  for (const el of parallax) {
    const host = el.parentElement!;
    const r = host.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh) continue;
    const speed = Number(el.dataset.parallax);
    const offset = (r.top + r.height / 2 - vh / 2) * -speed;
    el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  }

  for (const s of scrubs) {
    const r = s.el.getBoundingClientRect();
    if (r.bottom < -vh || r.top > vh * 2) continue;
    // 0 when the paragraph's top reaches 85% of the screen, 1 when its bottom reaches 45%.
    const k = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
    const lit = Math.round(k * s.words.length * 10);
    if (lit === s.last) continue;
    s.last = lit;
    const n = k * s.words.length;
    s.words.forEach((w, i) => {
      const o = Math.min(1, Math.max(0, n - i));
      w.style.setProperty('--o', (0.16 + 0.84 * o).toFixed(2));
    });
  }
};

window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
window.addEventListener('resize', onScroll);
onScroll();

// Cards carry a soft light that follows the pointer.
if (!reduce) {
  document.querySelectorAll<HTMLElement>('[data-glow]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${(e.clientX - r.left).toFixed(0)}px`);
      el.style.setProperty('--my', `${(e.clientY - r.top).toFixed(0)}px`);
    });
  });
}

// Milestones: arrow buttons, drag to scroll with a mouse, and a progress rule.
document.querySelectorAll<HTMLElement>('[data-tl]').forEach((tl) => {
  const section = tl.closest('section')!;
  const track = tl.querySelector<HTMLElement>('[data-tl-track]')!;
  const prev = section.querySelector<HTMLButtonElement>('[data-tl-prev]');
  const next = section.querySelector<HTMLButtonElement>('[data-tl-next]');
  const bar = section.querySelector<HTMLElement>('[data-tl-progress]');

  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    const k = max > 0 ? track.scrollLeft / max : 1;
    const visible = track.clientWidth / track.scrollWidth;
    if (bar) bar.style.transform = `translateX(${(k * (1 - visible) * 100).toFixed(2)}%) scaleX(${visible.toFixed(3)})`;
    if (prev) prev.disabled = track.scrollLeft <= 2;
    if (next) next.disabled = track.scrollLeft >= max - 2;
  };
  const page = (dir: number) =>
    track.scrollBy({ left: dir * track.clientWidth * 0.75, behavior: reduce ? 'auto' : 'smooth' });
  prev?.addEventListener('click', () => page(-1));
  next?.addEventListener('click', () => page(1));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

  let startX = 0;
  let startLeft = 0;
  let dragging = false;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    dragging = true;
    startX = e.clientX;
    startLeft = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
    track.classList.add('is-dragging');
  });
  track.addEventListener('pointermove', (e) => {
    if (dragging) track.scrollLeft = startLeft - (e.clientX - startX);
  });
  const end = () => {
    dragging = false;
    track.classList.remove('is-dragging');
  };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
});

// Mobile menu: a full-screen sheet that closes on a link, on Esc, or when
// the window grows past the breakpoint.
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const setMenu = (open: boolean) => {
  nav?.classList.toggle('is-open', open);
  nav?.classList.remove('is-tucked');
  document.documentElement.classList.toggle('menu-open', open);
  toggle?.setAttribute('aria-expanded', String(open));
};
toggle?.addEventListener('click', () => setMenu(!nav?.classList.contains('is-open')));
nav?.querySelectorAll('.nav__links a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav?.classList.contains('is-open')) {
    setMenu(false);
    toggle?.focus();
  }
});
window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => e.matches && setMenu(false));
