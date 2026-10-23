import React from 'react';
import { getFeaturedProjects } from '@/lib/content-service';
import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/sections/ProjectCard';
import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="bg-porcelain">
      <Hero
        headline={siteConfig.tagline}
        subheadline={siteConfig.supportingStatement}
      />

      {/* Featured Work Section */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-acid-lime text-xs uppercase tracking-widest font-bold mb-4 block">Selected Work</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-obsidian tracking-tighter leading-[1.1]">
              Pushing boundaries <br /> through digital precision.
            </h2>
          </div>
          <div className="text-muted-grey text-sm md:max-w-xs text-right">
            We blend strategic thinking with award-winning design to create immersive digital experiences.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Brand Philosophy Section - Editorial Transition */}
      <section className="bg-obsidian text-porcelain py-32 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square bg-elevated-dark overflow-hidden rounded-sm">
             <img
               src="https://images.unsplash.com/photo-1497366216548-375260364fcc?q=80&w=2000"
               alt="Studio environment"
               className="w-full h-full object-cover opacity-60 grayscale"
             />
             <div className="absolute inset-0 border-[20px] border-obsidian/20 pointer-events-none" />
          </div>

          <div>
            <span className="text-acid-lime text-xs uppercase tracking-widest font-bold mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-tight mb-8">
              Think boldly. <br /> Build beautifully.
            </h2>
            <p className="text-muted-grey text-lg leading-relaxed mb-12">
              VANTORA is an independent creative studio. We believe that digital experiences should be more than just functional—they should be emotive, precise, and unforgettable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-porcelain font-bold mb-2">Strategic Design</h4>
                <p className="text-muted-grey text-sm">We don't just make things look good; we make them work for your business goals.</p>
              </div>
              <div>
                <h4 className="text-porcelain font-bold mb-2">Technical Excellence</h4>
                <p className="text-muted-grey text-sm">Built with the latest tech stacks to ensure speed, accessibility, and scalability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
