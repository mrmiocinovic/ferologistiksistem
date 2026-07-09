"use client";
import { useEffect } from "react";
import Icon from "./Icon";
import Link from "next/link";

export default function Footer() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ferologistik-sistem.com/#business",
    name: "Ferologistik Sistem DOO",
    image: "https://ferologistiksistem.com/logo.png",
    url: "https://ferologistiksistem.com",
    telephone: ["+381655544125", "+381604849062"],
    priceRange: "$$",
    description:
      "Ferologistik Sistem DOO pruža usluge iznajmljivanja građevinskih kontejnera, odvoza šuta, upravljanja otpadom i otkupa sekundarnih sirovina u Beogradu.",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Majora Zorana Radosavljevića 323",
      addressLocality: "Batajnica",
      addressRegion: "Beograd",
      postalCode: "11273",
      addressCountry: "RS",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.9096,
      longitude: 20.2815,
    },

    areaServed: ["Batajnica", "Zemun", "Beograd", "Novi Beograd", "Surčin"],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "15:00",
      },
    ],
  };

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(localBusinessSchema),
    }}
  />;

  return (
    <footer className="bg-brand-green-dark text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          <div className="flex flex-col space-y-4">
            <span className="font-heading font-black text-2xl tracking-tight text-white flex items-center gap-1 leading-none">
              FEROLOGISTIK <span className="text-brand-orange">Sistem</span>
            </span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Garantujemo bezbedan, brzi i ekološki prihvatljiv transport
              građevinskog šuta i kabastog otpada.
            </p>
            <div className="flex flex-col gap-4 pt-2">
              <a
                href="tel:+381655544125"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-black py-4 px-7 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-brand-green/15"
              >
                <Icon
                  name="Phone"
                  className="w-4 h-4 text-brand-gold animate-bounce"
                />
                <span>065/5544-125</span>
              </a>
              <a
                href="tel:+381604849062"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-black py-4 px-7 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-brand-green/15"
              >
                <Icon
                  name="Phone"
                  className="w-4 h-4 text-brand-gold animate-bounce"
                />
                <span>060/4849-062</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-gold">
              Brzi Linkovi
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href={"/"} className="hover:text-white transition-colors">
                  Početna stanica
                </Link>
              </li>
              <li>
                <Link
                  href={"/kontejneri"}
                  className="hover:text-white transition-colors"
                >
                  Iznajmljivanje Kontejnera
                </Link>
              </li>
              <li>
                <Link
                  href={"/otkup"}
                  className="hover:text-white transition-colors"
                >
                  Otkup Sekundarnih Sirovina
                </Link>
              </li>
              <li>
                <Link
                  href={"/o-nama"}
                  className="hover:text-white transition-colors"
                >
                  O Nama
                </Link>
              </li>
              <li>
                <Link
                  href={"/kontakt"}
                  className="hover:text-white transition-colors"
                >
                  Kontkat
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-gold">
              Radno Vreme
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Ponedeljak - Petak: </span>
                <span className="text-white font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  07:00 - 17:00
                </span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Subota:</span>
                <span className="text-white font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  07:00 - 15:00
                </span>
              </div>
              <div className="flex justify-between">
                <span>Nedelja:</span>
                <span className="text-white font-semibold">Zatovreno</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-gold">
              Neke od Lokacija
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Batajnica",
                "Zemun",
                "Novi Beograd",
                "Vracar",
                "Dorcol",
                "Senjak",
                "Dedinje",
              ].map((loc, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400 whitespace-nowrap"
                >
                  {loc}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed pt-2">
              Vršimo prevoz i odlaganje šuta na celoj teritoriji opštine
              Beograda i prigradskih naselja.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © 2026 <strong>Ferologistik Sistem</strong>. Sva prava zadržana.
          </div>
        </div>
      </div>
    </footer>
  );
}
