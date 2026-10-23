"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface HeroProps {
  headline: string;
  subheadline: string;
}

export default function Hero({ headline, subheadline }: HeroProps) {
  const words = headline.split(' ');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian text-porcelain px-6">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-acid-lime rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-acid-lime rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] w-full text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-acid-lime text-xs uppercase tracking-[0.3em] font-bold">
            {siteConfig.name} Digital Agency
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="text-5xl md:text-8xl lg:text-[120px] font-display font-bold tracking-tighter leading-[0.9]"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: words.length * 0.1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-grey mb-12 leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: (words.length * 0.1) + 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/contact" className="btn-primary group px-8 py-4 text-sm uppercase tracking-widest">
            Start a Project
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/work" className="btn-outline px-8 py-4 text-sm uppercase tracking-widest border-white/20 text-porcelain hover:bg-white/5">
            View Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-steel-grey">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-acid-lime to-transparent" />
      </motion.div>
    </section>
  );
}
