'use client';

import { useState } from 'react';
import { portfolioItems } from '@/data/portfolio';
import { WorkGrid } from '@/components/works/WorkGrid';
import { WorkFilter } from '@/components/works/WorkFilter';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import type { PortfolioItem } from '@/lib/types';

export function WorksPageClient() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>全部作品</GradientText>
          </h1>
          <p className="text-white/40 text-lg">
            共 {portfolioItems.length} 件作品
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <WorkFilter active={activeCategory} onChange={setActiveCategory} />
        </AnimatedSection>

        <AnimatedSection>
          <WorkGrid items={filtered} />
        </AnimatedSection>
      </div>
    </div>
  );
}
