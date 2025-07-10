import "./style/Portfolio.scss";
import flowerShop from "../assets/images/portfolio/flowershop2.png";
import skrynai from "../assets/images/portfolio/skrynai.png";
import subkinas from "../assets/images/portfolio/subkinas.png";
import sveskim from "../assets/images/portfolio/sveskim.png";

export default function Footer() {
  return (
    <>
      <div className="separator"></div>
      <section className="portfolio">
 
        <div className="portfolio-container">
                 <h2>Projects</h2>
          <div className="portfolio-items">
            <div className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={subkinas} alt="" />
              </div>
              <div className="portfolio-item-name">
                <h3>Subkinas</h3>
              </div>
              <div className="portfolio-item-tech-stack">
                <span>Wordpress</span>
                <span>Elementor</span>
              </div>
              <div className="portfolio-item-description">
                Fully functional project built following ui/ux figma design for
                a plant shop.
              </div>
              <div className="portfolio-item-btns">
                <button>Live preview</button>
              </div>
            </div>
            <div className="portfolio-item">
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
            <div className="portfolio-item">
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
            <div className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={sveskim} alt="" />
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
          </div>
        </div>
        <div className="portfolio-cta">
          Check full portfolio or visit github
        </div>
      </section>
    </>
  );
}
