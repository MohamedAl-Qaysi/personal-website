import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import TechGrid from "@/components/TechGrid";
import Button from "@/components/Button";
import { ArrowRight, GraduationCap, Briefcase, MapPin } from "lucide-react";

const techGroups = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: "⚡" }, { name: "TypeScript", icon: "🔷" },
      { name: "Python",     icon: "🐍" }, { name: "Kotlin",     icon: "📱" },
      { name: "C#",         icon: "🎯" }, { name: "Java",       icon: "☕" },
      { name: "PHP",        icon: "🐘" }, { name: "Lua",        icon: "🎮" },
      { name: "SQL",        icon: "🗄️" },
    ],
  },
  {
    category: "Web & Frameworks",
    skills: [
      { name: "Next.js",      icon: "▲" }, { name: "React",        icon: "⚛️" },
      { name: "ASP.NET Core", icon: "💼" }, { name: "Laravel",      icon: "🌿" },
      { name: "Tailwind CSS", icon: "💨" }, { name: "Bootstrap",    icon: "🅱️" },
    ],
  },
  {
    category: "AI Tools (Daily)",
    skills: [
      { name: "Claude AI", icon: "🤖" }, { name: "ChatGPT",   icon: "💬" },
      { name: "Copilot",   icon: "✈️" }, { name: "Cursor AI", icon: "🔮" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Android",         icon: "🤖" }, { name: "Jetpack Compose", icon: "🧩" },
      { name: "Room DB",         icon: "💾" }, { name: "Retrofit",        icon: "🔌" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL",            icon: "🐬" }, { name: "SQLite",           icon: "🗃️" },
      { name: "SQL Server",       icon: "🏢" }, { name: "Entity Framework", icon: "🔗" },
    ],
  },
  {
    category: "UX & Design",
    skills: [
      { name: "Figma",            icon: "🎨" }, { name: "User Research",    icon: "🔬" },
      { name: "Usability Testing",icon: "✅" }, { name: "Wireframing",      icon: "✏️" },
      { name: "WCAG A11y",        icon: "♿" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git",       icon: "🔀" }, { name: "GitHub",      icon: "🐙" },
      { name: "VS Code",   icon: "💻" }, { name: "Vercel",      icon: "🚀" },
      { name: "Postman",   icon: "📮" }, { name: "Android Studio", icon: "🤖" },
    ],
  },
];

const timeline = [
  {
    title: "Bachelor of Science — Software Engineering",
    org: "Murdoch University",
    location: "Perth, WA",
    period: "2022 – 2026",
    description: "Final semester. Key units: Software Architecture, Databases, HCI, Mobile Dev, Agile PM.",
    icon: GraduationCap,
  },
  {
    title: "IT & Compliance Software Contributor",
    org: "Energy Advance",
    location: "Perth, WA",
    period: "2024 – Present",
    description: "Building and maintaining internal compliance software for energy regulatory reporting. Real production team with code reviews, sprints, and live deployments.",
    icon: Briefcase,
  },
  {
    title: "Co-Founder & Lead Developer",
    org: "FiveM Game Server",
    location: "Remote",
    period: "2019 – 2022",
    description: "Built a GTA V multiplayer server from scratch and delivered 50+ commissioned scripts for international clients — self-managed, commercially successful.",
    icon: Briefcase,
  },
  {
    title: "Customer Service",
    org: "Bunnings Warehouse",
    location: "Perth, WA",
    period: "2023 – 2024",
    description: "Trade and retail customer support, inventory management in a high-volume environment.",
    icon: Briefcase,
  },
  {
    title: "Entertainment Host",
    org: "BattleKart",
    location: "Perth, WA",
    period: "2022 – 2023",
    description: "Operated go-kart entertainment venue software and delivered customer experiences.",
    icon: Briefcase,
  },
  {
    title: "Bookseller",
    org: "Campion Education",
    location: "Perth, WA",
    period: "2021 – 2022",
    description: "Educational resource sales and stock management during peak school intake periods.",
    icon: Briefcase,
  },
  {
    title: "Crew Member",
    org: "Red Rooster",
    location: "Perth, WA",
    period: "2020 – 2021",
    description: "Fast-paced food prep and customer service. Developed time management skills under pressure.",
    icon: Briefcase,
  },
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
          <SectionHeader title="My Story" />
          <div className="space-y-4 max-w-2xl" style={{ color: "#858EAD" }}>
            <p className="leading-relaxed">
              I started writing code at 15, fascinated by how games worked under the hood. That curiosity
              turned into co-founding a FiveM multiplayer server at 17 — teaching myself Lua, SQL, and
              server architecture by building a real product. Within three years I&apos;d delivered 50+
              commissioned scripts to clients around the world.
            </p>
            <p className="leading-relaxed">
              That foundation led me to formal study at Murdoch University, where I&apos;ve since deepened
              my knowledge across the full software engineering stack — from object-oriented design and
              databases to mobile development, UX research, and enterprise systems.
            </p>
            <p className="leading-relaxed">
              What separates me is how I use AI tools — not as a crutch, but as a force multiplier.
              Claude, Copilot, and Cursor are part of my daily workflow, letting me architect, debug,
              and ship faster without compromising on quality or understanding.
            </p>
            <p className="leading-relaxed">
              I&apos;m actively looking for a graduate engineering role where I can contribute from day one.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">View Projects <ArrowRight size={15} /></Button>
            <Button href="/contact" variant="outline">Enquire</Button>
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section style={{ background: "#0A0E31", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-14 sm:py-16">
          <SectionHeader title="Tech Stack" />
          <TechGrid groups={techGroups} />
        </Container>
      </section>

      {/* Timeline */}
      <section style={{ borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-14 sm:py-16">
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
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-14 sm:py-16 text-center">
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
        </Container>
      </section>
    </div>
  );
}
