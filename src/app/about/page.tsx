import { Metadata } from "next";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site.config";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatCard } from "@/components/about/StatCard";
import { Timeline } from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "关于我",
  description: "了解更多关于我的创作历程与故事",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>关于我</GradientText>
          </h1>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection className="mb-16">
          <GlassCard variant="strong" className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <div className="w-24 h-24 rounded-full glass flex items-center justify-center text-3xl flex-shrink-0">
                {siteConfig.name[0]}
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{siteConfig.name}</h2>
                <p className="text-white/40">抖音创作者 · 内容设计师</p>
              </div>
            </div>
            <div className="space-y-4">
              {aboutData.bio.map((p, i) => (
                <p key={i} className="text-white/60 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutData.stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </AnimatedSection>

        {/* Equipment */}
        <AnimatedSection className="mb-16">
          <GlassCard className="p-8">
            <h2 className="text-xl font-bold mb-4 gradient-text">创作设备</h2>
            <div className="flex flex-wrap gap-3">
              {aboutData.equipment.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-lg bg-white/5 text-white/60 text-sm border border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-center mb-12 gradient-text">
            创作历程
          </h2>
          <Timeline events={aboutData.timeline} />
        </AnimatedSection>
      </div>
    </div>
  );
}
