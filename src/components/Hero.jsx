import "./style/Hero.scss";
import heroPortrait from "../assets/images/Jonas.webp";
import { useTranslation } from 'react-i18next';

export default function Hero() {
  // const { t, i18n } = useTranslation('translation', {lng: 'lt'});
   const { t, i18n } = useTranslation('hero');
  return (
    <>
      <div className="hero-container wrapper">
        <div className="left">
          <h1>{t('title')}</h1>
          <p>{t('text')}</p>
          <div className="hero-btns">
            <a href="#portfolio"><button>{t('View My Work')}</button></a>
            <a href="#contacts"><button className="highlighted">{t('Get in Touch')}</button></a>
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
