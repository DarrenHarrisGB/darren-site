import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://darrenharrisgb.com',
  // Short links and old addresses. Each one sends visitors to the page on the right.
  redirects: {
    // Short links for the school pages
    '/awards': '/school-awards',
    '/enrichment': '/school-enrichment',
    '/cpd': '/school-cpd',
    '/assemblies': '/school-assemblies',
    // Old school page addresses, so existing links still work
    '/prizegiving': '/school-awards',
    '/teacher-cpd': '/school-cpd',
    '/assembly': '/school-assemblies',
    // Short link for the after-dinner speaker page
    '/after-dinner-speaker': '/after-dinner-speaker-and-awards-host-and-presenter',
  },
  integrations: [
    // Builds sitemap-index.xml for Google. The thank-you page is left out.
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
});
