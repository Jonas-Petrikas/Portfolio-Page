import "./style/Portfolio.scss";
import flowerShop from "../assets/images/portfolio/flowershop2.png";
import skrynai from "../assets/images/portfolio/skrynai.png";
import subkinas from "../assets/images/portfolio/subkinas.png";
import sveskim from "../assets/images/portfolio/sveskim.png";
import trafalgar from "../assets/images/portfolio/trafalgar2.png";
import PortfolioItem from "./PorfolioItem";
import { useEffect, useState } from "react";
import PortfolioScrollBtns from "./PortfolioScrollBtns";


const portfolioItems = [
  {
    id: 1,
    name: "Subkinas",
    image: subkinas,
    techStack: ["Wordpress", "Elementor"],
    description:
      "Video production business website built on Wordpress with Elementor."
    ,
    livePreview: "#",
  },
  {
    id: 2,
    name: "Green-Thumb",
    image: flowerShop,
    techStack: ["JS", "react", "HTML", "CSS"],
    description:
      "Flower-Shop website built following ui/ux figma design for a plant shop.",
    livePreview: "#",
    github: "#",
  },
  {
    id: 3,
    name: "Klaipėdos skrynai",
    image: skrynai,
    techStack: ["ux/ui", "HTML", "CSS"],
    description:
      "Custom built responsive landing page for film festival. Including ux/ui and analytics.",
    livePreview: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Trafalgal",
    image: trafalgar,
    techStack: ["HTML", "CSS"],
    description:
      "Functional landing page built following a Figma design and requirements.",
    livePreview: "#",
    github: "#",
  },
  {
    id: 5,
    name: "Švęskim",
    image: sveskim,
    techStack: ["Twig", "HTML", "CSS"],
    description:
      "Business website for a local business. Built following prepared design and requirements.",
    livePreview: "#",
    github: "#",
  },

];




export default function Portfolio() {
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

  const scrollLeft = _ =>{

  }
  return (
    <>
      <div className="separator"></div>
      <section className="portfolio" id="portfolio">

        <div className="portfolio-container">
          <h2>Portfolio projects</h2>
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
          Check other projects on <a href="https://github.com/Jonas-Petrikas">Github</a>
        </div>
       <PortfolioScrollBtns qty={portfolioItems.length}/>
      </section>
       
      

    </>
  );
}
