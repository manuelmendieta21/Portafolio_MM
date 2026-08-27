import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // astro.config.mjs changes site url dominio
  site: 'https://manuelmendieta21.github.io',
  //change base agree
  base: '/Portafolio_MM',
  integrations: [
    tailwind()
  ],
})

