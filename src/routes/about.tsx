import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { SectionHeading } from "../components/site/SectionHeading";
import { Home, Wrench, Zap, Handshake, Target, Eye, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shree Adi Shakti Solar Pvt Ltd" },
      {
        name: "description",
        content:
          "Learn about Shree Adi Shakti Solar — Odisha's local solar experts delivering turnkey rooftop and industrial solar solutions.",
      },
      { property: "og:title", content: "About Shree Adi Shakti Solar" },
      { property: "og:description", content: "Energy independence for every Odisha home & business." },
    ],
  }),
  component: AboutPage,
});

const usps = [
  { icon: Home, t: "Local Odisha Expertise", d: "We understand Odisha's climate, energy needs, and subsidy programs inside-out." },
  { icon: Wrench, t: "Turnkey Solutions", d: "From site survey to subsidy paperwork — we manage everything end-to-end." },
  { icon: Zap, t: "Premium Components", d: "MNRE-approved panels, inverters, and mounting structures for maximum efficiency." },
  { icon: Handshake, t: "Dedicated Support", d: "Our team stays with you after installation for monitoring and maintenance." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Energy Independence For Every Odisha Home & Business"
        subtitle="A local team building Odisha's solar future — one rooftop at a time."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <blockquote className="border-l-4 border-[var(--amber-brand)] pl-5 italic text-xl md:text-2xl text-[var(--navy-deep)] font-display">
                "To help Odisha households and businesses achieve energy independence while reducing
                electricity costs."
              </blockquote>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We provide complete solar energy solutions designed to deliver long-term savings and
                sustainable power generation. Whether you are a homeowner, factory owner, commercial
                building operator, school, hospital, or institution — our expert team ensures a smooth
                solar transition from consultation to installation and maintenance.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With 500+ installations and 5 MW+ commissioned, we have helped families and businesses
                across Bhubaneswar, Cuttack, Puri, Balasore, and beyond switch to clean energy with
                confidence.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {usps.map((u, i) => (
              <Reveal key={u.t} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                  <div className="h-11 w-11 rounded-xl amber-gradient grid place-items-center text-[var(--navy-deep)]">
                    <u.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[var(--navy-deep)]">
                    {u.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy-deep)] py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <div className="h-12 w-12 rounded-xl amber-gradient grid place-items-center text-[var(--navy-deep)]">
                <Target size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl text-white font-semibold">Our Mission</h3>
              <p className="mt-3 text-white/75 leading-relaxed">
                Help every household and business in Odisha cut electricity costs and achieve energy
                independence through high-quality solar solutions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <div className="h-12 w-12 rounded-xl amber-gradient grid place-items-center text-[var(--navy-deep)]">
                <Eye size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl text-white font-semibold">Our Vision</h3>
              <p className="mt-3 text-white/75 leading-relaxed">
                To become Odisha's most trusted solar energy company by making renewable energy
                accessible, affordable, and profitable for every customer.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-[var(--navy-deep)] text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--amber-brand)]/20 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--amber-brand)]">
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={200}>
            <p className="mt-5 text-white/75 text-base md:text-lg max-w-2xl">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="amber-gradient py-16 md:py-20">
      <div className="container-x text-center text-[var(--navy-deep)]">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Ready to power your future with solar?
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-[var(--navy-deep)]/85">
          Get a free consultation and custom savings estimate from our Odisha-based experts.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 bg-[var(--navy-deep)] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Book Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
