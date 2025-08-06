import "./style/Portfolio.scss";
import flowerShop from "../assets/images/portfolio/flowershop2.png";
import skrynai from "../assets/images/portfolio/skrynai.png";
import subkinas from "../assets/images/portfolio/subkinas.png";
import sveskim from "../assets/images/portfolio/sveskim.png";
import trafalgar from "../assets/images/portfolio/trafalgar2.png";
import PortfolioItem from "./PorfolioItem";
import { useEffect, useState } from "react";
import PortfolioScrollBtns from "./PortfolioScrollBtns";
import { useTranslation } from 'react-i18next';








export default function Portfolio() {
  const { t, i18n } = useTranslation('portfolio');
  const portfolioItems = [
    {
      id: 1,
      name: "Subkinas",
      image: subkinas,
      techStack: ["Wordpress", "Elementor"],
      description:
        // "Video production business website built on Wordpress with Elementor."
        t("description1")
      ,
      livePreview: "https://subkinas.com/",
    },
    {
      id: 2,
      name: "Green-Thumb",
      image: flowerShop,
      techStack: ["JS", "react", "HTML", "CSS"],
      description:
        t("description2"),
      livePreview: "https://jonas-petrikas.github.io/Flower-shop-REACT/",
      github: "https://github.com/Jonas-Petrikas/Flower-shop-REACT",
    },
    {
      id: 3,
      name: "Klaipėdos skrynai",
      image: skrynai,
      techStack: ["ux/ui", "HTML", "CSS"],
      description:
        t("description3"),
      livePreview: "https://skrynai.subkinas.com/",
      github: "https://github.com/Jonas-Petrikas/Skrynai",
    },
    {
      id: 4,
      name: "Trafalgal",
      image: trafalgar,
      techStack: ["HTML", "CSS"],
      description:
        t("description4"),
      livePreview: "https://jonas-petrikas.github.io/Trafalgar-HTML/",
      github: "https://github.com/Jonas-Petrikas/Trafalgar-HTML",
    },
    {
      id: 5,
      name: "Švęskim",
      image: sveskim,
      techStack: ["Twig", "HTML", "CSS"],
      description:
        t("description5"),
      livePreview: "https://sveskim.lt/",
    },

  ];
  const [active, setActive] = useState(0);


  useEffect(() => {
    const el = document.getElementById("portfolio-items");
    if (!el) return;

    const handleScroll = _ => console.log(el.scrollLeft);
    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll); // clean up
    };
  }, []);

  const scrollLeft = _ => {

  }
  return (
    <>
      <div className="separator"></div>
      <section className="portfolio" id="portfolio">

        <div className="portfolio-container">
          <h2>{t("title")}</h2>
          <div className="portfolio-items" id="portfolio-items">
            {/* Map through portfolio items to render them */}
            {
              portfolioItems.map((item) =>
                <PortfolioItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  techStack={item.techStack}
                  description={item.description}
                  livePreview={item.livePreview}
                  github={item.github}
                />)
            }
          </div>
        </div>
        <div className="portfolio-cta">
          {t("Check more")} <a href="https://github.com/Jonas-Petrikas" target="_blank">Github</a>
        </div>
        <PortfolioScrollBtns qty={portfolioItems.length} />
      </section>



    </>
  );
}
