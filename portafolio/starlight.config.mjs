import { defineConfig } from '@astrojs/starlight/config';

export default defineConfig({
  title: 'Mi Documentación',
  sidebar: [
    {
      label: 'Introducción',
      slug: 'introduccion', // Necesitas tener src/content/docs/introduccion.mdx
    },
  ],
});