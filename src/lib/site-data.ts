// LadyRuthie's Events Center — site content & data
// Real facts (from the client's outdoor signage + Instagram @ladyruthiesevents):
//  - Name: LadyRuthie's Events Center
//  - Tagline: "a touch of class"
//  - Phone: 053 450 8192
//  - Address: 5 Ataa Sowah Drive, Haatso, Accra (Behind Shalom Presbyterian Church, Mabey, Haatso)
//  - Email: eladyruthie@gmail.com
//  - Google Maps / Facebook: LadyRuthie's Events Center
//  - YouTube: ladyruthiesevents
//  - Instagram: @ladyruthiesevents
//  - Ghana Post GPS: GE-261-9142
//  - Services (per the on-site signage): Weddings & Receptions, Business Meetings,
//    Private Parties, Kids' Parties, Funeral Celebrations, Photoshoots, Lodging

export const SITE = {
  name: "LadyRuthie's",
  fullName: "LadyRuthie's Events Center",
  shortName: "LadyRuthie's",
  tagline: "a touch of class",
  baseline: "A Touch of Class", // short signature
  activity: "Events Center",
  area: "Haatso",
  city: "Accra",
  country: "Ghana",
  addressLine: "5 Ataa Sowah Drive, Haatso",
  addressFull: "5 Ataa Sowah Drive, Haatso, Accra — Ghana",
  addressNote: "Behind Shalom Presbyterian Church, Mabey, Haatso",
  phones: ["053 450 8192"],
  whatsapp: "233534508192", // 053 450 8192 -> international
  callPrimary: "0534508192",
  email: "eladyruthie@gmail.com",
  emailGeneral: "eladyruthie@gmail.com",
  instagram: "https://www.instagram.com/ladyruthiesevents/",
  facebook: "https://www.facebook.com/search/top?q=LadyRuthie%27s%20Events%20Center",
  youtube: "https://www.youtube.com/@ladyruthiesevents",
  socialHandle: "@ladyruthiesevents",
  gpsCode: "GE-261-9142",
  mapsQuery: "LadyRuthie's Events Center Haatso Accra Ghana",
  mapsEmbed:
    "https://www.google.com/maps?q=LadyRuthie%27s+Events+Center+Haatso+Accra+Ghana&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=LadyRuthie%27s%20Events%20Center%20Haatso%20Accra%20Ghana",
  eventCapacity: "Up to 500 guests",
  eventSpace: "LadyRuthie's Events Center",
} as const;

export const PROMO_BENEFITS = [
  "A touch of class for every celebration",
  "Garden, banquet & boardroom spaces in one venue",
  "In-house catering, decoration & AV",
  "Direct booking with our event planners",
];

export type EventSpace = {
  id: string;
  name: string;
  frenchName: string;
  image: string;
  capacity: string;
  area: string;
  setup: string;
  description: string;
  frenchDescription: string;
  features: string[];
};

