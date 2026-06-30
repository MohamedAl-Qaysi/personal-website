interface SectionHeaderProps {
  title: string;
  accent?: boolean;
  className?: string;
}

/* Replicates Chirag's  < Title />  pattern with a horizontal rule behind it */
export default function SectionHeader({ title, accent = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`relative flex items-center mb-10 sm:mb-14 ${className}`}>
      {/* Horizontal rule */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none">
        <div className="w-full h-px" style={{ background: "rgba(69,76,122,0.4)" }} />
      </div>
      {/* Tag text */}
      <div
        className="relative flex items-center gap-1 text-xl sm:text-2xl z-10"
        style={{ fontFamily: "var(--font-ubuntu)" }}
      >
        <span className="pr-1" style={{ background: "#07134A", color: accent ? "#858EAD" : "#1784F2" }}>&lt;</span>
        <span className="px-1 font-bold" style={{ background: "#07134A", color: "#ffffff" }}>{title}</span>
        <span className="pl-1" style={{ background: "#07134A", color: accent ? "#858EAD" : "#1784F2" }}>/&gt;</span>
      </div>
    </div>
  );
}
