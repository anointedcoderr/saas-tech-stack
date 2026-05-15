import { AppShell } from '@/features/shared/components/AppShell';
import { superAdminNav } from '@/features/shared/lib/nav-configs';
import { paths } from '@/features/shared/lib/paths';
import { SuperAdminDashboardShell } from '@/features/super-admin/components/SuperAdminDashboardShell';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Super admin dashboard' };

export default function SuperAdminDashboardPage() {
  return (
    <AppShell
      role="SUPER_ADMIN"
      navItems={superAdminNav}
      profileHref={paths.superAdmin.dashboard}
      pageTitle="Super admin"
      pageDescription="Full system view, admin management, and audit trail."
    >
      <SuperAdminDashboardShell />
    </AppShell>
  );
}
