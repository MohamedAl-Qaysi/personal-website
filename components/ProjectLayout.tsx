import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "./Container";
import { ReactNode } from "react";

interface ProjectLayoutProps {
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  status: string;
  tech: { name: string }[];
  emoji?: string;
  gradient?: string;
  children: ReactNode;
}

export default function ProjectLayout({
  title, tagline, role, timeline, status, tech,
  emoji = "💻",
  gradient = "linear-gradient(135deg, #061C73 0%, #07134A 60%, #0A0E31 100%)",
  children,
}: ProjectLayoutProps) {
  return (
    <div className="min-h-screen" style={{ background: "#07134A" }}>
      {/* Hero */}
      <div style={{ background: gradient, borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-14 sm:py-20">
          <Link href="/projects"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
            style={{ color: "#858EAD" }}>
            <ArrowLeft size={15} /> Back to Projects
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <span className="text-5xl float">{emoji}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-ubuntu)" }}>
            {title}
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "#858EAD" }}>{tagline}</p>

          {/* Meta chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[{ label: "Role", value: role }, { label: "Timeline", value: timeline }, { label: "Status", value: status }].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                style={{ background: "rgba(23,132,242,0.1)", border: "1px solid rgba(23,132,242,0.25)" }}>
                <span style={{ color: "#858EAD" }}>{label}:</span>
                <span className="font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Tech stack bar */}
      <div style={{ background: "#0A0E31", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest mr-2" style={{ color: "#454C7A" }}>Stack</span>
            {tech.map(({ name }) => (
              <span key={name} className="px-3 py-1 rounded-md text-xs font-mono font-medium"
                style={{ background: "rgba(23,132,242,0.08)", border: "1px solid rgba(69,76,122,0.4)", color: "#858EAD" }}>
                {name}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container narrow className="py-12 sm:py-16">
        <div className="space-y-10">{children}</div>
      </Container>
    </div>
  );
}
