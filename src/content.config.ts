import { defineCollection, z, reference } from 'astro:content';

import { glob, file } from 'astro/loaders';


const generalBlog = defineCollection({
      loader: glob({ pattern: ['*.md', '*.mdx', '!draft-*'], base: 'src/content/' }),
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        image: z.string(),
        date: z.coerce.date(),
        description: z.string(),
        keywords: z.array(z.string()),
        relatedPosts: z.array(reference('generalBlog')).optional(),
        
    }),
});




export const collections = {
  
    generalBlog
};

