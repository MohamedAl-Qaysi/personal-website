"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { Send, MapPin, Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xaqgddqo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "rgba(6,28,115,0.3)",
    border: "1px solid rgba(69,76,122,0.5)",
    borderRadius: "0.75rem",
    color: "#ffffff",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    transition: "border-color 0.2s",
  };

  return (
    <div className="min-h-screen" style={{ background: "#07134A" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #07134A 0%, #05165F 50%, #0A0E31 100%)", borderBottom: "1px solid rgba(69,76,122,0.3)" }}>
        <Container className="py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1784F2" }}>Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-ubuntu)" }}>
            Let&apos;s Work
            <br />
            <span className="gradient-text">Together.</span>
          </h1>
          <p className="text-lg max-w-lg leading-relaxed" style={{ color: "#858EAD" }}>
            Whether you&apos;re hiring, have a project in mind, or just want to chat about AI and software — I&apos;m happy to hear from you.
          </p>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <SectionHeader title="Contact Info" />
              <div className="space-y-4 mt-6">
                {[
                  { icon: Mail,    label: "Email",    value: "mohamed.alqaysi3@gmail.com", href: "mailto:mohamed.alqaysi3@gmail.com" },
                  { icon: MapPin,  label: "Location", value: "Perth, Western Australia",   href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(23,132,242,0.1)", border: "1px solid rgba(23,132,242,0.2)", color: "#1784F2" }}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#454C7A" }}>{label}</p>
                      {href ? (
                        <a href={href} className="text-sm transition-colors hover:text-[#1784F2]" style={{ color: "#858EAD" }}>{value}</a>
                      ) : (
                        <p className="text-sm" style={{ color: "#858EAD" }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#454C7A" }}>Online</p>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/MohamedAl-Qaysi",                 label: "GitHub",   icon: GithubIcon },
                  { href: "https://www.linkedin.com/in/mohamed-al-qaysi-b42a162b6",      label: "LinkedIn", icon: LinkedinIcon },
                  { href: "mailto:mohamed.alqaysi3@gmail.com",           label: "Email",    icon: Mail },
                ].map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 rounded-xl transition-all hover:scale-105"
                    style={{ background: "rgba(6,28,115,0.4)", border: "1px solid rgba(69,76,122,0.4)", color: "#858EAD" }}>
                    <Icon width={17} height={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* What I'm open to */}
            <div className="rounded-xl p-5" style={{ background: "rgba(23,132,242,0.06)", border: "1px solid rgba(23,132,242,0.2)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1784F2" }}>Currently Open To</p>
              <ul className="space-y-2 text-sm" style={{ color: "#858EAD" }}>
                {[
                  "Graduate software engineering roles",
                  "Internships (paid)",
                  "Freelance web development",
                  "Contract projects",
                  "Collaborations on interesting tech",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ArrowRight size={12} style={{ color: "#1784F2" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-6 sm:p-8" style={{ background: "rgba(6,28,115,0.25)", border: "1px solid rgba(69,76,122,0.35)" }}>
              {status === "sent" ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-ubuntu)" }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: "#858EAD" }}>Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#858EAD" }}>Your Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#858EAD" }}>Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#858EAD" }}>Enquiry Type *</label>
                    <select name="subject" required value={form.subject} onChange={handleChange} style={{ ...inputStyle, appearance: "none" as React.CSSProperties["appearance"] }}>
                      <option value="" disabled>Select type…</option>
                      <option value="Graduate Role">Graduate Role / Internship</option>
                      <option value="Freelance Project">Freelance Project</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#858EAD" }}>Message *</label>
                    <textarea name="message" required rows={6} value={form.message} onChange={handleChange}
                      placeholder="Tell me about the role or project…"
                      style={{ ...inputStyle, resize: "vertical" as React.CSSProperties["resize"], minHeight: "140px" }} />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">Something went wrong. Please email me directly at mohamed.alqaysi3@gmail.com</p>
                  )}

                  <Button type="submit" size="lg" fullWidth disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : <><Send size={16} /> Send Message</>}
                  </Button>

                  <p className="text-xs text-center" style={{ color: "#454C7A" }}>
                    I respond within 24–48 hours. Or email directly:{" "}
                    <a href="mailto:mohamed.alqaysi3@gmail.com" className="hover:text-[#1784F2]" style={{ color: "#858EAD" }}>
                      mohamed.alqaysi3@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