export const EVENT_SPACES: EventSpace[] = [
  {
    id: "garden",
    name: "The Garden",
    frenchName: "Le Jardin",
    image: "/images/real-garden-tent.jpg",
    capacity: "Up to 300 guests",
    area: "Outdoor",
    setup: "Banquet · Cocktail · Ceremony",
    description:
      "An open-air garden framed by palm trees and fairy lights — the signature LadyRuthie's setting for weddings, engagements and evening receptions under the stars.",
    frenchDescription:
      "Un jardin en plein air encadré de palmiers et de guirlandes lumineuses — le cadre signature de LadyRuthie's pour les mariages, fiançailles et réceptions du soir sous les étoiles.",
    features: ["Open-air", "Fairy-light canopy", "Floral arch options", "Weather backup tent", "Garden power & sound"],
  },
  {
    id: "banquet-hall",
    name: "Banquet Hall",
    frenchName: "Salle de Réception",
    image: "/images/space-banquet.png",
    capacity: "Up to 500 guests",
    area: "Indoor",
    setup: "Banquet · Theatre · Cocktail",
    description:
      "Our grand indoor hall — polished floors, draped ceilings and crystal chandeliers. Built for the largest celebrations: weddings, anniversaries, conferences and gala dinners.",
    frenchDescription:
      "Notre grande salle intérieure — sols polis, plafonds drapés et chandeliers de cristal. Conçue pour les plus grandes célébrations : mariages, anniversaires, conférences et dîners de gala.",
    features: ["Air-conditioned", "Stage & dance floor", "Chandeliers", "Built-in AV", "Bridal suite access"],
  },
  {
    id: "boardroom",
    name: "Executive Boardroom",
    frenchName: "Salle de Réunion",
    image: "/images/space-boardroom.png",
    capacity: "Up to 40 delegates",
    area: "Indoor",
    setup: "Boardroom · U-shape · Classroom",
    description:
      "A refined, fully-equipped boardroom for corporate meetings, strategy sessions and training. Quiet, professional, and wired for presentations and hybrid calls.",
    frenchDescription:
      "Une salle de réunion raffinée et entièrement équipée pour réunions d’entreprise, sessions de stratégie et formations. Calme, professionnelle et câblée pour présentations et appels hybrides.",
    features: ["Presentation screen", "High-speed Wi-Fi", "Video conferencing", "Flipchart & whiteboard", "Tea & coffee service"],
  },
  {
    id: "open-lawn",
    name: "The Open Lawn",
    frenchName: "La Pelouse",
    image: "/images/real-lawn-chiavari.jpg",
    capacity: "Up to 250 guests",
    area: "Outdoor",
    setup: "Ceremony · Cocktail · Reception",
    description:
      "A manicured open lawn for ceremony aisles, cocktail hours and outdoor receptions. Mature shade trees and a canopy tent option keep the celebration comfortable.",
    frenchDescription:
      "Une pelouse ouverte et entretenue pour les allées de cérémonie, cocktails et réceptions en plein air. Arbres matures et tente de secours pour un confort total.",
    features: ["Ceremony aisle setup", "Canopy tent option", "Lush greenery", "Outdoor lighting", "Garden access"],
  },
];

export type Facility = {
  id: string;
  name: string;
  frenchName: string;
  image: string;
  description: string;
  frenchDescription: string;
};

export const FACILITIES: Facility[] = [
  {
    id: "catering",
    name: "Catering & Bar",
    frenchName: "Restauration & Bar",
    image: "/images/service-catering.png",
    description:
      "In-house catering blending West-African classics with continental favourites — buffet, plated or stations — together with a stocked bar and signature mocktails.",
    frenchDescription:
      "Restauration en interne mêlant classiques ouest-africains et saveurs continentales — buffet, assietté ou stations — avec bar garni et mocktails signature.",
  },
  {
    id: "decoration",
    name: "Decoration & Florals",
    frenchName: "Décoration & Fleurs",
    image: "/images/service-decoration.png",
    description:
      "Our decorators bring your theme to life — floral arches, table scaping, ceiling drapery and the small details that make a celebration feel like yours.",
    frenchDescription:
      "Nos décorateurs donnent vie à votre thème — arches florales, dressage de tables, drapés de plafond et petits détails qui rendent la célébration unique.",
  },
  {
    id: "av",
    name: "Stage, Sound & AV",
    frenchName: "Scène, Son & Audiovisuel",
    image: "/images/service-av.png",
    description:
      "A professional stage, LED screen, PA system and lighting rig — ready for live bands, DJs, keynote speakers and the moments that deserve a spotlight.",
    frenchDescription:
      "Une scène professionnelle, écran LED, sonorisation et jeu de lumières — prêts pour groupes live, DJs, intervenants et moments à mettre en lumière.",
  },
  {
    id: "planning",
    name: "Event Planning",
    frenchName: "Organisation d’Événements",
    image: "/images/service-planning.png",
    description:
      "A dedicated planner walks with you from first enquiry to last guest — timelines, vendors, floorplans and the calm that lets you enjoy your own day.",
    frenchDescription:
      "Un organisateur dédié vous accompagne du premier contact au dernier invité — planning, prestataires, plans de salle et la sérénité pour profiter de votre journée.",
  },
];

export const QUICK_SERVICES = [
  "Photography & videography",
  "Bridal suite",
  "Secure on-site parking",
  "High-speed Wi-Fi",
  "Generators (no outages)",
  "Restrooms & changing rooms",
  "Security & ushers",
  "Cleanup & teardown",
];

