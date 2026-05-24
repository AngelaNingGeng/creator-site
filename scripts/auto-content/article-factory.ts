/**
 * 管线 B：图文自动化工厂
 *
 * 工作流：
 *   选题 → seo-content-writer 写文章 → 配图 → 发布到头条号/百家号
 *
 * 使用方法：
 *   1. 确保已安装技能: npx skills add baoyu-seo-content-writer
 *   2. 运行: npx tsx scripts/auto-content/article-factory.ts
 *   3. 生成的文章输出到 scripts/auto-content/output/
 */

import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = path.resolve(__dirname, "output");

// ============================================================
// 选题库 — 高流量关键词（每周更新）
// ============================================================

const TOPICS = {
  entertainment: [
    "【深度解析】2026年最值得期待的10部国产剧",
    "为什么这部评分最低的电影，票房却最高？",
    "从素人到顶流：一个网红的爆红公式拆解",
    "这档综艺为什么能做到每一期都上热搜？",
    "国产动画崛起了吗？从《XXX》说起",
  ],
  lifestyle: [
    "月薪5000也能精致生活：我的消费降级清单",
    "租房3年搬了5次家，总结出的租房避坑指南",
    "30岁以后才明白的10个生活道理",
    "从996到自由职业：我的1年转型之路",
    "夏天来了，这5个防晒误区你中了几个？",
  ],
  tech: [
    "普通人也能看懂的AI入门指南",
    "2026年最值得买的数码产品TOP10",
    "手机拍照技巧：3个设置让你的照片质感升级",
    "免费的AI工具合集，每一个都好用到哭",
    "为什么你的WiFi总是慢？教你3招提速",
  ],
  food: [
    "夏天必学的5道凉拌菜，开胃又解腻",
    "我在这座城市吃了100家面馆，推荐这10家",
    "在家复刻餐厅级美食，成本不到20元",
    "冰箱里常备的5种食材，随便做都好吃",
    "减肥期间也能吃的零食清单",
  ],
};

// ============================================================
// 文章生成调度器
// ============================================================

interface ArticleTask {
  id: string;
  title: string;
  category: keyof typeof TOPICS;
  platform: "toutiao" | "baijiahao" | "both";
  status: "pending" | "written" | "published";
  createdAt: string;
}

function generateTasks(count: number = 10): ArticleTask[] {
  const tasks: ArticleTask[] = [];
  const categories = Object.keys(TOPICS) as (keyof typeof TOPICS)[];
  const platforms: ArticleTask["platform"][] = ["toutiao", "baijiahao", "both"];

  for (let i = 0; i < count; i++) {
    const category = categories[i % categories.length];
    const titles = TOPICS[category];
    const title = titles[i % titles.length];

    tasks.push({
      id: `ART-${String(i + 1).padStart(3, "0")}`,
      title,
      category,
      platform: platforms[i % platforms.length],
      status: "pending",
      createdAt: new Date().toISOString().split("T")[0],
    });
  }

  return tasks;
}

// ============================================================
// 文章模板
// ============================================================

function generateTemplate(task: ArticleTask): string {
  const seoKeywords = task.title.replace(/[【】《》？：，。！、]/g, " ").trim();

  return `---
title: "${task.title}"
category: "${task.category}"
platform: "${task.platform}"
seo_keywords: "${seoKeywords}"
created: "${task.createdAt}"
---

# ${task.title}

## 引言

在[相关背景]的当下，[话题的重要性/普遍性]越来越受到关注。
今天我们就来聊聊这个话题，希望能给你带来一些启发。

## 正文

### 一、为什么这个话题值得关注？

[核心观点1] — 这是很多人都会遇到的问题/感兴趣的领域。
根据[最新数据/趋势]，这一领域正在经历快速的发展。

### 二、你不知道的关键信息

[核心观点2] — 大部分人不知道的是...
[具体细节/案例/数据]

### 三、我的建议/方法

1. **[方法1]**：[说明]
2. **[方法2]**：[说明]
3. **[方法3]**：[说明]

### 四、总结

[一句话总结核心观点]。
[互动引导：你觉得呢？]

---

*本文由AI辅助创作，内容经过人工审核。*
*关注我，获取更多[领域]的实用内容。*
`;
}

// ============================================================
// 主流程
// ============================================================

function main() {
  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const tasks = generateTasks(10);

  console.log("=".repeat(60));
  console.log("  管线 B：图文自动化工厂");
  console.log("=".repeat(60));
  console.log(`\n生成 ${tasks.length} 个选题任务：\n`);

  for (const task of tasks) {
    console.log(`  [${task.id}] ${task.title}`);
    console.log(`         分类: ${task.category} | 平台: ${task.platform}\n`);

    const content = generateTemplate(task);
    const filename = `${task.id}-${task.title.slice(0, 20).replace(/[^一-龥a-zA-Z0-9]/g, "-")}.md`;
    const filepath = path.join(OUTPUT_DIR, filename);
    fs.writeFileSync(filepath, content, "utf-8");
  }

  console.log(`\n所有文章模板已输出到: ${OUTPUT_DIR}`);
  console.log("\n下一步：");
  console.log("  1. 使用 seo-content-writer 技能完善每篇文章");
  console.log("  2. 配图（可使用 baoyu-xhs-images 技能生成）");
  console.log("  3. 发布到头条号 (mp.toutiao.com) 和百家号 (baijiahao.baidu.com)");
  console.log("  4. 更新 publish-tracker.md 记录发布状态");
}

main();
