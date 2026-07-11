import {
  Camera,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { label: "Početna", href: "#home" },
  { label: "Usluge", href: "#services" },
  { label: "Zašto TAXI IGGY", href: "#why-us" },
  { label: "Recenzije", href: "#reviews" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-yellow-400/20 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-12 items-center justify-center rounded-t-xl rounded-b-2xl border-2 border-yellow-400 text-xl font-bold">
                IG
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.45em] text-yellow-400">
                  TAXI
                </p>

                <p className="mt-1 text-3xl font-bold tracking-[0.12em]">
                  IGGY
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-md leading-7 text-slate-400">
              Pouzdan prijevoz za svaku priliku. Zagreb i okolica,
              aerodromski transferi, vjenčanja i vožnje po dogovoru.
            </p>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Vaše odredište. Naša odgovornost.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Navigacija</h2>

            <div className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-slate-400 transition hover:text-yellow-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Kontakt</h2>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+385915930090"
                className="flex items-center gap-3 text-slate-400 transition hover:text-yellow-400"
              >
                <Phone size={19} className="text-yellow-400" />
                +385 91 593 00 90
              </a>

              <a
                href="mailto:info@taxiiggy.hr"
                className="flex items-center gap-3 text-slate-400 transition hover:text-yellow-400"
              >
                <Mail size={19} className="text-yellow-400" />
                info@taxiiggy.hr
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={19} className="text-yellow-400" />
                Zagreb i okolica
              </div>

              <a
                href="#"
                aria-label="Instagram"
                className="flex w-fit items-center gap-3 text-slate-400 transition hover:text-yellow-400"
              >
                <Camera size={19} className="text-yellow-400" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} TAXI IGGY. Sva prava pridržana.
          </p>

          <p>Pouzdan prijevoz za svaku priliku.</p>
        </div>
      </div>
    </footer>
  );
}