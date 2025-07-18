import "./style/Hero.scss";
import heroPortrait from "../assets/images/Jonas.webp";

export default function Hero() {
  return (
    <>
      <div className="hero-container wrapper">
        <div className="left">
          <h1>Custom Web Solutions</h1>
          <p>Helping to realize digital opportunities to grow your business</p>
          <div className="hero-btns">
            <button>View My Work</button>
            <button className="highlighted">Get in touch!</button>
          </div>
        </div>
        <div className="right">
          <img
            className="hero-portrait"
            src={heroPortrait}
            alt="Jonas Petrikas portrait"
          />
        </div>
      </div>
    </>
  );
}
