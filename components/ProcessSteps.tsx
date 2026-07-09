"use client";
import { motion } from "framer-motion";
import Icon from "./Icon";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      titleSr: "Poziv i Brza Ponuda",
      descSr: "Pozovite nas na 065/5544125 za instant fiksnu cenu.",
      icon: "Phone",
      color: "bg-blue-50 text-brand-green border-blue-100",
    },
    {
      number: "02",
      titleSr: "Dostava Istog Dana",
      descSr:
        "Naš iskusni vozač dovozi čisti i stabilni kontejner od 5m³, 9m³, 25m³ ili 30m³ na vašu lokaciju u roku od samo 1 do 2 sata.",
      icon: "Truck",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      number: "03",
      titleSr: "Punjenje bez Žurbe",
      descSr:
        "U standardnu cenu uključen je zakup do 3 dana (uz fleksibilan dogovor ako radovi traju duže). Punite kontejner vašim tempom.",

      icon: "Container",
      color: "bg-amber-50 text-brand-gold border-amber-100",
    },
    {
      number: "04",
      titleSr: "Odvoz i Deponovanje",
      descSr:
        "Dolazimo, podižemo kontejner i odvozimo otpad na zvaničnu gradsku deponiju uz poštovanje svih ekoloških propisa.",
      icon: "ShieldCheck",
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
  ];

  const handlePhoneClick = () => {
    window.location.href = "tel:+381604849062";
  };

  return (
    <section
      id="process"
      className="py-20 bg-gray-50/50 border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Icon name="Zap" className="w-3.5 h-3.5 text-brand-green" />
            <span>Kako funkcionisemo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-green-dark tracking-tight leading-tight"
          >
            Jednostavan Proces Najma Kontejnera
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600"
          >
            Bez skrivenih troškova i komplikovane papirologije. Sve završavamo
            uz jedan telefonski poziv.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gray-200/60 -translate-y-12 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all relative z-10 flex flex-col justify-between"
              id={`process-step-${idx}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${step.color}`}
                  >
                    <Icon name={step.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-mono font-bold text-gray-200 tracking-tight select-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-gray-900 text-lg mb-2">
                  {step.titleSr}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {step.descSr}
                </p>
              </div>

              {idx === 0 && (
                <button
                  onClick={handlePhoneClick}
                  className="mt-2 text-xs font-bold text-brand-green hover:text-brand-orange-dark flex items-center gap-1 group w-fit transition-colors"
                >
                  <span>Pozovi odmah</span>
                  <Icon
                    name="ArrowRight"
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white rounded-2xl border border-brand-green/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Icon name="Info" className="w-5 h-5 text-brand-green" />
            </div>
            <p className="text-sm text-gray-600 text-center sm:text-left">
              Dostava kontejnera je moguća i vikendom po dogovoru. Rezervišite
              na vreme!
            </p>
          </div>
          <button
            onClick={handlePhoneClick}
            className="bg-brand-green text-white hover:bg-brand-green-dark border border-transparent hover:border-white/10 px-6 py-2.5 rounded-xl font-semibold text-xs transition-all tracking-wider shadow-sm flex items-center gap-2 shrink-0 uppercase"
          >
            <Icon name="Phone" className="w-3.5 h-3.5" />
            <span>060 / 4849-062</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
