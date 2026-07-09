"use client";

import { motion } from "motion/react";
import Icon from "./Icon";

export default function HomeHero() {
  const heroBgImg = "/ferologistik.jpg";

  return (
    <section
      id="home"
      className="relative min-h-screen bg-brand-green-dark text-white flex items-center justify-center pt-32 pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Ferologistik trucks and containers"
          className="w-full h-full object-cover object-center filter brightness-[0.15] saturate-50 scale-105 select-none"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/40 via-brand-green-dark/95 to-gray-50/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/10 via-transparent to-brand-green-dark/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-gray-300">
                Spremni za rad • Beograd i okolina
              </span>
            </span>
          </motion.div>
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-6xl lg:text-7.5xl tracking-tight leading-[1.08] text-white"
            >
              Ferologistik <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Sistem
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-normal"
            >
              Ferologistik Sistem obezbeđuje isporuku građevinskih kontejnera i
              otkup sekundarnih sirovina uz trenutnu isplatu. Vaš smo partner za
              efikasno upravljanje otpadom i reciklažu u Beogradu i okolini.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2"
          >
            <a
              href="tel:+381655544125"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/15 font-bold text-xs sm:text-sm px-9 py-5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2.5 uppercase tracking-wider backdrop-blur-md"
            >
              <Icon
                name="Phone"
                className="w-4.5 h-4.5 text-brand-gold animate-pulse"
              />
              <span>065/5544-125</span>
            </a>
            <a
              href="tel:+381604849062"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/15 font-bold text-xs sm:text-sm px-9 py-5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2.5 uppercase tracking-wider backdrop-blur-md"
            >
              <Icon
                name="Phone"
                className="w-4.5 h-4.5 text-brand-gold animate-pulse"
              />
              <span>060/4849-062</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.06] backdrop-blur-md rounded-2xl p-6 transition-all duration-300 text-center space-y-1">
                <span className="block text-3xl sm:text-4xl font-black text-brand-gold font-mono tracking-tight">
                  1 - 2 h
                </span>
                <span className="text-[11px] text-gray-300 font-extrabold uppercase tracking-widest block">
                  Ekspresna dostava
                </span>
                <p className="text-[11px] text-gray-400">
                  Dostava kontejnera istog dana
                </p>
              </div>
              <div className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.06] backdrop-blur-md rounded-2xl p-6 transition-all duration-300 text-center space-y-1">
                <span className="block text-3xl sm:text-4xl font-black text-teal-300 font-mono tracking-tight">
                  100%
                </span>
                <span className="text-[11px] text-gray-300 font-extrabold uppercase tracking-widest block">
                  Ekološki ispravno
                </span>
                <p className="text-[11px] text-gray-400">
                  Ugovori sa JKP deponijom
                </p>
              </div>
              <div className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.06] backdrop-blur-md rounded-2xl p-6 transition-all duration-300 text-center space-y-1">
                <span className="block text-3xl sm:text-4xl font-black text-blue-400 font-mono tracking-tight">
                  Bez čekanja
                </span>
                <span className="text-[11px] text-gray-300 font-extrabold uppercase tracking-widest block">
                  Kontejneri na stanju
                </span>
                <p className="text-[11px] text-gray-400">
                  Kapaciteti od 5m³, 9m³, 25m³ i 30m³
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
