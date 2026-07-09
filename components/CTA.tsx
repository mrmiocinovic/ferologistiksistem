import Icon from "./Icon";

const CTA = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-xs font-mono font-bold bg-brand-orange/10 text-brand-orange px-3.5 py-1.5 rounded-full mb-4 inline-block uppercase">
          STUPITE U KONTAKT SA NAMA
        </span>
        <h2 className="text-3xl sm:text-4.5xl font-heading font-black text-brand-green-dark tracking-tight leading-none mb-4">
          Započnimo saradnju već danas!
        </h2>

        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Pozovite nas slobodno telefonom za brzu narudžbinu građevinskih
          kontejnera ili ugovaranje najbolje cene za Vaše sekundarne sirovine.
          Stojimo Vam na raspolaganju.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
          <a
            href="tel:+381655544125"
            className="bg-brand-green hover:bg-brand-green-dark text-white font-black py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2 uppercase text-xs sm:text-sm tracking-wider shadow-brand-green/20 cursor-pointer"
          >
            <Icon
              name="Phone"
              className="w-4 h-4 text-brand-gold animate-bounce"
            />
            <span>065 / 554- 4125</span>
          </a>

          <a
            href="tel:+381604849062"
            className="bg-brand-green hover:bg-brand-green-dark text-white font-black py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2 uppercase text-xs sm:text-sm tracking-wider shadow-brand-green/20 cursor-pointer"
          >
            <Icon
              name="Phone"
              className="w-4 h-4 text-brand-gold animate-bounce"
            />
            <span>060 / 484-9062 </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
