import PageWrapper from '@/components/layout/PageWrapper';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata = {
  title: 'VANTORA® | Independent Digital Creative & Technology Agency',
  description: 'Multidisciplinary agency combining brand strategy, visual identity, digital experiences, and creative technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body`}>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
