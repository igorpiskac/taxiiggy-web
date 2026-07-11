import { ArrowRight, Check, HeartHandshake } from "lucide-react";

const values = [
  "Pouzdan dogovor i dolazak na vrijeme",
  "Čisto, uredno i ugodno vozilo",
  "Profesionalan, ali ljudski pristup",
  "Vožnja prilagođena vašim potrebama",
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-slate-900 py-24 text-white lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-yellow-400/30">
            <img
              src="/images/contact-bg.png"
              alt="TAXI IGGY premium prijevoz"
              className="min-h-[560px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/40 bg-slate-950/80 px-5 py-3 backdrop-blur">
                <HeartHandshake
                  size={22}
                  className="text-yellow-400"
                />

                <span className="font-semibold">
                  Više od prijevoza
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
            Zašto postoji TAXI IGGY?
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Jer dobra vožnja počinje
            <span className="block text-yellow-400">
              povjerenjem.
            </span>
          </h2>

          <div className="mt-7 h-px w-16 bg-yellow-400" />

          <p className="mt-8 text-lg leading-8 text-slate-300">
            TAXI IGGY nastao je iz jednostavne ideje: ponuditi
            prijevoz kakav bismo i sami željeli koristiti.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Bez nepotrebnih komplikacija. Bez neizvjesnosti.
            Dogovorimo vožnju, dolazimo prema dogovoru i brinemo da
            do svog odredišta stignete sigurno i ugodno.
          </p>

          <div className="mt-9 space-y-4">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-slate-950">
                  <Check size={17} strokeWidth={3} />
                </div>

                <span className="text-slate-200">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 rounded-xl border border-yellow-400 px-7 py-4 font-bold text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-slate-950"
          >
            Upoznajte TAXI IGGY
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}