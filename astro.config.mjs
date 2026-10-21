import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://notebook.example.com',
  legacy: {
    collections: true
  },
  server: {
    host: true,
  }
});
