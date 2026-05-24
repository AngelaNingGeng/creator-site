import { aboutData } from '@/data/about';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';

export function AboutPreview() {
  return (
    <section className="py-24 px-4 bg-[#0a0a1a]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>关于我</GradientText>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <GlassCard variant="strong" className="p-8 md:p-12 text-center">
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
              {aboutData.bio[0]}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {aboutData.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                    {stat.suffix || ''}
                  </div>
                  <div className="text-white/40 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button href="/about" variant="outline">
              了解更多
            </Button>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
