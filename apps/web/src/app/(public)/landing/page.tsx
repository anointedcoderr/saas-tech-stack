import { FeatureGrid } from '@/features/marketing/components/FeatureGrid';
import { Hero } from '@/features/marketing/components/Hero';
import { PricingTable } from '@/features/marketing/components/PricingTable';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live group tutoring and courses',
  description:
    'AnointedCoder is a modern academic SaaS platform for live group tutoring, structured courses, and student subscriptions.',
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <PricingTable />
    </>
  );
}
