import { Card, CardContent } from '@anointedcoder/ui';

import { AppShell } from '@/features/shared/components/AppShell';
import { paths } from '@/features/shared/lib/paths';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'My courses' };

export default function TutorCoursesPage() {
  return (
    <AppShell
      role="TUTOR"
      profileHref={paths.tutor.profile}
      pageTitle="Courses"
      pageDescription="Draft, publish, and manage your courses."
    >
      <Card>
        <CardContent className="text-muted-foreground py-16 text-center text-sm">
          Course creation arrives in Phase 3.
        </CardContent>
      </Card>
    </AppShell>
  );
}
