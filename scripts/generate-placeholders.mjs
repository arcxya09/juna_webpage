// Renders the placeholder background images into public/images with a headless
// browser. Run with `node scripts/generate-placeholders.mjs` (needs playwright).
// Replace the output files with real photography once it is available.
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// CommonJS require so a globally installed playwright is found via NODE_PATH.
const { chromium } = createRequire(import.meta.url)('playwright');

const outDir = fileURLToPath(new URL('../public/images/', import.meta.url));
mkdirSync(outDir, { recursive: true });

// Shared helpers injected into every scene: seeded RNG and fractal value noise.
const lib = `
let s = 1337;
const rnd = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
const P = new Float32Array(512 * 512).map(() => rnd());
const lerp = (a, b, t) => a + (b - a) * t;
const sm = t => t * t * (3 - 2 * t);
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = sm(x - xi), yf = sm(y - yi);
  const g = (i, j) => P[((j & 511) * 512) + (i & 511)];
  return lerp(lerp(g(xi, yi), g(xi + 1, yi), xf), lerp(g(xi, yi + 1), g(xi + 1, yi + 1), xf), yf);
}
function fbm(x, y, o = 6) {
  let v = 0, a = 0.5, f = 1;
  for (let i = 0; i < o; i++) { v += a * vnoise(x * f, y * f); f *= 2; a *= 0.5; }
  return v;
}
`;

