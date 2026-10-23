"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const STAGES = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We start by diving deep into your business. Research, audience mapping, and defining the core problem we are solving.',
    deliverables: ['Audit Report', 'Audience Personas', 'Project Roadmap'],
    color: 'bg-acid-lime'
  },
  {
    num: '02',
    title: 'Define',
    desc: 'Converting research into strategy. We establish the positioning, messaging, and a creative North Star.',
    deliverables: ['Strategic Framework', 'Visual Moodboards', 'Sitemap & User Flow'],
    color: 'bg-obsidian'
  },
  {
    num: '03',
    title: 'Design',
    desc: 'The visual translation. We iterate on concepts, build prototypes, and refine the user experience.',
    deliverables: ['UI Kit', 'High-Fidelity Prototypes', 'Brand Identity Guide'],
    color: 'bg-acid-lime'
  },
  {
    num: '04',
    title: 'Build',
    desc: 'Transforming pixels into production code. We build with precision, testing every interaction.',
    deliverables: ['Production Ready Code', 'CMS Integration', 'QA Testing'],
    color: 'bg-obsidian'
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'The final push. Deployment, handover, and monitoring to ensure a flawless release.',
    deliverables: ['Live Website', 'Handover Documentation', 'Post-launch Support'],
    color: 'bg-acid-lime'
  }
];

export default function ProcessPage() {
  return (
    <div className="bg-porcelain min-h-screen">
      <section className="pt-32 pb-24 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-acid-lime text-xs uppercase tracking-widest font-bold mb-4 block">Our Method</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-obsidian tracking-tighter leading-tight">
              From vision <br /> to velocity.
            </h1>
          </div>
          <p className="text-muted-grey text-lg max-w-sm">
            A structured, five-stage process designed to eliminate guesswork and maximize impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-px h-full bg-obsidian/10 hidden md:block" />

          <div className="space-y-24">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-0 md:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-12"
              >
                {/* Number Indicator */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full items-center justify-center font-bold text-lg z-10 border-4 border-porcelain shadow-xl transition-transform hover:scale-110 cursor-default">
                  <div className={cn("w-full h-full rounded-full flex items-center justify-center text-porcelain", stage.color)}>
                    {stage.num}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-obsidian tracking-tighter mb-6">
                    {stage.title}
                  </h2>
                  <p className="text-muted-grey text-lg leading-relaxed max-w-xl">
                    {stage.desc}
                  </p>
                </div>

                <div className="lg:col-span-6 bg-obsidian/5 p-8 rounded-sm border border-obsidian/10">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-obsidian mb-6">Key Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {stage.deliverables.map(d => (
                      <div key={d} className="flex items-center gap-3 text-sm text-muted-grey">
                        <div className="w-1.5 h-1.5 rounded-full bg-acid-lime" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-obsidian tracking-tighter mb-12">
            Ready to start the journey?
          </h2>
          <Link href="/contact" className="btn-primary px-12 py-6 text-lg uppercase tracking-widest">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
