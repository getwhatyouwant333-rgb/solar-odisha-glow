import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { PiggyBank, Landmark, TrendingUp, Leaf, Check } from "lucide-react";
import { PageHero, CTASection } from "./about";

export const Route = createFileRoute("/why-solar")({
  head: () => ({
    meta: [
      { title: "Why Go Solar — Shree Adi Shakti Solar" },
      {
        name: "description",
        content:
          "Save up to 90% on electricity bills, claim government subsidies, hedge against tariff hikes, and reduce your carbon footprint with solar.",
      },
      { property: "og:title", content: "Why Go Solar in Odisha" },
      { property: "og:description", content: "Savings, subsidies, and sustainability." },
    ],
  }),
  component: WhyPage,
});

const reasons = [
  { icon: PiggyBank, t: "Save More Every Month", d: "Generate your own electricity and reduce bills by 70–90%." },
  { icon: Landmark, t: "Government Subsidies Available", d: "Eligible customers receive significant subsidies under PM Surya Ghar and state solar schemes." },
  { icon: TrendingUp, t: "Protect Against Rising Power Costs", d: "Electricity tariffs in Odisha continue to rise. Solar locks in lower costs for 25 years." },
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

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Solar"
        title="Why Go Solar Today?"
        subtitle="Solar pays you back — month after month, year after year, for 25+ years."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 border border-border flex gap-5 hover:shadow-xl transition-shadow h-full">
                <div className="h-12 w-12 shrink-0 rounded-xl amber-gradient grid place-items-center text-[var(--navy-deep)]">
                  <r.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[var(--navy-deep)] font-semibold">{r.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--navy-deep)] py-14">
        <div className="container-x grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2 text-white/85">
              <Check size={16} className="text-[var(--amber-brand)] shrink-0" /> {b}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
