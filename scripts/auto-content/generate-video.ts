/**
 * 管线 A：视频生成调度器
 *
 * 调用 narrator-ai-cli 自动生成影视解说视频。
 *
 * 前置条件：
 *   1. 已安装 narrator-ai-cli: npm i -g narrator-ai-cli
 *   2. 已配置 API key
 *
 * 使用方法：
 *   npx tsx scripts/auto-content/generate-video.ts
 */

import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

const LOG_FILE = path.resolve(__dirname, "video-generation-log.md");

// ============================================================
// 视频生成配置
// ============================================================

interface VideoConfig {
  topic: string;
  style: "悬疑解说" | "温情讲述" | "快节奏盘点" | "深度解析";
  duration: number; // 秒
  platform: "douyin" | "xigua" | "both";
}

// 今日生成队列
const TODAY_QUEUE: VideoConfig[] = [
  {
    topic: "肖申克的救赎",
    style: "深度解析",
    duration: 180,
    platform: "both",
  },
  {
    topic: "2026年悬疑电影盘点",
    style: "快节奏盘点",
    duration: 120,
    platform: "both",
  },
  {
    topic: "甄嬛传隐藏细节",
    style: "悬疑解说",
    duration: 90,
    platform: "douyin",
  },
];

// ============================================================
// 视频脚本模板
// ============================================================

function generateScript(config: VideoConfig): string {
  const scripts: Record<string, string> = {
    "肖申克的救赎": `
【开场 0-5秒】
画面：监狱高墙航拍 → 安迪入狱特写
旁白：一个银行家，被冤枉杀了妻子，判了终身监禁。但他用了19年，做了一件让所有人闭嘴的事。

【5-15秒 背景铺垫】
画面：监狱生活蒙太奇
旁白：肖申克监狱，关的是最重刑的犯人。在这里，尊严是奢侈品。但安迪不一样——他用专业知识换来了生存空间。

【15-40秒 核心叙事】
画面：图书馆场景 → 挖隧道暗示 → 海报镜头
旁白：表面上他在帮狱长洗钱，实际上他在做一件惊天动地的事。每天晚上，用一把小锤子，一毫米一毫米地...

【40-55秒 高潮】
画面：雷雨夜 → 越狱段落快速剪辑
旁白：那个雷雨交加的夜晚，他爬过了500码的污水管道——那是自由的距离。

【55-60秒 结尾】
画面：海滩重逢
旁白：希望是好事，也许是最好的事。而好事永远不会消失。
    `.trim(),

    "2026年悬疑电影盘点": `
【开场 0-5秒】
画面：快速闪过10部电影海报
旁白：2026年这5部悬疑片，每一部都让我头皮发麻。尤其是最后一部，结局你绝对猜不到。

【5-30秒 逐部介绍】
画面：每部电影精选片段
旁白：第一部...第二部...（每部15秒快速介绍核心悬念）

【30-55秒 重点推荐】
画面：TOP1电影重点片段
旁白：但要说今年最强的悬疑片，还得是这部——从头到尾都在反转，最后5分钟让我直接起鸡皮疙瘩。

【55-60秒 结尾】
画面：片名 + "关注看更多解说"
旁白：想看完整解说的，关注我，下期就讲它。
    `.trim(),

    "甄嬛传隐藏细节": `
【开场 0-5秒】
画面：甄嬛传经典场景
旁白：甄嬛传你刷了十遍，但这个细节你可能从没注意到。它直接暗示了结局。

【5-40秒 细节分析】
画面：道具特写 → 服饰细节 → 台词字幕高亮
旁白：注意看第三集这个镜头——甄嬛的服饰颜色变化，其实暗示了她的黑化过程。从一开始的粉白到最后的深紫...

【40-55秒 揭秘】
画面：前后对比画面
旁白：导演用颜色讲了一个隐藏故事，99%的观众都没发现。

【55-60秒 结尾】
画面：关注引导动画
旁白：你还发现了哪些隐藏细节？评论区告诉我。
    `.trim(),
  };

  return scripts[config.topic] ?? `[为 "${config.topic}" 生成脚本中...]`;
}

// ============================================================
// 主流程
// ============================================================

function main() {
  console.log("=".repeat(60));
  console.log("  管线 A：视频自动化生成");
  console.log("=".repeat(60));

  let log = `# 视频生成日志\n\n> ${new Date().toISOString()}\n\n`;

  for (const config of TODAY_QUEUE) {
    console.log(`\n📹 生成: ${config.topic}`);
    console.log(`   风格: ${config.style} | 时长: ${config.duration}s | 平台: ${config.platform}`);

    const script = generateScript(config);

    console.log(`   脚本已生成 (${script.length} 字)`);

    log += `## ${config.topic}\n`;
    log += `- **风格**: ${config.style}\n`;
    log += `- **时长**: ${config.duration}s\n`;
    log += `- **平台**: ${config.platform}\n`;
    log += `- **状态**: 脚本已生成\n`;
    log += `\n### 脚本内容\n\n${script}\n\n---\n\n`;

    // 尝试调用 narrator-ai-cli（如果已安装）
    try {
      console.log("   尝试调用 narrator-ai-cli ...");
      // execSync(`narrator-ai-cli generate --topic "${config.topic}" --style "${config.style}" --duration ${config.duration}`, { stdio: 'inherit' });
      console.log("   (需要安装 narrator-ai-cli 后启用自动生成)");
    } catch {
      console.log("   narrator-ai-cli 未安装，使用手动模式");
    }
  }

  fs.writeFileSync(LOG_FILE, log, "utf-8");
  console.log(`\n日志已保存: ${LOG_FILE}`);
  console.log("\n下一步：");
  console.log("  1. 检查生成的脚本，必要时手动调整");
  console.log("  2. 使用剪映/CapCut 配合脚本制作视频");
  console.log("  3. 上传到西瓜视频 (www.ixigua.com)");
  console.log("  4. 同步到抖音（已绑定自动同步）");
  console.log("  5. 更新 publish-tracker.md");
}

main();
