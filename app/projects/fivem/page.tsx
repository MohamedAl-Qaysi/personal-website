import ProjectLayout from "@/components/ProjectLayout";
import Button from "@/components/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const cardStyle = { background: "rgba(6,28,115,0.4)", border: "1px solid rgba(69,76,122,0.35)" };
const highlightStyle = { background: "rgba(23,132,242,0.08)", border: "1px solid rgba(23,132,242,0.2)", borderRadius: "0.75rem", padding: "1.25rem" };

export default function FiveMProjectPage() {
  return (
    <ProjectLayout
      title="FiveM Server & 50+ Client Scripts"
      tagline="Co-founded and operated a full GTA V multiplayer server, delivering custom game systems and 50+ paid client scripts to an international audience over three years."
      role="Co-Founder & Lead Developer"
      timeline="2019 – 2022 (3 years)"
      status="Completed"
      tech={[{ name: "Lua" }, { name: "MySQL" }, { name: "SQL" }, { name: "FiveM Framework" }, { name: "JavaScript" }, { name: "HTML/CSS (NUI)" }, { name: "Git" }, { name: "Linux" }]}
      emoji="🎮"
      gradient="linear-gradient(135deg, #1a0a02 0%, #2d1a05 40%, #0a0e31 100%)"
    >
      <section>
        <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-ubuntu)" }}>Overview</h2>
        <div className="space-y-3 leading-relaxed" style={{ color: "#858EAD" }}>
          <p>At 17, I co-founded a GTA V multiplayer server built on the FiveM framework — a platform enabling custom game modes, scripted economies, and player management on dedicated servers. What started as a passion project became a full operation: a live server with an active player community and a freelance script business serving clients worldwide.</p>
          <p>Over three years, I built everything from scratch. This is where I truly learned to engineer — debugging under pressure, managing client expectations, and shipping software that real people depended on daily.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Key Responsibilities</h2>
        <ul className="space-y-2.5">
          {[
            "Designed and built full server infrastructure from scratch — game mode logic, economy systems, and player data persistence",
            "Wrote 50+ custom Lua scripts for paying international clients: vehicle systems, UI menus, job systems, housing, and admin tools",
            "Built a MySQL-backed player database tracking stats, inventory, wallets, and criminal records across sessions",
            "Implemented role-based admin panel with kick/ban, player teleport, inventory inspection, and full audit logging",
            "Managed client relationships, requirement gathering, and delivery timelines independently",
            "Optimised script performance to reduce server tick overhead and improve player experience",
            "Handled server deployment, uptime monitoring, and version control across the full lifecycle",
          ].map((r, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#858EAD" }}>
              <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#1784F2" }} />
              <span className="leading-relaxed">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Technical Systems Built</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Economy System",   desc: "Player wallets, bank accounts, businesses, and job payrolls persisted via MySQL across server restarts." },
            { title: "Custom Game Modes",desc: "Scripts for heists, racing events, roleplay jobs, and minigames — each with state machines and in-game UI." },
            { title: "Admin Framework",  desc: "Role-based admin panel with kick/ban, teleport, inventory inspection, and full audit logging." },
            { title: "NUI Interfaces",   desc: "In-game HTML/CSS/JS UI rendered through FiveM NUI for menus, shops, and HUD elements." },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl p-4" style={cardStyle}>
              <p className="font-semibold text-white text-sm mb-1">{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Outcomes</h2>
        <ul className="space-y-2.5">
          {[
            "50+ scripts delivered to international clients over 3+ years",
            "Consistent positive client feedback on script quality and turnaround speed",
            "Built and grew an active player community from zero",
            "Developed real client communication and project management skills alongside engineering",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#858EAD" }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                style={{ background: "rgba(23,132,242,0.15)", color: "#1784F2" }}>{i + 1}</span>
              <span className="leading-relaxed">{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <div style={highlightStyle}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1784F2" }}>Why This Matters</p>
        <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>
          This project demonstrates I can design systems architecture, write production-grade code, manage a real client pipeline, and ship software that performs under load — all self-taught, self-managed, and commercially successful. It&apos;s not coursework. It&apos;s three years of real engineering.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href="/projects">← All Projects</Button>
        <Button href="/contact" variant="outline">Discuss This <ArrowRight size={14} /></Button>
      </div>
    </ProjectLayout>
  );
}
