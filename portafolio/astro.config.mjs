import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mimanudev.site',
  integrations: [
    tailwind()
  ],
})