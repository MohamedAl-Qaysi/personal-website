import ProjectLayout from "@/components/ProjectLayout";
import Button from "@/components/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const cardStyle = { background: "rgba(6,28,115,0.4)", border: "1px solid rgba(69,76,122,0.35)" };
const highlightStyle = { background: "rgba(23,132,242,0.08)", border: "1px solid rgba(23,132,242,0.2)", borderRadius: "0.75rem", padding: "1.25rem" };

export default function StreamlyProjectPage() {
  return (
    <ProjectLayout
      title="Streamly — Android App"
      tagline="A polished Android content discovery app built with Kotlin and Jetpack Compose, demonstrating modern Android practices: MVVM, Compose, Room, Coroutines, and Retrofit."
      role="Solo Android Developer"
      timeline="Semester 1, 2024"
      status="Completed — University Project"
      tech={[{ name: "Kotlin" }, { name: "Jetpack Compose" }, { name: "Android SDK" }, { name: "MVVM" }, { name: "Room" }, { name: "Retrofit" }, { name: "Coroutines" }, { name: "Material 3" }]}
      emoji="📱"
      image="/images/projects/streamly2.jpg"
    >
      <section>
        <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-ubuntu)" }}>Overview</h2>
        <div className="space-y-3 leading-relaxed" style={{ color: "#858EAD" }}>
          <p>Streamly is an Android streaming content discovery app built entirely with modern Android tools. Users can browse movies and TV shows from a public REST API, manage a watchlist, and explore content by genre — all in a clean, Material 3-compliant interface.</p>
          <p>The project demonstrates production-ready Android patterns: full MVVM stack, Jetpack Compose UI, Room for local storage, Retrofit for networking, and Kotlin Coroutines for async operations.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Features</h2>
        <ul className="space-y-2.5">
          {[
            "Content browsing by genre, release date, and rating using a public REST API",
            "Personalised watchlist with local persistence using Room (SQLite)",
            "User profile with viewing history and preferences",
            "Detail screens for movies and TV shows with synopsis, cast, and trailers",
            "Search functionality with debounced API queries to reduce network load",
            "Smooth animations with Jetpack Compose Motion APIs",
            "Responsive layout supporting phone and tablet form factors",
            "Dark mode support following Material 3 system theming",
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
            { title: "MVVM Architecture",   desc: "Clean separation: ViewModel, StateFlow, and Repository patterns throughout." },
            { title: "Jetpack Compose UI",  desc: "Declarative UI with custom composables, lazy lists, and animated transitions." },
            { title: "Room Database",       desc: "Local SQLite persistence via Room for offline watchlist and history caching." },
            { title: "Retrofit & Coroutines",desc: "Async API calls with Kotlin Coroutines and Flow for reactive data streams." },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl p-4" style={cardStyle}>
              <p className="font-semibold text-white text-sm mb-1">{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-ubuntu)" }}>Challenges & Solutions</h2>
        <div className="space-y-3">
          {[
            { c: "UI state across config changes", s: "ViewModel-scoped StateFlow survives activity recreation; Compose collects state reactively." },
            { c: "Efficient large-list rendering",  s: "LazyColumn with key-based recomposition and Paging 3 for incremental loading." },
            { c: "Offline-first watchlist",         s: "Room as single source of truth; Repository layer syncs between local and remote." },
          ].map(({ c, s }) => (
            <div key={c} className="rounded-xl p-4" style={cardStyle}>
              <p className="text-sm font-semibold text-white mb-1">Challenge: <span className="font-normal" style={{ color: "#858EAD" }}>{c}</span></p>
              <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}><span className="font-semibold text-white">Solution:</span> {s}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={highlightStyle}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1784F2" }}>Why This Matters</p>
        <p className="text-sm leading-relaxed" style={{ color: "#858EAD" }}>
          Streamly shows I can build polished, production-architecture Android apps using the current recommended stack. It reflects understanding that goes beyond tutorials: clean architecture, async data flows, and platform-compliant UI.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href="/projects">← All Projects</Button>
        <Button href="/contact" variant="outline">Discuss This <ArrowRight size={14} /></Button>
      </div>
    </ProjectLayout>
  );
}
