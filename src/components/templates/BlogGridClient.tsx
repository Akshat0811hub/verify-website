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

const BLOG_IMAGES = [
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
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
              'rounded-full px-4 py-2 text-xs font-semibold transition-all border',
              selectedCategory === category
                ? 'bg-orbit-navy text-white border-orbit-navy'
                : 'glass-panel text-muted hover:text-foreground border-surface-border'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid with Images & Justified Copy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, idx) => (
          <TiltCard
            key={post.slug}
            className="overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="h-44 w-full overflow-hidden border-b border-surface-border">
                <img
                  src={BLOG_IMAGES[idx % BLOG_IMAGES.length]}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-orbit-green/10 px-3 py-1 text-[11px] font-semibold text-orbit-green">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <Clock className="w-3.5 h-3.5 text-orbit-green" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mt-4 font-heading text-lg font-bold text-foreground group-hover:text-orbit-green transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="mt-2.5 text-xs sm:text-sm text-muted text-justify leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-surface-border flex items-center justify-between">
              <span className="text-xs text-muted">{post.date}</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-orbit-green group-hover:translate-x-1 transition-transform"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
