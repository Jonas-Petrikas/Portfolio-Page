import "./style/Header.scss";
import githubLogo from "../assets/images/logos/github2.svg";
import LinkedInLogo from "../assets/images/logos/linkedin.svg";
import menuIcon from "../assets/images/icons/menu.svg";
import MobileNav from "./MobileNav";
import { useState } from 'react';
import { NavLink } from "react-router";
import { useTranslation } from 'react-i18next';

const code = "<";
const code2 = "/>";

export default function Header() {
  
  const [mobileNavVisable, setMobileNavVisible] = useState(false);
  const { t, i18n } = useTranslation('header');
  console.log(i18n);
  return (
    <>

      <header className="desktop-header">
        <div className="top-navbar wrapper">
          <div className="header-logo">
            <NavLink to='/' end>
              <span className="logo-decor"> {code} </span>
              <span>
                Jonas<b>Petrikas</b>
              </span>
              <span className="logo-decor"> {code2} </span>
              </NavLink> 
          </div>
          <div className="nav-menu">
            <a href="#about" className="menu-item">
              {t('About')}
            </a>
            <a href="#portfolio" className="menu-item">
              {t('Portfolio')}
            </a>
            <a href="#pricing" className="menu-item">
              {t('Pricing')}
            </a>
            <a href="#contacts" className="menu-item">
              {t('Contact')}
            </a>
          </div>
          <div className="cta">
            <div className="soc-icons">
              <a href="https://github.com/Jonas-Petrikas" target="_blank">
                <img src={githubLogo} alt="Github logo" />
              </a>
              <a href="https://www.linkedin.com/in/jonaspetrikas/" target="_blank">
                <img src={LinkedInLogo} alt="LinkedIn logo" />
              </a>


            </div>

            <a href="#contacts">
              <button>{t("Let's talk!")}</button>
            </a>
                   
              <button onClick={i18n.language==='lt'? _=>i18n.changeLanguage('en') : _=>i18n.changeLanguage('lt') }>{i18n.language==='lt' ? 'EN' : 'LT'}</button>
      
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
