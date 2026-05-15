import { AppShell } from '@/features/shared/components/AppShell';
import { paths } from '@/features/shared/lib/paths';
import { TutorDashboardShell } from '@/features/tutors/components/TutorDashboardShell';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Tutor dashboard' };

export default function TutorDashboardPage() {
  return (
    <AppShell
      role="TUTOR"
      profileHref={paths.tutor.profile}
      pageTitle="Tutor dashboard"
      pageDescription="Your classes, students, and course performance."
    >
      <TutorDashboardShell />
    </AppShell>
  );
}
