"use client";

import CTA from "@/components/CTA";
import Icon from "@/components/Icon";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type ProcessType = "najam" | "otkup";

const heroTruckImg = "ferologistik-small.jpg";
const wasteContainersImg = "/ferologistik.jpg";

export default function AboutPage() {
  const [activeProcess, setActiveProcess] = useState<ProcessType>("najam");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      value: "100%",
      label: "Legalan transport",
      sub: "Zvanične ekološke dozvole",
      icon: "ShieldCheck",
    },
    {
      value: "10+",
      label: "Godina poverenja",
      sub: "Lideri u Beogradu i okolini",
      icon: "Award",
    },
    {
      value: "1.500+",
      label: "Urađenih projekata",
      sub: "Za fizička lica i građevinske investitore",
      icon: "Users",
    },
  ];

  const najamSteps = [
    {
      step: "01",
      title: "Poziv",
      desc: "Pozovete nas ili pošaljete onlajn upit.Preporučućemo idealnu zapreminu kontejnera (5m³, 9m³, 25m³ ili 30m³) na osnovu vrste otpada.",
    },
    {
      step: "02",
      title: "Dostava za 1 do 2 sata",
      desc: "Kamion-podizač u najkraćem roku stiže na lokaciju i bezbedno postavlja kontejner na tlo, štiteći površinu.",
    },
    {
      step: "03",
      title: "Punjenje i rotacija",
      desc: "Punite kontejner građevinskim šutem, zemljom ili kabastim otpadom. Po potrebi, radimo brzu zamenu 'puno za prazno' da gradilište ne bi stajalo.",
    },
    {
      step: "04",
      title: "Ekološko odlaganje i PDV račun",
      desc: "Sav otpad transportujemo na zvaničnu deponiju JKP. Pravnim licima obezbeđujemo prateće listove o kretanju otpada za tehnički prijem.",
    },
  ];

  const otkupSteps = [
    {
      step: "01",
      title: "Besplatna procena",
      desc: "Kontaktirate nas sa informacijom o vrsti i težini materijala. ",
    },
    {
      step: "02",
      title: "Utovar i dolazak kamiona",
      desc: "Za količine preko 1000kg obezbeđujemo besplatan dolazak našeg kamiona sa dizalicom (grajferom).",
    },
    {
      step: "03",
      title: "Precizno digitalno merenje",
      desc: "Merenje sirovina vršimo isključivo na licenciranim, baždarenim digitalnim vagama (platformskim ili kolskim), garantujući tačnost u gram.",
    },
    {
      step: "04",
      title: "Isplata odmah na licu mesta",
      desc: "Isplaćujemo ugovoreni iznos odmah u gotovini (za fizička lica) ili ekspresno na račun firme, uz svu zakonsku prateću dokumentaciju.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-gray-50 text-gray-900 font-sans selection:bg-brand-orange selection:text-white"
    >
      <div className="relative h-[25rem] sm:h-[28rem] flex items-center justify-center overflow-hidden bg-brand-green-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
          <nav className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider uppercase text-brand-gold bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            <Link href="/" className="hover:text-white transition-colors">
              Početna
            </Link>
            <span>/</span>
            <span className="text-gray-300">O Nama</span>
          </nav>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight"
          >
            O Ferologistik Sistemu
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200 leading-relaxed font-medium"
          >
            Upoznajte Ferologistik sistem – vodeću snagu za profesionalan najam
            kontejnera za šut i čist, pošten i ekološki zbrinut otkup svih vrsta
            sekundarnih sirovina.
          </motion.p>
        </div>
      </div>

      <section className="py-24 bg-white relative z-10 -mt-10  border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full w-fit mx-auto block mb-4 font-mono">
              NAŠE PRIMARNE DELATNOSTI
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-heading font-black text-brand-green-dark tracking-tight leading-none">
              Dva sektora ujedinjena u čistijoj okolini
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-4 leading-relaxed">
              Kroz sinergiju logističkog sektora za odvoz šuta i ekološkog
              sektora za reciklažu metala, gradimo pouzdane odnose sa
              građevinskim firmama, preduzećima i građanima.
            </p>
          </div>

          <div className="space-y-28 sm:space-y-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20">
                    <Icon
                      name="Container"
                      className="w-5 h-5 text-brand-green"
                    />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-brand-green font-mono">
                    SEKTOR ZA LOGISTIKU I GRAĐEVINSKI OTPAD
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-heading font-black text-brand-green-dark tracking-tight leading-tight">
                  Profesionalno iznajmljivanje kontejnera za šut i otpad
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Za gradilišta, kućna renoviranja, čišćenje hala ili
                  raščišćavanje terena obezbeđujemo robusne čelične kontejnere
                  zapremine 5m³, 9m³, 25m³ i 30m³. Svesni smo da zakašnjenje u
                  isporuci kontejnera obustavlja rad čitavog tima radnika i
                  stvara finansijske gubitke.
                </p>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Zato smo kreirali logistički sistem sa satelitskom
                  koordinacijom i modernom dispečerskom službom. Kamioni stižu
                  na lokaciju u roku od 1 do 2 sata od poziva, postavljaju
                  sanduke pažljivo bez oštećenja asfalta ili behatona, a nakon
                  punjenja vršimo brzu zamenu ili čist odvoz na zvaničnu JKP
                  deponiju.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="space-y-1.5">
                    <span className="text-xs font-extrabold text-brand-green font-mono uppercase tracking-wider block">
                      ✓ Četiri Zapremine
                    </span>
                    <p className="text-xs text-gray-500 leading-normal">
                      Kontejneri od 5m³, 9m³, 25m³ i 30m³ za lak i težak
                      građevinski materijal.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-extrabold text-brand-green font-mono uppercase tracking-wider block">
                      ✓ Čista Dokumentacija
                    </span>
                    <p className="text-xs text-gray-500 leading-normal">
                      Prateći dokumenti i listovi o kretanju otpada u sistemu
                      PDV-a za firme.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <a
                    href="tel:+381604849062"
                    className="bg-brand-green hover:bg-brand-green-dark text-white font-black py-4 px-7 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-brand-green/15"
                  >
                    <Icon
                      name="Phone"
                      className="w-4 h-4 text-brand-gold animate-bounce"
                    />
                    <span>Naručite Kontejner: 060/4849-062</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="absolute inset-0 bg-brand-green/5 rounded-[2.5rem] -rotate-2 scale-105" />
                <img
                  src={wasteContainersImg}
                  alt="Ferologistik građevinski kontejneri"
                  className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-xl object-cover border border-gray-150"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 right-6 z-20 bg-brand-green text-white py-2 px-4 rounded-xl text-xs font-black tracking-wider uppercase font-mono shadow-md">
                  Uvek Dostupni Kontejneri
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange border border-brand-orange/20">
                    <Icon name="Zap" className="w-5 h-5 text-brand-orange" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-brand-orange font-mono">
                    SEKTOR ZA EKOLOGIJU I RECIKLAŽU METALA
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-heading font-black text-brand-green-dark tracking-tight leading-tight">
                  Profesionalni otkup sekundarnih sirovina po top cenama
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Naš namenski reciklažni plac vrši otkup i ekološko
                  zbrinjavanje svih vrsta obojenih i crnih metala. Otkupljujemo
                  bakar (I, II, III klasa), aluminijum, mesing, olovo, prohrom,
                  cink, stare auto akumulatore i kablove sa izolacijom.
                </p>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Posedujemo isključivo digitalne baždarene vage koje garantuju
                  apsolutnu tačnost merenja do poslednjeg grama, pred vašim
                  očima. Za veće količine (preko 1000kg) na vašu adresu šaljemo
                  kamion sa hidrauličnom dizalicom (grajferom) i radnicima za
                  brz i čist utovar. Isplata se vrši odmah na licu mesta.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="space-y-1.5">
                    <span className="text-xs font-extrabold text-brand-orange font-mono uppercase tracking-wider block">
                      ✓ Baždarene digitalne vage
                    </span>
                    <p className="text-xs text-gray-500 leading-normal">
                      Maksimalna transparentnost merenja i poštena
                      kategorizacija metala.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-extrabold text-brand-orange font-mono uppercase tracking-wider block">
                      ✓ Isplata odmah
                    </span>
                    <p className="text-xs text-gray-500 leading-normal">
                      Novac u gotovini na licu mesta ili brz prenos na račun za
                      firme.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <a
                    href="tel:+381655544125"
                    className="bg-brand-green hover:bg-brand-green-dark text-white font-black py-4 px-7 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-brand-green/15"
                  >
                    <Icon
                      name="Phone"
                      className="w-4 h-4 text-brand-gold animate-bounce"
                    />
                    <span>Pozovite za Otkup Metala: 065/5544-125</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-1 relative">
                <div className="absolute inset-0 bg-brand-orange/5 rounded-[2.5rem] rotate-2 scale-105" />
                <img
                  src={heroTruckImg}
                  alt="Ferologistik otkup sekundarnih sirovina"
                  className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-xl object-cover border border-gray-150"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 z-20 bg-brand-orange text-white py-2 px-4 rounded-xl text-xs font-black tracking-wider uppercase font-mono shadow-md">
                  Pouzdan prevoz i preuzimanje otpada
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50 border-b border-gray-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-4 py-1.5 rounded-full w-fit mx-auto block mb-4 font-mono">
              OPERATIVNI MODEL
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-heading font-black text-brand-green-dark tracking-tight leading-none">
              Jednostavan i maksimalno uigran proces rada
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-4 leading-relaxed max-w-xl mx-auto">
              Bez komplikovane birokratije i čekanja. Odaberite uslugu i
              pogledajte naš jednostavan tok saradnje.
            </p>

            <div className="flex gap-2 bg-white border border-gray-200/80 p-1.5 rounded-2xl w-fit mx-auto mt-8 shadow-sm">
              <button
                onClick={() => setActiveProcess("najam")}
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeProcess === "najam"
                    ? "bg-brand-green text-white shadow-md"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Iznajmljivanje kontejnera
              </button>
              <button
                onClick={() => setActiveProcess("otkup")}
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeProcess === "otkup"
                    ? "bg-brand-orange text-white shadow-md"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Otkup sirovina
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {activeProcess === "najam"
                ? najamSteps.map((s, idx) => (
                    <motion.div
                      key={"najam-" + idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25, delay: idx * 0.05 }}
                      className="bg-white rounded-3xl p-7 border border-gray-200/50 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
                    >
                      <div>
                        <span className="text-4xl font-mono font-black text-brand-green/20 group-hover:text-brand-green/35 transition-colors block mb-4">
                          {s.step}
                        </span>
                        <h4 className="font-heading font-extrabold text-gray-900 text-base leading-snug mb-2">
                          {s.title}
                        </h4>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                          {s.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-brand-green font-bold uppercase tracking-wider">
                        <span>KORAK {s.step}</span>
                        <Icon
                          name="ArrowRight"
                          className="w-3.5 h-3.5 text-brand-green group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </motion.div>
                  ))
                : otkupSteps.map((s, idx) => (
                    <motion.div
                      key={"otkup-" + idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25, delay: idx * 0.05 }}
                      className="bg-white rounded-3xl p-7 border border-gray-200/50 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
                    >
                      <div>
                        <span className="text-4xl font-mono font-black text-brand-orange/20 group-hover:text-brand-orange/35 transition-colors block mb-4">
                          {s.step}
                        </span>
                        <h4 className="font-heading font-extrabold text-gray-900 text-base leading-snug mb-2">
                          {s.title}
                        </h4>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                          {s.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-brand-orange font-bold uppercase tracking-wider">
                        <span>KORAK {s.step}</span>
                        <Icon
                          name="ArrowRight"
                          className="w-3.5 h-3.5 text-brand-orange group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </motion.div>
                  ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full w-fit mx-auto block mb-4 font-mono">
              ZAŠTO NAMA VERUJU?
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-heading font-black text-brand-green-dark tracking-tight leading-none">
              Po čemu se izdvajamo od konkurencije
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-4 leading-relaxed max-w-xl mx-auto">
              Standardi koje smo uveli postavili su visoke kriterijume u
              oblastima odvoza otpada i zbrinjavanja sirovina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-50/40 border border-emerald-100 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                  <Icon name="Globe" className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-heading font-black text-gray-900 text-xl leading-snug">
                  100% Ekološka Misija i JKP Deponovanje
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Strogo se protivimo divljim deponijama koje zagađuju okolinu.
                  Svaki kilogram građevinskog šuta, zemlje i otpada odvozimo
                  isključivo na gradsku deponiju. Sa nama ste u potpunosti
                  ekološki i zakonski obezbeđeni.
                </p>
              </div>
              <div className="border-t border-emerald-200/50 mt-8 pt-5 flex items-center gap-2 text-xs font-bold text-emerald-700 font-mono">
                <span>AKTIVNO ŠTITIMO OKOLINU</span>
                <Icon name="Check" className="w-4 h-4 text-emerald-700" />
              </div>
            </div>
            <div className="bg-blue-50/40 border border-blue-100 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg hover:shadow-blue-500/5 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100/80 border border-blue-200 text-brand-green flex items-center justify-center">
                  <Icon name="FileText" className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="font-heading font-black text-gray-900 text-xl leading-snug">
                  Kompletno Pravno i Zakonsko Pokriće
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Pravnim licima pružamo potpunu zakonsku dokumentaciju:
                  popunjavamo i overavamo prateće listove o kretanju otpada,
                  prilažemo zvanične ugovore o zbrinjavanju otpada, i izdajemo
                  e-Fakture za pravdanje gradilišta na tehničkom prijemu.
                </p>
              </div>
              <div className="border-t border-blue-200/50 mt-8 pt-5 flex items-center gap-2 text-xs font-bold text-brand-green font-mono">
                <span>SVE U SISTEMU PDV-A</span>
                <Icon name="Check" className="w-4 h-4 text-brand-green" />
              </div>
            </div>
            <div className="bg-amber-50/40 border border-amber-100 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg hover:shadow-amber-500/5 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100/80 border border-amber-200 text-brand-orange flex items-center justify-center">
                  <Icon name="Sparkles" className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-heading font-black text-gray-900 text-xl leading-snug">
                  Brza Isplata i Licencirana Merenja
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Kod otkupa sirovina, nema odloženog plaćanja i sumnjivih
                  procena 'od oka'. Merimo isključivo na baždarenim digitalnim
                  platformsama i kolskim vagama. Isplata se vrši istog trenutka
                  u gotovini ili prenosom na račun.
                </p>
              </div>
              <div className="border-t border-amber-200/50 mt-8 pt-5 flex items-center gap-2 text-xs font-bold text-brand-orange font-mono">
                <span>TAČNOST I POŠTENJE 100%</span>
                <Icon name="Check" className="w-4 h-4 text-brand-orange" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-brand-green-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1.2px,transparent_1.2px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gold mb-4 border border-white/5">
                  <Icon name={stat.icon} className="w-6 h-6 text-brand-gold" />
                </div>

                <span className="text-4xl sm:text-5.5xl font-heading font-black text-brand-gold tracking-tight font-mono">
                  {stat.value}
                </span>

                <span className="mt-2.5 text-xs sm:text-sm font-bold text-gray-100 tracking-wide">
                  {stat.label}
                </span>

                <span className="text-[10px] sm:text-xs text-gray-400 mt-1 leading-normal">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
}
