import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'interactive';
  as?: 'div' | 'article' | 'section';
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  as: Tag = 'div',
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        'rounded-2xl border border-white/10',
        variant === 'default' && 'bg-white/[0.06] backdrop-blur-xl',
        variant === 'strong' && 'bg-white/[0.10] backdrop-blur-2xl',
        variant === 'interactive' &&
          'bg-white/[0.06] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.10] hover:scale-[1.02] hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/5',
        className
      )}
    >
      {children}
    </Tag>
  );
}
