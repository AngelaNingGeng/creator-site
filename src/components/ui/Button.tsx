import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  external?: boolean;
}

const baseClasses =
  'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm';

const variants = {
  primary:
    'bg-gradient-to-r from-accent-2 to-accent-3 text-white hover:from-accent-1 hover:to-accent-2 hover:shadow-lg hover:shadow-purple-500/20',
  secondary:
    'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
  outline:
    'border border-white/20 text-white hover:bg-white/10 hover:border-white/30',
};

export function Button({
  children,
  className,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  external,
}: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
