// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({image}) =>z.discriminatedUnion('displayMode', [
    z.object({
      title: z.string(),
      displayMode: z.literal('embed'),
      itchId: z.string(),
      skills: z.array(z.string()).default([]),
      description: z.string().optional(),
      featuredImage: image(),
    }),
    z.object({
      title: z.string(),
      displayMode: z.literal('media'),
      videoUrl: z.string().url(),
      skills: z.array(z.string()).default([]),
      description: z.string().optional(),
      featuredImage: image(),
    }),
    z.object({
      title: z.string(),
      displayMode: z.literal('link'),
      externalUrl: z.string().url(),
      skills: z.array(z.string()).default([]),
      description: z.string().optional(),
      featuredImage: image(),
    }),
  ]),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects }
