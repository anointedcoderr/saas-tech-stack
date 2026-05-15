'use client';

import * as React from 'react';

import { adminNav, studentNav, superAdminNav, tutorNav } from '@/features/shared/lib/nav-configs';

import { MobileNav } from './MobileNav';
import { Sidebar, type SidebarNavItem } from './Sidebar';
import { ThemeToggle } from './ThemeToggle';
import { UserMenu } from './UserMenu';

import type { Role } from '@anointedcoder/types';

const navByRole: Record<Role, SidebarNavItem[]> = {
  STUDENT: studentNav,
  TUTOR: tutorNav,
  ADMIN: adminNav,
  SUPER_ADMIN: superAdminNav,
};

interface AppShellProps {
  role: Role;
  profileHref: string;
  pageTitle: string;
  pageDescription?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export function AppShell({
  role,
  profileHref,
  pageTitle,
  pageDescription,
  actions,
  children,
}: AppShellProps) {
  const navItems = navByRole[role];
  return (
    <div className="bg-background flex min-h-screen">
      <Sidebar role={role} items={navItems} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-border bg-background/80 flex h-16 items-center justify-between border-b px-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-2">
            <MobileNav role={role} items={navItems} />
            <h1 className="font-display text-base font-semibold tracking-tight md:text-lg">
              {pageTitle}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <UserMenu profileHref={profileHref} />
          </div>
        </header>
        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-6 flex flex-col gap-2 md:mb-8 md:flex-row md:items-end md:justify-between">
              <div className="space-y-1">
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {pageTitle}
                </h2>
                {pageDescription ? (
                  <p className="text-muted-foreground text-sm md:text-base">{pageDescription}</p>
                ) : null}
              </div>
              {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
