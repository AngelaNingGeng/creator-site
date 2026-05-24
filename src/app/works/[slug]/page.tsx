import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorkBySlug, allSlugs } from "@/data/portfolio";
import { VideoEmbed } from "@/components/works/VideoEmbed";
import { ImageGallery } from "@/components/works/ImageGallery";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate, formatNumber } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "未找到" };
  return {
    title: work.title,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <div className="mb-8">
          <Button href="/works" variant="outline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回作品列表
          </Button>
        </div>

        {/* Media */}
        <div className="mb-8">
          {work.category === 'image' && work.images ? (
            <ImageGallery images={work.images} title={work.title} />
          ) : (
            <VideoEmbed
              selfHostedVideo={work.selfHostedVideo}
              douyinUrl={work.douyinUrl}
              title={work.title}
            />
          )}
        </div>

        {/* Content */}
        <GlassCard className="p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            <GradientText>{work.title}</GradientText>
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge>
              {work.category === 'video'
                ? '视频'
                : work.category === 'image'
                  ? '图片'
                  : work.category === 'tutorial'
                    ? '教程'
                    : '品牌合作'}
            </Badge>
            <span className="text-white/30 text-sm">
              {formatDate(work.publishedAt)}
            </span>
          </div>

          <p className="text-white/60 leading-relaxed mb-8">{work.description}</p>

          {/* Stats */}
          {work.stats && (
            <div className="flex flex-wrap gap-6 mb-8 p-4 rounded-xl bg-white/[0.03]">
              {work.stats.likes !== undefined && (
                <div>
                  <div className="text-lg font-bold gradient-text">
                    {formatNumber(work.stats.likes)}
                  </div>
                  <div className="text-white/40 text-sm">点赞</div>
                </div>
              )}
              {work.stats.comments !== undefined && (
                <div>
                  <div className="text-lg font-bold gradient-text">
                    {formatNumber(work.stats.comments)}
                  </div>
                  <div className="text-white/40 text-sm">评论</div>
                </div>
              )}
              {work.stats.shares !== undefined && (
                <div>
                  <div className="text-lg font-bold gradient-text">
                    {formatNumber(work.stats.shares)}
                  </div>
                  <div className="text-white/40 text-sm">分享</div>
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Douyin CTA */}
          {work.douyinUrl && (
            <div className="pt-4 border-t border-white/10">
              <Button href={work.douyinUrl} variant="primary" external>
                在抖音观看
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
