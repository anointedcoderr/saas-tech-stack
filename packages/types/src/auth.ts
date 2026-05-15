import { z } from 'zod';

export const ROLES = ['STUDENT', 'TUTOR', 'ADMIN', 'SUPER_ADMIN'] as const;

export const RoleSchema = z.enum(ROLES);
export type Role = z.infer<typeof RoleSchema>;

export const SelectableRoleSchema = z.enum(['STUDENT', 'TUTOR']);
export type SelectableRole = z.infer<typeof SelectableRoleSchema>;

export const SessionMetadataSchema = z.object({
  role: RoleSchema.optional(),
  onboarded: z.boolean().optional(),
});
export type SessionMetadata = z.infer<typeof SessionMetadataSchema>;

export function isRole(value: unknown): value is Role {
  return typeof value === 'string' && (ROLES as readonly string[]).includes(value);
}

export const ROLE_LABELS: Record<Role, string> = {
  STUDENT: 'Student',
  TUTOR: 'Tutor',
  ADMIN: 'Admin',
  SUPER_ADMIN: 'Super Admin',
};
