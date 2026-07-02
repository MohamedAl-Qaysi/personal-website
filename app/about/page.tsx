import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import TechGrid from "@/components/TechGrid";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, GraduationCap, Briefcase, MapPin } from "lucide-react";

const techGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Lua",        icon: "🎮" }, { name: "Python",     icon: "🐍" },
      { name: "SQL",        icon: "🗄️" }, { name: "Java",       icon: "☕" },
      { name: "C",          icon: "⚙️" }, { name: "PHP",        icon: "🐘" },
      { name: "JavaScript", icon: "⚡" }, { name: "Kotlin",     icon: "📱" },
    ],
  },
  {
    category: "Web / Frameworks",
    skills: [
      { name: "Laravel", icon: "🌿" }, { name: "Next.js", icon: "▲"  },
      { name: "React",   icon: "⚛️" }, { name: "HTML",    icon: "🌐" },
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
      { name: "Claude",         icon: "🤖" }, { name: "ChatGPT",        icon: "💬" },
      { name: "Gemini",         icon: "✨" }, { name: "GitHub Copilot", icon: "✈️" },
      { name: "VS Code AI",     icon: "🔮" },
    ],
  },
  {
    category: "Dev Tools",
    skills: [
      { name: "Git",        icon: "🔀" }, { name: "VS Code",    icon: "💻" },
      { name: "FiveM API",  icon: "🕹️" }, { name: "FirstRate5", icon: "📊" },
      { name: "OpenIV",     icon: "🗂️" },
    ],
  },
];

const timeline = [
  {
    title: "Bachelor of Science — Software Engineering",
    org: "Curtin University",
    location: "Perth, WA",
    period: "2024 – Current",
  description: "Final semester. Key units include Software Architecture, Human Computer Interface, Mobile App Development, Algorithms, Operating Systems, and Capstone Project.",
    icon: GraduationCap,
  },
  {
    title: "Co-Founder & Lead Developer",
    org: "FiveM Game Server",
    location: "Remote",
    period: "2019 – 2023",
    description: "Built a GTA V multiplayer server from scratch and delivered 50+ commissioned scripts for international clients — self-managed, commercially successful.",
    icon: Briefcase,
  },
  {
    title: "Energy Assessor Assistant",
    org: "Energy Advance",
    location: "Perth, WA",
    period: "2024 – 2025",
    description: "Conducted residential energy compliance assessments using FirstRate5 and NatHERS. Interpreted architectural blueprints, entered design specifications into assessment software, validated outputs, and produced compliance documentation for building approvals.",
    icon: Briefcase,
}
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07134A" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #07134A 0%, #05165F 50%, #0A0E31 100%)", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1784F2" }}>About Me</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-ubuntu)" }}>
            Engineer. Builder.
            <br />
            <span className="gradient-text">AI Enthusiast.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed mb-4" style={{ color: "#858EAD" }}>
            Final-semester SE student with 5+ years of hands-on development experience.
          </p>
          <p className="flex items-center gap-1.5 text-sm" style={{ color: "#454C7A" }}>
            <MapPin size={14} style={{ color: "#858EAD" }} />
            <span style={{ color: "#858EAD" }}>Perth, Western Australia</span>
          </p>
        </Container>
      </div>

      {/* Bio */}
      <section style={{ borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-14 sm:py-16">
          <FadeIn>
            <SectionHeader title="My Story" />
            <div className="space-y-4 max-w-2xl" style={{ color: "#858EAD" }}>
              <p className="leading-relaxed">
                Final-semester Software Engineering student with 5+ years of real-world software
                development experience, from delivering 50+ client projects and co-founding a game
                server to building Android applications, full-stack banking systems, UI/UX prototypes,
                and enterprise compliance software.
              </p>
              <p className="leading-relaxed">
                I also work closely with clients to apply AI to their businesses and workflows, helping
                automate tasks, improve productivity, and make everyday work easier.
              </p>
              <p className="leading-relaxed">
                I started writing code at 15, fascinated by how games worked under the hood — teaching
                myself Lua, SQL, and server architecture by building real products, not following
                tutorials. That self-driven foundation is what I bring to every project today.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">View Projects <ArrowRight size={15} /></Button>
              <Button href="/contact" variant="outline">Enquire</Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Tech Stack */}
      <section style={{ background: "#0A0E31", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-14 sm:py-16">
          <FadeIn>
            <SectionHeader title="Tech Stack" />
            <TechGrid groups={techGroups} />
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <section style={{ borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-14 sm:py-16">
          <FadeIn>
            <SectionHeader title="Experience" />
            <div className="space-y-3">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4 rounded-xl p-5 transition-all hover:border-[rgba(23,132,242,0.3)]"
                    style={{ background: "rgba(6,28,115,0.3)", border: "1px solid rgba(69,76,122,0.35)" }}>
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                      style={{ background: "rgba(23,132,242,0.1)", border: "1px solid rgba(23,132,242,0.2)", color: "#1784F2" }}>
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <div>
                          <p className="font-semibold text-white text-sm">{item.title}</p>
                          <p className="text-xs font-medium" style={{ color: "#1784F2" }}>
                            {item.org} · {item.location}
                          </p>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
                          style={{ background: "rgba(23,132,242,0.1)", border: "1px solid rgba(23,132,242,0.2)", color: "#858EAD" }}>
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-14 sm:py-16 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-ubuntu)" }}>
              Ready to work together?
            </h2>
            <p className="mb-8" style={{ color: "#858EAD" }}>
              I&apos;m actively seeking graduate roles and internships.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="/contact">Enquire Now</Button>
              <Button href="/projects" variant="outline">View Projects</Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
