import ProjectLayout from "@/components/ProjectLayout";
import Button from "@/components/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const cardStyle = { background: "rgba(6,28,115,0.4)", border: "1px solid rgba(69,76,122,0.35)" };
const highlightStyle = { background: "rgba(23,132,242,0.08)", border: "1px solid rgba(23,132,242,0.2)", borderRadius: "0.75rem", padding: "1.25rem" };

export default function BankingProjectPage() {
  return (
    <ProjectLayout
      title="Eagled Banking System"
      tagline="A full-stack banking management system built with ASP.NET Core MVC — account management, fund transfers, transaction history, RBAC, and a secure admin dashboard."
      role="Full-Stack Developer (Solo)"
      timeline="Semester 1, 2024"
      status="Completed — University Project"
      tech={[{ name: "ASP.NET Core" }, { name: "C#" }, { name: "MVC" }, { name: "Entity Framework" }, { name: "SQL Server" }, { name: "ASP.NET Identity" }, { name: "Bootstrap 5" }, { name: "Razor Pages" }]}
      emoji="🏦"
      image="/images/projects/banking2.jpg"
    >
      <section>
        <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-ubuntu)" }}>Overview</h2>
        <div className="space-y-3 leading-relaxed" style={{ color: "#858EAD" }}>
          <p>Eagled is a banking management system built from scratch using ASP.NET Core MVC — the enterprise framework used extensively across the .NET ecosystem. It simulates a real banking environment with customer-facing features and an admin backend.</p>
          <p>The project demonstrates enterprise-grade .NET development: clean MVC architecture, EF Core ORM, ASP.NET Identity auth, RBAC, and production security practices including anti-CSRF tokens and parameterised queries.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Features</h2>
        <ul className="space-y-2.5">
          {[
            "User registration and secure login with hashed passwords and session management",
            "Account management: savings and cheque accounts per user with unique account numbers",
            "Fund transfers with validation and atomic database transactions",
            "Full transaction history with filtering by date, type, and amount",
            "Admin dashboard for managing users, accounts, and system-wide reporting",
            "Role-based access control (RBAC) separating customer, staff, and admin",
            "Responsive Bootstrap 5 UI with professional banking design language",
            "Anti-CSRF protection and server-side validation on all forms",
          ].map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#858EAD" }}>
              <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#1784F2" }} />
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Architecture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "ASP.NET Core MVC",    desc: "Models define data/validation, Controllers handle logic, Views render server-side Razor pages." },
            { title: "Entity Framework Core",desc: "Code-first schema with migrations, relationships, and LINQ queries on SQL Server." },
            { title: "Identity & Auth",      desc: "ASP.NET Identity for password hashing, role-based claims, and cookie middleware." },
            { title: "Repository Pattern",   desc: "Abstracted data access for cleaner controller logic and easier unit testing." },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl p-4" style={cardStyle}>
              <p className="font-semibold text-white text-sm mb-1">{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-ubuntu)" }}>Database Schema</h2>
        <div className="rounded-xl overflow-hidden" style={{ background: "#050d1a", border: "1px solid rgba(69,76,122,0.5)" }}>
          <pre className="p-5 text-xs leading-relaxed font-mono overflow-x-auto" style={{ color: "#22c55e" }}>
{`Users        →  AspNetUsers (via ASP.NET Identity)
Accounts     →  Id, UserId, Type, Balance, AccountNumber, CreatedAt
Transactions →  Id, FromAccountId, ToAccountId, Amount, Type, Timestamp
AdminLogs    →  Id, AdminId, Action, TargetUserId, Timestamp`}
          </pre>
        </div>
        <p className="text-sm leading-relaxed mt-3" style={{ color: "#858EAD" }}>
          All transfers are wrapped in database transactions — if a debit succeeds but the credit fails, the entire operation rolls back.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Security Measures</h2>
        <ul className="space-y-2.5">
          {[
            "Passwords hashed with ASP.NET Identity (PBKDF2)",
            "Anti-CSRF tokens on all state-mutating forms via ValidateAntiForgeryToken",
            "Input validation with Data Annotations on all Model classes",
            "SQL injection prevented via parameterised EF Core queries",
            "Role checks at Controller and Action level via [Authorize(Roles=...)]",
          ].map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#858EAD" }}>
              <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#1784F2" }} />
              <span className="leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <div style={highlightStyle}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1784F2" }}>Why This Matters</p>
        <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>
          Eagled demonstrates I can build enterprise-grade .NET applications end-to-end: auth, RBAC, transactional database operations, and security-conscious design. The type of system that underpins real financial and enterprise software — built solo.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href="/projects">← All Projects</Button>
        <Button href="/contact" variant="outline">Discuss This <ArrowRight size={14} /></Button>
      </div>
    </ProjectLayout>
  );
}
