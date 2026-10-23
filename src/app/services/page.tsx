"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    id: 'brand',
    title: 'Brand Strategy & Identity',
    description: 'We define the core essence of your brand and translate it into a visual language that commands attention.',
    deliverables: ['Brand Positioning', 'Naming & Messaging', 'Visual Identity Systems', 'Brand Guidelines'],
    color: 'bg-acid-lime text-obsidian'
  },
  {
    id: 'web',
    title: 'Web Design & Development',
    description: 'High-performance digital experiences that balance cutting-edge aesthetics with flawless usability.',
    deliverables: ['Website Strategy', 'UI/UX Design', 'Marketing Websites', 'Ecommerce Experiences'],
    color: 'bg-obsidian text-porcelain'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Campaigns',
    description: 'Strategic campaigns that cut through the noise and drive measurable growth through creative excellence.',
    deliverables: ['Campaign Concepts', 'Social Media Creative', 'Advertising Assets', 'Content Systems'],
    color: 'bg-obsidian text-porcelain'
  },
  {
    id: 'motion',
    title: 'Motion & Creative Tech',
    description: 'Interactive storytelling and motion design that breathes life into digital interfaces.',
    deliverables: ['Motion Design', 'Scroll-driven Experiences', 'Interactive Storytelling', 'Web Experiments'],
    color: 'bg-obsidian text-porcelain'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-porcelain min-h-screen">
      <section className="pt-32 pb-24 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-acid-lime text-xs uppercase tracking-widest font-bold mb-4 block">Capabilities</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-obsidian tracking-tighter leading-tight">
              Design that <br /> drives desire.
            </h1>
          </div>
          <p className="text-muted-grey text-lg max-w-sm">
            A multidisciplinary approach to creative technology and brand evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-obsidian/10 border border-obsidian/10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-porcelain p-12 md:p-20 flex flex-col justify-between min-h-[500px]"
            >
              <div>
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-8 font-bold", service.color)}>
                  0{i + 1}
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-obsidian tracking-tighter mb-6">
                  {service.title}
                </h2>
                <p className="text-muted-grey text-lg leading-relaxed mb-12 max-w-md">
                  {service.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-obsidian mb-6">Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {service.deliverables.map(d => (
                    <div key={d} className="flex items-center gap-2 text-sm text-muted-grey">
                      <CheckCircle2 size={14} className="text-acid-lime" />
                      {d}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="group flex items-center gap-2 text-obsidian font-bold uppercase tracking-widest text-xs hover:text-acid-lime transition-colors">
                  Discuss this service <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-obsidian text-porcelain">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-16 text-center">Common Inquiries</h2>
          <div className="space-y-6">
            {[
              { q: "How do you handle project timelines?", a: "Every project is unique. Typically, a full brand identity takes 4-8 weeks, while complex digital products can take 3-6 months." },
              { q: "What is your pricing model?", a: "We work on a project-basis for defined scopes or a monthly retainer for ongoing creative partnership. We provide detailed quotes after the discovery phase." },
              { q: "Do you work with early-stage startups?", a: "Yes, we love helping ambitious founders establish a strong foundation through identity and a lean MVP." },
              { q: "Who owns the final assets?", a: "Upon final payment, all intellectual property and final design assets are transferred entirely to the client." },
            ].map((faq, i) => (
              <details key={i} className="group border-b border-white/10 pb-6">
                <summary className="flex justify-between items-center cursor-pointer list-none py-4 text-xl font-medium hover:text-acid-lime transition-colors">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <p className="text-muted-grey leading-relaxed pb-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
