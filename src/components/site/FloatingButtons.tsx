import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const waMsg = encodeURIComponent(
    "Hi Shree Adi Shakti Solar, I'd like to know more about solar installation."
  );
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/919583390808?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href="tel:+919583390808"
        className="h-14 w-14 rounded-full amber-gradient text-[var(--navy-deep)] grid place-items-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Call"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
