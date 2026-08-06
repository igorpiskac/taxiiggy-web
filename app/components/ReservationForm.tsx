"use client";

import { useEffect, useState } from "react";
import AddressAutocomplete, { AddressData } from "./AddressAutocomplete";
import SuccessModal from "./SuccessModal";

export default function ReservationForm() {
  const [rideType, setRideType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const [pickupLocation, setPickupLocation] =
    useState<AddressData | null>(null);

  const [destinationLocation, setDestinationLocation] =
    useState<AddressData | null>(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  const [distanceMeters, setDistanceMeters] =
    useState<number | null>(null);

  const [duration, setDuration] =
    useState<string | null>(null);

  const [loadingRoute, setLoadingRoute] = useState(false);

  const [error, setError] = useState("");

  const [autocompleteKey, setAutocompleteKey] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalStatus, setModalStatus] = useState<
  "sending" | "opening" | "ready"
>("sending");
  useEffect(() => {
  console.log("showSuccessModal:", showSuccessModal);
}, [showSuccessModal]);
  useEffect(() => {
    if (!pickupLocation || !destinationLocation) {
      setDistanceMeters(null);
      setDuration(null);
      return;
    }

    const loadRoute = async () => {
      try {
        setLoadingRoute(true);

        const response = await fetch("/api/routes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            origin: {
              lat: pickupLocation.lat,
              lng: pickupLocation.lng,
            },
            destination: {
              lat: destinationLocation.lat,
              lng: destinationLocation.lng,
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Greška prilikom izračuna rute.");
        }

        const data = await response.json();

        setDistanceMeters(data.distanceMeters);
        setDuration(data.duration);
      } catch (err) {
        console.error(err);
        setDistanceMeters(null);
        setDuration(null);
      } finally {
        setLoadingRoute(false);
      }
    };

    loadRoute();
  }, [pickupLocation, destinationLocation]);
  const START_FARE = 1.6;
const PRICE_PER_KM = 1.3;
const MINIMUM_FARE = 6;

const estimatedPrice = distanceMeters
  ? Math.max(
      MINIMUM_FARE,
      START_FARE + (distanceMeters / 1000) * PRICE_PER_KM
    ).toFixed(2)
  : null;

  const handleSubmit = async () => {
    if (!rideType) {
      setError("Molimo odaberite vrstu vožnje.");
      return;
    }

    if (!name.trim()) {
      setError("Molimo unesite ime i prezime.");
      return;
    }

    if (!phone.trim()) {
      setError("Molimo unesite broj telefona.");
      return;
    }

    const phoneRegex = /^(\+385|0)\d{8,9}$/;

    if (!phoneRegex.test(phone.trim())) {
      setError("Molimo unesite ispravan broj telefona.");
      return;
    }

    if (!pickupLocation) {
      setError("Molimo odaberite polazište.");
      return;
    }

    if (!destinationLocation) {
      setError("Molimo odaberite odredište.");
      return;
    }

    if (!date) {
      setError("Molimo odaberite datum.");
      return;
    }

    if (!time) {
      setError("Molimo odaberite vrijeme.");
      return;
    }

    setError("");
    const formattedDate = new Date(date).toLocaleDateString("hr-HR");
    const km = distanceMeters
  ? (distanceMeters / 1000).toFixed(1)
  : "Nije izračunato";

const minutes = duration
  ? Math.round(parseInt(duration) / 60)
  : null;

const estimatedPrice = distanceMeters
  ? Math.max(
      MINIMUM_FARE,
      START_FARE + (distanceMeters / 1000) * PRICE_PER_KM
    ).toFixed(2)
  : null;

const rideTypeLabel =
  rideType === "privatna"
    ? "🚖 Privatna vožnja"
    : rideType === "aerodrom"
    ? "✈️ Aerodromski transfer"
    : rideType === "poslovna"
    ? "💼 Poslovna vožnja"
    : rideType === "vjencanje"
    ? "💍 Vjenčanje"
    : "Nije odabrano";

const message = `🚖 *TAXI IGGY*

📩 *Novi zahtjev za rezervaciju*

────────────────────

👤 *Kontakt*

Ime:
${name}

Telefon:
${phone}

E-mail:
${email || "Nije naveden"}

────────────────────

📍 *Vožnja*

Polazište:
${pickup}

Odredište:
${destination}

📅 Datum:
${formattedDate}

🕒 Vrijeme:
${time}

────────────────────

🚕 Vrsta vožnje

${rideTypeLabel}

────────────────────

📏 Udaljenost:
${km} km

⏱️ Procijenjeno trajanje:
${minutes ?? "-"} min

💶 Procijenjena cijena:
${estimatedPrice ? `${estimatedPrice} €` : "-"}

────────────────────

📝 Napomena

${note || "Nema napomene"}

────────────────────

────────────────────

✅ Hvala na vašem upitu!

Javit ćemo vam se u najkraćem mogućem roku radi potvrde rezervacije.

🚖 TAXI IGGY
🌐 www.taxiiggy.com

Hvala na povjerenju!`;
    await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        pickup,
        destination,
        date: formattedDate,
        time,
        rideType: rideTypeLabel,
        distance: `${km} km`,
        duration: `${minutes ?? "-"} min`,
        price: estimatedPrice ? `${estimatedPrice} €` : "-",
        note,
      }),
    });
    setShowSuccessModal(true);
    setModalStatus("sending");
    setTimeout(() => {
  setModalStatus("opening");
}, 1500);

