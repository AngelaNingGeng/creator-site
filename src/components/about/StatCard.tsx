'use client';

import { useEffect, useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Stat } from '@/lib/types';

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const reducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible || reducedMotion) {
      setDisplayValue(stat.value);
      return;
    }

    const duration = 1500;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * stat.value));

      if (progress < 1) {
        animRef.current = requestAnimationFrame(tick);
      }
    }

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isVisible, stat.value, reducedMotion]);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-white/[0.04] border border-white/5"
    >
      <div className="text-2xl sm:text-3xl font-bold gradient-text">
        {reducedMotion || isVisible ? displayValue : 0}
        {stat.suffix || ''}
      </div>
      <div className="text-white/40 text-sm mt-1">{stat.label}</div>
    </div>
  );
}
