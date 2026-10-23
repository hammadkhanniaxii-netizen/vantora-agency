import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export default async function Footer() {
  'use cache';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian text-porcelain pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-display font-bold tracking-tighter mb-6 block">
              {siteConfig.name}
            </Link>
            <p className="text-muted-grey text-lg max-w-md mb-8 leading-relaxed">
              {siteConfig.supportingStatement}
            </p>
            <div className="flex gap-4">
              {Object.entries(siteConfig.socials).map(([platform, url]) => (
                <Link
                  key={platform}
                  href={url}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-acid-lime hover:text-obsidian transition-all"
                >
                  <span className="uppercase text-[10px] font-bold">{platform[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-acid-lime text-xs uppercase tracking-widest font-bold mb-4">Navigation</h4>
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-grey hover:text-porcelain transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="text-muted-grey hover:text-porcelain transition-colors text-sm">
              Start a Project
            </Link>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-acid-lime text-xs uppercase tracking-widest font-bold mb-4">Agency</h4>
            <Link href="/privacy" className="text-muted-grey hover:text-porcelain transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-grey hover:text-porcelain transition-colors text-sm">
              Terms of Use
            </Link>
            <Link href="/faq" className="text-muted-grey hover:text-porcelain transition-colors text-sm">
              FAQ
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-steel-grey text-xs">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-steel-grey text-xs italic">
            Built for ambitious businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
