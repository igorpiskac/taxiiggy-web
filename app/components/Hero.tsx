import { CalendarDays, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 bg-cover bg-[center_right]"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark overlay for text readability */}
<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.18) 52%, rgba(0,0,0,0) 70%)",
  }}
/>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-8">
        <div className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-[0.42em] text-yellow-400">
            Zagreb i okolica
          </span>

          <h1 className="mt-6 text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[5rem]">
            Pouzdan prijevoz
            <span className="mt-2 block text-yellow-400">
              za svaku priliku
            </span>
          </h1>

          <div className="mt-8 h-px w-24 bg-yellow-400" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200 md:text-xl">
            Udobno, sigurno i na vrijeme.
            <span className="block">
              Vaš put je naša odgovornost.
            </span>
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 rounded-lg bg-yellow-400 px-8 py-4 font-bold uppercase tracking-wide text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              <CalendarDays size={21} />
              Rezervirajte vožnju
            </a>

            <a
              href="tel:+385915930090"
              className="flex items-center justify-center gap-3 rounded-lg border border-yellow-400/60 bg-black/40 px-8 py-4 font-bold uppercase tracking-wide text-yellow-400 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-950"
            >
              <Phone size={21} />
              Nazovite odmah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}