"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Icon from "./Icon";
import { servicesData } from "@/data";

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleContactClick = (serviceTitle: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });

      // Attempt to auto-focus or preset service in contact form
      const selectElement = document.getElementById(
        "service-select",
      ) as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = serviceTitle;
        // Trigger a change event so React state updates
        const event = new Event("change", { bubbles: true });
        selectElement.dispatchEvent(event);
      }
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-gray-50 text-gray-900 scroll-mt-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1 bg-brand-green/10 text-brand-green-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Icon name="Wrench" className="w-3.5 h-3.5 text-brand-orange" />
            <span>Profesionalne usluge najma kontejnera</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-green-dark tracking-tight leading-tight">
            Iznajmljivanje Kontejnera
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Pružamo brzu i pouzdanu uslugu isporuke kontejnera u Beogradu i
            okolini
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => {
            const isSelected = selectedService === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full relative overflow-hidden transition-shadow duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-green" />
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-center text-brand-green-light">
                        <Icon
                          name={service.icon}
                          className="w-6 h-6 text-brand-green-light"
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-brand-green-dark">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 flex-shrink-0">
                            <Icon
                              name="Check"
                              className="w-3.5 h-3.5 text-emerald-600"
                            />
                          </div>
                          <span className="text-gray-700 leading-tight">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  <motion.div
                    key="details-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-brand-green-dark to-brand-green text-white p-6 border-t border-brand-green border-dashed overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex gap-3 justify-end">
                      <a
                        href="tel:+381655331334"
                        className="bg-brand-orange hover:bg-brand-orange-dark text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-1.5 shadow"
                      >
                        <Icon name="Phone" className="w-3 h-3 text-white" />
                        <span>Nazovi</span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
