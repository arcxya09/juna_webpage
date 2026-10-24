import { defineConfig } from 'astro/config';

// GitHub Pages serves the site at https://arcxya09.github.io/juna_webpage/.
// For a local or custom-domain deployment, build with BASE_PATH=/ .
export default defineConfig({
  site: 'https://arcxya09.github.io',
  base: process.env.BASE_PATH ?? '/juna_webpage',
  trailingSlash: 'ignore',
});
