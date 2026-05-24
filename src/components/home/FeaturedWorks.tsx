import { featuredItems } from '@/data/portfolio';
import { WorkCard } from '../works/WorkCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';

export function FeaturedWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>精选作品</GradientText>
          </h2>
          <p className="text-white/40 text-lg">点击下方卡片，探索更多精彩内容</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item, i) => (
            <AnimatedSection key={item.slug} delay={i * 100}>
              <WorkCard item={item} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Button href="/works" variant="secondary">
            查看全部作品
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
