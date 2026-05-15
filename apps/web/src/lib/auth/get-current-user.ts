import 'server-only';

import { auth, currentUser } from '@clerk/nextjs/server';

import { roleFromUnknown, type Role } from './roles';

export interface CurrentUser {
  id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  role: Role | null;
}

/**
 * Reads role from signed session claims first, falls back to publicMetadata.
 * Session claims are preferred because they are signed by Clerk and cannot be
 * forged from the client.
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  const { userId, sessionClaims } = auth();
  if (!userId) return null;

  const user = await currentUser();
  if (!user) return null;

  const claimsRole = (sessionClaims?.metadata as { role?: unknown } | undefined)?.role;
  const metaRole = (user.publicMetadata as { role?: unknown } | undefined)?.role;
  const role = roleFromUnknown(claimsRole) ?? roleFromUnknown(metaRole);

  const primaryEmail =
    user.emailAddresses.find((e) => e.id === user.primaryEmailAddressId)?.emailAddress ??
    user.emailAddresses[0]?.emailAddress ??
    null;

  return {
    id: user.id,
    email: primaryEmail,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl ?? null,
    role,
  };
}
