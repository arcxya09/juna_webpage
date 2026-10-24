// Scroll-driven motion: reveal-on-scroll, number counters, parallax layers,
// reading progress, nav state, the milestone scroller and the mobile menu.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal elements as they enter the viewport.
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        revealObserver.unobserve(e.target);
      }
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

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

// Nav background, active link, parallax and the progress bar follow scroll.
const nav = document.querySelector<HTMLElement>('[data-nav]');
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav__links a'));
const sections = navLinks
  .map((a) => document.querySelector<HTMLElement>(a.getAttribute('href')!))
  .filter((s): s is HTMLElement => !!s);
const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const progress = document.querySelector<HTMLElement>('[data-progress]');

let ticking = false;
const onScroll = () => {
  ticking = false;
  const vh = window.innerHeight;
  const y = window.scrollY;
  nav?.classList.toggle('is-scrolled', y > 40);

  let current: HTMLElement | null = null;
  for (const s of sections) if (s.getBoundingClientRect().top < vh * 0.4) current = s;
  navLinks.forEach((a) => a.classList.toggle('is-active', !!current && a.getAttribute('href') === `#${current.id}`));

  if (progress) {
    const max = document.documentElement.scrollHeight - vh;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
  }

  if (!reduce) {
    for (const el of parallax) {
      const host = el.parentElement!;
      const r = host.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      const speed = Number(el.dataset.parallax);
      const offset = (r.top + r.height / 2 - vh / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    }
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

// Mobile menu.
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
toggle?.addEventListener('click', () => {
  const open = nav?.classList.toggle('is-open') ?? false;
  toggle.setAttribute('aria-expanded', String(open));
});
navLinks.forEach((a) =>
  a.addEventListener('click', () => {
    nav?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }),
);
