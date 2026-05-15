import Link from 'next/link';

import { paths } from '@/features/shared/lib/paths';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border/60 bg-background border-t">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">AnointedCoder</p>
          <p className="text-muted-foreground mt-1 max-w-sm text-sm">
            Live group tutoring, courses, and subscriptions, built for tutors and serious learners.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm md:grid-cols-3">
          <Link href={paths.public.pricing} className="text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
          <Link
            href={paths.public.tutorsDirectory}
            className="text-muted-foreground hover:text-foreground"
          >
            Tutors
          </Link>
          <Link href={paths.public.about} className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href={paths.auth.signIn} className="text-muted-foreground hover:text-foreground">
            Sign in
          </Link>
          <Link href={paths.auth.signUp} className="text-muted-foreground hover:text-foreground">
            Get started
          </Link>
        </nav>
      </div>
      <div className="border-border/60 border-t">
        <div className="text-muted-foreground container flex flex-col items-start justify-between gap-2 py-4 text-xs md:flex-row md:items-center">
          <p>&copy; {year} AnointedCoder. All rights reserved.</p>
          <p>Contact: anointedcoder@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
