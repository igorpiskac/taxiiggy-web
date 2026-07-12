import {
  CarFront,
  Clock3,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const items = [
  {
    icon: Clock3,
    title: "Točnost",
    text: "Dolazimo kada kažemo da ćemo doći.",
  },
  {
    icon: ShieldCheck,
    title: "Pouzdanost",
    text: "Dogovor vrijedi od prve do posljednje minute.",
  },
  {
    icon: CarFront,
    title: "Udobnost",
    text: "Čisto i uredno vozilo za ugodnu vožnju.",
  },
  {
    icon: UserRound,
    title: "Ljudski pristup",
    text: "Poštujemo vaš mir i rado razgovaramo.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-yellow-400/20 bg-slate-950">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group flex items-center gap-4 border-b border-white/10 px-6 py-6 transition duration-300 hover:bg-white/[0.03] md:border-r xl:border-b-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-yellow-400/50 text-yellow-400 transition duration-300 group-hover:bg-yellow-400 group-hover:text-slate-950">
                <Icon size={23} strokeWidth={1.7} />
              </div>

              <div>
                <h2 className="font-bold uppercase tracking-wide text-white">
                  {item.title}
                </h2>

                <p className="mt-1.5 text-sm leading-5 text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}