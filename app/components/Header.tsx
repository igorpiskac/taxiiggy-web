export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-extrabold tracking-wide text-yellow-400"
        >
          TAXI IGGY
        </a>

        {/* Navigacija */}
        <nav className="hidden gap-10 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-yellow-400">
            O nama
          </a>

          <a href="#services" className="transition hover:text-yellow-400">
            Usluge
          </a>

          <a href="#contact" className="transition hover:text-yellow-400">
            Kontakt
          </a>
        </nav>

        {/* CTA */}
        <button className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300">
          Rezerviraj vožnju
        </button>

      </div>
    </header>
  );
}