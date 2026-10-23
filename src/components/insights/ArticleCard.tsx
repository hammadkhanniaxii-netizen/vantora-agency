"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: {
    title: string;
    slug: string;
    summary: string;
    category: string;
    heroImage: string;
    publishedAt: string | Date;
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Link href={`/insights/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-obsidian">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-acid-lime text-obsidian text-[10px] uppercase tracking-widest font-bold px-3 py-1">
              {article.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-3 text-steel-grey text-[10px] uppercase tracking-widest font-medium">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(article.publishedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            5 min read
          </div>
        </div>

        <h3 className="text-2xl font-display font-bold text-obsidian tracking-tight mb-3 group-hover:text-acid-lime transition-colors">
          {article.title}
        </h3>
        <p className="text-muted-grey text-sm leading-relaxed mb-4 line-clamp-2">
          {article.summary}
        </p>

        <div className="flex items-center gap-2 text-obsidian font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
          Read Article <ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
}
