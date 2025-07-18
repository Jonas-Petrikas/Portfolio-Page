import "./style/Header.scss";
import githubLogo from "../assets/images/logos/github2.svg";
import LinkedInLogo from "../assets/images/logos/linkedin.svg";
import menuIcon from "../assets/images/icons/menu.svg";
import MobileNav from "./MobileNav";
import { useState } from 'react';

const code = "<";
const code2 = "/>";

export default function Header() {
  const [mobileNavVisable, setMobileNavVisible] = useState(true);
  return (
    <>

      <header className="desktop-header">
        <div className="top-navbar wrapper">
          <div className="header-logo">
            <a href="https://jonaspetrikas.com/">
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
      {!mobileNavVisable &&(
<header className="mobile-header">
        <div className="mobile-header-logo">
          <a href="https://jonaspetrikas.com/">
            <span className="logo-decor"> {code} </span>
            <span>
              Jonas<b>Petrikas</b>
            </span>
            <span className="logo-decor"> {code2} </span>
          </a>
          </div>
          <div className="mobile-header-menu-toggle" onClick={_ => setMobileNavVisible(!mobileNavVisable)}>
            <img src={menuIcon} alt="menu icon" />
          </div>
         
      </header>
      )
    }
    <MobileNav mobileNavVisable={mobileNavVisable} setMobileNavVisible={setMobileNavVisible}/>
      
    </>
  );
}
