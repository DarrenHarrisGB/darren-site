import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Write dates as YYYY-MM-DD in the frontmatter of each post.
    pubDate: z.coerce.date(),
  }),
});

// Case studies: one Markdown file per client in src/content/case-studies/.
// The file name becomes the address, e.g. hsbc.md -> /case-studies/hsbc/.
// Files starting with an underscore (like _template.md) are ignored.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),            // Headline with the result in it
    summary: z.string(),          // One or two sentences, used on the list page and for Google
    client: z.string(),
    sector: z.string(),
    event: z.string().optional(),
    audienceSize: z.string().optional(),
    format: z.string(),           // Keynote, Workshop or Coaching
    year: z.coerce.number().optional(), // Leave out to hide the year
    talk: z.enum(['Become a Successful Leader', 'Become a Successful Team', 'Become a Successful Network']).optional(),
    logo: z.string().optional(),  // e.g. /logos/hsbc.png
    quote: z
      .object({
        text: z.string(),
        name: z.string(),
        role: z.string().optional(),
      })
      .optional(),
    order: z.number().default(100), // Lower numbers appear first on the list page
    draft: z.boolean().default(false), // Drafts show only on your computer, not the live site
  }),
});

export const collections = { blog, caseStudies };
