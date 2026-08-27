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

export const collections = { blog };
