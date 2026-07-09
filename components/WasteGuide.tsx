import { motion } from "motion/react";
import Icon from "./Icon";

export default function WasteGuide() {
  const allowed = [
    {
      titleSr: "Težak Građevinski Šut",
      itemsSr: [
        "Beton, armirani beton, cigle, malter",
        "Keramika, pločice, isklesani zidovi",
        "Zemlja, pesak, šljunak, kamen",
      ],
    },
    {
      titleSr: "Stolarija i Drvni Otpad",
      itemsSr: [
        "Grede, daske, stari krovni crep i građa",
        "Drveni ramovi prozora i vrata bez stakla",
        "Palete, gajbice, iverica, nameštaj",
      ],
    },
    {
      titleSr: "Kabasti kućni i placni otpad",
      itemsSr: [
        "Dušeci, ormari, kauči, fotelje",
        "Plastika, najloni, kartonske kutije",
        "Grane, trava, korenje, dvorišno šiblje",
      ],
    },
  ];

  const prohibited = [
    {
      titleSr: "Opasne Materije i Tečnosti",
      itemsSr: [
        "Motorna ulja, maziva, goriva",
        "Farbe, lakovi, kiseline, razređivači",
        "Zapaljive materije i eksplozivi",
      ],
    },
    {
      titleSr: "Zabranjeni Delovi i e-Otpad",
      itemsSr: [
        "Automobilske gume, akumulatori",
        "Karoserijski delovi, motori",
        "Akumulatorske baterije i opasna elektronika",
      ],
    },
    {
      titleSr: "Zabranjeni Azbest i Otpad JKP",
      itemsSr: [
        "Azbestne salonit ploče (zahteva poseban tretman)",
        "Klanični i životinjski otpad",
        "Medicinski otpad, špricevi i lekovi",
      ],
    },
  ];

  return (
    <section id="waste-guide" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Icon name="Info" className="w-3.5 h-3.5 text-brand-green" />
            <span>Eko priručnik za kontejner</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-green-dark tracking-tight leading-tight"
          >
            Šta Sme, a Šta Ne Sme u Kontejner?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600"
          >
            Molimo vas da pre utovara proverite spisak dozvoljenih materijala
            kako bismo osigurali zakonito odlaganje otpada na gradskoj deponiji.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-emerald-50/30 rounded-3xl border border-emerald-500/10 p-8 flex flex-col space-y-6"
            id="allowed-waste-card"
          >
            <div className="flex items-center gap-3 border-b border-emerald-500/10 pb-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Icon name="Check" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-gray-900 text-xl">
                  DOZVOLJENO ZA UTOVAR
                </h3>
                <span className="text-xs text-emerald-600 font-semibold uppercase tracking-wider font-mono">
                  Odlaže se na gradskoj deponiji
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {allowed.map((cat, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-heading font-bold text-gray-900 text-sm tracking-wide uppercase">
                    {cat.titleSr}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2">
                    {cat.itemsSr.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600"
                      >
                        <span className="text-emerald-500 shrink-0 mt-1">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-rose-50/20 rounded-3xl border border-rose-500/10 p-8 flex flex-col space-y-6"
            id="prohibited-waste-card"
          >
            <div className="flex items-center gap-3 border-b border-rose-500/10 pb-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                <Icon name="X" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-gray-900 text-xl">
                  STROGO ZABRANJENO
                </h3>
                <span className="text-xs text-rose-500 font-semibold uppercase tracking-wider font-mono">
                  Zabranjeno po ekološkim propisima JKP
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {prohibited.map((cat, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-heading font-bold text-rose-950/80 text-sm tracking-wide uppercase">
                    {cat.titleSr}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2">
                    {cat.itemsSr.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600"
                      >
                        <span className="text-rose-400 shrink-0 mt-1">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 border border-gray-100 p-4 rounded-xl text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed"
        >
          <span>
            <strong>Napomena:</strong> Mešanje zabranjenih materijala sa
            građevinskim šutom može dovesti do naplate dodatne ekološke kazne od
            strane komunalnih sanitarnih inspektora ili deponije JKP Čistoća.
            Ukoliko ste u nedoumici o sastavu vašeg otpada, slobodno unapred
            pitajte našeg posvećenog dispečera telefonom.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
