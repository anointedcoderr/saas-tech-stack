import { requireRole } from '@/lib/auth/require-role';

export const dynamic = 'force-dynamic';

export default async function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  await requireRole('SUPER_ADMIN');
  return <>{children}</>;
}
