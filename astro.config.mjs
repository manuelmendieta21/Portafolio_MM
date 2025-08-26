import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: 'Proyectos',
      sidebar: [
        { label: 'Introducción', slug: 'introduccion' },
      ],
    }),
  ],
});