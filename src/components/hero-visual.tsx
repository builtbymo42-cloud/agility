import rabbit from "@/assets/rabbit-logo.png";

export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Outer dark navy ring */}
      <div className="absolute inset-0 rounded-full bg-ink border border-ink-deep/40 shadow-[0_40px_120px_-30px_rgba(15,27,61,0.6)]" />

      {/* Inset concentric rings */}
      <div className="absolute inset-[28px] rounded-full border border-white/15" />
      <div className="absolute inset-[12%] rounded-full border border-white/10 parallax-orbit animate-spin-slow">
        {/* Orbiting glow node */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#3b6fa0] shadow-[0_0_24px_6px_rgba(59,111,160,0.7)]" />
      </div>
      <div className="absolute inset-[28%] rounded-full border border-white/10 animate-spin-reverse">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_18px_4px_rgba(255,255,255,0.6)]" />
      </div>
      <div className="absolute inset-[44%] rounded-full border border-white/15" />

      {/* Center core */}
      <div className="absolute inset-0 flex items-center justify-center parallax-core">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <div className="w-24 h-24 rounded-full bg-ink-deep border border-white/15 flex items-center justify-center">
            <img
              src={rabbit}
              alt=""
              className="w-12 h-12 invert brightness-200 opacity-70"
              width={48}
              height={48}
            />
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/70 font-display">
            Architectural<br />Integrity
          </div>
        </div>
      </div>

      {/* Floating spec labels */}
      <div className="hidden md:block absolute -top-3 -left-6 bg-white border border-ink-soft rounded-sm px-3 py-2 shadow-[0_10px_30px_-10px_rgba(15,27,61,0.25)]">
        <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-ink-accent">Tier-1</div>
        <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-ink">S/4HANA</div>
      </div>
      <div className="hidden md:block absolute -top-2 -right-4 bg-white border border-ink-soft rounded-sm px-3 py-2 shadow-[0_10px_30px_-10px_rgba(15,27,61,0.25)]">
        <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-ink-accent">Cloud / RISE</div>
        <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-ink">Azure</div>
      </div>
      <div className="hidden md:block absolute -bottom-2 -left-2 bg-white border border-ink-soft rounded-sm px-3 py-2 shadow-[0_10px_30px_-10px_rgba(15,27,61,0.25)]">
        <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-ink-accent">Risk</div>
        <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-ink">Zero-Disruption</div>
      </div>
    </div>
  );
}
