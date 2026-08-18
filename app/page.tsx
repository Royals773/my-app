import Image from "next/image";
import {
  ArrowUpRight,
  Compass,
  PenTool,
  Layers,
  RefreshCw,
  Palette,
  Code2,
  Waves,
  Quote,
} from "lucide-react";
import { Reveal } from "./components/reveal";
import { MobileNav } from "./components/mobile-nav";
import { MeridianMark } from "./components/meridian-mark";

const NAV_LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Studio" },
];

const DISCIPLINES = [
  "Product Strategy",
  "Brand Identity",
  "Interface Design",
  "Motion",
  "Engineering",
  "Content",
];

const FEATURED_CAPABILITY = {
  icon: Palette,
  title: "Product Design",
  body: "We define the experience before we define the pixels — research, information architecture, and interface design that holds up under real use.",
  points: ["User research", "Information architecture", "Interface systems"],
};

const CAPABILITIES = [
  {
    icon: Code2,
    title: "Engineering",
    body: "Production-grade front ends built in React and TypeScript, handed off clean or shipped by us.",
  },
  {
    icon: Layers,
    title: "Brand Systems",
    body: "Identity, type, and component libraries that stay consistent as you grow.",
  },
  {
    icon: Waves,
    title: "Motion & Interaction",
    body: "Purposeful animation that clarifies state and hierarchy — never decoration for its own sake.",
  },
];

const PROCESS = [
  {
    index: "01",
    icon: Compass,
    title: "Discover",
    body: "Stakeholder interviews, competitive audits, and a brief everyone agrees on before a single screen gets drawn.",
  },
  {
    index: "02",
    icon: PenTool,
    title: "Design",
    body: "Low-fidelity exploration moves fast; high-fidelity design locks down type, spacing, and interaction detail.",
  },
  {
    index: "03",
    icon: Layers,
    title: "Build",
    body: "Component-driven development runs in tandem with design, so nothing gets lost in translation.",
  },
  {
    index: "04",
    icon: RefreshCw,
    title: "Refine",
    body: "Usability passes, performance budgets, and a two-week polish sprint before anything ships.",
  },
];

const STATS = [
  { value: "120+", label: "Projects shipped" },
  { value: "98%", label: "Client retention" },
  { value: "14", label: "Industries served" },
];

