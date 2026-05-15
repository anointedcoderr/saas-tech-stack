import { Card, CardContent } from '@anointedcoder/ui';

import { AppShell } from '@/features/shared/components/AppShell';
import { adminNav } from '@/features/shared/lib/nav-configs';
import { paths } from '@/features/shared/lib/paths';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Tutor approvals' };

export default function AdminTutorsPage() {
  return (
    <AppShell
      role="ADMIN"
      navItems={adminNav}
      profileHref={paths.admin.dashboard}
      pageTitle="Tutor approvals"
      pageDescription="Review applications and approve verified tutors."
    >
      <Card>
        <CardContent className="text-muted-foreground py-16 text-center text-sm">
          Tutor approval workflow arrives in Phase 2.
        </CardContent>
      </Card>
    </AppShell>
  );
}
