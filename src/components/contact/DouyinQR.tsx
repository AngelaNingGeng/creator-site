import { siteConfig } from '@/data/site.config';
import { GlassCard } from '../ui/GlassCard';

export function DouyinQR() {
  return (
    <GlassCard className="p-8 text-center">
      <h3 className="text-lg font-semibold text-white mb-4">扫码关注我的抖音</h3>
      <div className="w-40 h-40 mx-auto mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
        <div className="text-center text-white/30">
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2.48a2.5 2.5 0 00-4.52 0H4m16-4a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6z" />
          </svg>
          <p className="text-xs">QR Code</p>
          <p className="text-xs mt-1">Placeholder</p>
        </div>
      </div>
      <p className="text-white/40 text-sm">
        或搜索 <span className="text-white/60 font-medium">{siteConfig.douyinHandle}</span>
      </p>
    </GlassCard>
  );
}
