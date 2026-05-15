'use client';

import { TooltipProvider, Toaster } from '@anointedcoder/ui';
import * as React from 'react';

import { ClerkProviderWrapper } from './ClerkProviderWrapper';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ClerkProviderWrapper>
        <QueryProvider>
          <TooltipProvider delayDuration={150}>
            {children}
            <Toaster position="top-right" richColors closeButton />
          </TooltipProvider>
        </QueryProvider>
      </ClerkProviderWrapper>
    </ThemeProvider>
  );
}
