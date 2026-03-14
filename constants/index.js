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
    title: "Custom Web Design",
  },
  {
    id: "world-2",
    imgUrl: Planet_2,
    title: "E-Commerce Solutions",
  },
  {
    id: "world-3",
    imgUrl: Planet_3,
    title: "SEO Optimization",
  },
  {
    id: "world-4",
    imgUrl: Planet_4,
    title: "CMS Integration",
  },
  {
    id: "world-5",
    imgUrl: Planet_5,
    title: "Web App Development",
  },
];

export const startingFeatures = [
  "Schedule a free discovery call to discuss your business goals",
  "We design and develop a tailored strategy for your brand",
  "Launch your modern, fast website and start converting visitors",
];

export const newFeatures = [
  {
    imgUrl: vrpano,
    title: "Blazing Fast",
    subtitle:
      "Our websites are optimized for speed, ensuring high performance and better user experience.",
  },
  {
    imgUrl: headset,
    title: "Mobile-First",
    subtitle:
      "Fully responsive designs that look beautiful and work perfectly on any device, anywhere.",
  },
];

export const insights = [
  {
    imgUrl: Planet_6,
    title: "How a redesign increased customer inquiries by 200%",
    subtitle:
      "Read our case study on how we transformed a local bakery's online presence and drove massive sales growth.",
  },
  {
    imgUrl: Planet_7,
    title: "5 crucial SEO tips every small business needs to know",
    subtitle:
      "Boost your search rankings with our straightforward guide to dominating local search results.",
  },
  {
    imgUrl: Planet_8,
    title: "Why your business needs a modern Web App in 2024",
    subtitle:
      "Discover the benefits of custom web applications for streamlining operations and engaging with customers.",
  },
];

export const pricingPlans = [
  {
    id: "basic",
    title: "Vitrine",
    price: "499€",
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
    title: "E-Commerce",
    price: "1299€",
    features: [
      "Site moderne jusqu'à 10 pages",
      "Boutique en ligne complète",
      "Paiements sécurisés",
      "Design Responsive",
      "Optimisation SEO avancée"
    ],
    buttonText: "Développer ma boutique"
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
    name: "Alex",
    role: "Lead Developer",
    desc: "Passionné par React et la performance web."
  },
  {
    name: "Sophie",
    role: "UI/UX Designer",
    desc: "Experte en création d'interfaces intuitives et modernes."
  },
  {
    name: "Thomas",
    role: "Expert SEO",
    desc: "Il fait en sorte que votre site soit vu par tous."
  }
];

export const faqs = [
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer: "Pour un site vitrine, comptez en général 2 à 3 semaines. Pour une boutique en ligne ou un site sur mesure, le délai peut aller de 4 à 8 semaines selon la complexité."
  },
  {
    question: "Mon site sera-t-il adapté aux mobiles ?",
    answer: "Absolument ! Tous nos sites sont 'Mobile-First' et s'adaptent parfaitement à toutes les tailles d'écrans (smartphones, tablettes, ordinateurs)."
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
