import { Card, CardContent } from '@anointedcoder/ui';

import { AppShell } from '@/features/shared/components/AppShell';
import { studentNav } from '@/features/shared/lib/nav-configs';
import { paths } from '@/features/shared/lib/paths';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Profile' };

export default function StudentProfilePage() {
  return (
    <AppShell
      role="STUDENT"
      navItems={studentNav}
      profileHref={paths.student.profile}
      pageTitle="Profile"
      pageDescription="Manage your learning preferences and account details."
    >
      <Card>
        <CardContent className="text-muted-foreground py-16 text-center text-sm">
          Profile editing arrives in Phase 2.
        </CardContent>
      </Card>
    </AppShell>
  );
}
