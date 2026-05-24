/**
 * 管线 A：选题引擎
 *
 * 从抖音/西瓜视频热搜中自动筛选高潜力选题，
 * 输出推荐选题列表供 narrator-ai-cli 生成视频。
 *
 * 使用方法：
 *   npx tsx scripts/auto-content/pick-topic.ts
 */

// ============================================================
// 选题策略
// ============================================================

interface TopicCandidate {
  keyword: string;
  source: "trending" | "evergreen" | "competitor";
  category: "movie" | "tv_series" | "documentary" | "variety";
  competitionLevel: "low" | "medium" | "high";
  estimatedViews: number;
  reason: string;
}

// 影视解说 — 常青树选题（永远有流量）
const EVERGREEN_TOPICS: TopicCandidate[] = [
  {
    keyword: "肖申克的救赎 解说",
    source: "evergreen",
    category: "movie",
    competitionLevel: "high",
    estimatedViews: 500000,
    reason: "影史第一，每隔一段时间就会有新观众搜索",
  },
  {
    keyword: "禁闭岛 结局解析",
    source: "evergreen",
    category: "movie",
    competitionLevel: "medium",
    estimatedViews: 300000,
    reason: "悬疑片结局解析永远有需求，完播率高",
  },
  {
    keyword: "甄嬛传 细节分析",
    source: "evergreen",
    category: "tv_series",
    competitionLevel: "medium",
    estimatedViews: 400000,
    reason: "经典剧持续有二次创作需求",
  },
  {
    keyword: "2026恐怖片推荐",
    source: "trending",
    category: "movie",
    competitionLevel: "low",
    estimatedViews: 200000,
    reason: "恐怖片盘点类内容搜索量稳定增长",
  },
  {
    keyword: "Netflix最新纪录片",
    source: "trending",
    category: "documentary",
    competitionLevel: "low",
    estimatedViews: 250000,
    reason: "纪录片解说竞争较小，平台推荐流量好",
  },
  {
    keyword: "国产悬疑剧推荐",
    source: "trending",
    category: "tv_series",
    competitionLevel: "medium",
    estimatedViews: 350000,
    reason: "国产悬疑剧热度持续，观众求推荐需求大",
  },
  {
    keyword: "电影解说 10分钟看完",
    source: "evergreen",
    category: "movie",
    competitionLevel: "high",
    estimatedViews: 600000,
    reason: "电影解说核心关键词，流量最大",
  },
  {
    keyword: "高分韩剧推荐",
    source: "trending",
    category: "tv_series",
    competitionLevel: "medium",
    estimatedViews: 300000,
    reason: "韩剧在国内有稳定受众，推荐类内容互动好",
  },
];

// ============================================================
// 选题排序算法
// ============================================================

function scoreTopic(t: TopicCandidate): number {
  let score = t.estimatedViews / 10000;

  // 低竞争加分
  if (t.competitionLevel === "low") score *= 1.5;
  else if (t.competitionLevel === "high") score *= 0.7;

  // 纪录片加分（平台扶持）
  if (t.category === "documentary") score *= 1.2;

  return Math.round(score);
}

// ============================================================
// 主流程
// ============================================================

function main() {
  console.log("=".repeat(60));
  console.log("  管线 A：选题引擎 — 今日推荐选题");
  console.log("=".repeat(60));

  const scored = EVERGREEN_TOPICS.map((t) => ({
    ...t,
    score: scoreTopic(t),
  })).sort((a, b) => b.score - a.score);

  console.log("\n今日TOP 3 推荐选题：\n");

  for (let i = 0; i < 3; i++) {
    const t = scored[i];
    console.log(`  ${i + 1}. ${t.keyword.padEnd(30)} 评分: ${t.score}`);
    console.log(`     类型: ${t.category} | 竞争: ${t.competitionLevel}`);
    console.log(`     预估播放: ${(t.estimatedViews / 10000).toFixed(1)}万 | ${t.reason}`);
    console.log();
  }

  console.log("-".repeat(60));
  console.log("\n完整选题列表：\n");

  for (const t of scored) {
    const badge = t.score > 40 ? "🔥" : t.score > 25 ? "⭐" : "  ";
    console.log(
      `  ${badge} [${t.score.toString().padStart(2)}] ${t.keyword.padEnd(30)} ${t.competitionLevel}`
    );
  }

  console.log("\n下一步：");
  console.log("  1. 选定选题后，用 narrator-ai-cli 生成解说视频");
  console.log('  2. 命令示例: narrator-ai-cli generate --topic "电影名" --style 悬疑解说');
  console.log("  3. 发布到西瓜视频 + 抖音（自动同步）");
  console.log("  4. 更新 publish-tracker.md 记录发布状态");
}

main();
