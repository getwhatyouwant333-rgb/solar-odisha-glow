import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { Home, Building2, Factory, Check } from "lucide-react";
import { PageHero, CTASection } from "./about";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shree Adi Shakti Solar" },
      {
        name: "description",
        content:
          "Residential rooftop, commercial, and industrial solar solutions across Odisha. MNRE-approved, 25-year warranty.",
      },
      { property: "og:title", content: "Solar Services in Odisha" },
      { property: "og:description", content: "Rooftop, commercial, and industrial solar." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    t: "Residential Rooftop Solar",
    d: "Perfect for homes looking to reduce monthly electricity bills and increase property value. Eligible for PM Surya Ghar government subsidies.",
    b: ["Lower Electricity Bills", "Government Subsidy Benefits", "Low Maintenance", "25+ Years Power Generation"],
  },
  {
    icon: Building2,
    t: "Commercial Solar Systems",
    d: "Designed for offices, hotels, hospitals, schools, and commercial buildings that want to reduce operating costs and improve sustainability.",
    b: ["Reduced Operating Costs", "Better Business Sustainability", "Faster ROI", "Long-Term Savings"],
  },
  {
    icon: Factory,
    t: "Industrial Solar Plants",
    d: "High-capacity solar plants for factories, mills, warehouses, and manufacturing units.",
    b: ["Major Energy Cost Reduction", "Protection Against Rising Tariffs", "Improved Profitability", "Reliable Power Generation"],
  },
];

const process = [
  { n: "01", t: "Free Site Assessment" },
  { n: "02", t: "Custom Design & Proposal" },
  { n: "03", t: "Professional Installation" },
  { n: "04", t: "Subsidy & Commissioning" },
  { n: "05", t: "After-Sales Support" },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Solar Solutions"
        subtitle="Comprehensive solar systems tailored for homes, businesses, and industries across Odisha."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 120}>
              <div className="group relative rounded-2xl bg-white border border-border p-7 h-full hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="absolute inset-x-7 -top-px h-1 rounded-b-full bg-[var(--amber-brand)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="h-12 w-12 rounded-xl amber-gradient grid place-items-center text-[var(--navy-deep)] mb-5">
                  <s.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)]">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <ul className="mt-5 space-y-2">
                  {s.b.map((bb) => (
                    <li key={bb} className="flex items-start gap-2 text-sm text-[var(--navy-deep)]">
                      <Check size={16} className="text-[var(--amber-brand-deep)] shrink-0 mt-0.5" />
                      {bb}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy-deep)] text-center">
              Our Simple 5-Step Process
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full amber-gradient grid place-items-center text-[var(--navy-deep)] font-display font-bold text-lg shadow-md">
                    {p.n}
                  </div>
                  <div className="mt-3 font-display font-semibold text-[var(--navy-deep)]">{p.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
