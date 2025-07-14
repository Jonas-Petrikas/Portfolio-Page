import "./style/Header.scss";
import githubLogo from "../assets/images/logos/github2.svg";
import LinkedInLogo from "../assets/images/logos/linkedin.svg";

const code = "<";
const code2 = "/>";

export default function Header() {
  return (
    <header>
      <div className="top-navbar wrapper">
        <div className="header-logo">
          <a href="#">
            <span className="logo-decor"> {code} </span>
            <span>
              Jonas<b>Petrikas</b>
            </span>
            <span className="logo-decor"> {code2} </span>
          </a>
        </div>
        <div className="nav-menu">
          <a href="#about" className="menu-item">
            About
          </a>
          <a href="#portfolio" className="menu-item">
            Portfolio
          </a>
                    <a href="#pricing" className="menu-item">
            Pricing
          </a>
                    <a href="#contacts" className="menu-item">
            Contact
          </a>
        </div>
        <div className="cta">
            <div className="soc-icons">
          <a href="https://github.com/Jonas-Petrikas">
            <img src={githubLogo} alt="Github logo" />
          </a>
                <a href="https://www.linkedin.com/in/jonaspetrikas/">
            <img src={LinkedInLogo} alt="LinkedIn logo" />
          </a>


            </div>
          
          <a href="#contacts">
            <button>Lets talk!</button>
          </a>
        </div>
      </div>
    </header>
  );
}
