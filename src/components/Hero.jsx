import "./style/Hero.scss";
import heroPortrait from "../assets/images/Jonas.webp";

export default function Hero() {
  return (
    <>
      <div className="hero-container wrapper">
        <div className="left">
          <h1>Custom Web Solutions</h1>
          <p>Helping you realize digital opportunities to grow your business</p>
          <div className="hero-btns">
            <a href="#portfolio"><button>View My Work</button></a>
            <a href="#contacts"><button className="highlighted">Get in touch!</button></a>
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
