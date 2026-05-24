import { Metadata } from "next";
import { ShopPageClient } from "./page.client";

export const metadata: Metadata = {
  title: "数字产品",
  description: "精选创作者工具包 — AI提示词、内容模板、运营指南，助你提升创作效率",
};

export default function ShopPage() {
  return <ShopPageClient />;
}
