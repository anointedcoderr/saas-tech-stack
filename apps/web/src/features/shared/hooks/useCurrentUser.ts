'use client';

import { useUser } from '@clerk/nextjs';

import { roleFromUnknown, type Role } from '@/lib/auth/roles';

export interface ClientCurrentUser {
  id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  role: Role | null;
}

/**
 * Client-side helper. Reads the user from Clerk and exposes the role parsed from
 * publicMetadata. Treat the result as a UX hint, not a security boundary. Server
 * components must always re-check with requireRole.
 */
export function useCurrentUser(): {
  user: ClientCurrentUser | null;
  isLoading: boolean;
  isSignedIn: boolean;
} {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) {
    return { user: null, isLoading: true, isSignedIn: false };
  }
  if (!isSignedIn || !user) {
    return { user: null, isLoading: false, isSignedIn: false };
  }

  const metaRole = (user.publicMetadata as { role?: unknown } | undefined)?.role;
  const role = roleFromUnknown(metaRole);
  const primaryEmail =
    user.emailAddresses.find((e) => e.id === user.primaryEmailAddressId)?.emailAddress ??
    user.emailAddresses[0]?.emailAddress ??
    null;

  return {
    user: {
      id: user.id,
      email: primaryEmail,
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl ?? null,
      role,
    },
    isLoading: false,
    isSignedIn: true,
  };
}
