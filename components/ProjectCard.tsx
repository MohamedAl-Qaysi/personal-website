"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  emoji?: string;
  status?: "live" | "completed" | "wip";
  gradient?: string;
}

const statusConfig = {
  live:      { label: "Live",      color: "#22c55e" },
  completed: { label: "Completed", color: "#1784F2" },
  wip:       { label: "In Progress", color: "#f59e0b" },
};

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  emoji = "💻",
  status = "completed",
  gradient = "linear-gradient(135deg, #061C73, #0A0E31)",
}: ProjectCardProps) {
  const s = statusConfig[status];

  return (
    <Link href={href} className="group block rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ background: "rgba(6,28,115,0.4)", border: "1px solid rgba(69,76,122,0.4)", boxShadow: "0 0 0 0 rgba(23,132,242,0)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(23,132,242,0.15), 0 0 0 1px rgba(23,132,242,0.3)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(23,132,242,0)")}
    >
      {/* Preview area */}
      <div
        className="relative w-full h-44 flex items-center justify-center text-5xl overflow-hidden"
        style={{ background: gradient }}
      >
        <span className="float">{emoji}</span>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(7,19,74,0.6)", backdropFilter: "blur(4px)" }}
        >
          <span className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#1784F2" }}>
            View Project <ArrowUpRight size={16} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title row */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="font-bold text-white group-hover:text-[#1784F2] transition-colors text-base leading-snug"
            style={{ fontFamily: "var(--font-ubuntu)" }}>
            {title}
          </h3>
          {/* Status badge */}
          <span className="flex items-center gap-1.5 text-xs font-medium whitespace-nowrap shrink-0" style={{ color: s.color }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
            {s.label}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "#858EAD" }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium font-mono"
              style={{ background: "rgba(23,132,242,0.1)", border: "1px solid rgba(23,132,242,0.2)", color: "#858EAD" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
