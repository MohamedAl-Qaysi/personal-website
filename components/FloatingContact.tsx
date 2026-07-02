"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="group fixed bottom-8 right-8 z-50 flex items-center justify-center">

      {/* Orbit ring 1 */}
      <div
        className="absolute w-16 h-16 rounded-full orbit-cw pointer-events-none"
        style={{ animationDuration: "6s", border: "1px dashed rgba(23,132,242,0.35)" }}
      >
        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{ background: "#1784F2", boxShadow: "0 0 6px rgba(23,132,242,0.9)" }}
        />
      </div>

      {/* Orbit ring 2 */}
      <div
        className="absolute w-24 h-24 rounded-full orbit-ccw pointer-events-none"
        style={{ animationDuration: "10s", border: "1px dashed rgba(16,63,161,0.25)" }}
      >
        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
          style={{ background: "#103FA1", boxShadow: "0 0 5px rgba(16,63,161,0.9)" }}
        />
      </div>

      {/* Core button — expands on hover */}
      <Link
        href="/contact"
        aria-label="Contact me"
        className="relative z-10 flex items-center justify-center h-12 w-12 group-hover:w-40 overflow-hidden rounded-full transition-all duration-300 ease-in-out"
        style={{
          background: "linear-gradient(135deg, #1784F2, #103FA1)",
          boxShadow: "0 0 20px rgba(23,132,242,0.5)",
        }}
      >
        <Mail size={18} className="text-white shrink-0" />
        <span className="ml-0 max-w-0 group-hover:ml-2 group-hover:max-w-[120px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-semibold text-white overflow-visible">
          Contact Me
        </span>
      </Link>
    </div>
  );
}
