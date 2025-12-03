import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.PUBLIC_BASE || '/',
  integrations: [mdx(), sitemap()],
});
