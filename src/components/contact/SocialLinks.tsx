import { socialLinks } from '@/data/social';

export function SocialLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {socialLinks.map((link, i) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/15 transition-all duration-200 group"
        >
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-sm font-bold group-hover:border-white/30 transition-colors">
            {link.name[0]}
          </div>
          <span className="text-sm text-white/60 group-hover:text-white transition-colors">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
}
