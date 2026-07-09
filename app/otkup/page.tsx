import { Metadata } from "next";
import OtkupPage from "./OtkupPage";

export const metadata: Metadata = {
  title: "Otkup sekundarnih sirovina | Ferologistik Sistem DOO",
  description:
    "Ferologistik Sistem DOO vrši otkup sekundarnih sirovina kao što su metalni otpad, gvožđe, aluminijum i druge vrste reciklabilnog materijala. Brza i pouzdana usluga u Beogradu i okolini.",
  keywords: [
    "otkup sekundarnih sirovina",
    "otkup gvožđa Beograd",
    "otkup metala",
    "reciklaža metala",
    "otpad Beograd",
    "sekundarne sirovine Batajnica",
  ],
  openGraph: {
    title: "Otkup sekundarnih sirovina | Ferologistik Sistem DOO",
    description:
      "Pouzdan otkup metala i sekundarnih sirovina uz profesionalnu uslugu i fer uslove.",
    type: "website",
    locale: "sr_RS",
  },
  alternates: {
    canonical: "https://ferologistiksistem.com/otkup",
  },
};

export const Otkup = () => {
  return <OtkupPage />;
};
