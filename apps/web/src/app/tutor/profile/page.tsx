import { Card, CardContent } from '@anointedcoder/ui';

import { AppShell } from '@/features/shared/components/AppShell';
import { tutorNav } from '@/features/shared/lib/nav-configs';
import { paths } from '@/features/shared/lib/paths';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Tutor profile' };

export default function TutorProfilePage() {
  return (
    <AppShell
      role="TUTOR"
      navItems={tutorNav}
      profileHref={paths.tutor.profile}
      pageTitle="Profile"
      pageDescription="Your bio, subject, pricing, availability, and social links."
    >
      <Card>
        <CardContent className="text-muted-foreground py-16 text-center text-sm">
          Tutor profile editing arrives in Phase 2.
        </CardContent>
      </Card>
    </AppShell>
  );
}
