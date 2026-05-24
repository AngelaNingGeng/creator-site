export default function WorkLoading() {
  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 h-10 w-32 rounded-xl bg-white/5 animate-pulse" />
        <div className="aspect-video rounded-2xl bg-white/5 animate-pulse mb-8" />
        <div className="p-8 rounded-2xl bg-white/[0.06] border border-white/10">
          <div className="h-8 w-64 bg-white/5 rounded animate-pulse mb-4" />
          <div className="h-4 w-32 bg-white/5 rounded animate-pulse mb-6" />
          <div className="h-4 w-full bg-white/5 rounded animate-pulse mb-2" />
          <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
