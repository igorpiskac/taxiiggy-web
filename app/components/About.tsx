import { HeartHandshake } from "lucide-react";

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
              alt="TAXI IGGY prijevoz"
              className="min-h-[560px] w-full object-cover object-[center_75%] lg:object-center"
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
  TAXI IGGY nastao je iz jednostavne želje da ljudima ponudimo
  vožnju na koju se mogu osloniti.
</p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Bez neizvjesnosti hoće li vozač doći. Bez nepotrebnih
            komplikacija. Dogovorimo vožnju, dolazimo prema dogovoru
            i brinemo da do svog odredišta stignete sigurno i ugodno.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Bilo da putujete prema zračnoj luci, vraćate se sa svadbe
            ili jednostavno trebate pouzdan prijevoz — želimo da znate
            tko dolazi po vas.
          </p>
        </div>
      </div>
    </section>
  );
}