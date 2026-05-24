export interface DigitalProduct {
  slug: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'prompt' | 'template' | 'guide';
  features: string[];
  previewContent?: string;
  paypalLink?: string;
}

export const products: DigitalProduct[] = [
  {
    slug: 'douyin-headlines-pack',
    title: '抖音爆款标题500例',
    description: '覆盖美妆、美食、旅行、舞蹈、搞笑、知识6大品类，每个标题都经过真实账号数据验证，助你快速提升视频点击率。',
    price: 9.9,
    originalPrice: 19.9,
    category: 'guide',
    features: [
      '500个经过数据验证的爆款标题',
      '覆盖6大热门内容品类',
      '每个标题附带适用场景说明',
      '附赠标题A/B测试方法论',
      '终身免费更新',
    ],
    paypalLink: 'https://paypal.me/creatorstudio/9.9',
  },
  {
    slug: 'ai-prompt-pack',
    title: 'AI短视频提示词包',
    description: '专为内容创作者设计的AI提示词集合，涵盖脚本生成、分镜描述、标题优化、文案润色等全流程。',
    price: 14.9,
    originalPrice: 29.9,
    category: 'prompt',
    features: [
      '100+专业级AI提示词模板',
      '覆盖脚本/分镜/标题/文案4大场景',
      '支持DeepSeek/ChatGPT/Claude/Kimi',
      '附带AI辅助创作工作流指南',
      '每月新增20+提示词',
    ],
    paypalLink: 'https://paypal.me/creatorstudio/14.9',
  },
  {
    slug: 'content-calendar-template',
    title: '创作者内容日历模板',
    description: '一套完整的内容规划系统，包含年度规划、月度主题、周度排期和每日执行清单，帮你告别选题焦虑。',
    price: 7.9,
    originalPrice: 15.9,
    category: 'template',
    features: [
      '年度内容战略规划表',
      '月度热点追踪日历',
      '周度内容排期模板',
      '每日执行检查清单',
      '数据复盘分析模板',
    ],
    paypalLink: 'https://paypal.me/creatorstudio/7.9',
  },
  {
    slug: 'commentary-script-pack',
    title: '影视解说文案模板集',
    description: '专业的影视解说文案结构模板，包含电影、电视剧、纪录片、综艺四种类型的开场、叙事、结尾模板。',
    price: 9.9,
    originalPrice: 19.9,
    category: 'guide',
    features: [
      '4种影视类型的文案结构模板',
      '30个强吸引力开场模板',
      '15个高互动率结尾模板',
      '解说节奏控制方法论',
      '配乐推荐清单',
    ],
    paypalLink: 'https://paypal.me/creatorstudio/9.9',
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const productSlugs = products.map((p) => p.slug);
