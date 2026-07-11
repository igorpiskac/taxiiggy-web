import {
  ArrowRight,
  BriefcaseBusiness,
  Heart,
  Plane,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Aerodromski transferi",
    subtitle: "Putovanje počinje bez stresa.",
    text: "Pratimo vaše vrijeme leta kada je potrebno, dolazimo prema dogovoru i pomažemo s prtljagom kako biste bezbrižno nastavili svoje putovanje.",
    image: "/images/airport.png",
  },
  {
    icon: Heart,
    title: "Vjenčanja i svečanosti",
    subtitle: "Uživajte u svom danu.",
    text: "Pouzdan prijevoz za mladence, obitelj i goste uz profesionalan pristup i točnost kada je najvažnije.",
    image: "/images/wedding.png",
  },
  {
    icon: BriefcaseBusiness,
    title: "Prijevoz po vašoj mjeri",
    subtitle: "Kada želite pouzdan prijevoz.",
    text: "Poslovni sastanci, privatne obveze, večernji izlasci ili svakodnevne vožnje – prilagođavamo se vašim potrebama.",
    image: "/images/business.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
            Naše usluge
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Kako vam možemo pomoći?
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Bez obzira na to kamo idete, naš cilj je da vaše putovanje
            bude udobno, sigurno i bez stresa.
          </p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative min-h-[570px] overflow-hidden rounded-3xl border border-yellow-400/30 bg-slate-900"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />

                <div className="relative z-10 flex min-h-[570px] flex-col justify-end p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400 bg-black/60 text-yellow-400 backdrop-blur">
                    <Icon size={30} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-3xl font-bold">
                    {service.title}
                  </h3>

                  <div className="mt-4 h-px w-12 bg-yellow-400" />

                  <p className="mt-5 text-lg font-medium text-yellow-400">
                    {service.subtitle}
                  </p>

                  <p className="mt-3 leading-7 text-slate-300">
                    {service.text}
                  </p>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex w-fit items-center gap-3 rounded-xl border border-yellow-400/60 px-6 py-3 font-semibold text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-slate-950"
                  >
                    Saznaj više
                    <ArrowRight
                      size={19}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-yellow-400/30 bg-slate-900">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/contact-bg.png')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/20" />

          <div className="relative z-10 max-w-3xl px-8 py-16 md:px-14 lg:py-20">
            <h3 className="text-4xl font-bold leading-tight md:text-5xl">
              Vi odlučite kamo.
            </h3>

            <p className="mt-4 text-3xl font-semibold leading-tight text-yellow-400 md:text-4xl">
              Mi ćemo se pobrinuti da tamo stignete sigurno i bez stresa.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
            >
              Rezerviraj vožnju
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}