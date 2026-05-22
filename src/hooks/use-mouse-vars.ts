import { useEffect } from "react";

export function useMouseVars() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mx = 0, my = 0, nx = 0, ny = 0;
    let frame = 0;
    const root = document.documentElement;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      nx = e.clientX / window.innerWidth - 0.5;
      ny = e.clientY / window.innerHeight - 0.5;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          root.style.setProperty("--mx", `${mx}px`);
          root.style.setProperty("--my", `${my}px`);
          root.style.setProperty("--nx", `${nx}`);
          root.style.setProperty("--ny", `${ny}`);
          frame = 0;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
