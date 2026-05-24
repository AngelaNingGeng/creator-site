import { PortfolioItem } from '@/lib/types';

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'summer-dance-challenge',
    title: '夏日舞蹈挑战',
    description: '参与2025年夏季最热门的舞蹈挑战，融合流行舞步与个人风格，获得全网关注与热评。',
    category: 'video',
    thumbnail: '/images/portfolio/dance.webp',
    douyinUrl: 'https://www.douyin.com/video/70000000001',
    douyinVideoId: '70000000001',
    publishedAt: '2025-07-15',
    featured: true,
    stats: { likes: 500000, comments: 12000, shares: 8000 },
    tags: ['舞蹈', '挑战', '热门'],
  },
  {
    slug: 'city-photo-collection',
    title: '城市光影集',
    description: '一组城市街拍作品，捕捉都市生活中的光影瞬间，展现独特的视觉美学。',
    category: 'image',
    thumbnail: '/images/portfolio/city.webp',
    douyinUrl: 'https://www.douyin.com/video/70000000002',
    douyinVideoId: '70000000002',
    images: ['/images/portfolio/city-1.webp', '/images/portfolio/city-2.webp', '/images/portfolio/city-3.webp'],
    publishedAt: '2025-06-20',
    featured: true,
    stats: { likes: 320000, comments: 8000, shares: 5000 },
    tags: ['摄影', '街拍', '城市'],
  },
  {
    slug: 'makeup-tutorial-series',
    title: '新手化妆教程系列',
    description: '从零开始的化妆教程，详细讲解每一步骤，帮助新手快速上手日常妆容。',
    category: 'tutorial',
    thumbnail: '/images/portfolio/makeup.webp',
    douyinUrl: 'https://www.douyin.com/video/70000000003',
    douyinVideoId: '70000000003',
    publishedAt: '2025-05-10',
    featured: true,
    stats: { likes: 280000, comments: 15000, shares: 12000 },
    tags: ['教程', '美妆', '新手'],
  },
  {
    slug: 'brand-collab-spring',
    title: '春日品牌联名',
    description: '与知名品牌合作的春日限定内容，结合产品特点创作出兼具商业与艺术价值的作品。',
    category: 'collab',
    thumbnail: '/images/portfolio/collab.webp',
    douyinUrl: 'https://www.douyin.com/video/70000000004',
    douyinVideoId: '70000000004',
    publishedAt: '2025-04-01',
    featured: false,
    stats: { likes: 450000, comments: 9000, shares: 15000 },
    tags: ['品牌合作', '春日', '商业'],
  },
  {
    slug: 'travel-vlog-yunnan',
    title: '云南旅行 Vlog',
    description: '记录云南之行的美好瞬间，从大理到丽江，一路风景一路故事。',
    category: 'video',
    thumbnail: '/images/portfolio/travel.webp',
    douyinUrl: 'https://www.douyin.com/video/70000000005',
    douyinVideoId: '70000000005',
    publishedAt: '2025-03-15',
    featured: false,
    stats: { likes: 380000, comments: 11000, shares: 20000 },
    tags: ['旅行', 'Vlog', '云南'],
  },
  {
    slug: 'food-review-hotpot',
    title: '火锅探店实录',
    description: '探访城市中隐藏的火锅名店，真实测评口味、环境与服务。',
    category: 'video',
    thumbnail: '/images/portfolio/food.webp',
    douyinUrl: 'https://www.douyin.com/video/70000000006',
    douyinVideoId: '70000000006',
    publishedAt: '2025-02-20',
    featured: false,
    stats: { likes: 210000, comments: 18000, shares: 6000 },
    tags: ['探店', '美食', '火锅'],
  },
];

export const featuredItems = portfolioItems.filter((item) => item.featured);

export const worksByCategory = (cat: PortfolioItem['category']) =>
  portfolioItems.filter((item) => item.category === cat);

export const getWorkBySlug = (slug: string) =>
  portfolioItems.find((item) => item.slug === slug);

export const allSlugs = portfolioItems.map((item) => item.slug);

export const allCategories = [
  { key: 'all' as const, label: '全部' },
  { key: 'video' as const, label: '视频' },
  { key: 'image' as const, label: '图片' },
  { key: 'tutorial' as const, label: '教程' },
  { key: 'collab' as const, label: '品牌合作' },
];
