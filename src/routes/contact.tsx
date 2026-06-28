import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "../components/site/Reveal";
import { Phone, Mail, MapPin, Sun, Loader2, CheckCircle2 } from "lucide-react";
import { PageHero } from "./about";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shree Adi Shakti Solar Pvt Ltd" },
      {
        name: "description",
        content:
          "Get in touch with Shree Adi Shakti Solar. Call +91 95833 90808 or email info.sassolar@gmail.com for a free solar consultation in Odisha.",
      },
      { property: "og:title", content: "Contact Shree Adi Shakti Solar" },
      { property: "og:description", content: "Book a free solar consultation today." },
    ],
  }),
  component: ContactPage,
});

const cards = [
  { icon: Phone, label: "Call Us", value: "+91 95833 90808", href: "tel:+919583390808" },
  { icon: Mail, label: "Email Us", value: "info.sassolar@gmail.com", href: "mailto:info.sassolar@gmail.com" },
  {
    icon: MapPin,
    label: "Visit Us",
    value:
      "472/1561, Lane 4, Basudev Nagar, Basuaghai, Tankapani Road, Near Sai Temple, Bhubaneswar, Khordha, Odisha 751018",
  },
];

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbysv3_GNh-61eDXoI8bxaXot-8NlHHd6VhwGPP8JrmyTXFsqMHX3JBnVfoWIhezjXhXwA/exec";

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build A Brighter Future Together"
        subtitle="Whether you need a rooftop system for your home or a large-scale solar plant for your business, Shree Adi Shakti Solar is ready to help."
      />

      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-5">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <a
                  href={c.href ?? "#"}
                  className="block h-full bg-white rounded-2xl p-7 border border-border hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <div className="h-12 w-12 rounded-xl amber-gradient grid place-items-center text-[var(--navy-deep)]">
                    <c.icon size={22} />
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-2 font-display text-lg text-[var(--navy-deep)] font-semibold leading-snug break-words">
                    {c.value}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={350}>
            <form
              className="mt-12 max-w-2xl mx-auto bg-secondary rounded-2xl p-8 border border-border"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                const payload = {
                  name: String(fd.get("name") ?? ""),
                  phone: String(fd.get("phone") ?? ""),
                  email: String(fd.get("email") ?? ""),
                  message: String(fd.get("message") ?? ""),
                };
                setSubmitting(true);
                try {
                  await fetch(ENDPOINT, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });
                  toast.success("Thank you! Your request has been submitted successfully.");
                  form.reset();
                } catch (err) {
                  toast.error("Network error. Please try again or call us directly.");
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <h3 className="font-display text-2xl text-[var(--navy-deep)] font-semibold">
                Request a Free Quote
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Tell us a bit about your needs and we'll get back within 24 hours.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Full Name" className="rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber-brand)]" />
                <input name="phone" required type="tel" placeholder="Phone Number" className="rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber-brand)]" />
                <input name="email" type="email" placeholder="Email (optional)" className="sm:col-span-2 rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber-brand)]" />
                <textarea name="message" rows={4} placeholder="Tell us about your roof / business / location" className="sm:col-span-2 rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber-brand)]" />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 amber-gradient text-[var(--navy-deep)] px-6 py-3.5 rounded-full text-sm font-semibold shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Sun size={16} /> Book Free Solar Consultation
                  </>
                )}
              </button>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                GST No: 21ABSCS6348D1Z7 · Switch To Solar. Save More. Live Smarter.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
