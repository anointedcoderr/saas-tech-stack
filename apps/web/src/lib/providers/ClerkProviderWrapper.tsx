'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { clientEnv } from '@/lib/env';

export function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const appearance =
    resolvedTheme === 'dark'
      ? {
          baseTheme: dark,
          variables: { colorPrimary: '#3b82f6' },
        }
      : {
          variables: { colorPrimary: '#2563eb' },
        };

  return (
    <ClerkProvider
      publishableKey={clientEnv.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl={clientEnv.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
      signUpUrl={clientEnv.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
      signInFallbackRedirectUrl={clientEnv.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL}
      signUpFallbackRedirectUrl={clientEnv.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL}
      appearance={appearance}
    >
      {children}
    </ClerkProvider>
  );
}
