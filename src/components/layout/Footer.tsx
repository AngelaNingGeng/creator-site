import { siteConfig } from '@/data/site.config';
import { socialLinks } from '@/data/social';

const iconMap: Record<string, string> = {
  douyin: 'T',
  xiaohongshu: 'R',
  weibo: 'W',
  bilibili: 'B',
  wechat: 'C',
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white/80 font-medium">{siteConfig.name}</p>
            <p className="text-white/40 text-sm mt-1">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-sm font-bold"
                aria-label={link.name}
              >
                {iconMap[link.icon] || link.name[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-white/30 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
