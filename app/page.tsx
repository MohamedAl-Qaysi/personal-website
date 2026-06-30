import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import TechGrid from "@/components/TechGrid";
import Button from "@/components/Button";
import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

/* ── Tech Stack Data ─────────────────────────────────────────── */
const techGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Lua",        icon: "🎮" },
      { name: "Python",     icon: "🐍" },
      { name: "SQL",        icon: "🗄️" },
      { name: "Java",       icon: "☕" },
      { name: "C",          icon: "⚙️" },
      { name: "PHP",        icon: "🐘" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Kotlin",     icon: "📱" },
    ],
  },
  {
    category: "Web / Frameworks",
    skills: [
      { name: "Laravel", icon: "🌿" },
      { name: "Next.js", icon: "▲"  },
      { name: "React",   icon: "⚛️" },
      { name: "HTML",    icon: "🌐" },
      { name: "CSS",     icon: "🎨" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL",  icon: "🐬" },
      { name: "SQLite", icon: "🗃️" },
    ],
  },
  {
    category: "Design & Mobile",
    skills: [
      { name: "Figma",                icon: "🎨" },
      { name: "Android",              icon: "🤖" },
      { name: "Accessibility Design", icon: "♿" },
    ],
  },
  {
    category: "AI Tools",
    skills: [
      { name: "Claude",          icon: "🤖" },
      { name: "ChatGPT",         icon: "💬" },
      { name: "Gemini",          icon: "✨" },
      { name: "GitHub Copilot",  icon: "✈️" },
      { name: "VS Code AI",      icon: "🔮" },
    ],
  },
  {
    category: "Dev Tools",
    skills: [
      { name: "Git",        icon: "🔀" },
      { name: "VS Code",    icon: "💻" },
      { name: "FiveM API",  icon: "🕹️" },
      { name: "FirstRate5", icon: "📊" },
      { name: "OpenIV",     icon: "🗂️" },
    ],
  },
];

