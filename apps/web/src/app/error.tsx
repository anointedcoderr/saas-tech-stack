'use client';

import { Button } from '@anointedcoder/ui';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled application error', error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-display text-destructive text-sm font-medium uppercase tracking-widest">
          Something went wrong
        </p>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight">
          An unexpected error occurred
        </h1>
        <p className="text-muted-foreground mt-3">
          Please try again. If the issue persists, contact support.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </div>
    </main>
  );
}
