import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const engineeringPosts = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/collections/engineering/" }),
    schema: z.object({
        id: z.string(),
        listingTitle: z.string(),
        title: z.string(),
        order: z.number().optional(),
    }),
});

const metalPosts = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/collections/metals/" }),
    schema: z.object({
        id: z.string(),
        listingTitle: z.string(),
        title: z.string(),
        order: z.number().optional(),
    }),
});

export const collections = {
    'engineering': engineeringPosts,
    'metals': metalPosts,
};