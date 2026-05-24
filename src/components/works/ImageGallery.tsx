'use client';

import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <GlassCard variant="strong" className="overflow-hidden">
      {/* Main image */}
      <div className="aspect-video bg-white/5 relative">
        {images[selected] ? (
          <img
            src={images[selected]}
            alt={`${title} - ${selected + 1}`}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white/20 text-4xl">
            🖼
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 p-4 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setSelected(i)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === selected
                  ? 'border-accent-2 opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
