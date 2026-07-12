import {
  Service,
  Feature,
  PricingPackage,
  Testimonial,
  FAQItem,
} from "./types";

export const servicesData: Service[] = [
  {
    id: "rubble-removal",
    title: "Građevinski radovi",
    icon: "Truck",
    shortDesc:
      "Obezbeđujemo dovoz i odvoz kontejnera za sve vrste građevinskog otpada nastalog tokom izgradnje, rušenja i uređenja objekata",
    description:
      "Brzo dopremamo kontejner na željenu lokaciju i preuzimamo ga po završetku punjenja. Na taj način gradilište ostaje uredno, a otpad se uklanja bez dodatne organizacije i troškova.",
    features: [
      "Građevinski šut",
      "Cigla, beton i malter",
      "Zemlja i iskopani materijal",
      "Keramika i sanitarije",
      "Otpad sa gradilišta",
    ],
  },
  {
    id: "container-rental",
    title: "Adaptacije i renoviranje",
    icon: "Container",
    shortDesc:
      "Kontejneri su idealni za renoviranje stanova, kuća, lokala i poslovnih prostora kada nastaju veće količine otpada.",
    description:
      "Bez obzira na veličinu projekta, obezbeđujemo kontejner odgovarajućeg kapaciteta i preuzimamo ga u dogovorenom terminu. Tako se otpad uklanja brzo i bez nepotrebnog zadržavanja.",
    features: [
      "Šut od rušenja zidova",
      "Stare pločice i sanitarije",
      "Dotrajala stolarija",
      "Stari nameštaj",
      "Mešoviti otpad od renoviranja",
    ],
  },
  {
    id: "demolition",
    title: "Za građane i firme",
    icon: "Hammer",
    shortDesc:
      "Naše usluge namenjene su privatnim licima, preduzetnicima, firmama i svima kojima je potreban pouzdan odvoz većih količina otpada.",
    description:
      "Nudimo fleksibilne termine isporuke i preuzimanja kontejnera, uz profesionalnu i pouzdanu uslugu. Cilj nam je da odlaganje i odvoz otpada bude što jednostavniji za svakog korisnika.",
    features: [
      "Privatni objekti i domaćinstva",
      "Poslovni prostori",
      "Lokali i kancelarije",
      "Građevinske firme",
      "Jednokratni i redovni angažmani",
    ],
  },
  //   {
  //     id: "waste-disposal",
  //     title: "Construction Waste Disposal",
  //     titleSr: "Zbrinjavanje Građevinskog Otpada",
  //     icon: "Trash2",
  //     shortDesc:
  //       "Legal transport of insulation, timber, metal, plastic, and cardboard.",
  //     shortDescSr:
  //       "Zakonit odvoz mineralne vune, drveta, metala, plastike i kartona.",
  //     description:
  //       "Construction sites generate more than just bricks. We sort and legally transport all other renovation waste categories - old insulation, roof tiles, plasterboards, packaging materials, and scrap metals to designated recyclers.",
  //     descriptionSr:
  //       "Gradilišta ne stvaraju samo šut. Sortiramo i zakonski odvozimo sve ostale kategorije građevinskog otpada - staru izolaciju (vuna, stiropor), gips-karton ploče, ambalažu, drvnu građu i otpadni metal.",
  //     features: [
  //       "Sorting and categorization at origin",
  //       "Delivery of official waste dumping records upon request",
  //       "Cooperation with local ecological recycling centres",
  //       "Perfect solution for building companies and corporate builders",
  //     ],
  //     featuresSr: [
  //       "Sortiranje i kategorizacija otpada",
  //       "Izdavanje zvanične potvrde o odlaganju za firme",
  //       "Ugovorna saradnja sa reciklažnim centrima",
  //       "Idealno rešenje za građevinske firme i privatne investitore",
  //     ],
  //   },
  //   {
  //     id: "yard-cleaning",
  //     title: "Construction Site & Yard Cleaning",
  //     titleSr: "Čišćenje Gradilišta i Dvorišta",
  //     icon: "Sparkles",
  //     shortDesc: "Complete sorting and loading of debris, vegetation, and soil.",
  //     shortDescSr:
  //       "Kompletno rasčišćavanje terena od korova, stare zemlje i krupnog smeća.",
  //     description:
  //       "Prepare your plot for building or restore your overgrown yard. We remove excess dirt, concrete chunks, scrap metal, dry vegetation, and general yard clutter, leaving your land completely flat, clean, and ready for work.",
  //     descriptionSr:
  //       "Pripremite plac za gradnju ili potpuno uredite zaraslo dvorište. Uklanjamo šut, suvu vegetaciju, krupno smeće, stare panjeve i višak zemlje. Ravnamo i ostavljamo teren u besprekornom stanju.",
  //     features: [
  //       "Clearing of thick branches and organic green trash",
  //       "Removal of deep concrete footings and debris",
  //       "Levelling and clearing of surface soil layer",
  //       "Rapid post-construction site deep-cleaning",
  //     ],
  //     featuresSr: [
  //       "Krčenje šiblja, grana i divljeg zelenila",
  //       "Uklanjanje starih betonskih staza i temelja",
  //       "Grubo ravnanje i čišćenje površinskog sloja zemlje",
  //       "Temeljno čišćenje gradilišta neposredno pred primopredaju",
  //     ],
  //   },
  //   {
  //     id: "furniture-removal",
  //     title: "Old Furniture Removal",
  //     titleSr: "Odvoz Starog Nameštaja",
  //     icon: "Home",
  //     shortDesc:
  //       "Dismantling and clean disposal of bulky items, old sofas, and wardrobes.",
  //     shortDescSr:
  //       "Demontaža i ekološko odnošenje kabastog nameštaja i bele tehnike.",
  //     description:
  //       "Clearing out apartments or cellars is stressful. Our guys will come straight up to your top floor, safely dismantle old cupboards, carry down heavy beds, sofas, and scrap appliances, and haul them away to proper tipping yards.",
  //     descriptionSr:
  //       "Čišćenje stanova, podruma ili tavana ne mora biti stresno. Naša ekipa dolazi na bilo koji sprat, demontira stare plakare, iznosi teške krevete, ugaone garniture, belu tehniku i odvozi na namensku lokaciju.",
  //     features: [
  //       "Safe carry-down even from high floors without lifts",
  //       "Fast dismantling of oversized wardrobes and frames",
  //       "Clearance of entire cellars, basements, and attic storages",
  //       "Eco-recycling of old home appliances and electrical devices",
  //     ],
  //     featuresSr: [
  //       "Bezbedno iznošenje i sa visokih spratova bez lifta",
  //       "Brza demontaža glomaznih plakara i ugradnih elemenata",
  //       "Kompletno pražnjenje podruma, tavana i garaža",
  //       "Eko-reciklaža starih aparata i električnog otpada",
  //     ],
  //   },
];

