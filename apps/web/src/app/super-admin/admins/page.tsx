import { Card, CardContent } from '@anointedcoder/ui';

import { AppShell } from '@/features/shared/components/AppShell';
import { superAdminNav } from '@/features/shared/lib/nav-configs';
import { paths } from '@/features/shared/lib/paths';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Manage admins' };

export default function SuperAdminAdminsPage() {
  return (
    <AppShell
      role="SUPER_ADMIN"
      navItems={superAdminNav}
      profileHref={paths.superAdmin.dashboard}
      pageTitle="Admins"
      pageDescription="Promote, demote, and audit platform administrators."
    >
      <Card>
        <CardContent className="text-muted-foreground py-16 text-center text-sm">
          Admin management arrives in Phase 2.
        </CardContent>
      </Card>
    </AppShell>
  );
}
