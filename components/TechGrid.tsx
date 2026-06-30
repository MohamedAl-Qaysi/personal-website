"use client";

interface Skill {
  name: string;
  icon: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

interface TechGridProps {
  groups: SkillGroup[];
}

export default function TechGrid({ groups }: TechGridProps) {
  return (
    <div className="space-y-7">
      {groups.map(({ category, skills }) => (
        <div key={category}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#454C7A" }}>
            {category}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(6,28,115,0.4)",
                  border: "1px solid rgba(69,76,122,0.4)",
                  color: "#858EAD",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(23,132,242,0.4)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow = "0 0 12px rgba(23,132,242,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(69,76,122,0.4)";
                  e.currentTarget.style.color = "#858EAD";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="text-base leading-none">{icon}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