export default function Home() {
  return (
    <div className="flex-1 bg-ink text-paper">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-display text-xl italic tracking-tight"
          >
            <MeridianMark className="h-6 w-6 text-gold" />
            Meridian
          </a>
          <nav className="hidden items-center gap-10 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-light transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full border border-line px-5 py-2 text-sm text-paper transition-colors duration-200 hover:border-gold hover:text-gold active:scale-[0.97] sm:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
          <MobileNav />
        </div>
      </header>

      <main id="hero">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-line/60 pt-40 pb-24 sm:pb-32">
          <div
            aria-hidden
            className="bg-noise pointer-events-none absolute inset-0 -z-20 animate-grain opacity-[0.04]"
          />

          <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-gold">
                Design &amp; Engineering Studio
              </p>
              <h1 className="text-balance font-display text-5xl italic leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                We shape ideas until they feel inevitable.
              </h1>
              <p className="mt-7 max-w-lg text-balance text-lg leading-relaxed text-stone-light">
                Meridian pairs product strategy with hands-on engineering —
                from the first sketch to the version people actually use.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:bg-gold-bright hover:shadow-[0_0_0_1px_var(--gold-bright)] active:scale-[0.97]"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-paper transition-colors duration-200 hover:border-gold hover:text-gold active:scale-[0.97]"
                >
                  See our process
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-stone">
                <span>Est. 2016</span>
                <span className="h-3 w-px bg-line" aria-hidden />
                <span>Remote-first, worldwide</span>
                <span className="h-3 w-px bg-line" aria-hidden />
                <span>12-person studio</span>
              </div>
            </div>

            <div className="relative isolate">
              <MeridianMark className="pointer-events-none absolute -top-56 -right-20 -z-10 hidden h-96 w-96 text-stone/70 xl:block" />
              <div className="flex flex-col gap-6 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl italic text-paper">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-stone-light">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disciplines marquee */}
        <div className="overflow-hidden border-b border-line/60 py-6">
          <div className="flex w-max animate-marquee items-center gap-12 [animation-play-state:running] hover:[animation-play-state:paused]">
            {[...DISCIPLINES, ...DISCIPLINES].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-12 font-display text-2xl italic text-stone/70"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-gold/60" aria-hidden />
              </span>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <section id="capabilities" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              Capabilities
            </p>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl italic leading-tight sm:text-5xl">
              Four disciplines, one team.
            </h2>
          </Reveal>

          <Reveal className="mt-14">
            <article className="group rounded-2xl border border-line bg-ink-raised p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-16">
              <div className="lg:max-w-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-gold/60">
                  <FEATURED_CAPABILITY.icon
                    className="h-5 w-5 text-gold"
                    strokeWidth={1.5}
                  />
                </span>
                <h3 className="mt-6 font-display text-2xl italic">
                  {FEATURED_CAPABILITY.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-stone-light">
                  {FEATURED_CAPABILITY.body}
                </p>
              </div>
              <ul className="mt-8 flex shrink-0 flex-col gap-3 border-t border-line pt-8 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                {FEATURED_CAPABILITY.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-stone-light"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 100}>
                <article className="group h-full rounded-2xl border border-line bg-ink-raised p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-gold/60">
                    <cap.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl italic">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone-light">
                    {cap.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="border-y border-line/60 bg-ink-raised/40 py-28 sm:py-36"
        >
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                Process
              </p>
              <h2 className="mt-4 max-w-xl text-balance font-display text-4xl italic leading-tight sm:text-5xl">
                How an idea becomes a product.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((step, i) => (
                <Reveal key={step.index} delay={i * 100}>
                  <div className="group border-t border-line pt-6 transition-colors duration-300 hover:border-gold/50">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm text-stone-light">
                        {step.index}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-gold/60">
                        <step.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl italic">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-stone-light">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Studio */}
        <section id="work">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden border-y border-line/60 sm:aspect-[16/10] lg:aspect-[21/9]">
              <Image
                src="/images/meridian-hero.png"
                alt="A gold wireframe globe sculpture mounted on a curved travertine column in Meridian's studio, lit by golden-hour light with a city skyline beyond"
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: "28% 42%" }}
                loading="lazy"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/10 to-transparent sm:from-ink/70"
              />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:bottom-10 sm:left-10 sm:right-auto sm:px-0 sm:pb-0">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                  Studio
                </p>
                <p className="mt-3 max-w-xs font-display text-2xl italic leading-snug text-paper sm:text-3xl">
                  Where ideas take shape.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Testimonial */}
        <section className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-line">
              <Quote className="h-4 w-4 text-gold" strokeWidth={1.5} />
            </span>
            <p className="mt-8 text-balance font-display text-3xl italic leading-snug sm:text-4xl">
              &ldquo;Meridian didn&rsquo;t just redesign our product &mdash;
              they rebuilt how our team thinks about craft.&rdquo;
            </p>
            <footer className="mt-8 text-sm text-stone-light">
              A. Whitfield &middot; Head of Product
            </footer>
          </Reveal>
        </section>

        {/* CTA */}
        <section id="contact" className="border-t border-line/60 bg-ink-raised">
          <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-24 sm:flex-row sm:items-center sm:justify-between sm:py-28">
            <div>
              <h2 className="max-w-md text-balance font-display text-4xl italic leading-tight sm:text-5xl">
                Have a brief worth building?
              </h2>
              <p className="mt-4 text-stone-light">
                We take on a small number of engagements each quarter.
              </p>
            </div>
            <a
              href="mailto:hello@meridian.studio"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:bg-gold-bright active:scale-[0.97]"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-sm text-stone sm:flex-row sm:justify-between">
          <span className="flex items-center gap-2 font-display text-lg italic text-paper">
            <MeridianMark className="h-5 w-5 text-stone" />
            Meridian
          </span>
          <nav className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <span>&copy; {new Date().getFullYear()} Meridian Studio</span>
        </div>
      </footer>
    </div>
  );
}