export const featuresData: Feature[] = [
  {
    id: "same-day",
    title: "Dolazak Isti Dan",
    description:
      "Svesni smo da je vreme novac. Na teritoriji Beograda stižemo na vašu adresu u roku od samo nekoliko sati od poziva.",
    icon: "Zap",
  },
  {
    id: "fair-price",
    title: "Transparentne Cene",
    description:
      "Bez skrivenih troškova. Dajemo fiksnu procenu na osnovu količine šuta.",
    icon: "Coins",
  },
  {
    id: "legal-disposal",
    title: "Zakonito Odlaganje",
    description:
      "Poštujemo životnu sredinu. Sav otpad i šut odgovorno deponujemo na zvaničnoj gradskoj deponiji uz sve ekološke dozvole.",
    icon: "ShieldCheck",
  },
  {
    id: "expert-team",
    title: "Razne Veličine Kontejnera",
    description: "U ponudi imamo kontejnere od 5m³, 9m³, 25m³ i 30m³",
    icon: "Users",
  },
];

export const pricingData: PricingPackage[] = [
  {
    id: "small-container",
    title: "Small Container",
    titleSr: "Mali Kontejner",
    volume: "5 m³ (kubika)",
    dimensions: "3.2m x 1.7m x 1.1m",
    idealFor:
      "Bathroom renovations, minor wall demolition, apartment remodeling waste, yard trim.",
    idealForSr:
      "Renoviranje kupatila, rušenje pregradnog zida, zamena keramike, čišćenje manjeg dvorišta.",
    features: [
      "Up to 5 tons weight capacity",
      "Kept on site up to 3 days (negotiable)",
      "Perfect for narrow city driveways",
      "Legal tipping fee included",
    ],
    featuresSr: [
      "Nosivost do 5 tona tereta",
      "Zadržavanje kontejnera do 3 dana (ili po dogovoru)",
      "Idealan za uske gradske ulice i dvorišta",
      "Ekološka taksa deponije uključena u cenu",
    ],
    priceInfo: "Best for home owners",
    priceInfoSr: "Najtraženije za stanove",
  },
  {
    id: "medium-container",
    title: "Medium Container",
    titleSr: "Srednji Kontejner",
    volume: "7 m³ (kubika)",
    dimensions: "3.6m x 1.8m x 1.3m",
    idealFor:
      "Whole apartment renovations, roofing materials, mixed construction waste, garden cleanups.",
    idealForSr:
      "Kompletno renoviranje stana, zamena krovnog pokrivača, mešani građevinski otpad, rasčišćavanje placa.",
    features: [
      "Up to 7.5 tons weight capacity",
      "Kept on site up to 3 days",
      "Lower cost per cubic meter ratio",
      "Fast replacement skip service",
    ],
    featuresSr: [
      "Nosivost do 7.5 tona tereta",
      "Zadržavanje kontejnera do 3 dana",
      "Povoljniji odnos cene po zapremini",
      "Mogućnost brze zamene 'puno za prazno'",
    ],
    priceInfo: "Intermediary building jobs",
    priceInfoSr: "Najbolji odnos cene i zapremine",
  },
  {
    id: "large-container",
    title: "Large Container",
    titleSr: "Veliki Kontejner / Sanduk",
    volume: "10 m³ (kubika)",
    dimensions: "4.2m x 2.0m x 1.4m",
    idealFor:
      "Major structural demolition, commercial renovations, excavation dirt, industrial wood and metal.",
    idealForSr:
      "Kompletne kućne adaptacije, industrijski objekti, iskopana zemlja, kabasti otpad i investitorske zgrade.",
    features: [
      "Up to 10.5 tons weight capacity",
      "Reinforced steel walls for heavy rock/concrete",
      "Tailgate ramps for easier manual wheelbarrow loading",
      "Special discounts for monthly building contracts",
    ],
    featuresSr: [
      "Nosivost do 11 tona tereta",
      "Ojačane stranice za teške komade betona i kamena",
      "Zadnja vrata sa rampom za lakši utovar kolicima",
      "Posebne pogodnosti i popusti za dugoročne ugovore",
    ],
    priceInfo: "Designed for commercial contractors",
    priceInfoSr: "Za izvođače i veća gradilišta",
  },
];

