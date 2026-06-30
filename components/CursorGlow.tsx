"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const dotRef    = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const bubble = bubbleRef.current;
    const dot    = dotRef.current;
    if (!bubble || !dot) return;

    /* ── Track position ── */
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      bubble.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      dot.style.transform    = `translate(${x}px,${y}px) translate(-50%,-50%)`;

      if (!visibleRef.current) {
        visibleRef.current = true;
        bubble.style.opacity = "1";
        dot.style.opacity    = "1";
      }
    };

    /* ── Grow on interactive elements ── */
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a,button,[role=button],label")) {
        bubble.style.width           = "3.5em";
        bubble.style.height          = "3.5em";
        bubble.style.backgroundColor = "transparent";
        bubble.style.outline         = "2px solid rgba(23,132,242,0.7)";
        bubble.style.boxShadow       = "0 0 20px rgba(23,132,242,0.3)";
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a,button,[role=button],label")) {
        bubble.style.width           = "20px";
        bubble.style.height          = "20px";
        bubble.style.backgroundColor = "rgba(23,132,242,0.5)";
        bubble.style.outline         = "none";
        bubble.style.boxShadow       = "0 0 15px rgba(23,132,242,0.7)";
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Bubble */}
      <div
        ref={bubbleRef}
        className="fixed top-0 left-0 rounded-full opacity-0 will-change-transform"
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "rgba(23,132,242,0.5)",
          boxShadow: "0 0 15px rgba(23,132,242,0.7)",
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, outline 0.2s ease, opacity 0.3s ease",
          transform: "translate(-200px,-200px) translate(-50%,-50%)",
          pointerEvents: "none",
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full opacity-0 will-change-transform"
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "#1784F2",
          transform: "translate(-200px,-200px) translate(-50%,-50%)",
          pointerEvents: "none",
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}
