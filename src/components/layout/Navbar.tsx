"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-obsidian/90 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative z-50">
          <span className={cn(
            "text-xl font-display font-bold tracking-tighter transition-colors",
            scrolled ? "text-porcelain" : "text-obsidian"
          )}>
            {siteConfig.name}
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-acid-lime transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-tight transition-colors hover:text-acid-lime relative py-2",
                scrolled ? "text-porcelain/70" : "text-obsidian/70",
                pathname === item.href && "text-acid-lime"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-acid-lime"
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "btn-primary text-xs uppercase tracking-widest",
              scrolled ? "bg-acid-lime text-obsidian" : "bg-obsidian text-porcelain"
            )}
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden relative z-50 p-2 transition-colors",
            scrolled ? "text-porcelain" : "text-obsidian"
          )}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-obsidian z-40 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6">
              {siteConfig.navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-5xl font-display font-bold tracking-tighter text-porcelain hover:text-acid-lime transition-colors flex items-center gap-4",
                      pathname === item.href && "text-acid-lime"
                    )}
                  >
                    {item.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="btn-primary w-full py-6 text-lg uppercase tracking-widest"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
