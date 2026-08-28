import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://manuelmendieta21.github.io',
  base: process.env.NODE_ENV === 'production' ? '/portafolio' : '/',
  integrations: [tailwind()],
});

