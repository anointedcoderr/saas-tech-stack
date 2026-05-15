import {
  BookOpen,
  CalendarClock,
  GraduationCap,
  LayoutDashboard,
  ScrollText,
  UserCog,
  UserSquare,
  Users,
} from 'lucide-react';

import { paths } from '@/features/shared/lib/paths';

import type { SidebarNavItem } from '@/features/shared/components/Sidebar';

export const studentNav: SidebarNavItem[] = [
  { label: 'Dashboard', href: paths.student.dashboard, icon: LayoutDashboard },
  { label: 'Classes', href: paths.student.classes, icon: CalendarClock },
  { label: 'Profile', href: paths.student.profile, icon: UserSquare },
];

export const tutorNav: SidebarNavItem[] = [
  { label: 'Dashboard', href: paths.tutor.dashboard, icon: LayoutDashboard },
  { label: 'Courses', href: paths.tutor.courses, icon: BookOpen },
  { label: 'Profile', href: paths.tutor.profile, icon: UserSquare },
];

export const adminNav: SidebarNavItem[] = [
  { label: 'Dashboard', href: paths.admin.dashboard, icon: LayoutDashboard },
  { label: 'Users', href: paths.admin.users, icon: Users },
  { label: 'Tutors', href: paths.admin.tutors, icon: GraduationCap },
];

export const superAdminNav: SidebarNavItem[] = [
  { label: 'Dashboard', href: paths.superAdmin.dashboard, icon: LayoutDashboard },
  { label: 'Admins', href: paths.superAdmin.admins, icon: UserCog },
  { label: 'Audit log', href: paths.superAdmin.audit, icon: ScrollText },
];
