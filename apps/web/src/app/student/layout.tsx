import { requireRole } from '@/lib/auth/require-role';

export const dynamic = 'force-dynamic';

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  await requireRole('STUDENT');
  return <>{children}</>;
}
