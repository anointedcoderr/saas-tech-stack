import { requireRole } from '@/lib/auth/require-role';

export const dynamic = 'force-dynamic';

export default async function TutorLayout({ children }: { children: React.ReactNode }) {
  await requireRole('TUTOR');
  return <>{children}</>;
}
