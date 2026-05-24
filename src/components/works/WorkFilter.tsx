'use client';

import { allCategories } from '@/data/portfolio';
import { cn } from '@/lib/utils';

interface WorkFilterProps {
  active: string;
  onChange: (key: string) => void;
}

export function WorkFilter({ active, onChange }: WorkFilterProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {allCategories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            active === cat.key
              ? 'bg-white/15 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/10'
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
