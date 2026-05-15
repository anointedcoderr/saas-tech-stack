'use client';

import { DashboardSummarySchema } from '@anointedcoder/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@anointedcoder/ui';
import { useQuery } from '@tanstack/react-query';
import {
  CalendarClock,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';

import { apiClient } from '@/features/shared/lib/api-client';
import { queryKeys } from '@/features/shared/lib/query-keys';

import type { LucideIcon } from 'lucide-react';

const iconByKey: Record<string, LucideIcon> = {
  classes_this_week: CalendarClock,
  active_courses: GraduationCap,
  unread_messages: MessageSquare,
  progress: TrendingUp,
  students_taught: Users,
  pending_tutors: ShieldCheck,
  active_admins: ShieldCheck,
  total_users: Users,
};

export function DashboardOverview({ role }: { role: string }) {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.dashboard(role),
    queryFn: () => apiClient(`/dashboard?role=${encodeURIComponent(role)}`, DashboardSummarySchema),
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading || !data
          ? Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton key={idx} className="h-28 w-full" />
            ))
          : data.metrics.map((metric) => {
              const Icon = iconByKey[metric.key] ?? LayoutDashboard;
              return (
                <Card key={metric.key}>
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <CardDescription>{metric.label}</CardDescription>
                    <Icon className="text-muted-foreground h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="font-display text-2xl font-semibold tracking-tight">
                      {metric.value}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
          <CardDescription>The latest events relevant to your role.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {isLoading || !data ? (
            Array.from({ length: 3 }).map((_, idx) => (
              <Skeleton key={idx} className="h-12 w-full" />
            ))
          ) : data.recentActivity.length === 0 ? (
            <p className="text-muted-foreground text-sm">No recent activity yet.</p>
          ) : (
            data.recentActivity.map((event) => (
              <div
                key={event.id}
                className="border-border/60 flex items-start justify-between gap-4 rounded-md border p-3"
              >
                <div>
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-muted-foreground text-xs">{event.detail}</p>
                </div>
                <span className="text-muted-foreground whitespace-nowrap text-xs">
                  {new Date(event.timestamp).toLocaleString()}
                </span>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
