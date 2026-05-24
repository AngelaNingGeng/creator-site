'use client';

import { useState } from 'react';
import { NavLinks } from './NavLinks';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        aria-label={open ? '关闭菜单' : '打开菜单'}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-16 inset-x-4 z-50 glass p-4">
            <NavLinks
              onClick={() => setOpen(false)}
              className="flex-col items-stretch"
            />
          </div>
        </>
      )}
    </div>
  );
}
