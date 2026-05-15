import { redirect } from 'next/navigation';

import { getCurrentUser } from '@/lib/auth/get-current-user';
import { defaultDashboardForRole } from '@/lib/auth/roles';

export const dynamic = 'force-dynamic';

export default async function RootIndexPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/landing');
  }
  if (!user.role) {
    redirect('/role-select');
  }
  redirect(defaultDashboardForRole(user.role));
}
