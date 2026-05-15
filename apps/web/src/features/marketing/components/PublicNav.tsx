'use client';

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  cn,
} from '@anointedcoder/ui';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { ThemeToggle } from '@/features/shared/components/ThemeToggle';
import { paths } from '@/features/shared/lib/paths';

const navItems = [
  { label: 'Pricing', href: paths.public.pricing },
  { label: 'Tutors', href: paths.public.tutorsDirectory },
  { label: 'About', href: paths.public.about },
];

export function PublicNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href={paths.public.landing}
          className="font-display text-lg font-semibold tracking-tight"
        >
          AnointedCoder
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'hover:text-foreground text-sm font-medium transition-colors',
                pathname === item.href ? 'text-foreground' : 'text-muted-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <SignedOut>
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <Link href={paths.auth.signIn}>Sign in</Link>
            </Button>
            <Button asChild className="hidden md:inline-flex">
              <Link href={paths.auth.signUp}>Get started</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/">Open dashboard</Link>
            </Button>
          </SignedIn>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>AnointedCoder</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-secondary text-foreground'
                        : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 grid gap-2">
                <SignedOut>
                  <Button asChild variant="outline">
                    <Link href={paths.auth.signIn}>Sign in</Link>
                  </Button>
                  <Button asChild>
                    <Link href={paths.auth.signUp}>Get started</Link>
                  </Button>
                </SignedOut>
                <SignedIn>
                  <Button asChild>
                    <Link href="/">Open dashboard</Link>
                  </Button>
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
