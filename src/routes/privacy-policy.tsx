import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./about";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Shree Adi Shakti Solar" },
      { name: "description", content: "How Shree Adi Shakti Solar Pvt Ltd collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — Shree Adi Shakti Solar" },
      { property: "og:description", content: "Our commitment to data privacy and security." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your trust matters. Here's exactly how we handle the information you share with us."
      />

      <section className="py-16 md:py-20">
        <article className="container-x max-w-3xl prose prose-slate prose-headings:font-display prose-headings:text-[var(--navy-deep)] prose-a:text-[var(--amber-brand-deep)]">
          <p className="text-muted-foreground">
            Shree Adi Shakti Solar Pvt Ltd ("we", "us", "our") respects your privacy and is committed
            to protecting any personal information you share with us through our website, phone
            enquiries, or in-person consultations.
          </p>

          <H2>1. Information We Collect</H2>
          <p>We may collect the following information when you interact with us:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Name, phone number, email address, and postal address</li>
            <li>Property details (roof size, electricity bill, location)</li>
            <li>Government identification required for subsidy applications</li>
            <li>Bank details for subsidy disbursement (where applicable)</li>
            <li>Site photographs and technical assessment data</li>
          </ul>

          <H2>2. How We Use Your Information</H2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>To prepare quotations and customised solar designs</li>
            <li>To process government subsidy applications</li>
            <li>To execute installation, commissioning, and after-sales support</li>
            <li>To communicate updates, maintenance reminders, and offers</li>
          </ul>

          <H2>3. Sharing With Government Bodies</H2>
          <p className="text-muted-foreground">
            For subsidy processing and grid connectivity, we share required information with
            authorised bodies including MNRE, TPCODL, SOUTHCO, NESCO, and WESCO. We share only what
            is necessary for these statutory processes.
          </p>

          <H2>4. Data Security</H2>
          <p className="text-muted-foreground">
            We use reasonable administrative, technical, and physical safeguards to protect your
            data against unauthorised access, alteration, disclosure, or destruction.
          </p>

          <H2>5. Cookies</H2>
          <p className="text-muted-foreground">
            Our website may use cookies to improve your browsing experience and analyse site usage.
            You can disable cookies in your browser settings.
          </p>

          <H2>6. Your Rights</H2>
          <p className="text-muted-foreground">
            You may request access to, correction of, or deletion of your personal information at
            any time, subject to legal and warranty record requirements.
          </p>

          <H2>7. Data Retention</H2>
          <p className="text-muted-foreground">
            We retain customer records for up to 25 years to honour our performance warranties and
            comply with applicable regulations.
          </p>

          <H2>8. Contact Us</H2>
          <p className="text-muted-foreground">
            For privacy-related queries, contact us at{" "}
            <a href="mailto:info.sassolar@gmail.com">info.sassolar@gmail.com</a> or call{" "}
            <a href="tel:+919583390808">+91 95833 90808</a>.
          </p>

          <p className="text-xs text-muted-foreground mt-10">
            Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </p>
        </article>
      </section>
    </>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl text-[var(--navy-deep)] font-semibold mt-10 mb-3">
      {children}
    </h2>
  );
}
