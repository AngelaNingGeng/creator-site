import { PortfolioItem } from '@/lib/types';
import { WorkCard } from './WorkCard';
import { AnimatedSection } from '../ui/AnimatedSection';

interface WorkGridProps {
  items: PortfolioItem[];
}

export function WorkGrid({ items }: WorkGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-white/30">
        <p className="text-lg">暂无作品</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <AnimatedSection key={item.slug} delay={i * 80}>
          <WorkCard item={item} />
        </AnimatedSection>
      ))}
    </div>
  );
}
