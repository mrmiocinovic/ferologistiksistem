import KontaktPage from "@/components/Contact";
import { Metadata } from "next";

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ferologistik Sistem DOO",
      description:
        "Otkup sekundarnih sirovina, upravljanje otpadom i iznajmljivanje građevinskih kontejnera.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Batajnica",
        addressRegion: "Beograd",
        addressCountry: "RS",
      },
      areaServed: ["Beograd", "Batajnica", "Zemun", "Surčin", "Novi Beograd"],
      serviceType: [
        "Otkup sekundarnih sirovina",
        "Reciklaža",
        "Iznajmljivanje građevinskih kontejnera",
      ],
    }),
  }}
/>;

export const metadata: Metadata = {
  title: "Kontakt | Ferologistik Sistem DOO",
  description:
    "Kontaktirajte Ferologistik Sistem DOO za otkup sekundarnih sirovina, upravljanje otpadom i iznajmljivanje građevinskih kontejnera u Beogradu i okolini.",
  keywords: [
    "kontakt Ferologistik Sistem",
    "otkup otpada kontakt",
    "reciklaža Beograd kontakt",
    "kontejneri za šut Beograd",
    "upravljanje otpadom Batajnica",
    "sekundarne sirovine kontakt",
  ],
  openGraph: {
    title: "Kontakt | Ferologistik Sistem DOO",
    description:
      "Pozovite ili pošaljite upit kompaniji Ferologistik Sistem DOO za usluge reciklaže, otkupa otpada i iznajmljivanja kontejnera.",
    type: "website",
    locale: "sr_RS",
  },
  alternates: {
    canonical: "https://ferologistiksistem.com/kontakt",
  },
};

export default function Kontakt() {
  return <KontaktPage />;
}
