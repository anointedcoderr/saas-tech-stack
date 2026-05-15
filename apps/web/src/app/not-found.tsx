import { Button } from '@anointedcoder/ui';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-display text-primary text-sm font-medium uppercase tracking-widest">
          404
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="text-muted-foreground mt-3">
          The page you are looking for has moved, or never existed.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/landing">Back to home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
