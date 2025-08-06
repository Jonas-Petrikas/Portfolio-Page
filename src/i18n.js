import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    header: {
      "About": "About",
      "Portfolio": "Portfolio",
      "Pricing": "Pricing",
      "Contact": "Contact",
      "Let's talk!": "Let's talk!",
    },
    hero: {
      "title": "Custom Web Solutions",
      "text": "Helping you realize digital opportunities to grow your business",
      "View My Work": "View my work",
      "Get in Touch": "Get in Touch!",
    },
    portfolio: {
      "title": "Portfolio projects",
      "Live Preview": "Live Preview",
      "Check Code": "Check Code",
      "description1": "Video production business website built on Wordpress with Elementor.",
      "description2": "Flower-Shop website built following ui/ux figma design for a plant shop.",
      "description3": "Custom built responsive landing page for film festival. Including ux/ui and analytics.",
      "description4": "Functional landing page built following a Figma design and requirements.",
      "description5": "Business website for a local business. Built following prepared design and requirements.",
      "Check more": "Check other projects on"
    },
    about: {
      "title": "About me",
      "p1": "I'm a freelance web developer from Lithuania with a passion for creating digital experiences that make a difference. ",
      "p2": "Specializing in <span>React</span>, <span>Symfony</span>, and <span>WordPress</span>, I build everything from sleek business websites to complex web applications.",
      "p3": "My background in marketing gives me a unique perspective – I understand not just how to build websites, but how to make them work for your business goals.",
      "p4": "I work with clients who value quality, communication, and results. Whether you need a complete website remake or custom functionality for your existing site, I bring technical expertise and creative problem-solving to every project.",
      "p5": "<span>Ready to discuss your next project?</span>"
    }
  },
  lt: {
    header: {
      "About": "Apie",
      "Portfolio": "Darbai",
      "Pricing": "Kainos",
      "Contact": "Kontaktai",
      "Let's talk!": "Susisiekime!",
    },
    hero: {
      "title": "Nestandartiniai WEB sprendimai",
      "text": "Pagalba išnaudojant skaitmenines galimybes jūsų verslo augimui",
      "View My Work": "Peržiūrėti darbus",
      "Get in Touch": "Susisiekti!",
    },
    portfolio: {
      "title": "Darbų portfolio",
      "Live Preview": "Svetainė",
      "Check Code": "Pamatyti kodą",
      "description1": "Vaizdo gamybos verslo svetainė, sukurta naudojant WordPress ir Elementor.",
      "description2": "Gėlių parduotuvės svetainė, sukurta pagal UI/UX Figma dizainą augalų parduotuvei.",
      "description3": "individualiai sukurta adaptyvi svetainė kino festivaliui. Įskaitant UX/UI dizainą ir analitiką.",
      "description4": "Funkcionalus svetainės pagrindinis puslapis, sukurtas pagal Figma dizainą ir reikalavimus.",
      "description5": "Verslo svetainė vietiniam verslui. Sukurta pagal paruoštą dizainą ir reikalavimus.",
      "Check more": "Peržiūrėti daugiau projektų"
    },
    about: {
      "title": "Apie mane",
      "p1": "Esu laisvai samdomas interneto svetainių kūrėjas iš Lietuvos, kuriam patinka kurti skaitmenines patirtis, kurios iš tiesų daro įtaką.",
      "p2": "Specializuojuosi <span>React</span>, <span>Symfony</span> ir <span>WordPress</span> srityse – kuriu tiek modernias verslo svetaines, tiek sudėtingas internetines aplikacijas.",
      "p3": "Mano rinkodaros patirtis suteikia unikalią perspektyvą – suprantu ne tik kaip sukurti svetainę, bet ir kaip ji gali padėti pasiekti jūsų verslo tikslus.",
      "p4": "Dirbu su klientais, kurie vertina kokybę, bendravimą ir rezultatus. Nesvarbu, ar reikia visiškai naujos svetainės, ar individualaus funkcionalumo esamai – kiekviename projekte taikau techninę patirtį ir kūrybišką problemų sprendimą.",
      "p5": "<span>Pasiruošęs aptarti jūsų kitą projektą?</span>"
    }

  }

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;