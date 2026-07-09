"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqsData } from "../data";
import Icon from "./Icon";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50 text-gray-900 scroll-mt-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Icon name="Info" className="w-3.5 h-3.5 text-brand-green" />
            <span>Odgovori na vaša pitanja</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-green-dark tracking-tight leading-tight">
            Često Postavljana Pitanja
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Prvi put iznajmljujete kontejner ili odvozite šut? Ovde možete
            pronaći sve važne detalje o našim uslugama i procedurama.
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                layout
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 hover:bg-gray-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-brand-green-dark">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`w-8 h-8 rounded-full bg-brand-green-dark/5 flex items-center justify-center text-brand-green-light flex-shrink-0 ${
                      isOpen ? "bg-brand-orange/10 text-brand-orange" : ""
                    }`}
                  >
                    <Icon name="ChevronDown" className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 sm:p-8 bg-gray-50/40 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-brand-green-dark to-brand-green p-8 rounded-3xl text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="text-left">
            <h3 className="font-heading font-bold text-lg text-white mb-1">
              Imate specifično pitanje
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Pozovite nas, tu smo da pomognemo.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+381655544125"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-transparent shadow-lg flex items-center gap-2 transition-colors"
          >
            <Icon name="Phone" className="w-4 h-4 text-white" />
            <span>065 / 554-4125</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
