import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f23] px-4">
      <div className="text-center">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-2">页面未找到</h1>
        <p className="text-white/40 mb-8">
          你访问的页面不存在，或者已被移动到其他地方。
        </p>
        <Button href="/" variant="primary">
          返回首页
        </Button>
      </div>
    </div>
  );
}
