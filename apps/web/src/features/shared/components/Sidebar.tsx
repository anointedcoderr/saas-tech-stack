'use client';

import { cn } from '@anointedcoder/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { RoleBadge } from './RoleBadge';

import type { Role } from '@anointedcoder/types';
import type { LucideIcon } from 'lucide-react';

export interface SidebarNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface SidebarProps {
  role: Role;
  items: SidebarNavItem[];
}

export function Sidebar({ role, items }: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside className="border-border bg-card hidden w-64 shrink-0 flex-col border-r md:flex">
      <div className="flex h-16 items-center gap-3 px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          AnointedCoder
        </Link>
      </div>
      <div className="px-6 pb-4">
        <RoleBadge role={role} />
      </div>
      <nav className="flex-1 space-y-1 px-3 pb-6">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-secondary text-foreground'
                  : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
