export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Tamni overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Sadržaj */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Vaše odredište.
          <br />
          Naša odgovornost.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 md:text-xl">
          Premium prijevoz za poslovne korisnike, zračnu luku,
          posebne događaje i sve prilike kada želite sigurnu,
          točnu i ugodnu vožnju.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105 hover:bg-yellow-300">
            Rezerviraj vožnju
          </button>

          <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20">
            Saznaj više
          </button>

        </div>

      </div>
    </section>
  );
}