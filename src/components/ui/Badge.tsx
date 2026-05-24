import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 border border-white/10',
        className
      )}
    >
      {children}
    </span>
  );
}
