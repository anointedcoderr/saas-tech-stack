import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About AnointedCoder, the team and mission behind the platform.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="border-border/60 border-b">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.18em]">About</p>
            <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              A focused academic platform, not a noisy marketplace.
            </h1>
            <p className="text-muted-foreground mt-4">
              AnointedCoder is built for tutors who teach one subject deeply and students who want
              live group classes, structured courses, and real progress.
            </p>
          </div>
        </div>
      </section>
      <section className="container py-16 md:py-20">
        <div className="text-muted-foreground mx-auto max-w-3xl space-y-6 text-base leading-7">
          <p>
            We started AnointedCoder because the market is loud, sprawling, and optimized for
            clicks, not learning. Tutors want to teach. Students want to learn. The platform should
            stay out of the way.
          </p>
          <p>
            Every design decision begins with one question, does this help a tutor teach better or a
            student learn faster? If the answer is unclear, we cut it.
          </p>
          <p>
            Built and maintained by AnointedCoder. Reach us at{' '}
            <a className="text-foreground font-medium" href="mailto:anointedcoder@gmail.com">
              anointedcoder@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
