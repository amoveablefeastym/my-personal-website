import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: z.object({
      title:       z.string(),
      category:    z.string(),
      description: z.string(),
      image:       z.string().optional(),
      date:        z.coerce.date(),
      featured:    z.boolean().default(false),
      demo_url:    z.string().url().optional(),
      repo_url:    z.string().url().optional(),
    }),
  }),

  research: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
    schema: z.object({
      title:       z.string(),
      category:    z.string(),
      description: z.string(),
      image:       z.string().optional(),
      date:        z.coerce.date(),
      demo_url:    z.string().url().optional(),
      repo_url:    z.string().url().optional(),
      paper_url:   z.string().url().optional(),
      credit:      z.string().optional(),
    }),
  }),

  writing: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
    schema: z.object({
      title:        z.string(),
      type:         z.string().optional(),
      category:     z.string().optional(),
      synopsis:     z.string().optional(),
      content_type: z.enum(['full-text', 'pdf', 'synopsis-only']).default('full-text'),
      pdf_url:      z.string().url().optional(),
      date:         z.coerce.date(),
    }),
  }),

  funsies: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/funsies' }),
    schema: z.object({
      title:       z.string(),
      description: z.string(),
      date:        z.coerce.date(),
      tags:        z.array(z.string()).optional(),
      image:       z.string().optional(),
      category:    z.string().optional(),
    }),
  }),
};
