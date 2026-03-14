import Planet_1 from "../public/planet-01.png";
import Planet_2 from "../public/planet-02.png";
import Planet_3 from "../public/planet-03.png";
import Planet_4 from "../public/planet-04.png";
import Planet_5 from "../public/planet-05.png";
import Planet_6 from "../public/planet-06.png";
import Planet_7 from "../public/planet-07.png";
import Planet_8 from "../public/planet-08.png";
import vrpano from "../public/vrpano.svg";
import headset from "../public/headset.svg";
import twitter from "../public/twitter.svg";
import linkedin from "../public/linkedin.svg";
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: Planet_1,
    title: "Design Web Sur Mesure",
  },
  {
    id: "world-2",
    imgUrl: Planet_2,
    title: "Solutions E-Commerce",
  },
  {
    id: "world-3",
    imgUrl: Planet_3,
    title: "Optimisation SEO",
  },
  {
    id: "world-4",
    imgUrl: Planet_4,
    title: "Intégration CMS",
  },
  {
    id: "world-5",
    imgUrl: Planet_5,
    title: "Applications Web",
  },
];

export const startingFeatures = [
  "Planifiez un appel découverte gratuit pour discuter de vos objectifs",
  "Nous concevons et développons une stratégie adaptée à votre marque",
  "Lancez votre site moderne et commencez à convertir vos visiteurs",
];

export const newFeatures = [
  {
    imgUrl: vrpano,
    title: "Ultra Rapide",
    subtitle:
      "Nos sites sont optimisés pour la vitesse, garantissant haute performance et meilleure expérience utilisateur.",
  },
  {
    imgUrl: headset,
    title: "Design Unique",
    subtitle:
      "Des designs uniques et modernes qui attirent l'attention, convertissent les visiteurs et se démarquent de la concurrence.",
  },
];

export const insights = [
  {
    imgUrl: Planet_6,
    title: "ARTICLE RANDOM A METTRE",
    subtitle:
      "ARTICLE RANDOM A METTRE",
  },
  {
    imgUrl: Planet_7,
    title: "ARTICLE RANDOM A METTRE",
    subtitle:
      "ARTICLE RANDOM A METTRE",
  },
  {
    imgUrl: Planet_8,
    title: "ARTICLE RANDOM A METTRE",
    subtitle:
      "ARTICLE RANDOM A METTRE",
  },
];

export const pricingPlans = [
  {
    id: "basic",
    title: "Site regulier",
    price: "800$",
    features: [
      "Landing Page moderne",
      "Design Responsive",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement 1 an inclus"
    ],
    buttonText: "Commencer"
  },
  {
    id: "pro",
    title: "Site Pro",
    price: "1500$",
    features: [
      "Site moderne jusqu'à 10 pages",
      "Fonctionalités sur mesure",
      "Design Responsive",
      "Optimisation SEO avancée",
      "Hébergement 1 an inclus"
    ],
    buttonText: "Développer mon site"
  },
  {
    id: "enterprise",
    title: "Sur Mesure",
    price: "Sur devis",
    features: [
      "Application Web complète",
      "Fonctionnalités avancées",
      "Design UI/UX Premium",
      "Intégration API & Base de données",
      "Support prioritaire"
    ],
    buttonText: "Contactez-nous"
  }
];

export const teamMembers = [
  {
    name: "Nayl",
    role: "TITRE A METTRE",
    desc: "DESCRIPTION A METTRE",
    portfolioUrl: "https://www.nayl.ca/",
    linkedinUrl: "#"
  },
  {
    name: "Alban",
    role: "TITRE A METTRE",
    desc: "DESCRIPTION A METTRE",
    portfolioUrl: "https://alban-pixel.github.io/portfolio/",
    linkedinUrl: "#"
  }
];

export const faqs = [
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer: "Pour un site vitrine, comptez en général 1 à 2 semaines. Pour une boutique en ligne ou un site sur mesure, le délai peut aller de 3 à 6 semaines selon la complexité."
  },
  {
    question: "Mon site sera-t-il adapté aux mobiles ?",
    answer: "Absolument ! Tous nos sites sont multiplateformes et s'adaptent parfaitement à toutes les tailles d'écrans (smartphones, tablettes, ordinateurs)."
  },
  {
    question: "M'aiderez-vous avec le référencement (SEO) ?",
    answer: "Oui, même notre forfait de base inclut une optimisation SEO technique pour que Google comprenne bien votre contenu. Nous proposons aussi du SEO avancé pour booster votre visibilité."
  },
  {
    question: "Puis-je modifier le contenu moi-même une fois le site en ligne ?",
    answer: "Oui, si nous intégrons un CMS (Système de Gestion de Contenu). Nous vous formerons pour que vous puissiez mettre à jour vos textes et images facilement."
  }
];

export const socials = [
  {
    name: "twitter",
    url: twitter,
  },
  {
    name: "linkedin",
    url: linkedin,
  },
  {
    name: "instagram",
    url: instagram,
  },
  {
    name: "facebook",
    url: facebook,
  },
];
