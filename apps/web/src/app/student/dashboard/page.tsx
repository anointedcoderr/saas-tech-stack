import { AppShell } from '@/features/shared/components/AppShell';
import { paths } from '@/features/shared/lib/paths';
import { StudentDashboardShell } from '@/features/students/components/StudentDashboardShell';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Student dashboard' };

export default function StudentDashboardPage() {
  return (
    <AppShell
      role="STUDENT"
      profileHref={paths.student.profile}
      pageTitle="Welcome back"
      pageDescription="Your classes, courses, and progress in one place."
    >
      <StudentDashboardShell />
    </AppShell>
  );
}
