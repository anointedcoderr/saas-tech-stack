'use client';

import { useCurrentUser } from './useCurrentUser';

export function useRole() {
  const { user, isLoading } = useCurrentUser();
  return { role: user?.role ?? null, isLoading };
}