export type Offer = {
  id: string;
  title: string;
  frenchTitle: string;
  image: string;
  tag: string;
  frenchTag: string;
  blurb: string;
  frenchBlurb: string;
  cta: string;
};

export const OFFERS: Offer[] = [
  {
    id: "wedding-package",
    title: "Signature Wedding Package",
    frenchTitle: "Forfait Mariage Signature",
    image: "/images/offer-wedding.png",
    tag: "Weddings",
    frenchTag: "Mariages",
    blurb:
      "Garden or banquet hall, full decoration, catering for up to 200 guests, a bridal suite, stage & sound, and a dedicated planner — the complete LadyRuthie's celebration.",
    frenchBlurb:
      "Jardin ou salle de réception, décoration complète, restauration jusqu’à 200 invités, suite nuptiale, scène et son, et un organisateur dédié — la célébration LadyRuthie's complète.",
    cta: "Request a quote",
  },
  {
    id: "corporate-package",
    title: "Corporate Meeting Package",
    frenchTitle: "Forfait Réunion d’Affaires",
    image: "/images/offer-corporate.png",
    tag: "Business",
    frenchTag: "Affaires",
    blurb:
      "Boardroom or hall, presentation screen, Wi-Fi, two coffee breaks and a working lunch for up to 40 delegates — all handled by our events team.",
    frenchBlurb:
      "Salle de réunion ou salle, écran de présentation, Wi-Fi, deux pauses-café et déjeuner de travail pour jusqu’à 40 délégués — géré par notre équipe.",
    cta: "Request a quote",
  },
  {
    id: "social-package",
    title: "Birthday & Social Package",
    frenchTitle: "Forfait Anniversaire & Événement",
    image: "/images/offer-birthday.png",
    tag: "Celebrations",
    frenchTag: "Célébrations",
    blurb:
      "Birthdays, anniversaries, baby showers and more — themed decoration, a dessert table, catering, DJ and a host to keep the celebration going.",
    frenchBlurb:
      "Anniversaires, jubilés, baby showers et plus — décoration thématique, table à desserts, restauration, DJ et animateur pour faire durer la fête.",
    cta: "Request a quote",
  },
];

export type GalleryImage = {
  id: string;
  src: string;
  category: "Exterior" | "Interior" | "Garden" | "Celebrations";
  frenchCategory: "Extérieur" | "Intérieur" | "Jardin" | "Célébrations";
  caption: string;
  frenchCaption: string;
};

export const GALLERY: GalleryImage[] = [
  // Real on-site event photos (from the venue)
  { id: "r1", src: "/images/real-hero-canopy.jpg", category: "Garden", frenchCategory: "Jardin", caption: "Real event — pink & white canopy reception", frenchCaption: "Événement réel — réception sous canopée rose et blanche" },
  { id: "r2", src: "/images/real-lawn-chiavari.jpg", category: "Garden", frenchCategory: "Jardin", caption: "Real event — gold Chiavari chairs on the lawn", frenchCaption: "Événement réel — chaises Chiavari dorées sur la pelouse" },
  { id: "r3", src: "/images/real-garden-tent.jpg", category: "Garden", frenchCategory: "Jardin", caption: "Real event — tented banquet with blush linens", frenchCaption: "Événement réel — banquet sous tente, nappes rose poudré" },
  // Rendered imagery
  { id: "g1", src: "/images/hero-venue.png", category: "Garden", frenchCategory: "Jardin", caption: "Evening reception in the Garden", frenchCaption: "Réception du soir au Jardin" },
  { id: "g2", src: "/images/gallery-exterior.png", category: "Exterior", frenchCategory: "Extérieur", caption: "The LadyRuthie's facade at dusk", frenchCaption: "La façade LadyRuthie's au crépuscule" },
  { id: "g3", src: "/images/gallery-couple.png", category: "Celebrations", frenchCategory: "Célébrations", caption: "A bride & groom in the garden", frenchCaption: "Mariés dans le jardin" },
  { id: "g4", src: "/images/gallery-cake.png", category: "Celebrations", frenchCategory: "Célébrations", caption: "A signature wedding cake", frenchCaption: "Gâteau de mariage signature" },
  { id: "g5", src: "/images/gallery-table.png", category: "Interior", frenchCategory: "Intérieur", caption: "Table setting detail", frenchCaption: "Détail de dressage de table" },
  { id: "g6", src: "/images/gallery-crowd.png", category: "Celebrations", frenchCategory: "Célébrations", caption: "A celebration in full swing", frenchCaption: "Une célébration en plein essor" },
  { id: "g7", src: "/images/gallery-proposal.png", category: "Garden", frenchCategory: "Jardin", caption: "A garden proposal", frenchCaption: "Une demande en mariage au jardin" },
  { id: "g8", src: "/images/space-garden.png", category: "Garden", frenchCategory: "Jardin", caption: "The Garden banquet setup", frenchCaption: "Le dressage banquet du Jardin" },
  { id: "g9", src: "/images/space-banquet.png", category: "Interior", frenchCategory: "Intérieur", caption: "The Banquet Hall", frenchCaption: "La Salle de Réception" },
  { id: "g10", src: "/images/space-boardroom.png", category: "Interior", frenchCategory: "Intérieur", caption: "The Executive Boardroom", frenchCaption: "La Salle de Réunion" },
  { id: "g11", src: "/images/space-lawn.png", category: "Garden", frenchCategory: "Jardin", caption: "The Open Lawn ceremony aisle", frenchCaption: "L’allée de cérémonie sur la Pelouse" },
  { id: "g12", src: "/images/service-decoration.png", category: "Interior", frenchCategory: "Intérieur", caption: "Decoration & florals", frenchCaption: "Décoration et florales" },
];

