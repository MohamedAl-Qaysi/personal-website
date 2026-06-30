import ProjectLayout from "@/components/ProjectLayout";
import Button from "@/components/Button";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";

const cardStyle = { background: "rgba(6,28,115,0.4)", border: "1px solid rgba(69,76,122,0.35)" };
const highlightStyle = { background: "rgba(23,132,242,0.08)", border: "1px solid rgba(23,132,242,0.2)", borderRadius: "0.75rem", padding: "1.25rem" };

export default function EnergyProjectPage() {
  return (
    <ProjectLayout
      title="Energy Advance — Compliance Software"
      tagline="Professional engineering role contributing to production compliance management software for an energy company — real team, real deployments, real regulatory impact."
      role="Software Developer"
      timeline="2024 – Present"
      status="Ongoing Employment"
      tech={[{ name: "Web App" }, { name: "SQL" }, { name: "Enterprise Stack" }, { name: "Agile/Scrum" }, { name: "Git" }, { name: "Code Reviews" }]}
      emoji="⚡"
      image="/images/projects/energy2.jpg"
    >
      <section>
        <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-ubuntu)" }}>Overview</h2>
        <div className="space-y-3 leading-relaxed" style={{ color: "#858EAD" }}>
          <p>Energy Advance is a Perth-based company operating in the energy sector, focused on compliance, metering, and regulatory reporting. As part of their technology team, I contribute to internal software tools supporting the company&apos;s compliance obligations under Australian energy regulations.</p>
          <p>This is my first sustained professional software engineering role — not freelance or coursework, but contributing to a real production system used daily by the business.</p>
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(69,76,122,0.1)", border: "1px solid rgba(69,76,122,0.3)" }}>
          <Lock size={15} className="shrink-0 mt-0.5" style={{ color: "#454C7A" }} />
          <p className="text-sm leading-relaxed" style={{ color: "#454C7A" }}>
            Specific implementation details are confidential. This page describes the nature of the work and skills applied without disclosing proprietary information.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>My Contributions</h2>
        <ul className="space-y-2.5">
          {[
            "Developing and maintaining features within an internal compliance management web application",
            "Building UI components and backend logic for regulatory data entry and submission workflows",
            "Implementing audit trail functionality tracking changes to compliance records",
            "Writing and optimising SQL queries for data extraction used in compliance reporting",
            "Participating in code reviews, sprint planning, and agile ceremonies",
            "Collaborating with non-technical stakeholders to translate compliance requirements into software",
            "Ensuring data integrity through server-side validation and business rule enforcement",
          ].map((c, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#858EAD" }}>
              <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#1784F2" }} />
              <span className="leading-relaxed">{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Professional Skills Gained</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Professional Dev Environment", desc: "Real team with version control, code reviews, sprint ceremonies, and production deployments." },
            { title: "Compliance Domain Knowledge",  desc: "Energy regulatory requirements, audit trails, data submission processes, and reporting standards." },
            { title: "Stakeholder Communication",    desc: "Translating non-technical requirements from compliance officers into working software features." },
            { title: "Enterprise Codebase",          desc: "Contributing to an existing production codebase — reading, understanding, and extending others' code." },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl p-4" style={cardStyle}>
              <p className="font-semibold text-white text-sm mb-1">{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={highlightStyle}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1784F2" }}>Why This Matters</p>
        <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>
          Many graduates have only coursework experience. Energy Advance gives me real professional engineering experience — a production team, an existing codebase, agile processes, and the understanding that software serves real business and regulatory obligations. I know what it means to work in a professional engineering environment.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href="/projects">← All Projects</Button>
        <Button href="/contact" variant="outline">Discuss This <ArrowRight size={14} /></Button>
      </div>
    </ProjectLayout>
  );
}
