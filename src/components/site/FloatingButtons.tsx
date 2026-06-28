import { Phone } from "lucide-react";

export function FloatingButtons() {
  const waMsg = encodeURIComponent(
    "Hi Shree Adi Shakti Solar, I'd like to know more about solar installation."
  );
  const waUrl = `https://api.whatsapp.com/send?phone=919583390808&text=${waMsg}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.94-.515 2.94-2.106 0-.187-.014-.358-.058-.53-.144-.487-1.46-1.16-1.86-1.375zm-3.32 7.69c-4.85 0-8.79-3.94-8.79-8.79 0-4.85 3.94-8.79 8.79-8.79 4.85 0 8.79 3.94 8.79 8.79 0 4.85-3.94 8.79-8.79 8.79zm0-19.74c-6.043 0-10.95 4.907-10.95 10.95 0 2.064.58 4.06 1.658 5.78L4.444 27.94l5.6-1.464a10.94 10.94 0 0 0 5.745 1.633h.004c6.04 0 10.95-4.905 10.95-10.948 0-2.927-1.14-5.677-3.208-7.747a10.86 10.86 0 0 0-7.742-3.21z"/>
        </svg>
      </a>
      <a
        href="tel:+919583390808"
        className="h-14 w-14 rounded-full amber-gradient text-[var(--navy-deep)] grid place-items-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
