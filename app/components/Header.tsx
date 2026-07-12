"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";

const navigation = [
  { label: "Početna", href: "#home" },
  { label: "Usluge", href: "#services" },
  { label: "Zašto TAXI IGGY", href: "#why-us" },
  { label: "Recenzije", href: "#reviews" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-yellow-400/20 bg-slate-950/95 shadow-2xl shadow-black/30 backdrop-blur-xl"
          : "border-white/10 bg-slate-950/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav
          aria-label="Glavna navigacija"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-slate-200 transition hover:text-yellow-400"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-yellow-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+385915930090"
            className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-yellow-400"
          >
            <Phone size={19} className="text-yellow-400" />
            +385 91 593 00 90
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/20"
          >
            <CalendarDays size={18} />
            Rezerviraj vožnju
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Zatvori izbornik" : "Otvori izbornik"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-yellow-400 hover:text-yellow-400 lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobilna navigacija"
          className="mx-auto flex max-w-7xl flex-col px-6 py-6"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 py-3 text-base font-medium text-slate-200 transition hover:pl-2 hover:text-yellow-400"
            >
              {item.label}
            </a>
          ))}

          <a
            href="tel:+385915930090"
            className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-yellow-400/40 px-5 py-4 font-semibold text-white"
          >
            <Phone size={20} className="text-yellow-400" />
            +385 91 593 00 90
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-5 py-4 font-bold text-slate-950"
          >
            <CalendarDays size={20} />
            Rezerviraj vožnju
          </a>
        </nav>
      </div>
    </header>
  );
}