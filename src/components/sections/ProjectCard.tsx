"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: {
    title: string;
    slug: string;
    shortDescription: string;
    industry: string;
    services: string[];
    heroImage: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="group cursor-pointer"
    >
      <Link href={`/work/${project.slug}`} className="block relative overflow-hidden aspect-[4/5]">
        {/* Image Container */}
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-acid-lime text-[10px] uppercase tracking-widest font-bold">{project.industry}</span>
          </div>
          <h3 className="text-3xl font-display font-bold text-porcelain tracking-tight mb-2">{project.title}</h3>
          <div className="flex items-center text-porcelain/70 text-sm gap-2">
            Explore Project <ArrowRight size={14} />
          </div>
        </div>
      </Link>

      {/* Static Info (visible when not hovering or on mobile) */}
      <div className="mt-6">
        <h3 className="text-xl font-display font-bold text-obsidian group-hover:text-acid-lime transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted-grey text-sm mt-1 line-clamp-2">{project.shortDescription}</p>
      </div>
    </motion.div>
  );
}
