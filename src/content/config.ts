import { defineCollection } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: {
    title: 'string',
    description: 'string',
  },
});

export const collections = {
  docs,
};