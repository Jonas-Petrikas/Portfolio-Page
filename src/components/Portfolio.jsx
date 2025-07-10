import "./style/Portfolio.scss";
import flowerShop from "../assets/images/portfolio/flowershop2.png";
import skrynai from "../assets/images/portfolio/skrynai.png";
import subkinas from "../assets/images/portfolio/subkinas.png";
import sveskim from "../assets/images/portfolio/sveskim.png";
import PortfolioItem from "./PortfolioItem";

const portfolioItems = [
  {
    id: 1,
    image: subkinas,
    name: "Subkinas",
    stack: ['wordpress', 'elementor'],
    description: "Company portforlio website on WordPress with adapted theme design",
    livePreview: 'https://subkinas.com/',
    github: '#'
  },
  {
    id: 2,
    image: flowerShop,
    name: "Flowershop",
    stack: ['react', 'html', 'css'],
    description: "Custom built landing page for film festival. Including ux/ui and analytics.",
    livePreview: 'subkinas.com',
  },
];


export default function Portfolio() {

  return (
    <>


      <div className="separator"></div>
      <section className="portfolio">

        <div className="portfolio-container">
          <h2>Portfolio projects</h2>
          <div className="portfolio-items">
            {
              portfolioItems.map(pi =>
                <PortfolioItem key={pi.id}
                  id={pi.id}
                  image={pi.image}
                  name={pi.name}
                  stack={pi.stack}
                  description={pi.description}
                  livePreview={pi.livePreview}
                  github={pi.github} />)
            }

            <div className="portfolio-item" id="portfolio-item-2">
              <div className="portfolio-item-image">
                <img src={flowerShop} alt="" />
              </div>
              <div className="portfolio-item-name">
                <h3>Flower-shop</h3>
              </div>
              <div className="portfolio-item-tech-stack">
                <span>react</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <div className="portfolio-item-description">
                Fully functional project built following ui/ux figma design for
                a plant shop.
              </div>
              <div className="portfolio-item-btns">
                <button>Live preview</button>
                <button>Check code</button>
              </div>
            </div>
            <div className="portfolio-item" id="portfolio-item-3">
              <div className="portfolio-item-image">
                <img src={skrynai} alt="" />
              </div>
              <div className="portfolio-item-name">
                <h3>Klaipėdos skrynai</h3>
              </div>
              <div className="portfolio-item-tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>ux/ui</span>
              </div>
              <div className="portfolio-item-description">
                Custom built landing page for film festival. Including ux/ui and
                analytics.
              </div>
              <div className="portfolio-item-btns">
                <button>Live preview</button>
                <button>Check code</button>
              </div>
            </div>
            <div className="portfolio-item" id="portfolio-item-4">
              <div className="portfolio-item-image">
                <img src={sveskim} alt="" />
              </div>
              <div className="portfolio-item-name">
                <h3 >Klaipėdos skrynai</h3>
              </div>
              <div className="portfolio-item-tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>ux/ui</span>
              </div>
              <div className="portfolio-item-description">
                Custom built landing page for film festival. Including ux/ui and
                analytics.
              </div>
              <div className="portfolio-item-btns">
                <button>Live preview</button>
                <button>Check code</button>
              </div>
            </div>

          </div>
          <a href="#portfolio-item-1">1</a>
          <a href="#portfolio-item-3">3</a>
          <a href="#portfolio-item-4">4</a>
          <a href="#portfolio-item-5">5</a>
          <div className="portfolio-cta">
            <p>Check full portfolio on <a href="https://github.com/Jonas-Petrikas">Github</a></p>
          </div>

        </div>
      </section>
      <div className="separator"></div>
    </>
  );
}
