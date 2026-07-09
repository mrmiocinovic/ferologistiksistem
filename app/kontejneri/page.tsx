import { Metadata } from "next";
import KontejneriPage from "./KontejneriPage";

export const metadata: Metadata = {
  title: "Iznajmljivanje građevinskih kontejnera | Ferologistik Sistem DOO",
  description:
    "Iznajmljivanje građevinskih kontejnera za odlaganje šuta i građevinskog otpada u Beogradu i okolini. Brza isporuka kontejnera za renoviranje, gradnju i čišćenje objekata.",
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
    title: "Iznajmljivanje građevinskih kontejnera | Ferologistik Sistem DOO",
    description:
      "Kontejneri za građevinski otpad, šut i odvoz materijala na teritoriji Beograda.",
    type: "website",
    locale: "sr_RS",
  },
  alternates: {
    canonical: "https://ferologistiksistem.com/kontejneri",
  },
};

const Kontejneri = () => {
  return <KontejneriPage />;
};

export default Kontejneri;
