import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-solar.jpg";
import { Reveal } from "../components/site/Reveal";
import { SectionHeading } from "../components/site/SectionHeading";
import {
  Sun,
  Wrench,
  Zap,
  Handshake,
  Home as HomeIcon,
  Building2,
  Factory,
  Check,
  ArrowRight,
  PiggyBank,
  Landmark,
  TrendingUp,
  Leaf,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Adi Shakti Solar — Odisha's Trusted Solar Experts" },
      {
        name: "description",
        content:
          "MNRE approved solar installation across Odisha. Residential, commercial & industrial solar with subsidy assistance and 25-year warranty.",
      },
      { property: "og:title", content: "Shree Adi Shakti Solar Pvt Ltd" },
      {
        property: "og:description",
        content: "Save 90% on electricity bills with rooftop solar in Odisha.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const stats = [
  { v: "500+", l: "Installations Completed" },
  { v: "5 MW+", l: "Solar Capacity Installed" },
  { v: "25 Yrs", l: "Performance Warranty" },
  { v: "100%", l: "Subsidy Assistance" },
];

const usps = [
  { icon: HomeIcon, t: "Local Odisha Expertise", d: "We understand Odisha's climate, energy needs, and subsidy programs inside-out." },
  { icon: Wrench, t: "Turnkey Solutions", d: "From site survey to subsidy paperwork — we manage everything end-to-end." },
  { icon: Zap, t: "Premium Components", d: "MNRE-approved panels, inverters, and mounting structures for maximum efficiency." },
  { icon: Handshake, t: "Dedicated Support", d: "Our team stays with you after installation for monitoring and maintenance." },
];

const services = [
  {
    icon: HomeIcon,
    t: "Residential Rooftop Solar",
    d: "Perfect for homes looking to reduce monthly electricity bills and increase property value. Eligible for PM Surya Ghar subsidies.",
    b: ["Lower Electricity Bills", "Government Subsidy Benefits", "Low Maintenance", "25+ Years Power Generation"],
  },
  {
    icon: Building2,
    t: "Commercial Solar Systems",
    d: "Designed for offices, hotels, hospitals, schools, and commercial buildings that want to reduce operating costs.",
    b: ["Reduced Operating Costs", "Better Sustainability", "Faster ROI", "Long-Term Savings"],
  },
  {
    icon: Factory,
    t: "Industrial Solar Plants",
    d: "High-capacity solar plants for factories, mills, warehouses, and manufacturing units.",
    b: ["Major Energy Cost Reduction", "Hedge Against Tariff Hikes", "Improved Profitability", "Reliable Generation"],
  },
];

const steps = [
  { n: "01", t: "Free Site Assessment", d: "Our experts visit your location to evaluate solar potential, roof condition, and energy needs." },
  { n: "02", t: "Custom Design & Proposal", d: "Receive a tailored solar system design with detailed savings projections and ROI timeline." },
  { n: "03", t: "Professional Installation", d: "Our certified technicians install your solar system with precision and care." },
  { n: "04", t: "Subsidy & Commissioning", d: "We handle all government subsidy documentation and grid connection formalities." },
  { n: "05", t: "After-Sales Support", d: "Ongoing monitoring, maintenance, and dedicated support for the system's lifetime." },
];

const reasons = [
  { icon: PiggyBank, t: "Save More Every Month", d: "Generate your own electricity and reduce bills by 70–90%." },
  { icon: Landmark, t: "Government Subsidies Available", d: "Eligible customers receive significant subsidies under PM Surya Ghar and state solar schemes." },
  { icon: TrendingUp, t: "Protect Against Rising Costs", d: "Electricity tariffs in Odisha keep rising. Solar locks in lower costs for 25 years." },
  { icon: Leaf, t: "Environment Friendly", d: "Reduce your carbon footprint and contribute to a cleaner, greener Odisha." },
];

const benefits = [
  "Up To 90% Electricity Bill Savings",
  "25-Year Performance Warranty",
  "Increase Property Value",
  "Quick Return On Investment",
  "Zero Daily Maintenance",
  "Clean Renewable Energy",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center text-white overflow-hidden">
        <img
          src={heroImg}
          alt="Indian home with rooftop solar panels in Odisha"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-x relative z-10 pt-28 pb-20 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              <Sun size={14} className="text-[var(--amber-brand)]" />
              MNRE Approved · Odisha's Trusted Solar Experts
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] max-w-4xl mx-auto">
              Powering Odisha With{" "}
              <span className="text-[var(--amber-brand)]">Clean Solar Energy</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-xl text-white/85 max-w-2xl mx-auto">
              Reliable, affordable, and sustainable solar solutions for homes and businesses across Odisha.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full amber-gradient text-[var(--navy-deep)] px-5 py-2 text-sm font-semibold shadow-lg">
              <Sun size={16} /> Save up to 90% on your monthly electricity bill
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs md:text-sm text-white/75">
              {[
                "Government Subsidy Assistance",
                "25-Year Performance Warranty",
                "Expert Installation Team",
                "End-to-End Service",
                "500+ Installations",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check size={14} className="text-[var(--amber-brand)]" /> {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[var(--navy-deep)] px-7 py-3.5 text-sm font-semibold shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all"
              >
                Start Your Solar Journey <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <p className="mt-10 text-xs md:text-sm text-white/65">
              Serving: Bhubaneswar · Cuttack · Puri · Balasore · Bhadrak · Berhampur · Sambalpur & More
            </p>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70">
          <div className="h-10 w-6 rounded-full border-2 border-white/60 flex justify-center pt-1.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-[var(--amber-brand)] scroll-dot" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <section className="amber-gradient">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-10 md:py-14">
          {stats.map((s) => (
            <div key={s.l} className="text-center text-[var(--navy-deep)]">
              <div className="font-display text-3xl md:text-5xl font-bold">{s.v}</div>
              <div className="mt-1 text-xs md:text-sm font-medium uppercase tracking-wider opacity-85">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-x grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="About Us"
                title={<>Energy Independence For Every Odisha Home & Business</>}
              />
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="border-l-4 border-[var(--amber-brand)] pl-4 italic text-[var(--navy-deep)] text-lg">
                "To help Odisha households and businesses achieve energy independence while reducing electricity costs."
              </blockquote>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We provide complete solar energy solutions designed to deliver long-term savings and
                sustainable power generation. Whether you are a homeowner, factory owner, commercial
                building operator, school, hospital, or institution — our expert team ensures a smooth
                solar transition from consultation to installation and maintenance.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-[var(--amber-brand-deep)] font-semibold hover:gap-3 transition-all"
              >
                Learn more about us <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {usps.map((u, i) => (
              <Reveal key={u.t} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full border border-border">
                  <div className="h-11 w-11 rounded-xl amber-gradient grid place-items-center text-[var(--navy-deep)]">
                    <u.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-[var(--navy-deep)] font-semibold">
                    {u.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-[var(--navy-deep)]">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              center
              light
              eyebrow="Our Services"
              title="Our Solar Solutions"
              subtitle="From rooftops to industrial plants — comprehensive solar systems sized for every Odisha customer."
            />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 120}>
                <div className="group relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 h-full hover:bg-white/10 transition-all">
                  <div className="absolute inset-x-7 -top-px h-0.5 bg-[var(--amber-brand)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="h-12 w-12 rounded-xl amber-gradient grid place-items-center text-[var(--navy-deep)] mb-5">
                    <s.icon size={22} />
                  </div>
                  <h3 className="font-display text-xl text-white font-semibold">{s.t}</h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.d}</p>
                  <ul className="mt-5 space-y-2">
                    {s.b.map((bb) => (
                      <li key={bb} className="flex items-start gap-2 text-sm text-white/85">
                        <Check size={16} className="text-[var(--amber-brand)] shrink-0 mt-0.5" />
                        {bb}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-[var(--navy)] relative overflow-hidden">
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              center
              light
              eyebrow="Our Process"
              title="Our Simple 5-Step Process"
              subtitle="A clear, transparent path from first call to lifetime support."
            />
          </Reveal>

          <div className="relative grid md:grid-cols-5 gap-6">
            <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--amber-brand)]/60 to-transparent" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative text-center md:text-left">
                  <div className="mx-auto md:mx-0 h-14 w-14 rounded-full amber-gradient grid place-items-center text-[var(--navy-deep)] font-display font-bold text-lg shadow-lg relative z-10">
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-display text-lg text-white font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SOLAR */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why Go Solar"
              title="Why Go Solar Today?"
              subtitle="Solar isn't just better for the planet — it's better for your bottom line."
            />
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 border border-border flex gap-5 hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 shrink-0 rounded-xl amber-gradient grid place-items-center text-[var(--navy-deep)]">
                    <r.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-[var(--navy-deep)] font-semibold">
                      {r.t}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="bg-[var(--navy-deep)] py-10">
        <div className="container-x grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2 text-white/85">
              <Check size={16} className="text-[var(--amber-brand)] shrink-0" /> {b}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="amber-gradient py-20 md:py-24">
        <div className="container-x text-center text-[var(--navy-deep)]">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Let's Build A Brighter Future Together
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--navy-deep)]/85">
              Whether you need a rooftop system for your home or a large-scale solar plant for your
              business, Shree Adi Shakti Solar is ready to help.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[var(--navy-deep)] text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all"
            >
              <Sun size={16} /> Book Free Solar Consultation
            </Link>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em]">
              Switch To Solar · Save More · Live Smarter
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
