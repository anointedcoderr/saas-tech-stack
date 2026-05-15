import { redirect } from 'next/navigation';

import { RoleSelectForm } from '@/features/auth/components/RoleSelectForm';
import { getCurrentUser } from '@/lib/auth/get-current-user';
import { defaultDashboardForRole } from '@/lib/auth/roles';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Choose your role' };
export const dynamic = 'force-dynamic';

export default async function RoleSelectPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/sign-in');
  }
  if (user.role) {
    redirect(defaultDashboardForRole(user.role));
  }
  return <RoleSelectForm />;
}
