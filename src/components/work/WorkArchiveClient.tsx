"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/sections/ProjectCard';
import { cn } from '@/lib/utils';

interface WorkArchiveClientProps {
  projects: any[];
}

export default function WorkArchiveClient({ projects }: WorkArchiveClientProps) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.flatMap(p => p.services)))];
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.services.includes(filter));

  return (
    <div className="py-24 px-6 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-acid-lime text-xs uppercase tracking-widest font-bold mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-obsidian tracking-tighter leading-tight">
            Selected <br /> Digital Works.
          </h1>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all border",
                filter === cat
                  ? "bg-obsidian text-porcelain border-obsidian"
                  : "bg-transparent text-obsidian border-obsidian/10 hover:border-obsidian"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-muted-grey text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