/* ── Projects Data ───────────────────────────────────────────── */
const projects = [
  {
    title: "FiveM Server & 50+ Client Scripts",
    description: "Co-founded a GTA V multiplayer server. Built custom economy systems, game modes, admin tools, and delivered 50+ paid scripts to international clients over 3 years.",
    tags: ["Lua", "MySQL", "Game Dev", "Freelance"],
    href: "/projects/fivem",
    status: "completed" as const,
    image: "/images/projects/fivem.jpg",
  },
  {
    title: "SignPal",
    description: "End-to-end UX project for a sign-language learning app — user research, personas, high-fidelity Figma prototype, and two rounds of usability testing.",
    tags: ["Figma", "UX Research", "Usability Testing", "WCAG"],
    href: "/projects/signpal",
    status: "completed" as const,
    image: "/images/projects/signpal.jpg",
  },
  {
    title: "Streamly — Android App",
    description: "Android streaming content discovery app built with Kotlin and Jetpack Compose. Full MVVM architecture with Room and Retrofit.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Android"],
    href: "/projects/streamly",
    status: "completed" as const,
    image: "/images/projects/streamly.jpg",
  },
  {
    title: "Eagled Banking System",
    description: "Full-stack banking management system built with ASP.NET Core MVC. Account management, fund transfers, transaction history, RBAC admin dashboard.",
    tags: ["ASP.NET Core", "C#", "MVC", "SQL Server"],
    href: "/projects/banking",
    status: "completed" as const,
    image: "/images/projects/banking.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────── HERO ─────────────────────── */}
      <section
        className="relative w-full min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #07134A 0%, #05165F 45%, #0A0E31 100%)" }}
      >
        {/* Decorative glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-8 sm:right-24 w-72 h-72 rounded-full pulse-glow"
            style={{ background: "radial-gradient(circle, rgba(23,132,242,0.35) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-1/4 left-8 sm:left-24 w-48 h-48 rounded-full pulse-glow"
            style={{ background: "radial-gradient(circle, rgba(16,63,161,0.3) 0%, transparent 70%)", filter: "blur(40px)", animationDelay: "1.5s" }} />
        </div>

        <Container className="relative py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: "rgba(23,132,242,0.12)", border: "1px solid rgba(23,132,242,0.3)", color: "#1784F2" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to grad roles & internships
              </div>

              <p className="text-base sm:text-lg font-medium mb-2" style={{ color: "#858EAD" }}>
                Hi, I&apos;m
              </p>
              <h1
                className="gradient-text text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-3"
                style={{ fontFamily: "var(--font-ubuntu)" }}
              >
                Mohamed
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "var(--font-ubuntu)" }}>
                Al-Qaysi
              </h2>

              <p className="text-base sm:text-lg font-medium mb-6" style={{ color: "#1784F2" }}>
                AI-Augmented Full-Stack Software Engineer
              </p>

              <p className="text-base leading-relaxed mb-8 max-w-xl" style={{ color: "#858EAD" }}>
                Final-semester SE student with{" "}
                <span className="text-white font-semibold">5+ years</span> of real-world
                experience — from co-founding a game server and shipping 50+ client scripts,
                to Android apps, banking systems, UX research, and enterprise compliance
                software. I build with AI tools daily to move fast and ship quality work.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button href="/projects" size="lg">
                  View My Work <ArrowRight size={18} />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Enquire Now
                </Button>
              </div>

              {/* Location + Social */}
              <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: "#454C7A" }}>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} style={{ color: "#858EAD" }} />
                  <span style={{ color: "#858EAD" }}>Perth, WA</span>
                </span>
                <a href="https://github.com/HyperGFX" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-white" style={{ color: "#858EAD" }}>
                  <GithubIcon width={14} height={14} /> GitHub
                </a>
                <a href="https://linkedin.com/in/mohamedalqaysi" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-[#1784F2]" style={{ color: "#858EAD" }}>
                  <LinkedinIcon width={14} height={14} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Right: Orbital decoration */}
            <div className="hidden lg:flex items-center justify-center relative h-80">
              {/* Glow core */}
              <div className="absolute w-48 h-48 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(23,132,242,0.25), transparent)", filter: "blur(30px)" }} />

              {/* Orbit ring 1 — AI brain center */}
              <div className="absolute w-28 h-28 rounded-full flex items-center justify-center text-5xl float z-10"
                style={{ background: "linear-gradient(135deg,#061C73,#0A0E31)", border: "1px solid rgba(23,132,242,0.4)", boxShadow: "0 0 30px rgba(23,132,242,0.3)" }}>
                🤖
              </div>

              {/* Orbit ring 2 */}
              <div className="absolute w-52 h-52 rounded-full orbit-cw" style={{ animationDuration: "12s", border: "1px dashed rgba(23,132,242,0.2)" }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{ background: "#1784F2", boxShadow: "0 0 12px rgba(23,132,242,0.8)" }}>⚡</div>
              </div>

              {/* Orbit ring 3 */}
              <div className="absolute w-80 h-80 rounded-full orbit-ccw" style={{ animationDuration: "20s", border: "1px dashed rgba(16,63,161,0.2)" }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{ background: "#103FA1", boxShadow: "0 0 12px rgba(16,63,161,0.8)" }}>💻</div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{ background: "#103FA1" }}>📱</div>
              </div>

              {/* Orbit ring 4 */}
              <div className="absolute w-[420px] h-[420px] rounded-full orbit-cw" style={{ animationDuration: "30s", border: "1px dashed rgba(69,76,122,0.15)" }}>
                <div className="absolute top-1/4 -right-3 w-5 h-5 rounded-full"
                  style={{ background: "rgba(23,132,242,0.5)", boxShadow: "0 0 8px rgba(23,132,242,0.5)" }} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats bar ─────────────────────────────────────── */}
      <div style={{ background: "#0A0E31", borderTop: "1px solid rgba(69,76,122,0.3)", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "5+",         label: "Years Coding" },
              { value: "50+",        label: "Projects Shipped" },
              { value: "Co-Founder", label: "& Lead Developer" },
              { value: "AI-First",   label: "Development Approach" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-extrabold" style={{ color: "#1784F2", fontFamily: "var(--font-ubuntu)" }}>{value}</p>
                <p className="text-sm mt-1" style={{ color: "#858EAD" }}>{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Tech Stack ────────────────────────────────────── */}
      <section style={{ background: "#07134A", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-16 sm:py-20">
          <SectionHeader title="Tech Stack" />
          <TechGrid groups={techGroups} />
        </Container>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <section style={{ background: "#0A0E31", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-16 sm:py-20">
          <div className="flex items-center justify-between mb-10 sm:mb-14">
            {/* Inline section header with "All Projects" link */}
            <div className="relative flex items-center flex-1 mr-6">
              <div className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none">
                <div className="w-full h-px" style={{ background: "rgba(69,76,122,0.4)" }} />
              </div>
              <div className="relative flex items-center gap-1 text-xl sm:text-2xl z-10" style={{ fontFamily: "var(--font-ubuntu)" }}>
                <span className="pr-1" style={{ background: "#0A0E31", color: "#1784F2" }}>&lt;</span>
                <span className="px-1 font-bold" style={{ background: "#0A0E31" }}>My Projects</span>
                <span className="pl-1" style={{ background: "#0A0E31", color: "#1784F2" }}>/&gt;</span>
              </div>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-1 text-sm font-medium transition-colors hover:text-white shrink-0" style={{ color: "#858EAD" }}>
              All projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Button href="/projects" variant="outline" fullWidth>
              All Projects <ArrowRight size={15} />
            </Button>
          </div>
        </Container>
      </section>

      {/* ── About snippet ─────────────────────────────────── */}
      <section style={{ background: "#07134A", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-16 sm:py-20">
          <SectionHeader title="About Me" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-base leading-relaxed mb-4" style={{ color: "#858EAD" }}>
                I started writing code at 15, fascinated by how games worked under the hood. That curiosity
                turned into co-founding a FiveM multiplayer server at 17, where I taught myself Lua, SQL,
                and server architecture by building a real product — not tutorials. Within three years I&apos;d
                delivered 50+ commissioned scripts to clients worldwide.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#858EAD" }}>
                Today I&apos;m a final-semester SE student at Murdoch University and a daily user of AI
                development tools — Claude, Copilot, Cursor — using them to accelerate delivery without
                compromising quality. I&apos;m actively looking for a graduate role where I can contribute from
                day one.
              </p>
              <Button href="/about">
                Full Profile <ArrowRight size={15} />
              </Button>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {[
                { emoji: "🤖", label: "AI-First Engineer" },
                { emoji: "🌐", label: "Full-Stack Web" },
                { emoji: "📱", label: "Android Dev" },
                { emoji: "🎨", label: "UX Research" },
                { emoji: "🎮", label: "50+ Freelance" },
                { emoji: "⚡", label: "Enterprise Dev" },
              ].map(({ emoji, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl p-3 transition-colors"
                  style={{ background: "rgba(6,28,115,0.4)", border: "1px solid rgba(69,76,122,0.35)" }}>
                  <span className="text-xl">{emoji}</span>
                  <span className="text-xs font-medium leading-tight text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA / Enquire ─────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #0A0E31 0%, #05165F 50%, #07134A 100%)" }}>
        <Container className="py-20 sm:py-24 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>
              Let&apos;s build something
              <br />
              <span className="gradient-text">remarkable together.</span>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#858EAD" }}>
              I&apos;m open to graduate engineering roles, internships, and freelance projects.
              If you&apos;re building something interesting — reach out.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" size="lg">
                Enquire Now <ArrowRight size={18} />
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                Browse Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
