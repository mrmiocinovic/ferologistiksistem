"use client";

import Icon from "@/components/Icon";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const OtkupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const materials = [
    {
      id: "bakar-1",
      name: "Bakar I klasa (Čisti kablovi, cevi)",
      priceRsd: 850,
      unit: "kg",
      icon: "Zap",
      color: "border-amber-500 text-amber-600 bg-amber-50/50",
    },
    {
      id: "bakar-2",
      name: "Bakar II i III klasa (Lakiran, pomešan)",
      priceRsd: 780,
      unit: "kg",
      icon: "Zap",
      color: "border-amber-700 text-amber-700 bg-amber-50",
    },
    {
      id: "aluminijum",
      name: "Aluminijum (Lim, profili, hladnjaci)",
      priceRsd: 160,
      unit: "kg",
      icon: "Cpu",
      color: "border-slate-400 text-slate-600 bg-slate-50",
    },
    {
      id: "mesing",
      name: "Mesing i Bronza (Slavine, ventili)",
      priceRsd: 480,
      unit: "kg",
      icon: "Layers",
      color: "border-yellow-600 text-yellow-700 bg-yellow-50/40",
    },
    {
      id: "gvozdje",
      name: "Gvožđe i Čelik (Teški lim, profili, šine)",
      priceRsd: 24,
      unit: "kg",
      icon: "Anchor",
      color: "border-zinc-500 text-zinc-700 bg-zinc-50",
    },
    {
      id: "akumulatori",
      name: "Olovni Akumulatori (Stari auto akumulatori)",
      priceRsd: 85,
      unit: "kg",
      icon: "Battery",
      color: "border-orange-500 text-orange-600 bg-orange-50/70",
    },
    {
      id: "olovo",
      name: "Olovo (Cevi, tegovi)",
      priceRsd: 140,
      unit: "kg",
      icon: "Shield",
      color: "border-gray-500 text-gray-700 bg-gray-50",
    },
    {
      id: "prohrom",
      name: "Prohrom / Inox (Nerđajući čelik)",
      priceRsd: 130,
      unit: "kg",
      icon: "Disc",
      color: "border-teal-500 text-teal-700 bg-teal-50/40",
    },
    {
      id: "kablovi",
      name: "Kablovi sa izolacijom (Bakarni i Al, nemasni)",
      priceRsd: 220,
      unit: "kg",
      icon: "Activity",
      color: "border-blue-500 text-blue-700 bg-blue-50/40",
    },
  ];

  // Benefits list
  const benefits = [
    {
      title: "Precizno digitalno merenje",
      desc: "Koristimo isključivo baždarene, sertifikovane digitalne vage (platformske i kolske). Dobijate tačnu kilažu do poslednjeg grama, bez ikakvih odstupanja.",
      icon: "Award",
    },
    {
      title: "Isplata odmah na licu mesta",
      desc: "Isplata se vrši odmah nakon merenja i provere klase materijala. Nema čekanja, odloženih plaćanja niti skrivenih birokratskih prepreka.",
      icon: "Zap",
    },
    {
      title: "Sopstveni utovar i odvoz",
      desc: "Za veće količine (preko 300kg) obezbeđujemo besplatan kamionski prevoz sa dizalicom (grajferom) i radnicima za brz utovar na Vašoj adresi.",
      icon: "Truck",
    },
    {
      title: "Dokumentacija za firme",
      desc: "Pravnim licima obezbeđujemo zvaničnu dokumentaciju: listove o kretanju otpada, prateće dokumente o zbrinjavanju i brzu uplatu na račun.",
      icon: "FileText",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 text-gray-900"
    >
      <div className="relative h-[25rem] sm:h-[28rem] flex items-center justify-center overflow-hidden bg-brand-green-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
          <nav className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider uppercase text-brand-gold bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            <Link href="/" className="hover:text-white transition-colors">
              Početna
            </Link>
            <span>/</span>
            <span className="text-gray-300">Otkup Sekundarnih Sirovina</span>
          </nav>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight"
          >
            Otkup Sekundarnih Sirovina
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200 leading-relaxed font-medium"
          >
            Vršimo otkup bakra, mesinga, aluminijuma, gvožđa, akumulatora i
            prohroma po najpovoljnijim cenama uz isplatu odmah na licu mesta.
          </motion.p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-orange-100/50 px-3.5 py-1 rounded-full w-fit mx-auto block mb-3">
              Dnevni Cenovnik Sirovina
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-green-dark tracking-tight">
              Materijali koje otkupljujemo
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-xl mx-auto">
              Cene na svetskoj berzi metala (LME) često variraju. Trudimo se da
              uvek ponudimo najpovoljnije i najpouzdanije uslove isplate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {materials.map((mat) => (
              <div
                key={mat.id}
                className="bg-white border border-gray-200/70 hover:border-brand-green/30 transition-all rounded-3xl p-6.5 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider border border-zinc-500 text-zinc-700 bg-zinc-50">
                      Čista Sekundarna Sirovina
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 text-brand-green font-bold">
                      <Icon
                        name={mat.icon}
                        className="w-5 h-5 text-brand-green"
                      />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-brand-green-dark text-base sm:text-lg leading-snug">
                    {mat.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    Otkup u rinfuzu ili komadima na našem skladištu ili uz naš
                    dolazak. Klase se utvrđuju detaljnom vizuelnom i tehničkom
                    analizom.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                NAPOMENA ZA VEĆE KOLIČINE
              </span>
              <p className="text-sm font-semibold text-gray-800">
                Za količine metala preko 1000kg dobijate posebne, uvećane
                stimulativne cene!
              </p>
              <p className="text-xs text-gray-500">
                Pozovite nas direktno na 065/5544 - 125 za ugovaranje
                veleprodajnih uslova.
              </p>
            </div>

            <a
              href="tel:+381655544125"
              className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3.5 px-6 rounded-xl shrink-0 text-sm flex items-center gap-2 transition-all cursor-pointer uppercase tracking-wider font-semibold shadow-lg shadow-brand-green/10"
            >
              <Icon
                name="Phone"
                className="w-4 h-4 text-brand-gold animate-bounce"
              />
              <span>065/5544 - 125</span>
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-3 py-1 rounded-full w-fit mx-auto block mb-3">
              Zašto Odabrati Ferologistik?
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-green-dark tracking-tight leading-tight">
              Maksimalna isplativost i poštenje
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blend-multiply bg-zinc-100 border border-zinc-200 text-brand-green flex items-center justify-center">
                    <Icon name={b.icon} className="w-5 h-5 text-brand-green" />
                  </div>

                  <h3 className="font-heading font-extrabold text-gray-900 text-base leading-snug">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center gap-1.5 text-xs text-brand-green font-bold">
                  <span>Garantovano 100%</span>
                  <Icon name="Check" className="w-3.5 h-3.5 text-brand-green" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-brand-green-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-mono font-bold bg-white/10 text-brand-gold border border-white/5 py-1 px-3 rounded-full mb-4 inline-block uppercase tracking-widest">
            EKOLOŠKA ODGOVORNOST
          </span>

          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight leading-tight mb-4">
            Svaki kilogram recikliranog metala štiti našu okolinu
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Nepravilno odloženi metali oslobađaju štetne čestice u tlo i
            podzemne vode. Sa nama ste 100% ekološki obezbeđeni, jer sve
            sirovine prolaze prečišćavanje i odlaze isključivo u ovlašćene
            livnice.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a
              href="tel:+381655544125"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-black py-4 px-8 rounded-xl transition-transform hover:-translate-y-0.5 flex items-center gap-2 uppercase text-xs sm:text-sm tracking-wider shadow-lg shadow-brand-orange/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="Phone" className="w-5 h-5 text-white" />
              <span>Pozovite Nas</span>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OtkupPage;
