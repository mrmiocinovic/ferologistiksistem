import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ferologistiksistem.com",
      lastModified: new Date(),
    },
    {
      url: "https://ferologistiksistem.com/kontakt",
      lastModified: new Date(),
    },
    {
      url: "https://ferologistiksistem.com/otkup",
      lastModified: new Date(),
    },
    {
      url: "https://ferologistiksistem.com/kontejneri",
      lastModified: new Date(),
    },
    {
      url: "https://ferologistiksistem.com/o-nama",
      lastModified: new Date(),
    },
  ];
}
