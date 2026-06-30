import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "FiveM Server & 50+ Client Scripts",
    description: "Co-founded a GTA V multiplayer server and delivered 50+ paid Lua scripts to international clients over 3 years. Custom economy systems, game modes, admin tools, MySQL-backed player data.",
    tags: ["Lua", "MySQL", "Game Dev", "Freelance", "Server Admin"],
    href: "/projects/fivem",
    emoji: "🎮",
    status: "completed" as const,
    gradient: "linear-gradient(135deg, #1a0a02, #2d1a05, #0a0e31)",
  },
  {
    title: "SignPal",
    description: "End-to-end UX project for a sign-language learning app. User research, personas, journey maps, high-fidelity Figma prototype, and two rounds of usability testing.",
    tags: ["Figma", "UX Research", "Usability Testing", "Accessibility", "WCAG"],
    href: "/projects/signpal",
    emoji: "🤟",
    status: "completed" as const,
    gradient: "linear-gradient(135deg, #002a1a, #003d26, #0a0e31)",
  },
  {
    title: "Streamly — Android App",
    description: "Android streaming content discovery app built with Kotlin and Jetpack Compose. Full MVVM architecture with Room for local persistence and Retrofit for networking.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "REST API", "Material 3"],
    href: "/projects/streamly",
    emoji: "📱",
    status: "completed" as const,
    gradient: "linear-gradient(135deg, #1a0033, #2d0052, #0a0e31)",
  },
  {
    title: "Eagled Banking System",
    description: "Full-stack banking management system in ASP.NET Core MVC with account management, fund transfers, transaction history, RBAC, and an admin dashboard.",
    tags: ["ASP.NET Core", "C#", "MVC", "SQL Server", "Entity Framework", "Identity"],
    href: "/projects/banking",
    emoji: "🏦",
    status: "completed" as const,
    gradient: "linear-gradient(135deg, #002018, #003a26, #0a0e31)",
  },
  {
    title: "Energy Advance — Compliance Software",
    description: "Professional engineering role contributing to internal compliance management software for an energy company. Real development team, production system, ongoing delivery.",
    tags: ["Enterprise", "SQL", "Compliance", "Agile", "Code Reviews"],
    href: "/projects/energy",
    emoji: "⚡",
    status: "live" as const,
    gradient: "linear-gradient(135deg, #1a1000, #2d1f00, #0a0e31)",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07134A" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #07134A 0%, #05165F 50%, #0A0E31 100%)", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1784F2" }}>Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-ubuntu)" }}>
            My Projects
          </h1>
          <p className="text-lg max-w-lg leading-relaxed" style={{ color: "#858EAD" }}>
            Real work built over 5+ years — game systems, web apps, Android, UX, and enterprise software.
          </p>
        </Container>
      </div>

      {/* Grid */}
      <section>
        <Container className="py-14 sm:py-16">
          <SectionHeader title="All Work" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Container>
      </section>

      <div style={{ background: "#0A0E31", borderTop: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-6 text-center">
          <p className="text-sm" style={{ color: "#454C7A" }}>
            More projects, coursework, and client work available on request.
          </p>
        </Container>
      </div>
    </div>
  );
}
