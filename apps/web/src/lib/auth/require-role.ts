import 'server-only';

import { redirect } from 'next/navigation';

import { getCurrentUser, type CurrentUser } from './get-current-user';
import { defaultDashboardForRole, type Role } from './roles';

/**
 * Server-side role guard. Call at the top of any protected layout or page.
 * Redirects:
 *   - signed out, send to /sign-in
 *   - signed in but no role yet, send to /role-select
 *   - signed in with the wrong role, send to that role's dashboard
 */
export async function requireRole(
  allowed: Role | readonly Role[],
): Promise<CurrentUser & { role: Role }> {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/sign-in');
  }
  if (!user.role) {
    redirect('/role-select');
  }
  const list = Array.isArray(allowed) ? allowed : [allowed];
  if (!list.includes(user.role)) {
    redirect(defaultDashboardForRole(user.role));
  }
  return { ...user, role: user.role };
}

/**
 * Like requireRole but does not redirect. Returns null for signed-out users.
 */
export async function requireSignedIn(): Promise<CurrentUser> {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/sign-in');
  }
  return user;
}