const scenes = {
  // Deep-space field with a faint copper nebula, for the hero.
  'hero-space': `
    const W = c.width, H = c.height, img = x.createImageData(W, H), d = img.data;
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const u = i / W, v = j / H;
      const n = fbm(u * 3.2 + 4, v * 1.8 + 1, 7);
      const m = Math.max(0, n - 0.45) * 2.2;
      const band = Math.exp(-Math.pow((v - 0.35 - 0.25 * u) * 3.2, 2));
      const k = m * band;
      const p = (j * W + i) * 4;
      d[p] = 6 + 150 * k * k + 20 * k;
      d[p + 1] = 11 + 70 * k * k + 18 * k;
      d[p + 2] = 22 + 40 * k + 10 * (1 - v);
      d[p + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    for (let i = 0; i < 4200; i++) {
      const r = Math.pow(rnd(), 6) * 1.8 + 0.3;
      x.fillStyle = 'rgba(' + (220 + rnd() * 35 | 0) + ',' + (215 + rnd() * 30 | 0) + ',' + (210 + rnd() * 45 | 0) + ',' + (0.25 + rnd() * 0.75) + ')';
      x.beginPath(); x.arc(rnd() * W, rnd() * H, r, 0, 7); x.fill();
    }
  `,
  // Layered marble and granite cross-section, for the laboratory depth section.
  'rock-strata': `
    const W = c.width, H = c.height, img = x.createImageData(W, H), d = img.data;
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const u = i / W, v = j / H;
      const warp = fbm(u * 2, v * 2, 5) * 0.35;
      const strata = Math.sin((v + warp) * 46) * 0.5 + 0.5;
      const grain = fbm(u * 40, v * 40, 3);
      const vein = Math.pow(1 - Math.abs(Math.sin((u * 3 + v * 5 + fbm(u * 4, v * 4, 6) * 3) * 3.14)), 18);
      const depth = 1 - v * 0.55;
      const t = (0.18 + strata * 0.1 + grain * 0.12) * depth + vein * 0.25;
      const p = (j * W + i) * 4;
      d[p] = 22 + 150 * t; d[p + 1] = 26 + 140 * t; d[p + 2] = 34 + 132 * t; d[p + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, 'rgba(10,18,32,0.55)'); g.addColorStop(1, 'rgba(6,11,20,0.85)');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
  `,
  // Long underground hall with a beamline vanishing into the distance.
  'beamline': `
    const W = c.width, H = c.height, cx = W * 0.5, cy = H * 0.46;
    x.fillStyle = '#05090f'; x.fillRect(0, 0, W, H);
    for (let k = 0; k < 26; k++) {
      const t = Math.pow(k / 26, 1.7), w = W * (1.2 - t * 1.15), h = H * (1.3 - t * 1.25);
      x.strokeStyle = 'rgba(140,160,190,' + (0.05 + 0.09 * (1 - t)) + ')';
      x.lineWidth = 2 * (1 - t) + 0.5;
      x.beginPath();
      x.moveTo(cx - w / 2, cy + h / 2); x.lineTo(cx - w / 2, cy - h * 0.15);
      x.quadraticCurveTo(cx, cy - h * 0.62, cx + w / 2, cy - h * 0.15); x.lineTo(cx + w / 2, cy + h / 2);
      x.stroke();
      x.fillStyle = 'rgba(255,214,170,' + (0.5 * (1 - t)) + ')';
      x.fillRect(cx - 6 * (1 - t) - 2, cy - h * 0.38, 12 * (1 - t) + 4, 3 * (1 - t) + 1);
    }
    const beamY = cy + H * 0.08;
    const bg = x.createLinearGradient(0, 0, W, 0);
    bg.addColorStop(0, 'rgba(194,124,78,0)'); bg.addColorStop(0.5, 'rgba(232,170,120,0.95)'); bg.addColorStop(1, 'rgba(194,124,78,0)');
    x.strokeStyle = 'rgba(90,100,118,0.9)'; x.lineWidth = 22;
    x.beginPath(); x.moveTo(0, H * 0.82); x.lineTo(cx, beamY); x.stroke();
    x.strokeStyle = bg; x.lineWidth = 3;
    x.beginPath(); x.moveTo(0, H * 0.82); x.lineTo(cx, beamY); x.stroke();
    const glow = x.createRadialGradient(cx, beamY, 0, cx, beamY, W * 0.35);
    glow.addColorStop(0, 'rgba(224,167,122,0.35)'); glow.addColorStop(1, 'rgba(224,167,122,0)');
    x.fillStyle = glow; x.fillRect(0, 0, W, H);
    const img = x.getImageData(0, 0, W, H), d = img.data;
    for (let p = 0; p < d.length; p += 4) { const n = (rnd() - 0.5) * 10; d[p] += n; d[p + 1] += n; d[p + 2] += n; }
    x.putImageData(img, 0, 0);
  `,
  // Close-packed crystal array seen end-on, standing in for the BGO detector.
  'detector': `
    const W = c.width, H = c.height, cx = W / 2, cy = H / 2;
    x.fillStyle = '#070c16'; x.fillRect(0, 0, W, H);
    const R = 38, hx = R * Math.sqrt(3);
    for (let row = -16; row <= 16; row++) for (let col = -24; col <= 24; col++) {
      const px = cx + col * hx + (row & 1) * hx / 2, py = cy + row * R * 1.5;
      const dist = Math.hypot(px - cx, py - cy) / (H * 0.55);
      if (dist > 1.05) continue;
      const lit = Math.max(0, 1 - dist) * (0.6 + 0.4 * rnd());
      x.beginPath();
      for (let a = 0; a < 6; a++) { const t = Math.PI / 3 * a + Math.PI / 6; x.lineTo(px + (R - 3) * Math.cos(t), py + (R - 3) * Math.sin(t)); }
      x.closePath();
      const g = x.createRadialGradient(px - 8, py - 10, 2, px, py, R);
      g.addColorStop(0, 'rgba(' + (60 + 160 * lit | 0) + ',' + (70 + 110 * lit | 0) + ',' + (90 + 60 * lit | 0) + ',1)');
      g.addColorStop(1, 'rgba(14,22,36,1)');
      x.fillStyle = g; x.fill();
      x.strokeStyle = 'rgba(194,124,78,' + (0.15 + 0.5 * lit) + ')'; x.lineWidth = 1.5; x.stroke();
    }
    const v = x.createRadialGradient(cx, cy, H * 0.2, cx, cy, W * 0.6);
    v.addColorStop(0, 'rgba(7,12,22,0)'); v.addColorStop(1, 'rgba(7,12,22,0.95)');
    x.fillStyle = v; x.fillRect(0, 0, W, H);
  `,
};

const sizes = { 'hero-space': [2560, 1440], 'rock-strata': [2400, 1600], beamline: [2400, 1400], detector: [2000, 1400] };

const browser = await chromium.launch();
const page = await browser.newPage();
for (const [name, body] of Object.entries(scenes)) {
  const [w, h] = sizes[name];
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(`<body style="margin:0"><canvas id="c" width="${w}" height="${h}"></canvas></body>`);
  await page.evaluate(`(() => { const c = document.getElementById('c'); const x = c.getContext('2d'); ${lib} ${body} })()`);
  await page.locator('#c').screenshot({ path: `${outDir}${name}.jpg`, type: 'jpeg', quality: 82 });
  console.log('wrote', name);
}
await browser.close();
