import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://darrenharrisgb.com',
  integrations: [
    // Builds sitemap-index.xml for Google. The thank-you page is left out.
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
});
