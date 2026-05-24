import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, productSlugs } from "@/data/products";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "产品未找到" };
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a
            href="/shop"
            className="text-sm text-white/40 hover:text-white/60 transition-colors inline-flex items-center gap-1"
          >
            <span>&larr;</span> 返回商店
          </a>
        </div>

        <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                <GradientText>{product.title}</GradientText>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-4xl font-bold text-white">${product.price}</div>
              {product.originalPrice && (
                <div className="text-sm text-white/30 line-through">
                  ${product.originalPrice}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-6 mb-8">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              产品内容
            </h3>
            <ul className="space-y-3">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-accent-2 to-accent-3 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {product.paypalLink ? (
            <Button
              href={product.paypalLink}
              external
              variant="primary"
              className="w-full justify-center text-base py-4"
            >
              立即购买 — ${product.price}
            </Button>
          ) : (
            <div className="text-center text-white/30 text-sm">
              购买链接即将上线，敬请期待
            </div>
          )}

          <p className="text-center text-white/20 text-xs mt-4">
            支付由 PayPal 安全处理 · 支持退款保障 · 如有问题请联系 hello@creator-site.com
          </p>
        </div>
      </div>
    </div>
  );
}
