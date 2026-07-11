import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="TAXI IGGY - Početna"
      className="group flex items-center gap-3"
    >
      <div className="flex h-12 w-11 items-center justify-center rounded-t-xl rounded-b-2xl border-2 border-yellow-400 text-lg font-bold text-white transition group-hover:bg-yellow-400 group-hover:text-slate-950">
        IG
      </div>

      <div className="leading-none">
        <span className="block text-xs font-semibold tracking-[0.45em] text-yellow-400">
          TAXI
        </span>

        <span className="mt-1 block text-2xl font-bold tracking-[0.12em] text-white">
          IGGY
        </span>

        <span className="mt-1 hidden text-[8px] tracking-[0.12em] text-slate-400 sm:block">
          POUZDAN PRIJEVOZ ZA SVAKU PRILIKU
        </span>
      </div>
    </Link>
  );
}