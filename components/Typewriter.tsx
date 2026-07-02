"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
  onDone?: () => void;
}

export default function Typewriter({
  text,
  speed = 55,
  className = "",
  cursorClassName = "",
  onDone,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  });

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i < text.length) {
        timer = setTimeout(tick, speed);
      } else {
        setDone(true);
        onDoneRef.current?.();
      }
    };

    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [text, speed]); // onDone intentionally omitted — stable via ref

  return (
    <span className={className}>
      {displayed}
      <span
        className={`inline-block w-[2px] h-[0.85em] align-middle ml-0.5 ${cursorClassName}`}
        style={{
          background: "#1784F2",
          animation: done ? "blink 1s step-end infinite" : "none",
          opacity: done ? undefined : 1,
        }}
      />
    </span>
  );
}
