'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();
  const reducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn(
        !reducedMotion && 'reveal',
        (isVisible || reducedMotion) && 'visible',
        className
      )}
      style={!reducedMotion ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
