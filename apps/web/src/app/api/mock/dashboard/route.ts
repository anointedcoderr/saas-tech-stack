import { type DashboardSummary, DashboardSummarySchema } from '@anointedcoder/types';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isoMinutesAgo(minutes: number): string {
  return new Date(Date.now() - minutes * 60_000).toISOString();
}

const studentSummary: DashboardSummary = {
  metrics: [
    { key: 'classes_this_week', label: 'Classes this week', value: '4', trend: 'up' },
    { key: 'active_courses', label: 'Active courses', value: '3', trend: 'flat' },
    { key: 'unread_messages', label: 'Unread messages', value: '2', trend: 'up' },
    { key: 'progress', label: 'Course progress', value: '68%', trend: 'up' },
  ],
  recentActivity: [
    {
      id: 'a1',
      title: 'Joined live class: Algebra Foundations',
      detail: 'Hosted by Mr. Daniel',
      timestamp: isoMinutesAgo(45),
    },
    {
      id: 'a2',
      title: 'Completed lesson: Quadratic equations',
      detail: 'Module 2, Lesson 3',
      timestamp: isoMinutesAgo(180),
    },
    {
      id: 'a3',
      title: 'New message from your tutor',
      detail: "Mr. Daniel: Great work on yesterday's assignment.",
      timestamp: isoMinutesAgo(310),
    },
  ],
};

const tutorSummary: DashboardSummary = {
  metrics: [
    { key: 'students_taught', label: 'Active students', value: '127', trend: 'up' },
    { key: 'classes_this_week', label: 'Classes this week', value: '6', trend: 'flat' },
    { key: 'active_courses', label: 'Published courses', value: '4', trend: 'flat' },
    { key: 'unread_messages', label: 'Unread messages', value: '8', trend: 'up' },
  ],
  recentActivity: [
    {
      id: 't1',
      title: 'New subscriber: Janet O.',
      detail: 'Plan: Student monthly',
      timestamp: isoMinutesAgo(20),
    },
    {
      id: 't2',
      title: 'Class scheduled for tomorrow',
      detail: 'Algebra Foundations, 10:00 AM',
      timestamp: isoMinutesAgo(120),
    },
    {
      id: 't3',
      title: 'Course reviewed',
      detail: 'A new 5-star review on Quadratic Mastery.',
      timestamp: isoMinutesAgo(360),
    },
  ],
};

const adminSummary: DashboardSummary = {
  metrics: [
    { key: 'pending_tutors', label: 'Pending tutor approvals', value: '5', trend: 'up' },
    { key: 'total_users', label: 'Total users', value: '2,418', trend: 'up' },
    { key: 'classes_this_week', label: 'Classes this week', value: '94', trend: 'flat' },
    { key: 'unread_messages', label: 'Open support tickets', value: '11', trend: 'down' },
  ],
  recentActivity: [
    {
      id: 'ad1',
      title: 'Tutor application submitted',
      detail: 'Subject: Physics, applicant: K. Adebayo',
      timestamp: isoMinutesAgo(15),
    },
    {
      id: 'ad2',
      title: 'User report received',
      detail: 'Reason: spam in chat',
      timestamp: isoMinutesAgo(95),
    },
    {
      id: 'ad3',
      title: 'Support ticket resolved',
      detail: 'Billing issue, refunded',
      timestamp: isoMinutesAgo(240),
    },
  ],
};

const superAdminSummary: DashboardSummary = {
  metrics: [
    { key: 'active_admins', label: 'Active admins', value: '6', trend: 'flat' },
    { key: 'total_users', label: 'Total users', value: '2,418', trend: 'up' },
    { key: 'pending_tutors', label: 'Pending approvals', value: '5', trend: 'flat' },
    { key: 'unread_messages', label: 'Audit alerts', value: '0', trend: 'down' },
  ],
  recentActivity: [
    {
      id: 's1',
      title: 'Admin promoted',
      detail: 'M. Edet now has full moderation permissions.',
      timestamp: isoMinutesAgo(60),
    },
    {
      id: 's2',
      title: 'Audit policy updated',
      detail: 'Retention extended to 24 months.',
      timestamp: isoMinutesAgo(600),
    },
    {
      id: 's3',
      title: 'Security scan completed',
      detail: 'No findings.',
      timestamp: isoMinutesAgo(900),
    },
  ],
};

function summaryFor(role: string): DashboardSummary {
  switch (role) {
    case 'tutor':
      return tutorSummary;
    case 'admin':
      return adminSummary;
    case 'super_admin':
      return superAdminSummary;
    case 'student':
    default:
      return studentSummary;
  }
}

export function GET(request: Request) {
  const url = new URL(request.url);
  const role = url.searchParams.get('role') ?? 'student';
  const payload = summaryFor(role);
  // Validate before responding to keep the mock honest with the shared schema.
  const parsed = DashboardSummarySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Mock data failed schema validation', details: parsed.error.flatten() },
      { status: 500 },
    );
  }
  return NextResponse.json(parsed.data);
}
