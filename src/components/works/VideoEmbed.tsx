import { GlassCard } from '../ui/GlassCard';

interface VideoEmbedProps {
  selfHostedVideo?: string;
  douyinUrl?: string;
  title: string;
}

export function VideoEmbed({ selfHostedVideo, douyinUrl, title }: VideoEmbedProps) {
  return (
    <GlassCard variant="strong" className="overflow-hidden">
      {selfHostedVideo ? (
        <video
          controls
          className="w-full aspect-video"
          poster={undefined}
          preload="metadata"
        >
          <source src={selfHostedVideo} type="video/mp4" />
          你的浏览器不支持视频播放。
        </video>
      ) : (
        <div className="aspect-video bg-white/5 flex flex-col items-center justify-center gap-4 p-8">
          <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
            <svg className="w-8 h-8 text-white/60 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-white/60 mb-2">在抖音观看完整视频</p>
            {douyinUrl && (
              <a
                href={douyinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-2 to-accent-3 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                打开抖音
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
    </GlassCard>
  );
}
