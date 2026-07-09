import { Metadata } from "next";
import AboutPage from "./ONamaPage";

export const metadata: Metadata = {
  title: "O nama | Ferologistik Sistem DOO",
  description:
    "Saznajte više o kompaniji Ferologistik Sistem DOO. Bavimo se upravljanjem otpadom, otkupom sekundarnih sirovina i pružanjem usluga za pravna i fizička lica na teritoriji Beograda kao i iznajmljivanjem gradjevinskih kontejnera.",
  keywords: [
    "Ferologistik Sistem DOO",
    "upravljanje otpadom Beograd",
    "reciklaža Beograd",
    "otkup sekundarnih sirovina",
    "otpad Batajnica",
    "iznajmljivanje građevinskih kontejnera",
    "kontejner za šut Beograd",
    "odvoz šuta",
    "građevinski otpad",
    "kontejneri Batajnica",
    "odvoz otpada Beograd",
  ],
  openGraph: {
    title: "O nama | Ferologistik Sistem DOO",
    description:
      "Profesionalna kompanija za upravljanje otpadom, reciklažu i otkup sekundarnih sirovina.",
    type: "website",
    locale: "sr_RS",
  },
  alternates: {
    canonical: "https://ferologistiksistem.com/o-nama",
  },
};

export const ONama = () => {
  return <AboutPage />;
};
