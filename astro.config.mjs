import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://darrenharrisgb.com',
  // Short links and old addresses. Each one sends visitors to the page on the right.
  redirects: {
    // Old Services page address
    '/services': '/speaking',
    // Shortcuts
    '/about': '/two-sport-paralympian',
    '/blind-motivational-speaker': '/two-sport-paralympian',
    '/contact': '/birmingham-motivational-speaker',
    '/paralympian-speaker-near-me': '/birmingham-motivational-speaker',
    '/assembly': '/raising-attainment-speaker',
    '/awards': '/prizegiving-guest-speaker',
    '/enrichment': '/character-education-speaker',
    '/inset': '/inclusive-education-speaker',
    // Old school page addresses, so existing links still work
    '/school-assemblies': '/raising-attainment-speaker',
    '/school-awards': '/prizegiving-guest-speaker',
    '/school-enrichment': '/character-education-speaker',
    '/school-cpd': '/inclusive-education-speaker',
    '/assemblies': '/raising-attainment-speaker',
    '/prizegiving': '/prizegiving-guest-speaker',
    '/cpd': '/inclusive-education-speaker',
    '/teacher-cpd': '/inclusive-education-speaker',
    // Shortcut for the after-dinner speaker page
    '/ads': '/after-dinner-speaker',
    '/ADS': '/after-dinner-speaker',
    // Shortcut for the awards host page
    '/mc': '/awards-host',
    '/MC': '/awards-host',
    '/awards-host-and-presenter': '/awards-host',
    // Shortcut for the mental performance coach page
    '/coaching': '/mental-performance-coach',
    // Old combined after-dinner/awards page address
    '/after-dinner-speaker-and-awards-host-and-presenter': '/after-dinner-speaker',
  },
  integrations: [
    // Builds sitemap-index.xml for Google. The thank-you page is left out.
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
});
