import { z } from 'zod';

export const blogPostSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  publishedAt: z.string().min(1),
  updatedAt: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
});

export type BlogPostFrontmatter = z.infer<typeof blogPostSchema>;
