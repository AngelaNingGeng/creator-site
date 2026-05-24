import Link from 'next/link';
import { PortfolioItem } from '@/lib/types';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { formatDate } from '@/lib/utils';

interface WorkCardProps {
  item: PortfolioItem;
}

export function WorkCard({ item }: WorkCardProps) {
  return (
    <Link href={`/works/${item.slug}`}>
      <GlassCard variant="interactive" className="overflow-hidden h-full">
        {/* Thumbnail area */}
        <div className="aspect-[9/16] sm:aspect-video bg-white/5 flex items-center justify-center relative overflow-hidden">
          {item.thumbnail ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="text-white/20 text-4xl">
              {item.category === 'video' ? '▶' : '🖼'}
            </div>
          )}
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-black/50 backdrop-blur-sm border-0 text-white/90">
              {item.category === 'video'
                ? '视频'
                : item.category === 'image'
                  ? '图片'
                  : item.category === 'tutorial'
                    ? '教程'
                    : '品牌合作'}
            </Badge>
          </div>

          {/* Play icon for video */}
          {item.category === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-white mb-2 line-clamp-1">
            {item.title}
          </h3>
          <p className="text-white/40 text-sm line-clamp-2 mb-4">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-white/30">{formatDate(item.publishedAt)}</span>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
