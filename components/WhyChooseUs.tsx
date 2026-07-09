"use client";

import { motion } from "framer-motion";
import { featuresData } from "../data";
import Icon from "./Icon";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 bg-white text-gray-900 scroll-mt-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col space-y-6"
          >
            <div className="inline-flex items-center gap-1 bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider max-w-fit">
              <span>Zašto izabrati nas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-green-dark tracking-tight leading-tight">
              Garantujemo Pouzdanost i Zakonitu Uslugu
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Kao registrovana firma Ferologistik Sistem nudi profesionalnu i
              sigurnu saradnju u oblasti zbrinjavanja građevinskog otpada.
            </p>

            <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-green-dark">
                    100% Legalno odlaganje
                  </h4>
                  <p className="text-xs text-gray-500">
                    Posedujemo sve neophodne sertifikate.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-green-dark">
                    Uvek dostupni kamioni
                  </h4>
                  <p className="text-xs text-gray-400">
                    Više vozila spremnih za hitne terene.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="lg:col-span-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {featuresData.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 80 },
                    },
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    boxShadow: "0 10px 20px -10px rgba(0,0,0,0.15)",
                  }}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 hover:bg-white hover:border-brand-green/10 transition-all duration-300 flex flex-col items-start gap-4 cursor-pointer"
                >
                  <div className="p-3 bg-white shadow-sm border border-gray-100 rounded-xl text-brand-orange">
                    <Icon
                      name={feature.icon}
                      className="w-6 h-6 text-brand-orange"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brand-green-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
