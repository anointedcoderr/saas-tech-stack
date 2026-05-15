import { AdminDashboardShell } from '@/features/admin/components/AdminDashboardShell';
import { AppShell } from '@/features/shared/components/AppShell';
import { adminNav } from '@/features/shared/lib/nav-configs';
import { paths } from '@/features/shared/lib/paths';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Admin dashboard' };

export default function AdminDashboardPage() {
  return (
    <AppShell
      role="ADMIN"
      navItems={adminNav}
      profileHref={paths.admin.dashboard}
      pageTitle="Admin dashboard"
      pageDescription="Platform health, moderation queue, and tutor approvals."
    >
      <AdminDashboardShell />
    </AppShell>
  );
}
