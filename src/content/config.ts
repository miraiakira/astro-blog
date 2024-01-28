import { defineCollection, z } from 'astro:content';


const postCollection = defineCollection({
  schema: ({image}) => z.object({
    author: z.string(),
    date: z.string(),
    image: image(),
    featured: z.boolean(),
    title: z.string(),
  }),
})

export const collections = {
  posts: postCollection
}