import { Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '@/lib/utils';

export default function PageWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col min-h-screen", className)}>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
