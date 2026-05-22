import { useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export function TiltCard({ children, intensity = 6, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    const ry = ((x / rect.width) - 0.5) * intensity * 2;
    const rx = -((y / rect.height) - 0.5) * intensity * 2;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
      el.style.setProperty("--px", `${px}%`);
      el.style.setProperty("--py", `${py}%`);
      frame.current = 0;
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
    >
      {children}
      <div className="tilt-card-sheen rounded-sm" />
    </div>
  );
}
