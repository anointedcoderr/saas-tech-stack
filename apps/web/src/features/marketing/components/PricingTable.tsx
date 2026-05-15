import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@anointedcoder/ui';
import { Check } from 'lucide-react';
import Link from 'next/link';

import { paths } from '@/features/shared/lib/paths';

const tiers = [
  {
    name: 'Student',
    price: '$19',
    period: '/ month',
    description: 'Subscribe and join unlimited group classes from approved tutors.',
    features: [
      'Unlimited group classes',
      'Course library and progress tracking',
      'In-platform chat with tutors',
      'Certificate on completion',
    ],
    cta: 'Start learning',
    href: paths.auth.signUp,
    featured: false,
  },
  {
    name: 'Tutor',
    price: '$0',
    period: 'platform fee 12%',
    description: 'Free to start teaching. Pay a transparent platform fee on what you earn.',
    features: [
      'Live group class scheduling',
      'Course publishing tools',
      'Student chat and notifications',
      'Monthly payouts via admin',
    ],
    cta: 'Apply as tutor',
    href: paths.auth.signUp,
    featured: true,
  },
  {
    name: 'Tutor Premium',
    price: '$29',
    period: '/ month',
    description: 'Higher upload limits, advanced analytics, and priority visibility.',
    features: [
      'Higher media upload limits',
      'Advanced analytics dashboard',
      'Priority placement in search',
      'Reduced platform fee at 8%',
    ],
    cta: 'Upgrade later',
    href: paths.auth.signUp,
    featured: false,
  },
];

export function PricingTable() {
  return (
    <section className="container py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="text-muted-foreground mt-3">
          Students subscribe to the platform. Tutors keep what they earn, minus a single platform
          fee. No surprise charges.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={tier.featured ? 'border-primary ring-primary/30 shadow-sm ring-1' : ''}
          >
            <CardHeader>
              <CardTitle className="font-display text-xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold tracking-tight">
                  {tier.price}
                </span>
                <span className="text-muted-foreground text-sm">{tier.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="text-primary mt-0.5 h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-6 w-full"
                variant={tier.featured ? 'default' : 'outline'}
              >
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
