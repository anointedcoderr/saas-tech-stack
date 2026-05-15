import { cn } from '@anointedcoder/ui';

import { fontDisplay, fontSans } from '@/lib/fonts';
import { AppProviders } from '@/lib/providers/AppProviders';

import type { Metadata, Viewport } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'AnointedCoder Platform',
    template: '%s | AnointedCoder',
  },
  description:
    'Live group tutoring, courses, and subscriptions on a modern academic SaaS platform by AnointedCoder.',
  applicationName: 'AnointedCoder Platform',
  authors: [{ name: 'AnointedCoder', url: 'mailto:anointedcoder@gmail.com' }],
  creator: 'AnointedCoder',
  publisher: 'AnointedCoder',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(fontSans.variable, fontDisplay.variable)}
    >
      <body className="bg-background text-foreground min-h-screen font-sans">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
