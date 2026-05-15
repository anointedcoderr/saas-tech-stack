import { Card, CardContent } from '@anointedcoder/ui';

import { AppShell } from '@/features/shared/components/AppShell';
import { paths } from '@/features/shared/lib/paths';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Audit log' };

export default function SuperAdminAuditPage() {
  return (
    <AppShell
      role="SUPER_ADMIN"
      profileHref={paths.superAdmin.dashboard}
      pageTitle="Audit log"
      pageDescription="Every sensitive action across the platform, timestamped and immutable."
    >
      <Card>
        <CardContent className="text-muted-foreground py-16 text-center text-sm">
          Audit log viewer arrives in Phase 2.
        </CardContent>
      </Card>
    </AppShell>
  );
}
