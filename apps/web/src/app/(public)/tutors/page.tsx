import { Card, CardContent } from '@anointedcoder/ui';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tutors',
  description: 'Browse approved tutors. Live group tutoring on AnointedCoder.',
};

export default function TutorsDirectoryPage() {
  return (
    <main>
      <section className="border-border/60 border-b">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.18em]">Tutors</p>
            <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              The tutor directory is coming in Phase 7.
            </h1>
            <p className="text-muted-foreground mt-4">
              Search filters for subject, price, rating, language, country, and availability will
              land alongside public tutor profiles and SEO-friendly pages.
            </p>
          </div>
        </div>
      </section>
      <section className="container py-16">
        <Card>
          <CardContent className="text-muted-foreground py-16 text-center">
            Public tutor profiles will appear here in Phase 7.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
