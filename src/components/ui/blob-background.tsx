export default function BlobBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="fixed left-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[#4c1d95]/15 blur-[120px]" />
      <div className="fixed bottom-[0%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-[#7c3aed]/20 blur-[120px]" />
      <div className="fixed left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e1b4b]/10 blur-[120px]" />
      <div className="grid-overlay absolute inset-0 opacity-20" />
    </div>
  );
}