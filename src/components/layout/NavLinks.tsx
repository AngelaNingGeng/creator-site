'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navItems } from '@/data/navigation';

interface NavLinksProps {
  onClick?: () => void;
  className?: string;
}

export function NavLinks({ onClick, className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center gap-1', className)}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-white/15 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
