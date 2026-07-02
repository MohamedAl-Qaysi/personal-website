"use client";

import { useState } from "react";
import Typewriter from "./Typewriter";

export default function HeroText() {
  const [phase, setPhase] = useState<0 | 1>(0);

  return (
    <div className="mb-5" style={{ fontFamily: "var(--font-ubuntu)" }}>
      {/* "Hi, I'm" — muted grey, small */}
      <p className="text-base sm:text-lg font-medium mb-2" style={{ color: "#858EAD" }}>
        <Typewriter
          text="Hi, I'm"
          speed={80}
          cursorClassName={phase > 0 ? "opacity-0" : ""}
          onDone={() => setPhase(1)}
        />
      </p>

      {/* "Mohamed Al-Qaysi" — animated gradient, only starts after phase 1 */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
        {phase >= 1 && (
          <Typewriter
            text="Mohamed Al-Qaysi"
            speed={65}
            className="gradient-text"
          />
        )}
      </h1>
    </div>
  );
}
