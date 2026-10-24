// Scroll-driven motion: reveal-on-scroll, number counters, parallax layers,
// the laboratory depth gauge, nav state and the mobile menu.

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

// Count numbers up from zero the first time they are seen.
const fmt = new Intl.NumberFormat('en-US');
const countObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      countObserver.unobserve(e.target);
      const el = e.target as HTMLElement;
      const target = Number(el.dataset.count);
      if (reduce) continue;
      const start = performance.now();
      const dur = 1800;
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - k, 4);
        el.textContent = fmt.format(Math.round(target * eased));
        if (k < 1) requestAnimationFrame(step);
      };
      el.textContent = '0';
      requestAnimationFrame(step);
    }
  },
  { threshold: 0.6 },
);
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countObserver.observe(el));

// Nav background, active link, parallax and depth gauge all follow scroll.
const nav = document.querySelector<HTMLElement>('[data-nav]');
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav__links a'));
const sections = navLinks
  .map((a) => document.querySelector<HTMLElement>(a.getAttribute('href')!))
  .filter((s): s is HTMLElement => !!s);
const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const depth = document.querySelector<HTMLElement>('[data-depth]');
const depthFill = document.querySelector<HTMLElement>('[data-depth-fill]');
const depthMarker = document.querySelector<HTMLElement>('[data-depth-marker]');
const depthReadout = document.querySelector<HTMLElement>('[data-depth-readout]');

let ticking = false;
const onScroll = () => {
  ticking = false;
  const vh = window.innerHeight;
  nav?.classList.toggle('is-scrolled', window.scrollY > 40);

  let current: HTMLElement | null = null;
  for (const s of sections) if (s.getBoundingClientRect().top < vh * 0.4) current = s;
  navLinks.forEach((a) => a.classList.toggle('is-active', !!current && a.getAttribute('href') === `#${current.id}`));

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

  if (depth && depthFill && depthMarker && depthReadout) {
    // The marker follows a reading line at 60% of the viewport down the track.
    const r = depthFill.parentElement!.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
    const pct = `${(k * 100).toFixed(2)}%`;
    depthFill.style.height = pct;
    depthMarker.style.top = pct;
    const m = Math.round(k * 2400);
    depthReadout.textContent = m ? `−${fmt.format(m)}` : '0';
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