export const testmonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Dragan Stojković",
    location: "Novi Sad, Liman 3",
    rating: 5,
    text: "Sve pohvale za momke! Renoviranje stana je bio košmar, ali su oni za sat vremena izneli preko 80 džakova šuta sa četvrtog sprata bez lifta. Neverovatno brzi i fer sa cenom.",
    date: "12.05.2026.",
  },
  {
    id: "2",
    name: "Marija Jovanović",
    location: "Petrovaradin",
    rating: 5,
    text: "Iznajmila sam kontejner od 5 kubika za raščišćavanje starog krova. Kontejner su doneli tačno u minut i postavili na usko parking mesto gde niko drugi nije hteo. Korisna i ljubazna ekipa.",
    date: "28.04.2026.",
  },
  {
    id: "3",
    name: "Nikola Petrović (Gradnja NS)",
    location: "Veternik",
    rating: 5,
    text: "Kao investitoru, važno mi je da gradilište bude čisto i sigurno zbog inspekcije. Ferologistik je naš stalni partner za odvoz krupnog otpada. Uvek tačni, pouzdani i zakonski odlažu šut.",
    date: "19.03.2026.",
  },
  {
    id: "4",
    name: "Slobodan Vasilić",
    location: "Novi Sad, Telep",
    rating: 5,
    text: "Odlična usluga odvoženja starog nameštaja. Ispraznili su ceo podrum koji je bio zatrpan stvarima 20 godina. Sve su sami utovarili i očistili za sobom. Moja topla preporuka svima!",
    date: "04.02.2026.",
  },
];

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Kako se obračunava cena odvoženja šuta",
    answer:
      "Cena odvoženja šuta zavisi od ukupne količine građevinskog otpada i broja kontejnera koji su potrebni za njegovo odvoženje. Na konačnu cenu može uticati i lokacija, odnosno pristup mestu na kojem se šut nalazi. Kako bismo vam dali tačnu i fiksnu ponudu, dovoljno je da nas pozovete ili nam pošaljete fotografiju šuta putem Vibera ili WhatsApp-a. Na osnovu procene količine odmah ćemo vam preporučiti odgovarajući broj kontejnera i dostaviti konačnu cenu, bez skrivenih troškova.",
  },
  {
    id: "faq-2",
    question: "Koliko dugo mogu zadržati iznajmljeni kontejner?",
    answer:
      "Standardno vreme držanja kontejnera na vašoj lokaciji je do 3 dana, što je u većini slučajeva sasvim dovoljno. Ukoliko vaša dinamika radova zahteva duže zadržavanje kontejnera, dovoljno je da to naglasite prilikom dogovora kako bismo napravili fleksibilan plan.",
  },
  {
    id: "faq-4",
    question: "Koje sve vrste građevinskog otpada odvozite?",
    answer:
      "Odvozimo gotovo sve vrste neopasnog građevinskog otpada: šut (beton, cigla, crep, malter), gipsane ploče, stare pločice, sanitarije, stolariju (prozore, vrata), parket, ambalažni karton, najlon i metalni otpad. Takođe vršimo odvoz starog kabastog nameštaja.",
  },
  {
    id: "faq-5",
    question: "Da li se otpad odlaže legalno i ekološki?",

    answer:
      "Da. Legalno i ekološko odlaganje je naš glavni prioritet. Ferologistik Sistem poseduje sve ugovore i dozvole sa gradskom deponijom. Otpad nikada ne odlažemo u prirodu ili divlje deponije, što vama garantuje potpuno miran san i sigurnost od bilo kakvih komunalnih kazni.",
  },
];
