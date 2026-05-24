'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { GradientText } from '../ui/GradientText';
import { siteConfig } from '@/data/site.config';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f0f23]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          <GradientText>{siteConfig.name}</GradientText>
        </Link>
        <NavLinks className="hidden md:flex" />
        <MobileMenu />
      </div>
    </header>
  );
}