setTimeout(() => {
  setModalStatus("ready");
}, 2700);

setTimeout(() => {
  window.open(
    `https://wa.me/385915930090?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  setShowSuccessModal(false);

  setRideType("");
  setName("");
  setPhone("");
  setEmail("");
  setPickup("");
  setDestination("");
  setPickupLocation(null);
  setDestinationLocation(null);
  setDate("");
  setTime("");
  setNote("");
  setDistanceMeters(null);
  setDuration(null);
  setAutocompleteKey((k) => k + 1);
}, 3000);

return;
    
  };

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
            Ispunite nekoliko osnovnih podataka, a ostatak ćemo dogovoriti
            zajedno.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-yellow-400/30 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl md:p-12">

          {error && (
            <div className="mb-8 rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-4 text-red-300">
              {error}
            </div>
          )}

          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-bold">
                👤 Kako vas možemo kontaktirati?
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Ime i prezime"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                />

                <input
                  type="tel"
                  placeholder="Broj telefona"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setError("");
                  }}
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                />

                <input
                  type="email"
                  placeholder="E-mail (nije obavezno)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400 md:col-span-2"
                />

              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                📍 Kamo putujete?
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <AddressAutocomplete
                  key={`pickup-${autocompleteKey}`}
                  value={pickup}
                  placeholder="Polazište"
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400 md:col-span-2"
                  onChange={(data) => {
                    setPickup(data.address);
                    setPickupLocation(data);
                    setError("");
                  }}
                />

                <AddressAutocomplete
                  key={`destination-${autocompleteKey}`}
                  value={destination}
                  placeholder="Odredište"
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400 md:col-span-2"
                  onChange={(data) => {
                    setDestination(data.address);
                    setDestinationLocation(data);
                    setError("");
                  }}
                />

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                />

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
                />

              </div>
            </div>    
            <div>
              <h3 className="text-xl font-bold text-white">
                🚕 Kakva vam je vožnja potrebna?
              </h3>

              <p className="mt-2 text-slate-400">
                Odaberite vrstu vožnje kako bismo vam mogli pružiti najbolju
                uslugu.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                {[
                  {
                    id: "privatna",
                    icon: "🚖",
                    title: "Privatna vožnja",
                    text: "Vožnje po Zagrebu i okolici za svakodnevne potrebe.",
                  },
                  {
                    id: "aerodrom",
                    icon: "✈️",
                    title: "Aerodromski transfer",
                    text: "Dolazak ili odlazak uz dogovoreno vrijeme.",
                  },
                  {
                    id: "poslovna",
                    icon: "💼",
                    title: "Poslovna vožnja",
                    text: "Pouzdan prijevoz za poslovne sastanke i događanja.",
                  },
                  {
                    id: "vjencanje",
                    icon: "💍",
                    title: "Vjenčanje",
                    text: "Prijevoz mladenaca, uzvanika i posebnih događanja.",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setRideType(item.id);
                      setError("");
                    }}
                    className={`cursor-pointer rounded-2xl p-6 transition duration-300 hover:-translate-y-1 ${
                      rideType === item.id
                        ? "border-2 border-yellow-400 bg-slate-900 shadow-lg shadow-yellow-400/20"
                        : "border border-slate-700 bg-slate-950/60 hover:border-yellow-400 hover:bg-slate-900"
                    }`}
                  >
                    <div className="text-3xl">{item.icon}</div>

                    <h4 className="mt-4 text-lg font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {rideType && (
              <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-center">
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

            <div>
              <h3 className="text-xl font-bold text-white">
                📝 Dodatne informacije
              </h3>

              <textarea
                rows={5}
                placeholder="Npr. dječja sjedalica, broj leta, više stajanja..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="mt-6 w-full resize-none rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
              />

              {loadingRoute && (
                <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-center text-blue-300">
                  Izračunavam rutu...
                </div>
              )}

              {!loadingRoute &&
                distanceMeters &&
                duration && (
                  <div className="mt-6 rounded-xl border border-yellow-400/30 bg-slate-950/50 p-5">

                    <div className="flex justify-between">
                      <span>📍 Udaljenost</span>
                      <span>
                        {(distanceMeters / 1000).toFixed(1)} km
                      </span>
                    </div>

                    <div className="mt-3 flex justify-between">
                      <span>🕒 Procijenjeno trajanje</span>
                      <span>
                        {Math.round(parseInt(duration) / 60)} min
                      </span>
                    </div>
                <div className="mt-4 border-t border-slate-700 pt-4">
  <div className="flex justify-between text-lg font-bold">
    <span>💶 Procijenjena cijena</span>

    <span className="text-yellow-400">
  {estimatedPrice} €
</span>
  </div>

  <p className="mt-3 text-xs text-slate-500">
    Informativna cijena. Konačna cijena može odstupati ovisno o čekanju,
    usputnim stajanjima ili posebnim zahtjevima.
  </p>
</div>    

                  </div>
                )}

              <button
                type="button"
                disabled={loadingRoute}
                onClick={handleSubmit}
                className="mt-8 w-full rounded-xl bg-yellow-400 px-6 py-5 text-lg font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loadingRoute
                  ? "Izračunavam..."
                  : "Pošaljite zahtjev za rezervaciju"}
              </button>

            </div>

          </div>
        </div>
      </div>
<SuccessModal
  open={showSuccessModal}
  status={modalStatus}
/>    
    </section>
  );
}            