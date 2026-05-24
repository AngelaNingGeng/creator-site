import { socialLinks } from '@/data/social';
import { AnimatedSection } from '../ui/AnimatedSection';

export function SocialStrip() {
  return (
    <section className="py-16 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center">
          <p className="text-white/40 text-sm mb-6">关注我的更多平台</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl font-bold group-hover:border-white/30 transition-all duration-200">
                  {link.name[0]}
                </div>
                <span className="text-xs">{link.name}</span>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
