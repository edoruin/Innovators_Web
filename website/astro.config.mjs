import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://edoruin.github.io',
  base: '/Innovators_Web',
  publicDir: 'static',
  outDir: 'public',
  trailingSlash: 'always',
});
