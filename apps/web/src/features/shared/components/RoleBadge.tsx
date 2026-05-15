import { ROLE_LABELS, type Role } from '@anointedcoder/types';
import { Badge } from '@anointedcoder/ui';

const variantByRole: Record<Role, 'default' | 'secondary' | 'success' | 'destructive'> = {
  STUDENT: 'secondary',
  TUTOR: 'default',
  ADMIN: 'success',
  SUPER_ADMIN: 'destructive',
};

export function RoleBadge({ role }: { role: Role }) {
  return <Badge variant={variantByRole[role]}>{ROLE_LABELS[role]}</Badge>;
}
