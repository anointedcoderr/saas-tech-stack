import Link from 'next/link';

import { ThemeToggle } from '@/features/shared/components/ThemeToggle';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary/40 flex min-h-screen flex-col">
      <header className="border-border/60 bg-background/80 flex items-center justify-between border-b px-6 py-4 backdrop-blur">
        <Link href="/landing" className="font-display text-lg font-semibold tracking-tight">
          AnointedCoder
        </Link>
        <ThemeToggle />
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
