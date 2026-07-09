"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Icon from "./Icon";
import CTA from "./CTA";

const wasteContainersImg =
  "/src/assets/images/waste_containers_1779895492948.png";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Najam Kontejnera 5m³",
    location: "Beograd (Zemun Batajnica)",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.location
    ) {
      alert("Molimo Vas unesite ime, email, broj telefona i lokaciju!");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Greška pri slanju forme");
      }

      setIsSubmitted(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceType: "Najam Kontejnera 5m³",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Došlo je do greške. Molimo pokušajte ponovo.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className=" bg-gray-50 text-gray-900"
    >
      <div className="relative h-[25rem] sm:h-[28rem] flex items-center justify-center overflow-hidden bg-brand-green-dark">
        <div className="absolute inset-0 z-0">
          <img
            src={wasteContainersImg}
            alt="Ferologistik containers"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90 animate-subtleZoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/90 via-brand-green-dark/80 to-brand-orange-dark/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight"
          >
            Kontaktirajte Nas
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 max-w-xl text-sm sm:text-base text-gray-200 leading-relaxed font-medium"
          >
            Rezervišite građevinske kontejnere od 5m³, 9m³, 25m³ ili 30m³ za šut
            na lokacijama u Beogradu i okolini u roku od samo nekoliko minuta.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
              <h3 className="font-heading font-extrabold text-lg text-brand-green-dark tracking-tight border-b border-gray-100 pb-3">
                Generalne Informacije
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-brand-green">
                    <Icon name="Clock" className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 leading-snug">
                      Dostava kontejnera
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                      Dovozimo kontejnere i radnim danima i vikendom. Na upit
                      dostupne i noćne isporuke za izbegavanje gradske gužve.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 text-purple-600">
                    <Icon
                      name="ShieldCheck"
                      className="w-5 h-5 text-purple-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 leading-snug">
                      Ugovori sa Pravnim Licima
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                      Pružamo kompletne fiskalne i PDV račune, ugovore sa JKP
                      deponijom, te potvrde o bezbednom zbrinjavanju
                      građevinskog otpada.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-brand-gold">
                    <Icon name="MapPin" className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 leading-snug">
                      Adresa i Sedište
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                      <strong>Ferologistik Sistem</strong>
                      <br />
                      Majora Zorana Radosavljevića 323, Batajnica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/60 p-8 sm:p-12 shadow-sm flex flex-col justify-between relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-3 py-1 rounded-full w-fit block">
                Formular za upit
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-green-dark tracking-tight">
                Pošaljite Zahtev za Rezervaciju
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed -mt-2">
                Popunite brzi obrazac i mi ćemo Vas pozvati u roku od 10 minuta.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Ime i Prezime *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full text-sm p-4 border border-gray-200 rounded-xl focus:border-brand-orange focus:outline-none bg-gray-50/50 hover:bg-white font-medium focus:bg-white transition-all"
                    placeholder="npr. Marko Marković"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Broj Telefona *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full text-sm p-4 border border-gray-200 rounded-xl focus:border-brand-orange focus:outline-none bg-gray-50/50 hover:bg-white font-medium focus:bg-white transition-all"
                    placeholder={"npr. 0641234567"}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Email adresa *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-sm p-4 border border-gray-200 rounded-xl"
                  placeholder="vas@email.com"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Potreban Kontejner
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full text-sm p-4 border border-gray-200 rounded-xl focus:border-brand-orange focus:outline-none bg-white font-medium"
                  >
                    <option value="Najam Kontejnera 5m³">
                      Najam Kontejnera 5m³
                    </option>
                    <option value="Najam Kontejnera 9m³">
                      Najam Kontejnera 9m³
                    </option>
                    <option value="Najam Kontejnera 25m³">
                      Najam Kontejnera 25m³
                    </option>
                    <option value="Najam Kontejnera 30m³">
                      Najam Kontejnera 30m³
                    </option>
                    <option value="Dugoročni Zakup za Firme">
                      Dugoročni Zakup za Firme
                    </option>
                    <option value="Kontejneri za Kabasti Otpad">
                      Kontejner za Kabasti Otpad
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Lokacija dostave
                  </label>

                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full text-sm p-4 border border-gray-200 rounded-xl focus:border-brand-orange focus:outline-none bg-white font-medium"
                    placeholder="npr. Batajnica, Zemun, Novi Beograd..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Poruka (Namena kontejnera, trajanje najma, prilaz lokaciju...)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full text-sm p-4 border border-gray-200 rounded-xl focus:border-brand-orange focus:outline-none bg-gray-50/50 hover:bg-white font-medium focus:bg-white transition-all resize-none"
                  placeholder="Opišite nam namenu kontejnera, željeni datum dostave, očekivani broj dana držanja ili specifičnosti okoline..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-base py-4.5 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wide"
              >
                <Icon
                  name="Calendar"
                  className="w-5 h-5 text-white animate-pulse"
                />
                <span>Rezerviši Građevinski Kontejner</span>
              </button>
            </form>
            {isSubmitted && (
              <div className="absolute inset-0 bg-brand-green-dark/95 backdrop-blur-sm rounded-3xl z-30 flex items-center justify-center p-6 text-white animate-fadeIn">
                <div className="text-center max-w-sm flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center mb-6 shadow-xl">
                    <Icon name="Check" className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2 leading-none">
                    Zahtev Uspešno Poslat!
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 mt-2">
                    Primili smo Vaš upit i pozvaćemo Vas na uneti broj telefona
                    radi potvrde adrese u roku od narednih 10 minuta.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-6 py-2.5 rounded-lg border border-white/20 transition-all cursor-pointer"
                  >
                    Vrati se na obrazac
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading font-black text-2xl text-brand-green-dark mb-2">
              Naša Centralna Kancelarija
            </h3>
            <p className="text-sm text-gray-500">
              Nalazimo se u Batajnici. Pogledajte detaljnu mapu i uputstva za
              prilaz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-12 rounded-3xl overflow-hidden border border-gray-200/60 shadow-lg min-h-[350px] relative">
              <iframe
                src="https://www.google.com/maps?q=Ferologistik+Sistem+DOO,+Majora+Zorana+Radosavljevi%C4%87a+323,+Beograd&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </motion.div>
  );
}
