import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mimanudev.github.io',
  base: process.env.NODE_ENV === 'production' ? '/Portafolio_MM' : '/',
  integrations: [tailwind()],
});

