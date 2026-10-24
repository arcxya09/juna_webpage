// Hero overlay: faint drifting motes over the photo, with an occasional beam streak.
// Pauses when off-screen and respects prefers-reduced-motion.

const canvas = document.querySelector<HTMLCanvasElement>('[data-particles]');

if (canvas) {
  const ctx = canvas.getContext('2d')!;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  type P = { x: number; y: number; z: number; vx: number; vy: number; warm: boolean };
  type Streak = { x: number; y: number; len: number; life: number; angle: number };

  let w = 0;
  let h = 0;
  let dpr = 1;
  let parts: P[] = [];
  let streaks: Streak[] = [];
  let mx = 0;
  let my = 0;
  let running = true;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(130, (w * h) / 12000));
    parts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.9 + 0.1,
      vx: (Math.random() - 0.5) * 0.08,
      vy: -Math.random() * 0.12 - 0.02,
      warm: Math.random() < 0.35,
    }));
  };

  const spawnStreak = () => {
    streaks.push({
      x: Math.random() * w * 0.6,
      y: h * (0.55 + Math.random() * 0.4),
      len: 120 + Math.random() * 220,
      life: 1,
      angle: -0.32 - Math.random() * 0.25,
    });
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.x += p.vx * p.z * 4;
      p.y += p.vy * p.z * 4;
      if (p.y < -10) p.y = h + 10;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      const px = p.x + mx * 18 * p.z;
      const py = p.y + my * 12 * p.z;
      const r = p.z * 1.3 + 0.2;
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fillStyle = p.warm
        ? `rgba(227,171,128,${0.2 + p.z * 0.45})`
        : `rgba(220,228,240,${0.08 + p.z * 0.3})`;
      ctx.fill();
    }

    if (Math.random() < 0.006 && streaks.length < 2) spawnStreak();
    streaks = streaks.filter((s) => s.life > 0);
    for (const s of streaks) {
      const progress = 1 - s.life;
      const hx = s.x + Math.cos(s.angle) * s.len * 3 * progress;
      const hy = s.y + Math.sin(s.angle) * s.len * 3 * progress;
      const tx = hx - Math.cos(s.angle) * s.len;
      const ty = hy - Math.sin(s.angle) * s.len;
      const g = ctx.createLinearGradient(tx, ty, hx, hy);
      g.addColorStop(0, 'rgba(224,167,122,0)');
      g.addColorStop(1, `rgba(240,200,160,${0.45 * s.life})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(hx, hy);
      ctx.stroke();
      s.life -= 0.012;
    }
  };

  const loop = () => {
    if (running) draw();
    requestAnimationFrame(loop);
  };

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (e) => {
    mx = e.clientX / w - 0.5;
    my = e.clientY / h - 0.5;
  });

  if (reduce) {
    draw();
  } else {
    new IntersectionObserver(([entry]) => (running = entry.isIntersecting)).observe(canvas);
    loop();
  }
}
