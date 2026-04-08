export default function DashboardLoading() {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-4"
      aria-busy
      aria-label="Loading dashboard"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#7C3AED]" />
      <p className="text-sm text-white/50">Loading dashboard…</p>
    </div>
  );
}
