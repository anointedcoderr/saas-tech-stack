import { PricingTable } from '@/features/marketing/components/PricingTable';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for students and tutors on the AnointedCoder platform.',
};

export default function PricingPage() {
  return (
    <main>
      <section className="border-border/60 border-b">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.18em]">Pricing</p>
            <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Built for serious learning, priced fairly.
            </h1>
            <p className="text-muted-foreground mt-4">
              Students subscribe to the platform and join unlimited classes. Tutors pay a single
              platform fee and keep the rest.
            </p>
          </div>
        </div>
      </section>
      <PricingTable />
    </main>
  );
}
