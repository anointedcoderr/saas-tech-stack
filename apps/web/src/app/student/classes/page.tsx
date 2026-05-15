import { Card, CardContent } from '@anointedcoder/ui';

import { AppShell } from '@/features/shared/components/AppShell';
import { studentNav } from '@/features/shared/lib/nav-configs';
import { paths } from '@/features/shared/lib/paths';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'My classes' };

export default function StudentClassesPage() {
  return (
    <AppShell
      role="STUDENT"
      navItems={studentNav}
      profileHref={paths.student.profile}
      pageTitle="Classes"
      pageDescription="Scheduled and recurring classes you have joined."
    >
      <Card>
        <CardContent className="text-muted-foreground py-16 text-center text-sm">
          Class listing arrives in Phase 4 alongside Google Meet scheduling.
        </CardContent>
      </Card>
    </AppShell>
  );
}
