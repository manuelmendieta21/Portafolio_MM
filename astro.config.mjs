import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: 'Proyectos', // Configuración básica de Starlight
      sidebar: [
        { text: 'Introducción', link: '/docs/introduccion' },
        // otros enlaces de la barra lateral
      ],
    }),
  ],
});