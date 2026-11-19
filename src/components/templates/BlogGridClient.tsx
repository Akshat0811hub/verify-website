'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS_PLACEHOLDER } from '@/content/config';
import { TiltCard } from '@/components/ui/TiltCard';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  'All',
  'Employee BGV',
  'Business Due Diligence',
  'Compliance & Privacy',
  'Executive Screening',
  'Fraud Prevention',
  'Continuous Monitoring',
];

export function BlogGridClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS_PLACEHOLDER
      : BLOG_POSTS_PLACEHOLDER.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              'rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border',
              selectedCategory === category
                ? 'bg-orbit-green text-orbit-deep font-bold border-orbit-green shadow-[0_0_20px_rgba(22,193,90,0.35)]'
                : 'glass-panel text-muted hover:text-foreground border-surface-border'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, idx) => (
          <TiltCard
            key={post.slug}
            cursorLabel="Read"
            className="p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-orbit-green/15 px-3 py-1 font-mono text-[10px] font-bold uppercase text-orbit-green border border-orbit-green/30">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted">
                  <Clock className="w-3 h-3 text-orbit-cyan" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="mt-5 font-heading text-xl font-bold text-foreground group-hover:text-orbit-green transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
              <span className="font-mono text-[11px] text-muted">
                {post.date} • 0{idx + 1}
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-orbit-green group-hover:translate-x-1 transition-transform"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Request Guide</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
