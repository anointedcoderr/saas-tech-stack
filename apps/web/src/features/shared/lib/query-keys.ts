/**
 * Central registry of TanStack Query keys. Keep keys here so cache invalidation
 * cannot drift between callers.
 */
export const queryKeys = {
  me: ['me'] as const,
  dashboard: (role: string) => ['dashboard', role] as const,
} as const;
