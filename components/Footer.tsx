import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const iconStyle = {
  background: "rgba(23,132,242,0.1)",
  border: "1px solid rgba(23,132,242,0.2)",
  color: "#858EAD",
};

export default function Footer() {
  return (
    <footer
      className="relative w-full pt-20 pb-8 px-5 sm:px-10"
      style={{ background: "linear-gradient(180deg, #0A0E31 0%, #07134A 100%)", borderTop: "1px solid rgba(69,76,122,0.3)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold" style={{ fontFamily: "var(--font-satisfy)", color: "#1784F2" }}>
              Mohamed<span className="text-white">.</span>
            </p>
            <p className="text-sm mt-1" style={{ color: "#858EAD" }}>
              AI-Augmented Software Engineer · Perth, WA
            </p>
          </div>

          <nav className="flex items-center gap-5">
            {[
              { label: "About",    href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Enquire",  href: "/contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: "#858EAD" }}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://github.com/HyperGFX" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-all hover:scale-110" style={iconStyle}>
              <GithubIcon width={16} height={16} />
            </a>
            <a href="https://linkedin.com/in/mohamedalqaysi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-all hover:scale-110" style={iconStyle}>
              <LinkedinIcon width={16} height={16} />
            </a>
            <a href="mailto:mohamed.alqaysi3@gmail.com" aria-label="Email"
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-all hover:scale-110" style={iconStyle}>
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs" style={{ color: "#454C7A", borderTop: "1px solid rgba(69,76,122,0.2)", paddingTop: "1.5rem" }}>
          © {new Date().getFullYear()} Mohamed Al-Qaysi — Built with Next.js, TypeScript & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
