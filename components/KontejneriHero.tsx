import { motion } from "framer-motion";
import Link from "next/link";

const KontejneriHero = () => {
  return (
    <div className="relative h-[25rem] sm:h-[28rem] flex items-center justify-center overflow-hidden bg-brand-green-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/95 via-brand-green-dark/85 to-brand-orange-dark/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <nav className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider uppercase text-brand-gold bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          <Link href="/" className="hover:text-white transition-colors">
            Početna
          </Link>
          <span>/</span>
          <span className="text-gray-300">Iznajmljivanje Kontejnera</span>
        </nav>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight"
        >
          Iznajmljivanje Kontejnera
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200 leading-relaxed font-medium"
        >
          Vršimo iznajmljivanje građevinskih kontejnera za šut, građevinski i
          kabasti otpad na teritoriji Beograda i okoline. Brza dostava,
          preuzimanje po dogovoru i pouzdana usluga po najpovoljnijim cenama.
        </motion.p>
      </div>
    </div>
  );
};

export default KontejneriHero;
