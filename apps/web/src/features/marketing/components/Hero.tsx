'use client';

import { Button } from '@anointedcoder/ui';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { paths } from '@/features/shared/lib/paths';

export function Hero() {
  return (
    <section className="border-border/60 relative overflow-hidden border-b">
      <div className="container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-primary text-xs font-medium uppercase tracking-[0.18em]">
            Learn live, learn together
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Group tutoring, courses, and subscriptions, built for serious learners.
          </h1>
          <p className="text-muted-foreground mt-6 text-base md:text-lg">
            Tutors teach one subject deeply. Students subscribe, attend live group classes, track
            progress, and grow. A focused academic platform, not a noisy marketplace.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={paths.auth.signUp}>
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={paths.public.tutorsDirectory}>Browse tutors</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
