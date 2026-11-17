import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [mdx(), react()],
  redirects: {
    // the project was renamed from demoforge
    '/projects/demoforge': '/projects/demoday',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
