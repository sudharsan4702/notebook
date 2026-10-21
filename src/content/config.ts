import { defineCollection, z } from 'astro:content';

const entries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    link: z.string().optional(),
    pinned: z.boolean().default(false),
  }),
});

export const collections = {
  entries,
};
