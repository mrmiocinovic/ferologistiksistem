"use client";
import { useState, useEffect } from "react";
import Icon from "./Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const menuItems = [
    { href: "/", label: "Početna" },
    {
      href: "/kontejneri",
      label: "Iznajmljivanje Kontejnera",
    },
    {
      href: "/otkup",
      label: "Otkup Sekundarnih Sirovina",
    },
    { href: "/o-nama", label: "O Nama" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-green-dark/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
      id="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center text-white font-bold text-xl shadow-md shadow-brand-orange/20 group-hover:scale-105 transition-transform">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1 leading-none">
                FEROLOGISTIK <span className="text-brand-orange">Sistem</span>
              </span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors py-2 relative block ${
                      pathname === item.href
                        ? "text-brand-gold font-semibold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-white/10" />

            <a
              href="tel:+381655544125"
              className="bg-brand-green border border-brand-green-light hover:bg-brand-green-light px-5 py-2.5 rounded-lg text-white font-semibold text-sm flex items-center gap-2 shadow-lg transition-all hover:-translate-y-0.5 shadow-brand-green-dark/20"
            >
              <Icon
                name="Phone"
                className="w-4 h-4 text-brand-gold animate-bounce"
              />
              <span>065 / 554-4125</span>
            </a>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white bg-white/5 rounded-lg border border-white/10"
              aria-label="Toggle Menu"
            >
              <Icon
                name={mobileMenuOpen ? "X" : "Menu"}
                className="w-5 h-5 text-white"
              />
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-green-dark/95 border-b border-white/10 backdrop-blur-lg shadow-2xl py-6 px-4">
          <ul className="flex flex-col gap-4 text-base font-semibold">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white bg-white/5 rounded-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-px bg-white/10 my-5" />

          <div className="flex flex-col gap-3 pb-4">
            <a
              href="tel:+381655544125"
              className="w-full bg-brand-orange hover:bg-brand-orange-dark py-3 rounded-lg text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Icon name="Phone" className="w-5 h-5 text-white" />
              <span>Pozovi Odmah (065/5544-125)</span>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+381604849062"
              className="w-full bg-brand-orange hover:bg-brand-orange-dark py-3 rounded-lg text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Icon name="Phone" className="w-5 h-5 text-white" />
              <span>Pozovi Odmah (060 / 4849-062)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
