import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Marina K.",
    text: "Sve je bilo točno prema dogovoru. Ugodna vožnja, čist automobil i profesionalan pristup. Svaka preporuka!",
  },
  {
    name: "Ivan M.",
    text: "Dogovorili smo prijevoz do zračne luke u ranim jutarnjim satima. Vozač je stigao na vrijeme i sve je prošlo bez stresa.",
  },
  {
    name: "Ana i Marko",
    text: "TAXI IGGY nam je pomogao s prijevozom gostiju nakon vjenčanja. Pouzdano, jednostavno i profesionalno.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32"
    >
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
            Iskustva putnika
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Vaše povjerenje nam je
            <span className="block text-yellow-400">najbolja preporuka.</span>
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Najviše nam znači kada se putnici ponovno jave i ponovno
            odaberu TAXI IGGY.
          </p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/50"
            >
              <Quote
                size={42}
                strokeWidth={1.4}
                className="text-yellow-400"
              />

              <div className="mt-7 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={19}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-7 text-lg leading-8 text-slate-300">
                “{review.text}”
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-bold text-white">{review.name}</p>
                <p className="mt-1 text-sm text-slate-500">
                  TAXI IGGY putnik
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}