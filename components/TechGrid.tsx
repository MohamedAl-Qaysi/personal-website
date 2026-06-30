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
    <div className="space-y-10">
      {groups.map(({ category, skills }) => (
        <div key={category}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#454C7A" }}>
            {category}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center gap-2 w-full aspect-square rounded-xl p-2 transition-all duration-200 hover:-translate-y-1 group"
                style={{
                  background: "linear-gradient(135deg, rgba(6,28,115,0.6), rgba(10,14,49,0.4))",
                  border: "1px solid rgba(69,76,122,0.35)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(23,132,242,0.2), 0 0 0 1px rgba(23,132,242,0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <span className="text-2xl sm:text-3xl leading-none">{icon}</span>
                <span className="text-[10px] sm:text-xs font-medium text-center leading-tight group-hover:text-white transition-colors" style={{ color: "#858EAD" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
