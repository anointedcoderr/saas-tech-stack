import { isRole, type Role } from '@anointedcoder/types';

export type { Role };
export { ROLES, RoleSchema, ROLE_LABELS, isRole, SelectableRoleSchema } from '@anointedcoder/types';

export function isAtLeastAdmin(role: Role | null | undefined): boolean {
  return role === 'ADMIN' || role === 'SUPER_ADMIN';
}

export function isSuperAdmin(role: Role | null | undefined): boolean {
  return role === 'SUPER_ADMIN';
}

export function roleFromUnknown(value: unknown): Role | null {
  return isRole(value) ? value : null;
}

export function defaultDashboardForRole(role: Role): string {
  switch (role) {
    case 'STUDENT':
      return '/student/dashboard';
    case 'TUTOR':
      return '/tutor/dashboard';
    case 'ADMIN':
      return '/admin/dashboard';
    case 'SUPER_ADMIN':
      return '/super-admin/dashboard';
  }
}
