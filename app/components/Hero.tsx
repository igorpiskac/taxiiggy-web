import { CalendarDays, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
            TAXI IGGY · ZAGREB
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-8xl">
            Pouzdan prijevoz
            <span className="block text-yellow-400">za svaku priliku.</span>
          </h1>

          <div className="mt-8 h-px w-20 bg-yellow-400" />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Pouzdan i profesionalan prijevoz u Zagrebu i okolici.
            Aerodromski transferi, poslovne vožnje, vjenčanja i prijevoz
            po dogovoru.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              <CalendarDays size={21} />
              Rezerviraj vožnju
            </a>

            <a
              href="tel:+385915930090"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-black/30 px-7 py-4 font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
            >
              <Phone size={21} />
              Nazovi odmah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}