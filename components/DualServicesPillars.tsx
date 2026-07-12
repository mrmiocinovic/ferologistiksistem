import { motion } from "motion/react";
import Icon from "./Icon";
import Link from "next/link";

export default function DualServicesPillars() {
  return (
    <section
      id="services-overview"
      className="py-20 bg-gray-50 text-gray-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
            Dve Glavne Delatnosti
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-green-dark tracking-tight leading-tight">
            Rešenja za sve Vaše potrebe u pogledu otpada i sirovina
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Bilo da renovirate prostor i potreban Vam je kontejner za
            građevinski šut, ili želite najbolje uslove za otkup sekundarnih
            sirovina, tu smo za VAS.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/60 flex flex-col justify-between shadow-lg text-gray-900 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-full" />
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest bg-brand-orange/15 text-brand-orange-dark border border-brand-orange/20 px-3 py-1.5 rounded-full">
                  ORGANIZACIJA ŠUTA I OTPADA
                </span>
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center text-brand-orange">
                  <Icon name="Truck" className="w-6 h-6 text-brand-orange" />
                </div>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-brand-green-dark tracking-tight leading-tight mb-3">
                Iznajmljivanje Kontejnera
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Brza isporuka kvalitetnih čeličnih kontejnera kapaciteta 5m³,
                9m³, 25m³ i 30m³ za građevinski šut, otpad, zemlju i kabasti
                građevinski materijal.
              </p>
              <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-gray-700 font-semibold">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-orange-50 p-1">
                    <Icon
                      name="Check"
                      className="w-3.5 h-3.5 text-brand-orange shrink-0"
                    />
                  </div>
                  <span>
                    Kontejneri od 5m³, 9m³, 25m³ i 30m³ za sve vrste otpada
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-orange-50 p-1">
                    <Icon
                      name="Check"
                      className="w-3.5 h-3.5 text-brand-orange shrink-0"
                    />
                  </div>
                  <span>Dostava na adresu u roku od 1-2 sata</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-orange-50 p-1">
                    <Icon
                      name="Check"
                      className="w-3.5 h-3.5 text-brand-orange shrink-0"
                    />
                  </div>
                  <span>Ugovori sa JKP deponijom (100% legalno)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-orange-50 p-1">
                    <Icon
                      name="Check"
                      className="w-3.5 h-3.5 text-brand-orange shrink-0"
                    />
                  </div>
                  <span>Mogućnost ekspresne zamene 'puno za prazno'</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontejneri"
                className="flex-grow bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-xs py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Icon name="Calendar" className="w-4 h-4 text-white" />
                <span>Pogledaj</span>
              </Link>

              <Link
                href="tel:+381604849062"
                className="bg-gray-50 hover:bg-gray-100 text-gray-700 justify-center border border-gray-200 rounded-xl px-6 py-4 text-xs font-bold transition-all text-center flex gap-2 uppercase items-center shadow-md"
              >
                <Icon name="Phone" className="w-3.5 h-3.5" />
                Pozovi
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-green-dark text-white rounded-3xl p-8 sm:p-10 border border-brand-gold/20 flex flex-col justify-between shadow-lg hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full" />
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-3 py-1.5 rounded-full">
                  RECIKLAŽA & MAKSIMALNA ISPLATA
                </span>
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Icon name="Coins" className="w-6 h-6 text-brand-gold" />
                </div>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-3">
                Otkup Sekundarnih Sirovina
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Vršimo otkup bakra, mesinga, aluminijuma, akumulatora, olova,
                prohroma i gvožđa po najpovoljnijim berzanskim cenama u
                Vojvodini.
              </p>
              <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-gray-200 font-semibold">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-brand-gold/10 p-1">
                    <Icon
                      name="Check"
                      className="w-3.5 h-3.5 text-brand-gold shrink-0"
                    />
                  </div>
                  <span>Isplata novca ODMAH na licu mesta (keš ili račun)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-brand-gold/10 p-1">
                    <Icon
                      name="Check"
                      className="w-3.5 h-3.5 text-brand-gold shrink-0"
                    />
                  </div>
                  <span>
                    Izuzetno precizno i sertifikovano digitalno merenje
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-brand-gold/10 p-1">
                    <Icon
                      name="Check"
                      className="w-3.5 h-3.5 text-brand-gold shrink-0"
                    />
                  </div>
                  <span>Ekološki ispravan tretman</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-brand-gold/10 p-1">
                    <Icon
                      name="Check"
                      className="w-3.5 h-3.5 text-brand-gold shrink-0"
                    />
                  </div>
                  <span>
                    Sigurna i transparentna saradnja bez skrivenih troškova
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/otkup"
                className="flex-grow bg-brand-gold hover:bg-amber-600 text-brand-green-dark font-black text-xs py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <Icon
                  name="Zap"
                  className="w-4 h-4 text-brand-green-dark animate-bounce"
                />
                <span>Pogledaj</span>
              </Link>
              <a
                href="tel:+381655544125"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-6 py-4 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Icon name="Phone" className="w-3.5 h-3.5" />
                <span>Pozovi</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
