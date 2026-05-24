import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animated-gradient opacity-20" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent-2 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent-3 animate-float-delayed"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-accent-1 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-accent-2 animate-float-delayed"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-accent-3 animate-float"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-2/3 left-1/4 w-1.5 h-1.5 rounded-full bg-accent-1 animate-float-delayed"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/70 border border-white/10 backdrop-blur-sm">
            抖音内容创作者
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          用创意
          <br className="sm:hidden" />
          <GradientText as="span" className="mx-2">
            连接世界
          </GradientText>
        </h1>

        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          短视频创作 · 图像视觉 · 品牌合作
          <br />
          每一帧都是故事，每一张都是态度
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/works" variant="primary">
            探索作品
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
          <Button href="/about" variant="outline">
            关于我
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0f0f23] to-transparent pointer-events-none" />
    </section>
  );
}
