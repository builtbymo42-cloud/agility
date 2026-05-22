import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Cloud,
  ShieldCheck,
  Users,
  Zap,
  Lock,
  Database,
  Sparkles,
  Phone,
  Mail,
  Globe,
  User,
} from "lucide-react";
import { useMouseVars } from "@/hooks/use-mouse-vars";
import { useActiveSection } from "@/hooks/use-active-section";
import { TiltCard } from "@/components/tilt-card";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import rabbit from "@/assets/rabbit-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV_LINKS: { label: string; id: string }[] = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const SECTION_IDS = ["top", "services", "experience", "about", "contact"];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

function handleAnchor(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href") ?? "";
  if (!href.startsWith("#")) return;
  e.preventDefault();
  smoothScrollTo(href.slice(1));
}

function Brandmark({ size = "md" }: { size?: "sm" | "md" }) {
  const cls = size === "sm" ? "w-9 h-9" : "w-14 h-14";
  const img = size === "sm" ? "w-[70%] h-[70%]" : "w-[80%] h-[80%]";
  return (
    <div className={`${cls} rounded-sm bg-ink flex items-center justify-center`}>
      <img src={rabbit} alt="" className={`${img} invert brightness-200`} />
    </div>
  );
}

function Navbar() {
  const active = useActiveSection(SECTION_IDS);
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
    history.replaceState(null, "", `#${id}`);
  };
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/75 backdrop-blur-xl border-b border-ink-soft">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" onClick={(e) => onClick(e, "top")} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm bg-ink flex items-center justify-center transition-transform duration-500 group-hover:rotate-[8deg]">
            <img src={rabbit} alt="Agility" className="w-[80%] h-[80%] invert brightness-200" />
          </div>
          <span className="text-xl font-bold tracking-tighter font-display text-ink">Agility.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => onClick(e, l.id)}
              data-active={active === l.id}
              className="nav-link text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={(e) => onClick(e, "contact")}
          className="btn-primary-ink rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em]"
        >
          Book Consultation
        </a>
      </div>
      <div className="shimmer-divider absolute bottom-0 inset-x-0 h-px" />
    </header>

  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50 parallax-grid pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 bg-ink-soft border border-ink-accent/15 rounded-sm px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-ink-accent" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink-accent">
              Premium SAP Technical Leadership
            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.92] tracking-tight font-display text-ink">
            Unlock the Full Power of Your <span className="text-ink-accent">SAP</span> Investment
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink-deep/75 max-w-xl leading-relaxed">
            Strategic technical leadership for the modern enterprise. We architect, govern, and
            de-risk S/4HANA, RISE, and cloud landscapes — engineered for measurable outcomes and
            zero business disruption.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={handleAnchor}
              className="btn-primary-ink group rounded-sm px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] inline-flex items-center gap-3"
            >
              Schedule Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              onClick={handleAnchor}
              className="rounded-sm px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] inline-flex items-center gap-3 border border-ink/20 text-ink hover:bg-ink-soft transition-colors"
            >
              View Our Services
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-ink-soft pt-8">
            {[
              { v: "15+", l: "Years SAP" },
              { v: "3", l: "Global Tier-1" },
              { v: "0", l: "Disruption" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-bold font-display text-ink tracking-tight">{s.v}</div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ink-deep/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Cloud,
    title: "Landscape Transformation & Cloud Migration",
    body: "End-to-end S/4HANA, RISE with SAP, and hyperscaler migrations — architected for resilience, performance, and long-term operational efficiency.",
    tags: ["S/4HANA", "RISE", "AWS / Azure"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Governance & Lifecycle Management",
    body: "Solution Manager, ChaRM, release governance and operational excellence frameworks for regulated, high-volume SAP environments.",
    tags: ["SolMan", "ChaRM", "Ops"],
  },
  {
    icon: Users,
    title: "Strategic Advisory & Workforce Enablement",
    body: "Fractional SAP leadership, capability uplift, and architectural mentoring that compounds technical maturity across your teams.",
    tags: ["Advisory", "Enablement", "Leadership"],
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-ink text-white py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-[0.07] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-px bg-white/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Integrated Practices</span>
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.02] max-w-2xl">
                Engineered for enterprise-scale SAP outcomes.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                Three interlocking practices that give your SAP estate the architectural rigor and
                executive certainty it deserves.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-sm overflow-hidden">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 120}>
                <TiltCard
                  intensity={3}
                  className={`h-full p-10 lg:p-12 ${i > 0 ? "md:border-l md:border-white/10" : ""} ${
                    i > 0 ? "border-t md:border-t-0 border-white/10" : ""
                  } hover:bg-white/[0.03] transition-colors`}
                >
                  <div className="w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-ink-accent">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="mt-8 text-xl lg:text-2xl font-bold font-display leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-white/55 text-sm leading-relaxed">{s.body}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-white/15 rounded-sm px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

const CLIENTS = [
  { name: "BMW Group", sector: "Automotive · Manufacturing" },
  { name: "Standard Bank", sector: "Financial Services" },
  { name: "T-Systems", sector: "Global ICT · Cloud" },
];

function Experience() {
  return (
    <section id="experience" className="bg-white border-b border-ink-soft py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-ink/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-accent">Institutional Trust</span>
            <span className="w-6 h-px bg-ink/30" />
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-ink">
            Trusted by global enterprise leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-ink-soft rounded-sm overflow-hidden">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <div
                className={`h-full p-10 lg:p-12 lift-card ${i > 0 ? "md:border-l md:border-ink-soft" : ""} ${
                  i > 0 ? "border-t md:border-t-0 border-ink-soft" : ""
                } hover:bg-white`}
              >
                <div className="text-3xl lg:text-4xl font-bold font-display tracking-tight text-ink">{c.name}</div>
                <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-deep/60">
                  {c.sector}
                </div>
                <div className="mt-8 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.5)] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700">Delivered</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

const REASONS = [
  { icon: Zap, title: "Performance-led", body: "Engineered for measurable enterprise outcomes." },
  { icon: Lock, title: "Zero-Disruption", body: "Migrations that protect business continuity." },
  { icon: Database, title: "Deep SAP Stack", body: "Across ECC, S/4HANA, BTP and integration." },
  { icon: Sparkles, title: "AI-Ready", body: "Foundations for data, AI and automation." },
];

function WhyUs() {
  return (
    <section id="about" className="bg-ink-soft py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-ink/30" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-accent">Why Partner With Us</span>
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-ink leading-[1.02]">
              An engineering practice built on certainty, not promises.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 100}>
                <div className="group h-full bg-ink-soft p-8 lg:p-10 transition-all duration-500 hover:bg-white hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-sm bg-white border border-ink-soft flex items-center justify-center transition-all duration-500 group-hover:border-ink-accent group-hover:rotate-[6deg]">
                    <Icon className="w-4 h-4 text-ink-accent transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold font-display text-ink">{r.title}</h3>
                  <p className="mt-3 text-sm text-ink-deep/65 leading-relaxed">{r.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-sm overflow-hidden shadow-[0_30px_80px_-30px_rgba(15,27,61,0.45)]">
          {/* Left dark */}
          <div className="bg-ink text-white p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay opacity-[0.07] pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-px bg-white/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Contact</span>
              </div>
              <h2 className="mt-6 text-4xl lg:text-5xl font-bold font-display tracking-tight leading-[1.05]">
                Let's design your next SAP chapter.
              </h2>
              <p className="mt-6 text-white/65 leading-relaxed max-w-md">
                Whether you're planning a migration, restructuring governance, or scaling an SAP
                practice — we'd value the conversation.
              </p>

              <div className="mt-12 space-y-5">
                {[
                  { code: "PH", icon: Phone, label: "+27 82 760 5387", href: "tel:+27827605387" },
                  { code: "EM", icon: Mail, label: "hassim@agilitymc.co.za", href: "mailto:hassim@agilitymc.co.za" },
                  { code: "WEB", icon: Globe, label: "agilitymc.co.za", href: "https://agilitymc.co.za" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.code}
                      href={c.href}
                      className="flex items-center gap-5 group"
                    >
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/40 w-10">{c.code}</span>
                      <Icon className="w-4 h-4 text-ink-accent" />
                      <span className="text-white group-hover:text-ink-accent transition-colors">{c.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right white */}
          <div className="bg-white p-10 lg:p-16 relative overflow-hidden flex flex-col justify-center">
            <img
              src={rabbit}
              alt=""
              className="absolute -bottom-10 -right-10 w-80 h-80 opacity-[0.04] pointer-events-none"
            />
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-ink-soft flex items-center justify-center">
                <User className="w-10 h-10 text-ink-accent" strokeWidth={1.5} />
              </div>
              <div className="mt-8 text-3xl font-bold font-display text-ink tracking-tight">Muhammad Hassim</div>
              <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-accent">
                SAP Technical Lead
              </div>
              <p className="mt-6 text-ink-deep/70 max-w-sm leading-relaxed">
                Direct line to senior architectural counsel — no intake forms, no gatekeepers.
              </p>
              <a
                href="mailto:hassim@agilitymc.co.za"
                className="btn-primary-ink mt-10 inline-flex items-center gap-3 rounded-sm px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em]"
              >
                Message Directly
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-soft bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Brandmark size="sm" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45">
            © 2026 Agility Management Consulting
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45">
          <span>Premium SAP Technical Leadership</span>
          <span>South Africa</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useMouseVars();
  return (
    <div className="relative bg-page text-ink min-h-screen">
      <div className="cursor-glow" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
