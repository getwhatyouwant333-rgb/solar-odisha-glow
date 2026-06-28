import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-solar", label: "Why Solar" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--navy-deep)]/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-10 w-10 rounded-full amber-gradient grid place-items-center text-[var(--navy-deep)] font-display font-bold text-lg shadow-md">
            S
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-white tracking-wide text-sm md:text-base">
              SHREE ADI SHAKTI
            </div>
            <div className="text-[10px] md:text-xs text-[var(--amber-brand)] uppercase tracking-[0.15em]">
              Solar Pvt Ltd
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-white/85 hover:text-[var(--amber-brand)] text-sm font-medium tracking-wide transition-colors"
              activeProps={{ className: "text-[var(--amber-brand)]" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919583390808"
            className="flex items-center gap-2 text-white/90 hover:text-[var(--amber-brand)] text-sm font-medium"
          >
            <Phone size={16} /> +91 95833 90808
          </a>
          <Link
            to="/contact"
            className="amber-gradient text-[var(--navy-deep)] px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--navy-deep)] border-t border-white/10 animate-fade-in">
          <div className="container-x py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-white/85 hover:text-[var(--amber-brand)] py-2 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919583390808"
              className="mt-2 amber-gradient text-[var(--navy-deep)] px-5 py-3 rounded-full text-sm font-semibold text-center"
            >
              Call +91 95833 90808
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
