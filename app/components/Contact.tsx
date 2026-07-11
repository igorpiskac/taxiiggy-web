import {
  CalendarDays,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/images/contact-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/70" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
            Kontakt i rezervacije
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Spremni za
            <span className="block text-yellow-400">sljedeću vožnju?</span>
          </h2>

          <div className="mt-7 h-px w-16 bg-yellow-400" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Javite nam kamo i kada putujete. Dogovorit ćemo detalje i
            potvrditi vašu vožnju.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="tel:+385915930090"
              className="group flex items-center gap-5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/50 text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-slate-950">
                <Phone size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Telefon</p>
                <p className="mt-1 text-lg font-bold">
                  +385 91 593 00 90
                </p>
              </div>
            </a>

            <a
              href="mailto:info@taxiiggy.hr"
              className="group flex items-center gap-5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/50 text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-slate-950">
                <Mail size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">E-mail</p>
                <p className="mt-1 text-lg font-bold">
                  info@taxiiggy.hr
                </p>
              </div>
            </a>

            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/50 text-yellow-400">
                <MapPin size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Područje vožnje</p>
                <p className="mt-1 text-lg font-bold">
                  Zagreb i okolica
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-yellow-400/30 bg-slate-950/80 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
            <CalendarDays size={30} />
          </div>

          <h3 className="mt-7 text-3xl font-bold">
            Rezervirajte vožnju
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            Najbrže ćemo dogovoriti vožnju telefonom ili porukom.
          </p>

          <a
            href="tel:+385915930090"
            className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
          >
            <Phone size={21} />
            Nazovi TAXI IGGY
          </a>

          <a
            href="https://wa.me/385915930090"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-3 rounded-xl border border-yellow-400/50 px-6 py-4 font-bold text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-slate-950"
          >
            <MessageCircle size={21} />
            Pošalji WhatsApp poruku
          </a>

          <p className="mt-6 text-center text-sm leading-6 text-slate-500">
            Za unaprijed dogovorene vožnje preporučujemo pravovremenu
            rezervaciju.
          </p>
        </div>
      </div>
    </section>
  );
}