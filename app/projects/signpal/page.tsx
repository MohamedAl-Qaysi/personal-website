import ProjectLayout from "@/components/ProjectLayout";
import Button from "@/components/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const cardStyle = { background: "rgba(6,28,115,0.4)", border: "1px solid rgba(69,76,122,0.35)" };
const highlightStyle = { background: "rgba(23,132,242,0.08)", border: "1px solid rgba(23,132,242,0.2)", borderRadius: "0.75rem", padding: "1.25rem" };

export default function SignPalProjectPage() {
  return (
    <ProjectLayout
      title="SignPal"
      tagline="A research-driven UX project designing an accessible sign-language learning app — from user research through high-fidelity Figma prototype to two rounds of usability testing."
      role="UX Researcher & Designer (Solo)"
      timeline="Semester 2, 2024"
      status="Completed — University Project"
      tech={[{ name: "Figma" }, { name: "UX Research" }, { name: "Usability Testing" }, { name: "Personas" }, { name: "Journey Mapping" }, { name: "Wireframing" }, { name: "WCAG" }]}
      emoji="🤟"
      gradient="linear-gradient(135deg, #002a1a 0%, #003d26 40%, #0a0e31 100%)"
    >
      <section>
        <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-ubuntu)" }}>Overview</h2>
        <div className="space-y-3 leading-relaxed" style={{ color: "#858EAD" }}>
          <p>SignPal addressed a real accessibility gap: most people who want to learn sign language to communicate with Deaf or hard-of-hearing family members have very limited quality digital options. I designed a solution using a full human-centred design process.</p>
          <p>Starting from research, I worked through user research, persona development, journey mapping, wireframing, high-fidelity Figma prototyping, and two rounds of moderated usability testing with real participants.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Problem Space</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { stat: "466M+", label: "people worldwide with disabling hearing loss (WHO)" },
            { stat: "90%", label: "of Deaf children are born to hearing parents" },
            { stat: "Limited", label: "quality digital tools exist for casual learners" },
          ].map(({ stat, label }) => (
            <div key={stat} className="rounded-xl p-4 text-center" style={cardStyle}>
              <p className="text-xl font-bold text-white mb-1">{stat}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Research & Design Activities</h2>
        <ul className="space-y-2.5">
          {[
            "Conducted desk research into sign-language learning barriers for Deaf and hard-of-hearing communities",
            "Developed user personas representing distinct learner profiles across age and sign-language familiarity",
            "Created user journey maps illustrating pain points in existing tools",
            "Designed low-fidelity wireframes for initial concept exploration",
            "Built interactive high-fidelity Figma prototype covering onboarding, lessons, and progress tracking",
            "Planned and facilitated two rounds of moderated usability testing with real participants",
            "Synthesised findings into a structured report with prioritised design recommendations",
            "Iterated on prototype design based on testing insights",
          ].map((a, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#858EAD" }}>
              <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#1784F2" }} />
              <span className="leading-relaxed">{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Key Design Decisions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Accessible First",       desc: "All components to WCAG AA — high contrast, large tap targets, screen-reader-friendly labels." },
            { title: "Progressive Disclosure", desc: "Lessons structured to introduce concepts gradually, reducing cognitive overload." },
            { title: "Immediate Feedback",     desc: "Visual feedback on lesson completion and sign accuracy to reinforce learning." },
            { title: "Inclusive Iconography",  desc: "Custom icon set with clear hand-gesture illustrations rather than ambiguous photos." },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl p-4" style={cardStyle}>
              <p className="font-semibold text-white text-sm mb-1">{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-ubuntu)" }}>Usability Testing Findings</h2>
        <ul className="space-y-2.5">
          {[
            "Navigation hierarchy simplified after participants struggled to find the lesson library from the home screen",
            "Speed controls added after users wanted to replay signs at slower speeds",
            "Onboarding goal-setting extended so users can specify who they are learning for",
            "Colour contrast ratios adjusted across all key screens to pass WCAG AA",
          ].map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#858EAD" }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                style={{ background: "rgba(23,132,242,0.15)", color: "#1784F2" }}>{i + 1}</span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <div style={highlightStyle}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1784F2" }}>Why This Matters</p>
        <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>
          SignPal shows I can approach product design from a research-first mindset — validating decisions with real users before shipping. It demonstrates the kind of thinking that produces software people actually want to use.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href="/projects">← All Projects</Button>
        <Button href="/contact" variant="outline">Discuss This <ArrowRight size={14} /></Button>
      </div>
    </ProjectLayout>
  );
}
