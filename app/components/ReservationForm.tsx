"use client";

import { useState } from "react";
export default function ReservationForm() {
    const [rideType, setRideType] = useState("");
  return (
    <section
      id="reservation"
      className="bg-slate-950 py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
            Rezervacija vožnje
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Recite nam
            <span className="block text-yellow-400">
              kamo putujete.
            </span>
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Ispunite nekoliko osnovnih podataka,
            a ostatak ćemo dogovoriti zajedno.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-yellow-400/30 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="space-y-10">

            {/* BLOK 1 */}

            <div>
              <h3 className="text-xl font-bold text-white">
                👤 Kako vas možemo kontaktirati?
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Ime i prezime"
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-yellow-400"
                />

                <input
                  type="tel"
                  placeholder="Broj telefona"
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-yellow-400"
                />

                <input
                  type="email"
                  placeholder="E-mail (nije obavezno)"
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-yellow-400 md:col-span-2"
                />
              </div>
            </div>

            {/* BLOK 2 */}

            <div>
              <h3 className="text-xl font-bold text-white">
                📍 Kamo putujete?
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Polazište"
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-yellow-400 md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="Odredište"
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-yellow-400 md:col-span-2"
                />

                <input
                  type="date"
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                />

                <input
                  type="time"
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                />
              </div>
            </div>
{/* BLOK 3 */}

<div>
  <h3 className="text-xl font-bold text-white">
    🚕 Kakva vam je vožnja potrebna?
  </h3>

  <p className="mt-2 text-slate-400">
    Odaberite vrstu vožnje kako bismo vam mogli pružiti najbolju uslugu.
  </p>
  <div className="mt-6 grid gap-5 md:grid-cols-2">

  <div
  onClick={() => setRideType("privatna")}
  className={`cursor-pointer rounded-2xl p-6 transition duration-300 hover:-translate-y-1 ${
    rideType === "privatna"
      ? "border-2 border-yellow-400 bg-slate-900 shadow-lg shadow-yellow-400/20"
      : "border border-slate-700 bg-slate-950/60 hover:border-yellow-400 hover:bg-slate-900"
  }`}
>
    <div className="text-3xl">🚖</div>

    <h4 className="mt-4 text-lg font-bold text-white">
      Privatna vožnja
    </h4>

    <p className="mt-2 text-sm leading-6 text-slate-400">
      Vožnje po Zagrebu i okolici za svakodnevne potrebe.
    </p>
  </div>

  <div className="cursor-pointer rounded-2xl border border-slate-700 bg-slate-950/60 p-6 transition duration-300 hover:border-yellow-400 hover:bg-slate-900">
    <div className="text-3xl">✈️</div>

    <h4 className="mt-4 text-lg font-bold text-white">
      Aerodromski transfer
    </h4>

    <p className="mt-2 text-sm leading-6 text-slate-400">
      Dolazak ili odlazak uz dogovoreno vrijeme.
    </p>
  </div>

  <div className="cursor-pointer rounded-2xl border border-slate-700 bg-slate-950/60 p-6 transition duration-300 hover:border-yellow-400 hover:bg-slate-900">
    <div className="text-3xl">💼</div>

    <h4 className="mt-4 text-lg font-bold text-white">
      Poslovna vožnja
    </h4>

    <p className="mt-2 text-sm leading-6 text-slate-400">
      Pouzdan prijevoz za poslovne sastanke i događanja.
    </p>
  </div>

  <div className="cursor-pointer rounded-2xl border border-slate-700 bg-slate-950/60 p-6 transition duration-300 hover:border-yellow-400 hover:bg-slate-900">
    <div className="text-3xl">💍</div>

    <h4 className="mt-4 text-lg font-bold text-white">
      Vjenčanje
    </h4>

    <p className="mt-2 text-sm leading-6 text-slate-400">
      Prijevoz mladenaca, uzvanika i posebnih događanja.
    </p>
  </div>

</div>
</div>

{rideType && (
  <div className="mt-6 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-center">
    <p className="text-sm text-slate-300">
      Odabrali ste:
    </p>

    <p className="mt-1 text-xl font-bold text-yellow-400">
  {rideType === "privatna" && "🚖 Privatna vožnja"}
  {rideType === "aerodrom" && "✈️ Aerodromski transfer"}
  {rideType === "poslovna" && "💼 Poslovna vožnja"}
  {rideType === "vjencanje" && "💍 Vjenčanje"}
</p>
  </div>
)}

</div>
</div>
          </div>

    </section>
  );
}