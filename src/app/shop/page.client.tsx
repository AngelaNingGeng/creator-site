"use client";

import { products } from "@/data/products";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const categoryLabel: Record<string, string> = {
  prompt: "提示词",
  template: "模板",
  guide: "指南",
};

export function ShopPageClient() {
  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>创作者工具包</GradientText>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            AI提示词、内容模板、运营指南 — 精心打磨的数字产品，助你创作事半功倍
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="group rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-accent-2/20 to-accent-3/20 text-accent-2 border border-accent-2/20">
                  {categoryLabel[product.category]}
                </span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-white/30 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-2 transition-colors">
                {product.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="text-sm text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent-2/60" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <span className="inline-flex items-center gap-1 text-sm text-accent-2 group-hover:gap-2 transition-all">
                  查看详情
                  <span className="text-lg leading-none">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
