import { z } from 'zod';

import { RoleSchema } from './auth';

export const UserSchema = z.object({
  id: z.string().min(1),
  email: z.string().email(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  imageUrl: z.string().url().nullable(),
  role: RoleSchema,
  createdAt: z.string().datetime(),
});
export type User = z.infer<typeof UserSchema>;

export const StudentProfileSchema = z.object({
  userId: z.string().min(1),
  country: z.string().nullable(),
  timezone: z.string().nullable(),
  subjectsOfInterest: z.array(z.string()).default([]),
});
export type StudentProfile = z.infer<typeof StudentProfileSchema>;

export const TutorProfileSchema = z.object({
  userId: z.string().min(1),
  bio: z.string().nullable(),
  subject: z.string().nullable(),
  pricingPerSessionMinor: z.number().int().nonnegative().nullable(),
  approved: z.boolean(),
  socialLinks: z
    .object({
      website: z.string().url().nullable(),
      linkedin: z.string().url().nullable(),
      twitter: z.string().url().nullable(),
    })
    .partial(),
});
export type TutorProfile = z.infer<typeof TutorProfileSchema>;

export const DashboardSummarySchema = z.object({
  metrics: z.array(
    z.object({
      key: z.string(),
      label: z.string(),
      value: z.string(),
      trend: z.enum(['up', 'down', 'flat']).optional(),
    }),
  ),
  recentActivity: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      detail: z.string(),
      timestamp: z.string().datetime(),
    }),
  ),
});
export type DashboardSummary = z.infer<typeof DashboardSummarySchema>;
