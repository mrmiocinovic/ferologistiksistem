import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ferologistik Sistem DOO",
      description: "Upravljanje otpadom i reciklaža",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Batajnica",
        addressCountry: "RS",
      },
      areaServed: "Beograd",
    }),
  }}
/>;

export const metadata: Metadata = {
  title:
    "Ferologistik Sistem DOO | Otkup Sekundarnih Sirovina | Iznajmljivanje Gradjevinskih Kontejnera",
  description:
    "Ferologistik Sistem DOO pruža usluge upravljanja otpadom, otkupa sekundarnih sirovina i reciklaže na teritoriji Beograda i okoline kao i iznajmljivanje gradjevinskih kontejnera.",
  keywords: [
    "otkup otpada",
    "reciklaža Beograd",
    "otpad Batajnica",
    "otpad Zemun",
    "sekundarne sirovine",
    "upravljanje otpadom",
    "komunalne usluge",
    "gradjevinski kontejneri",
    "iznajmljivanje gradjevinskih kontejnera",
  ],
  authors: [{ name: "Ferologistik Sistem DOO" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ferologistik Sistem DOO | Reciklaža i otkup otpada",
    description: "Profesionalne usluge upravljanja otpadom i reciklaže.",
    url: "https://ferologistiksistem.com",
    siteName: "Ferologistik Sistem DOO",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "https://ferologistiksistem.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ferologistik Sistem DOO",
      },
    ],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
