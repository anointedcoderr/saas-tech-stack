import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@anointedcoder/ui';
import {
  BookOpen,
  CalendarClock,
  GraduationCap,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Single-subject tutors',
    description:
      'Each tutor teaches one subject, deeply. Students always know exactly what they are signing up for.',
  },
  {
    icon: CalendarClock,
    title: 'Live group classes',
    description:
      'Scheduled group sessions over Google Meet, with calendar sync, reminders, and attendance.',
  },
  {
    icon: BookOpen,
    title: 'Structured courses',
    description:
      'Courses break down into modules and lessons. Video, PDF, and notes, with progress tracking.',
  },
  {
    icon: MessageSquare,
    title: 'In-platform chat',
    description:
      'Tutors and students communicate only inside the platform. Attachments, read receipts, and notifications.',
  },
  {
    icon: ShieldCheck,
    title: 'Admin moderation',
    description:
      'Tutor approval, reports, and support tickets, with full audit trails for super admins.',
  },
  {
    icon: Sparkles,
    title: 'Smart learning tools',
    description:
      'AI summaries, quizzes, and recommendations land in later phases, on top of a clean academic core.',
  },
];

export function FeatureGrid() {
  return (
    <section className="container py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Everything you need to teach and learn
        </h2>
        <p className="text-muted-foreground mt-3">
          Designed around how academic learning actually happens, not how marketplaces sell it.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="hover:border-foreground/20 transition-colors">
            <CardHeader>
              <feature.icon className="text-primary h-6 w-6" />
              <CardTitle className="mt-3">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  );
}
