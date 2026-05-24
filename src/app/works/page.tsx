import { Metadata } from "next";
import { WorksPageClient } from "./page.client";

export const metadata: Metadata = {
  title: "作品",
  description: "浏览我的全部创作作品 — 视频、图片、教程与品牌合作内容",
};

export default function WorksPage() {
  return <WorksPageClient />;
}
