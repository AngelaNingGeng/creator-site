'use client';

import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f23] px-4">
      <div className="text-center">
        <div className="text-6xl font-bold gradient-text mb-4">500</div>
        <h1 className="text-2xl font-bold text-white mb-2">出错了</h1>
        <p className="text-white/40 mb-8">
          很抱歉，服务器遇到了问题。请稍后再试。
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={reset} variant="primary">
            重试
          </Button>
          <Button href="/" variant="outline">
            返回首页
          </Button>
        </div>
      </div>
    </div>
  );
}
