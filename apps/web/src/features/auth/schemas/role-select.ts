import { SelectableRoleSchema } from '@anointedcoder/types';
import { z } from 'zod';

export const roleSelectSchema = z.object({
  role: SelectableRoleSchema,
});

export type RoleSelectInput = z.infer<typeof roleSelectSchema>;