export const GALLERY_FILTERS = [
  { id: "all", label: "All", frenchLabel: "Tout" },
  { id: "Exterior", label: "Exterior", frenchLabel: "Extérieur" },
  { id: "Interior", label: "Interior", frenchLabel: "Intérieur" },
  { id: "Garden", label: "Garden", frenchLabel: "Jardin" },
  { id: "Celebrations", label: "Celebrations", frenchLabel: "Célébrations" },
] as const;

export type NavLink = {
  id: string;
  label: string;
  frenchLabel: string;
  target: string;
  children?: { label: string; frenchLabel: string; target: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", frenchLabel: "Accueil", target: "#top" },
  {
    id: "about",
    label: "About",
    frenchLabel: "À Propos",
    target: "#about",
    children: [
      { label: "Our Story", frenchLabel: "Notre Histoire", target: "#about" },
      { label: "Why LadyRuthie's", frenchLabel: "Pourquoi LadyRuthie's", target: "#about" },
    ],
  },
  {
    id: "services",
    label: "Services & Facilities",
    frenchLabel: "Services & Équipements",
    target: "#services",
  },
  {
    id: "spaces",
    label: "Event Spaces",
    frenchLabel: "Espaces Événementiels",
    target: "#spaces",
    children: EVENT_SPACES.map((s) => ({
      label: s.name,
      frenchLabel: s.frenchName,
      target: `#spaces`,
    })),
  },
  { id: "gallery", label: "Gallery", frenchLabel: "Galerie", target: "#gallery" },
  { id: "offers", label: "Packages", frenchLabel: "Forfaits", target: "#offers" },
  { id: "location", label: "Location", frenchLabel: "Localisation", target: "#location" },
];

// Bilingual UI strings
export const UI = {
  en: {
    book: "Enquire",
    call: "Call",
    gps: "GPS",
    menu: "Menu",
    language: "ENG",
    otherLanguage: "Français",
    close: "Close",
    discoverMore: "Discover More",
    bookNow: "Enquire Now",
    bookTheOffer: "Request a quote",
    exploreSpaces: "Explore Event Spaces",
    viewAllSpaces: "View all spaces",
    viewAllOffers: "View all packages",
    viewGallery: "View gallery",
    getDirections: "Get directions",
    callUs: "Call us",
    whatsappUs: "Chat on WhatsApp",
    findUs: "Find us",
    followUs: "Follow us",
    home: "Home",
    promoClose: "Close",
    cookieTitle: "We value your privacy",
    cookieBody:
      "LadyRuthie's Events Center uses cookies to enhance your browsing experience, measure site performance and serve relevant content. You can accept all cookies or choose your preferences.",
    acceptAll: "Accept all",
    saveSelection: "Save my selection",
    cookieNecessary: "Necessary",
    cookieAnalytics: "Analytics",
    cookieMarketing: "Marketing",
    bookFormTitle: "Plan your event",
    bookFormIntro:
      "Tell us about your celebration or meeting and our event planners will respond by phone or WhatsApp within the hour.",
    nameLabel: "Full name",
    phoneLabel: "Phone number",
    emailLabel: "Email (optional)",
    datesLabel: "Event date",
    guestsLabel: "Expected guests",
    roomLabel: "Space of interest",
    messageLabel: "Tell us about your event",
    submitBooking: "Send enquiry",
    submitting: "Sending…",
    bookSuccessTitle: "Enquiry received",
    bookSuccessBody:
      "Thank you. The LadyRuthie's planning team will reach out shortly on the number you provided to shape your event.",
    sendAnother: "Send another enquiry",
    perNightFrom: "From",
    bookDirect: "Enquire Direct",
    capacity: "Capacity",
    area: "Setting",
    bed: "Setup",
    inquireEvent: "Enquire about this event",
    eventIntro:
      "From intimate garden engagements to grand celebrations of up to 500 guests, LadyRuthie's Events Center is Accra's address for weddings, conferences and private functions.",
    brandStatement:
      "Beyond the ordinary — where every detail is touched with class, and every celebration becomes a story worth telling.",
    heroSubtitle:
      "A full-service events center in Haatso, Accra. Four versatile spaces, in-house catering, decoration and AV — and a planning team that brings a touch of class to every celebration.",
    heroEyebrow: "Haatso · Accra · Ghana",
    aboutEyebrow: "Our Story",
    aboutTitle: "A venue with a touch of class",
    aboutBody:
      "LadyRuthie's Events Center was born from a simple belief: that every celebration — a wedding, a meeting, a milestone — deserves a touch of class. From our garden of palm trees and fairy lights to our grand banquet hall and executive boardroom, we give each event a setting that fits its moment. Our planners, decorators and caterers work as one, so you spend your day celebrating, not coordinating.",
    aboutStat1: "4 event spaces",
    aboutStat2: "Up to 500 guests",
    aboutStat3: "All-in-house",
    spacesEyebrow: "Event Spaces",
    spacesTitle: "Four settings, one venue",
    spacesIntro:
      "From open-air garden receptions to a grand banquet hall and an executive boardroom — choose the space that fits your celebration, all in one address.",
    servicesEyebrow: "Services & Facilities",
    servicesTitle: "Everything in-house",
    servicesIntro:
      "Catering, decoration, stage and sound, planning and photography — handled by one team under one roof, so your event comes together seamlessly.",
    eventEyebrow: "The Venue",
    eventTitle: "Made for the moments that matter",
    eventBody:
      "LadyRuthie's is a full-service events venue for up to 500 guests — weddings, conferences, birthdays, product launches and corporate functions. Our team handles setup, catering, sound and decoration so you can be fully present on the day.",
    eventBullets: [
      "Up to 500 guests · 4 versatile spaces",
      "In-house catering & bar service",
      "Stage, sound, lighting & AV",
      "Decoration & full event planning",
    ],
    offersEyebrow: "Packages",
    offersTitle: "Curated event packages",
    offersIntro:
      "A selection of ready-made packages — for weddings, for business, for celebrations — each fully customisable and bookable directly with our planning team.",
    locationEyebrow: "Location",
    locationTitle: "Find us in Haatso, Accra",
    locationBody:
      "Tucked behind Shalom Presbyterian Church on Ataa Sowah Drive in Haatso, with easy access from Accra's main arteries and Kotoka International Airport.",
    footerAbout:
      "LadyRuthie's Events Center — a full-service events venue in Haatso, Accra. Four versatile spaces, in-house catering, decoration and AV, and a planning team that brings a touch of class to every celebration.",
    footerContact: "Contact",
    footerExplore: "Explore",
    footerLegal: "Legal",
    footerRights: "All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerCookies: "Cookies",
    footerAccessibility: "Accessibility",
    footerContactUs: "Contact us",
    legalLine: "Website crafted for LadyRuthie's Events Center.",
    galleryTitle: "LadyRuthie's in pictures",
    galleryTitleFr: "LadyRuthie's en images",
    eventTypesTitle: "Every kind of celebration",
    eventTypesIntro: "Our primary service is to provide facilities for the moments that matter — year in, year out.",
    eventTypes: [
      { name: "Weddings & Receptions", desc: "Ceremonies, receptions & traditional engagements" },
      { name: "Business Meetings", desc: "Meetings, conferences, trainings & launches" },
      { name: "Private Parties", desc: "Milestones, anniversaries & themed celebrations" },
      { name: "Kids' Parties", desc: "Birthdays & fun-filled celebrations for the little ones" },
      { name: "Funeral Celebrations", desc: "Dignified gatherings & celebration of life" },
      { name: "Photoshoots", desc: "Photo & video sessions against our garden and halls" },
      { name: "Lodging", desc: "Comfortable on-site rooms for you and your guests" },
    ],
  },
  fr: {
    book: "Demander",
    call: "Appeler",
    gps: "GPS",
    menu: "Menu",
    language: "FR",
    otherLanguage: "English",
    close: "Fermer",
    discoverMore: "Découvrir",
    bookNow: "Demander un devis",
    bookTheOffer: "Demander un devis",
    exploreSpaces: "Découvrir les Espaces",
    viewAllSpaces: "Voir tous les espaces",
    viewAllOffers: "Voir tous les forfaits",
    viewGallery: "Voir la galerie",
    getDirections: "Obtenir l’itinéraire",
    callUs: "Appelez-nous",
    whatsappUs: "Discuter sur WhatsApp",
    findUs: "Nous trouver",
    followUs: "Suivez-nous",
    home: "Accueil",
    promoClose: "Fermer",
    cookieTitle: "Nous respectons votre vie privée",
    cookieBody:
      "LadyRuthie's Events Center utilise des cookies pour améliorer votre navigation, mesurer la performance du site et proposer un contenu pertinent. Vous pouvez accepter tous les cookies ou choisir vos préférences.",
    acceptAll: "Tout accepter",
    saveSelection: "Enregistrer mon choix",
    cookieNecessary: "Indispensables",
    cookieAnalytics: "Statistiques",
    cookieMarketing: "Marketing",
    bookFormTitle: "Planifiez votre événement",
    bookFormIntro:
      "Parlez-nous de votre célébration ou réunion et nos organisateurs vous répondront par téléphone ou WhatsApp dans l’heure.",
    nameLabel: "Nom complet",
    phoneLabel: "Téléphone",
    emailLabel: "Email (optionnel)",
    datesLabel: "Date de l’événement",
    guestsLabel: "Invités attendus",
    roomLabel: "Espace souhaité",
    messageLabel: "Parlez-nous de votre événement",
    submitBooking: "Envoyer la demande",
    submitting: "Envoi…",
    bookSuccessTitle: "Demande reçue",
    bookSuccessBody:
      "Merci. L’équipe LadyRuthie's vous rappellera très prochainement au numéro indiqué pour concevoir votre événement.",
    sendAnother: "Envoyer une autre demande",
    perNightFrom: "À partir de",
    bookDirect: "Demande directe",
    capacity: "Capacité",
    area: "Cadre",
    bed: "Configuration",
    inquireEvent: "Demander pour cet événement",
    eventIntro:
      "Des fiançailles intimes au jardin aux grandes célébrations jusqu’à 500 invités, LadyRuthie's Events Center est l’adresse d’Accra pour les mariages, conférences et fonctions privées.",
    brandStatement:
      "Au-delà de l’ordinaire — là où chaque détail est touché de classe, et chaque célébration devient une histoire à raconter.",
    heroSubtitle:
      "Un events center complet à Haatso, Accra. Quatre espaces polyvalents, restauration, décoration et audiovisuel en interne — et une équipe qui apporte une touche de classe à chaque célébration.",
    heroEyebrow: "Haatso · Accra · Ghana",
    aboutEyebrow: "Notre Histoire",
    aboutTitle: "Un lieu avec une touche de classe",
    aboutBody:
      "LadyRuthie's Events Center est né d’une conviction simple : chaque célébration — un mariage, une réunion, un jalon — mérite une touche de classe. De notre jardin de palmiers et guirlandes lumineuses à notre grande salle de réception et salle de réunion, nous offrons à chaque événement un cadre à la hauteur de son moment. Nos organisateurs, décorateurs et traiteurs travaillent d’un seul élan, pour que vous passiez votre journée à célébrer, non à coordonner.",
    aboutStat1: "4 espaces événementiels",
    aboutStat2: "Jusqu’à 500 invités",
    aboutStat3: "Tout en interne",
    spacesEyebrow: "Espaces Événementiels",
    spacesTitle: "Quatre cadres, un lieu",
    spacesIntro:
      "Des réceptions en plein air au jardin à une grande salle de réception et une salle de réunion — choisissez l’espace qui convient à votre célébration, en une seule adresse.",
    servicesEyebrow: "Services & Équipements",
    servicesTitle: "Tout en interne",
    servicesIntro:
      "Restauration, décoration, scène et son, organisation et photographie — gérés par une seule équipe sous un même toit, pour un événement sans couture.",
    eventEyebrow: "Le Lieu",
    eventTitle: "Pensé pour les moments qui comptent",
    eventBody:
      "LadyRuthie's est un lieu événementiel complet jusqu’à 500 invités — mariages, conférences, anniversaires, lancements et fonctions d’entreprise. Notre équipe gère l’installation, la restauration, le son et la décoration pour que vous soyez pleinement présent le jour J.",
    eventBullets: [
      "Jusqu’à 500 invités · 4 espaces polyvalents",
      "Restauration et bar en interne",
      "Scène, son, lumière et audiovisuel",
      "Décoration et organisation complète",
    ],
    offersEyebrow: "Forfaits",
    offersTitle: "Forfaits événementiels pensés pour vous",
    offersIntro:
      "Une sélection de forfaits prêts à l’emploi — mariages, affaires, célébrations — chacun entièrement personnalisable et réservable directement auprès de notre équipe.",
    locationEyebrow: "Localisation",
    locationTitle: "Trouvez-nous à Haatso, Accra",
    locationBody:
      "Discrètement installé derrière la Shalom Presbyterian Church sur Ataa Sowah Drive à Haatso, avec un accès facile aux artères principales d’Accra et à l’aéroport international Kotoka.",
    footerAbout:
      "LadyRuthie's Events Center — un lieu événementiel complet à Haatso, Accra. Quatre espaces polyvalents, restauration, décoration et audiovisuel en interne, et une équipe qui apporte une touche de classe à chaque célébration.",
    footerContact: "Contact",
    footerExplore: "Explorer",
    footerLegal: "Mentions légales",
    footerRights: "Tous droits réservés.",
    footerPrivacy: "Politique de confidentialité",
    footerCookies: "Cookies",
    footerAccessibility: "Accessibilité",
    footerContactUs: "Nous contacter",
    legalLine: "Site conçu pour LadyRuthie's Events Center.",
    galleryTitle: "LadyRuthie's en images",
    galleryTitleFr: "LadyRuthie's en images",
    eventTypesTitle: "Tous types de célébrations",
    eventTypesIntro: "Notre vocation est de mettre nos espaces au service des moments qui comptent — année après année.",
    eventTypes: [
      { name: "Mariages & Réceptions", desc: "Cérémonies, réceptions et fiançailles traditionnelles" },
      { name: "Réunions d’Affaires", desc: "Réunions, conférences, formations et lancements" },
      { name: "Fêtes Privées", desc: "Jalons, jubilés et célébrations thématiques" },
      { name: "Fêtes d’Enfants", desc: "Anniversaires et célébrations ludiques pour les petits" },
      { name: "Célébrations Funéraires", desc: "Retrouvailles dignes et célébrations de vie" },
      { name: "Séances Photo", desc: "Séances photo et vidéo dans notre jardin et nos salles" },
      { name: "Hébergement", desc: "Chambres confortables sur place pour vous et vos invités" },
    ],
  },
} as const;

export type Lang = keyof typeof UI;
