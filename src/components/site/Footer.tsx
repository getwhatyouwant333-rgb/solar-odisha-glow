import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/80 pt-16 pb-8">
      <div className="container-x grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full amber-gradient grid place-items-center text-[var(--navy-deep)] font-display font-bold text-xl">
              S
            </div>
            <div>
              <div className="font-display font-semibold text-white text-lg">SHREE ADI SHAKTI</div>
              <div className="text-xs text-[var(--amber-brand)] uppercase tracking-[0.15em]">Solar Pvt Ltd</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/65">
            Powering Odisha with clean, affordable, and reliable solar energy solutions for homes,
            businesses, and industries.
          </p>
          <p className="text-xs text-white/50 mt-4">GST No: 21ABSCS6348D1Z7</p>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/why-solar", label: "Why Solar" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy-policy", label: "Privacy Policy" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-[var(--amber-brand)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone size={16} className="text-[var(--amber-brand)] shrink-0 mt-0.5" />
              <a href="tel:+919583390808" className="hover:text-[var(--amber-brand)]">
                +91 95833 90808
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-[var(--amber-brand)] shrink-0 mt-0.5" />
              <a href="mailto:info.sassolar@gmail.com" className="hover:text-[var(--amber-brand)] break-all">
                info.sassolar@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="text-[var(--amber-brand)] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                472/1561, Lane 4, Basudev Nagar, Basuaghai, Tankapani Road, Near Sai Temple,
                Bhubaneswar, Khordha, Odisha 751018
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Shree Adi Shakti Solar Pvt Ltd. All rights reserved.</p>
        <p>Switch To Solar. Save More. Live Smarter.</p>
      </div>
    </footer>
  );
}
