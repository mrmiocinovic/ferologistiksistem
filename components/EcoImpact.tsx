import React, { useState, useEffect } from "react";
import Icon from "./Icon";

export default function EcoImpactSection() {
  const [tonsCounter, setTonsCounter] = useState(12480);
  const [landfillsCounter, setLandfillsCounter] = useState(312);

  useEffect(() => {
    const interval = setInterval(() => {
      setTonsCounter((prev) => prev + 1);
      if (Math.random() > 0.8) {
        setLandfillsCounter((prev) => prev + 1);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const ecoFacts = [
    {
      title: "Ugovori sa JKP",
      desc: "Sav građevinski otpad, šut i zemlju deponujemo isključivo na zvaničnoj gradskoj deponiji. Svaka tura ima potpisane otpremnice i vagu.",
      icon: "ShieldCheck",
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Zaštita Životne Okoline",
      desc: "Sprečavamo formiranje divljih deponija odgovornim prikupljanjem i pravilnim zbrinjavanjem otpada u skladu sa važećim ekološkim standardima.",
      icon: "Leaf",
      color: "text-teal-600 bg-teal-50 border-teal-100",
    },
    {
      title: "Zvanične Pokrajinske Dozvole",
      desc: "Posedujemo važeće pokrajinske ekološke dozvole za bezbedno upravljanje, skladištenje i transport neopasnog građevinskog otpada.",
      icon: "Award",
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  return (
    <section
      id="eco-impact"
      className="py-24 bg-gradient-to-b from-gray-50 to-white  scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 inline-block">
              100% LEGALNO • 100% EKOLOŠKO ODLAGANJE
            </span>

            <h2 className="text-3xl sm:text-4.5xl font-heading font-black text-brand-green-dark tracking-tight leading-tight">
              Misija Čistija Okolina: Stop divljim deponijama!
            </h2>

            <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
              Mnogi nelegalni prevoznici nude nerealno niske cene odvoza šuta. U
              praksi, takav otpad često završi na divljim deponijama, u prirodi
              ili na nepredviđenim lokacijama, čime se zagađuje životna sredina
              i krše zakonski propisi.
            </p>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              <strong>
                Ferologistik sistem posluje isključivo u okviru zakona.
              </strong>{" "}
              Za svaku turu obezbeđujemo validan Prateći list o kretanju otpada,
              dokaz o deponovanju i zvanične ekološke sertifikate. Time štitimo
              i Vašu kompaniju od drakonskih kazni ekološke inspekcije.
            </p>

            <div className="space-y-4 pt-4">
              {ecoFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4.5 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-all"
                >
                  <div
                    className={`p-3 rounded-xl shrink-0 border ${fact.color}`}
                  >
                    <Icon name={fact.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-gray-900 text-sm sm:text-base">
                      {fact.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {fact.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-brand-green/5 rounded-[3rem] -rotate-2 scale-105" />

            <div className="relative z-10 bg-brand-green-dark text-white rounded-[3rem] p-8 sm:p-12 border border-white/5 shadow-xl space-y-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[60px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 blur-[60px] pointer-events-none" />
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 text-brand-gold border border-white/10 px-3.5 py-1.5 rounded-full w-fit block font-mono">
                  AKTIVNI EKOLOŠKI MONITORING
                </span>
                <h3 className="font-heading font-black text-2xl text-white mt-4">
                  Naš zajednički uticaj na životnu sredinu
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-1.5 border-l-2 border-brand-gold pl-4">
                  <span className="text-4xl sm:text-5xl font-mono font-black text-brand-gold block tracking-tight">
                    {tonsCounter.toLocaleString()} t
                  </span>
                  <span className="text-xs font-bold text-gray-200 uppercase tracking-wider block font-mono">
                    Legalno zbrinutog otpada
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Građevinski šut i otpad predat JKP deponiji na reciklažu i
                    bezbedno odlaganje.
                  </p>
                </div>
                <div className="space-y-1.5 border-l-2 border-teal-400 pl-4">
                  <span className="text-4xl sm:text-5xl font-mono font-black text-teal-300 block tracking-tight">
                    {landfillsCounter} +
                  </span>
                  <span className="text-xs font-bold text-gray-200 uppercase tracking-wider block font-mono">
                    Sprečenih divljih deponija
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Lokacije koje su zahvaljujući našim klijentima ostale
                    netaknute i čiste.
                  </p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block font-mono">
                  KREGLA PROTOKOLA KRETANJA OTPADA:
                </span>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-center text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex-1">
                    <span className="text-brand-gold font-bold block mb-1">
                      Gradilište
                    </span>
                    <p className="text-[10px] text-gray-400">
                      Generisanje građevinskog šuta
                    </p>
                  </div>

                  <div className="flex items-center justify-center text-brand-gold shrink-0">
                    <Icon
                      name="ArrowRight"
                      className="w-5 h-5 text-brand-gold rotate-90 sm:rotate-0"
                    />
                  </div>

                  <div className="bg-brand-green/20 p-3 rounded-xl border border-brand-green/35 flex-1">
                    <span className="text-white font-bold block mb-1">
                      Ferologistik
                    </span>
                    <p className="text-[10px] text-emerald-300">
                      Bezbedan kamionski prevoz
                    </p>
                  </div>

                  <div className="flex items-center justify-center text-brand-gold shrink-0">
                    <Icon
                      name="ArrowRight"
                      className="w-5 h-5 text-brand-gold rotate-90 sm:rotate-0"
                    />
                  </div>

                  <div className="bg-emerald-500/20 p-3 rounded-xl border border-emerald-500/35 flex-1">
                    <span className="text-emerald-300 font-bold block mb-1">
                      Deponija JKP
                    </span>
                    <p className="text-[10px] text-emerald-200">
                      Legalno odlaganje & vaga
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-gray-400">
                  Sačuvajmo našu okolinu čistom za buduće generacije!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
