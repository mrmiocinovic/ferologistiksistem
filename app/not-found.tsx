"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";
import Link from "next/link";

const heroTruckImg = "/src/assets/images/hero_truck_1779895437793.png";

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-gray-50 text-gray-900 font-sans selection:bg-brand-orange selection:text-white"
    >
      <div className="relative h-[25rem] sm:h-[28rem] flex items-center justify-center overflow-hidden bg-brand-green-dark">
        <div className="absolute inset-0 z-0">
          <img
            src={heroTruckImg}
            alt="Ferologistik kamioni i kontejneri"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/95 via-brand-green-dark/85 to-brand-orange-dark/35 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
          <nav className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider uppercase text-brand-gold bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            <Link href="/" className="hover:text-white transition-colors">
              Početna
            </Link>
            <span>/</span>
            <span className="text-gray-300 font-medium">Greška 404</span>
          </nav>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight"
          >
            Stranica nije pronađena (404)
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200 leading-relaxed font-medium"
          >
            Izgleda da je link koji ste pratili neispravan ili je ova stranica u
            međuvremenu uklonjena sa našeg servera.
          </motion.p>
        </div>
      </div>
      <section className="py-24 bg-white relative z-10 -mt-10 rounded-t-[3rem] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex relative items-center justify-center">
              <div className="absolute inset-0 bg-brand-orange/10 rounded-full blur-2xl transform scale-150 animate-pulse" />
              <div className="relative w-32 h-32 rounded-3xl bg-brand-orange/10 border border-brand-orange/20 flex flex-col items-center justify-center text-brand-orange shadow-lg">
                <span className="font-mono text-3xl font-black tracking-tight leading-none text-brand-orange mb-1">
                  404
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green-dark">
                  Prazan kontejner
                </span>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-brand-green border border-white flex items-center justify-center shadow-md text-white">
                  <span
                    className="animate-spin flex items-center justify-center"
                    style={{ animationDuration: "3s" }}
                  >
                    <Icon name="Wrench" className="w-5 h-5 text-white" />
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-black text-brand-green-dark tracking-tight mt-6">
              Da li je ova stranica završila u šutu?
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Vratite se na ispravnu lokaciju ili izaberite neku od naših
              glavnih ekoloških usluga ispod.
            </p>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => console.log("home")}
                className="bg-brand-green hover:bg-brand-green-dark text-white font-black py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2 uppercase text-xs sm:text-sm tracking-wider cursor-pointer"
              >
                <Icon name="Home" className="w-4 h-4 text-brand-gold" />
                <Link href="/">Idi na početnu stranu</Link>
              </button>
            </div>
          </div>

          <div className="h-px bg-gray-100 my-16" />
          <div>
            <h3 className="font-heading font-black text-gray-900 text-base sm:text-lg mb-8 text-center uppercase tracking-wider">
              Brze prečice do naših usluga:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Link
                href="/kontejneri"
                className="bg-gray-50 hover:bg-white border border-gray-150 rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:shadow-md hover:border-brand-green/30 text-center sm:text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <Icon name="Container" className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-black text-gray-900 text-sm sm:text-base group-hover:text-brand-green transition-colors">
                  Iznajmljivanje Kontejnera
                </h4>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Profesionalni kontejneri za građevinski šut od 5m³, 9m³, 25m³
                  i 30m³.
                </p>
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider inline-flex items-center gap-1 mt-4">
                  Saznaj više{" "}
                  <Icon
                    name="ArrowRight"
                    className="w-3 h-3 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                href="/otkup"
                className="bg-gray-50 hover:bg-white border border-gray-150 rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:shadow-md hover:border-brand-orange/30 text-center sm:text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <Icon name="Coins" className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-black text-gray-900 text-sm sm:text-base group-hover:text-brand-orange transition-colors">
                  Otkup Sirovina
                </h4>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Isplata odmah za bakar, aluminijum, mesing, olovo, akumulatore
                  i gvožđe.
                </p>
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider inline-flex items-center gap-1 mt-4">
                  Saznaj više{" "}
                  <Icon
                    name="ArrowRight"
                    className="w-3 h-3 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                href="/kontakt"
                className="bg-gray-50 hover:bg-white border border-gray-150 rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:shadow-md hover:border-brand-green-dark/35 text-center sm:text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green-dark/10 text-brand-green-dark flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <Icon name="MapPin" className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-black text-gray-900 text-sm sm:text-base group-hover:text-brand-green-dark transition-colors">
                  Kontakt i Lokacija
                </h4>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Stojimo Vam na raspoloaganju
                </p>
                <span className="text-[10px] font-bold text-brand-green-dark uppercase tracking-wider inline-flex items-center gap-1 mt-4">
                  Saznaj više{" "}
                  <Icon
                    name="ArrowRight"
                    className="w-3 h-3 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </motion.div>
  );
}
