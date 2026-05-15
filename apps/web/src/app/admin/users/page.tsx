import { Card, CardContent } from '@anointedcoder/ui';

import { AppShell } from '@/features/shared/components/AppShell';
import { paths } from '@/features/shared/lib/paths';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Users' };

export default function AdminUsersPage() {
  return (
    <AppShell
      role="ADMIN"
      profileHref={paths.admin.dashboard}
      pageTitle="Users"
      pageDescription="Manage student and tutor accounts."
    >
      <Card>
        <CardContent className="text-muted-foreground py-16 text-center text-sm">
          User management arrives in Phase 2.
        </CardContent>
      </Card>
    </AppShell>
  );
}
