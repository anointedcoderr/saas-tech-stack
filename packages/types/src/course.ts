import { z } from 'zod';

export const CourseStatusSchema = z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']);
export type CourseStatus = z.infer<typeof CourseStatusSchema>;

export const CourseSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
  subject: z.string(),
  tutorId: z.string().min(1),
  thumbnailUrl: z.string().url().nullable(),
  status: CourseStatusSchema,
  createdAt: z.string().datetime(),
});
export type Course = z.infer<typeof CourseSchema>;

export const LessonContentTypeSchema = z.enum(['VIDEO', 'PDF', 'NOTE', 'FILE']);
export type LessonContentType = z.infer<typeof LessonContentTypeSchema>;
