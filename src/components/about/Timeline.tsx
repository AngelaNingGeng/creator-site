import { TimelineEvent } from '@/lib/types';
import { AnimatedSection } from '../ui/AnimatedSection';

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

      <div className="space-y-12">
        {events.map((event, i) => (
          <AnimatedSection key={event.year} delay={i * 150}>
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Year badge */}
              <div className="md:w-1/2 flex md:justify-end">
                <div className="relative z-10 flex items-center gap-4 md:gap-6">
                  {i % 2 === 0 ? null : (
                    <div className="hidden md:block flex-1" />
                  )}
                  <span className="text-sm font-bold gradient-text bg-white/10 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">
                    {event.year}
                  </span>
                  {/* Dot on line */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-2 -translate-x-1/2 shadow-lg shadow-purple-500/30" />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 pl-10 md:pl-0">
                <div className="glass p-5">
                  <h3 className="font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
