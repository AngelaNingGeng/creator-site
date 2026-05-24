export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f23]">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-accent-2 animate-spin mx-auto mb-4" />
        <p className="text-white/30 text-sm">加载中...</p>
      </div>
    </div>
  );
}
