import { Shield, Plane, CreditCard, Car } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Pouzdanost",
    text: "Uvijek dolazimo na vrijeme i poštujemo svaki dogovor.",
  },
  {
    icon: Plane,
    title: "Transferi",
    text: "Prijevoz do zračne luke, hotela i poslovnih sastanaka.",
  },
  {
    icon: CreditCard,
    title: "Jednostavno plaćanje",
    text: "Plaćanje gotovinom ili karticom, bez komplikacija.",
  },
  {
    icon: Car,
    title: "Premium usluga",
    text: "Čisto vozilo, ugodna vožnja i profesionalan pristup.",
  },
];

export default function WhyUs() {
  return (
    <section
  id="why-us"
  className="bg-slate-950 pb-20 pt-10 lg:pb-24 lg:pt-12"
>
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            ZAŠTO ODABRATI TAXI IGGY
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Sigurna vožnja bez kompromisa
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
  Svaka vožnja temelji se na točnosti, profesionalnosti i
  pouzdanoj usluzi. Naš cilj nije samo prijevoz, nego ugodno
  iskustvo od polaska do dolaska.
</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="mb-8 inline-flex rounded-2xl bg-yellow-400/10 p-4 transition group-hover:bg-yellow-400">
                  <Icon
                    size={34}
                    className="text-yellow-400 group-hover:text-slate-900"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
