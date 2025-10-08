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
      "description3": "Custom built responsive landing page for film festival. ux/ui, analytics.",
      "description4": "Landing page built following a Figma design and requirements.",
      "description5": "Website for a local business. Built following design and requirements.",
      "description6": "Remade wordpress website keeping the content, added funtionality",
      "Check more": "Check other projects on"
    },
    about: {
      "title": "About me",
      "p1": "I'm a freelance web developer from Lithuania with a passion for creating digital experiences that make a difference. ",
      "p2": "Specializing in <span>React</span>, <span>Symfony</span>, and <span>WordPress</span>, I build everything from sleek business websites to complex web applications.",
      "p3": "My background in marketing gives me a unique perspective – I understand not just how to build websites, but how to make them work for your business goals.",
      "p4": "I work with clients who value quality, communication, and results. Whether you need a complete website remake or custom functionality for your existing site, I bring technical expertise and creative problem-solving to every project.",
      "p5": "<span>Ready to discuss your next project?</span>"
    },
    pricing: {
      "title": "pricing",
      "starter": "starter",
      "professional": "professional",
      "premium": "premium",
      "subtitle1": "Perfect for small personal projects or landing pages.",
      "subtitle2": "Great for businesses, portfolios, or product sites.",
      "subtitle3": "Best for larger or more custom projects.",
      "ul1": `<li>1-page custom website</li>
              <li>Responsive design</li>
              <li>Contact form integration</li>
              <li>Basic SEO setup</li>
              <li>Delivery: ~5 days</li>`,
      "ul2": `<li>Up to 5 pages (Home, About, Services, etc.)</li>
              <li>Custom design & layout</li>
              <li>Optimized for mobile</li>
              <li>Contact form + social links</li>
              <li>Light animations or effects</li>
              <li>Delivery: ~10–14 days</li>`,
      "ul3": `<li>6+ pages or dynamic features (e.g. blog, gallery)</li>
              <li>CMS integration (WordPress or custom)</li>
              <li>Advanced animations or interactions</li>
              <li>Ongoing support (1 month)</li>
              <li>Delivery: ~3–4 weeks</li>`,
      "price1": "Price: €200–€300",
      "price2": "Price: €500–€700",
      "price3": "Price: Starting from €900+",
      "addons": "Optional add-ons: ",
      "addonOptions": `
                <li>SEO optimization - €80</li>
                <li>Multi-language support  - €150</li>
                <li>Maintenance & suppprt - from €50 / month</li>`,
    },
    contacts: {
      "title": "Let's talk!",
      "p1": "Have a project in mind or just want to say hi? I'd love to hear from you.",
      "p2": "Fill out the form below or email me directly at <a href='mailto:jonas@jonaspetrikas.com'>jonas@jonaspetrikas.com</a>.",
      "placeholder1": "Your name",
      "placeholder2": "Your email",
      "placeholder3": "Your message",
      "send": "SEND",
      "status0": "Sending...",
      "status1": "Message sent!",
      "status2": "Failed to send.",
      "status3": "Something went wrong."
    },
    footer: {
      "about": "about",
      "summary": "Freelance web developer specializing in modern, responsive websites that drive results.",
      "available": "Available for new projects",
      "services": "Services",
      "servicesList": `<li>Custom Web Development</li>
                        <li>Responsive Design</li>
                        <li>E-commerce Solutions</li>
                        <li>Maintenance & Support</li>`,
      "contact": "Get In Touch",
      "copyright": "© 2025 Jonas Petrikas. All rights reserved.",
      "privacy": "Privacy Policy",
      "toc": "Terms of Service",
    },


  },
  lt: {
    header: {
      "About": "Apie",
      "Portfolio": "Darbai",
      "Pricing": "Kainos",
      "Contact": "Kontaktai",
      "Let's talk!": "Pasikalbame!",
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
    },
    pricing: {
      "title": "kainos",
      "starter": "pradinis",
      "professional": "profesionalus",
      "premium": "aukščiausios klasės",
      "subtitle1": "Puikiai tinka mažiems asmeniniams projektams ar nukreipimo puslapiams.",
      "subtitle2": "Idealu verslams, portfolio ar produktų svetainėms.",
      "subtitle3": "Geriausia didesniems ar labiau pritaikytiems projektams.",
      "ul1": `<li>1 puslapio individuali svetainė</li>
          <li>Responsyvus dizainas</li>
          <li>Kontaktų formos integracija</li>
          <li>Pagrindinis SEO nustatymas</li>
          <li>Atlikimo terminas: ~5 dienos</li>`,
      "ul2": `<li>Iki 5 puslapių (pagrindinis, apie, paslaugos ir kt.)</li>
          <li>Individualus dizainas ir išdėstymas</li>
          <li>Optimizuota mobiliesiems</li>
          <li>Kontaktų forma + socialiniai tinklai</li>
          <li>Lengvos animacijos ar efektai</li>
          <li>Atlikimo terminas: ~10–14 dienų</li>`,
      "ul3": `<li>6+ puslapių arba dinaminės funkcijos (pvz. tinklaraštis, galerija)</li>
          <li>TVS integracija (WordPress arba individuali)</li>
          <li>Išplėstinės animacijos ar sąveikos</li>
          <li>Tęstinė pagalba (1 mėnuo)</li>
          <li>Atlikimo terminas: ~3–4 savaitės</li>`,
      "price1": "Kaina: €200–€300",
      "price2": "Kaina: €500–€700",
      "price3": "Kaina: nuo €900+",
      "addons": "Papildomi priedai: ",
      "addonOptions": `
            <li>SEO optimizacija – €80</li>
            <li>Daugiakalbė svetainė – €150</li>
            <li>Priežiūra ir palaikymas – nuo €50 / mėn.</li>`,
    },
    contacts: {
      "title": "Pasikalbame!",
      "p1": "Turi projektą ar tiesiog nori pasisveikinti? Būtų malonu iš tavęs išgirsti.",
      "p2": "Užpildyk žemiau esančią formą arba parašyk tiesiogiai el. paštu <a href='mailto:jonas@jonaspetrikas.com'>jonas@jonaspetrikas.com</a>.",
      "placeholder1": "Tavo vardas",
      "placeholder2": "Tavo el. paštas",
      "placeholder3": "Tavo žinutė",
      "send": "SIŲSTI",
      "status0": "Siunčiama...",
      "status1": "Žinutė išsiųsta!",
      "status2": "Nepavyko išsiųsti.",
      "status3": "Įvyko klaida."
    },
    footer: {
      "about": "apie",
      "summary": "Laisvai samdomas žiniatinklio kūrėjas, kuriantis modernias, responsyvias svetaines, padedančias pasiekti rezultatus.",
      "available": "Pasiekiamas naujiems projektams",
      "services": "Paslaugos",
      "servicesList": `<li>Individualus svetainių kūrimas</li>
                    <li>Responsyvus dizainas</li>
                    <li>El. prekybos sprendimai</li>
                    <li>Priežiūra ir palaikymas</li>`,
      "contact": "Susisiek",
      "copyright": "© 2025 Jonas Petrikas. Visos teisės saugomos.",
      "privacy": "Privatumo politika",
      "toc": "Naudojimo sąlygos",
    },


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