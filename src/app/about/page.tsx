"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-porcelain min-h-screen">
      <section className="pt-32 pb-24 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-acid-lime text-xs uppercase tracking-widest font-bold mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-obsidian tracking-tighter leading-tight">
              Design for the <br /> next era.
            </h1>
          </div>
          <p className="text-muted-grey text-lg max-w-sm">
            We are a small team of obsessives dedicated to the intersection of brand, technology, and emotion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-3xl text-obsidian leading-relaxed font-medium mb-8">
              VANTORA was founded on the belief that the digital world has become too generic. We fight against the "template-ification" of the web.
            </p>
            <p className="text-muted-grey text-lg leading-relaxed mb-12">
              We don't follow trends; we build systems. By combining deep strategic research with avant-garde visual execution, we help ambitious brands move from being "another option" to being "the only choice."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-obsidian font-bold uppercase tracking-widest text-xs mb-4">Our Mission</h4>
                <p className="text-muted-grey text-sm leading-relaxed">To empower visionary businesses with digital identities that are visually arresting and technically flawless.</p>
              </div>
              <div>
                <h4 className="text-obsidian font-bold uppercase tracking-widest text-xs mb-4">Our Vision</h4>
                <p className="text-muted-grey text-sm leading-relaxed">Setting the global standard for the new wave of independent creative studios.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/5] bg-obsidian overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-9aed729fe91b?q=80&w=2000"
              alt="Team collaboration"
              className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 border-[30px] border-porcelain/10 pointer-events-none" />
          </div>
        </div>

        <section className="py-24 bg-obsidian text-porcelain rounded-sm px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-display font-bold tracking-tighter mb-12">The VANTORA Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: 'Precision Over Volume', desc: 'We focus on a handful of high-impact projects rather than mass-producing mediocre work.' },
                { title: 'Emotion-Led Logic', desc: 'Great design starts with how a user feels, then optimizes for how they act.' },
                { title: 'Tech as a Tool', desc: 'We use the latest technology not because it is new, but because it solves a real problem.' },
                { title: 'Radical Transparency', desc: 'We operate as a partner, not a vendor. Your goals are our goals.' },
              ].map((p, i) => (
                <div key={i} className="group">
                  <h4 className="text-acid-lime font-bold mb-2">{p.title}</h4>
                  <p className="text-muted-grey text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
