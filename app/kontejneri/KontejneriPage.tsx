import CTA from "@/components/CTA";
import KontejneriHero from "@/components/KontejneriHero";
import ProcessSteps from "@/components/ProcessSteps";
import WasteGuide from "@/components/WasteGuide";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";

const KontejneriPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 text-gray-900"
    >
      <KontejneriHero />
      <ProcessSteps />
      <WhyChooseUs />
      <WasteGuide />
      <CTA />
    </motion.div>
  );
};

export default KontejneriPage;
