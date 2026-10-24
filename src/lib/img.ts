import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/{photos,figures}/*.{jpg,png}', { eager: true });

// Look up a bundled image by file name, e.g. img('hero-accelerator.jpg').
export function img(name: string): ImageMetadata {
  const key = Object.keys(files).find((k) => k.endsWith(`/${name}`));
  if (!key) throw new Error(`Unknown image: ${name}`);
  return files[key].default;
}

// Responsive widths up to (and including) the source width.
export function widths(meta: ImageMetadata, steps = [480, 800, 1200, 1600, 2000, 2600]): number[] {
  return [...steps.filter((w) => w < meta.width), meta.width];
}
