export default function StatusBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-bg-1 border-b border-border z-[100] font-mono text-[11px]">
      <div className="max-w-[1180px] mx-auto px-7 h-full flex items-center gap-2.5">
        <span className="w-[7px] h-[7px] rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
        <span className="text-fg-2">
          Currently <strong className="text-fg-0 font-semibold">open</strong> to SWE / Infra / Platform roles, Summer &amp; Full-time 2026
        </span>
        <span className="flex-1" />
        <span className="text-fg-3 hidden md:flex gap-1 items-center">
          <span className="kbd">⌘</span> <span className="kbd">K</span> to navigate
        </span>
      </div>
    </div>
  );
}
