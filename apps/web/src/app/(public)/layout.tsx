import { Footer } from '@/features/marketing/components/Footer';
import { PublicNav } from '@/features/marketing/components/PublicNav';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicNav />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
