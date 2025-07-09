import "./style/Hero.scss";
import heroPortrait from "../assets/images/Jonas.webp";

export default function Hero() {
  return (
    <>
      {/* <img className='hero-bg' src={codeBg} alt="background picture with code lines" /> */}
      <div className="hero-container wrapper">
        <div className="left">
          <h1>Web Developer</h1>
          <p>Custom web solutions that grow your business</p>
          <div className="hero-btns">
            <button>View My Work</button>
            <button>Get in touch!</button>
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
