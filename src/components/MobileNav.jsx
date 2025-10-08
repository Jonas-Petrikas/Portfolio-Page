import './style/MobileNav.scss';
import githubLogo from "../assets/images/logos/github2.svg";
import LinkedInLogo from "../assets/images/logos/linkedin.svg";
import closeIcon from "../assets/images/icons/close.svg";
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';


const code = "<";
const code2 = "/>";


export default function MobileNav({mobileNavVisable, setMobileNavVisible}) {
     const { t, i18n } = useTranslation('header');
    if (mobileNavVisable) {
        return (
            <div className="mobilenav-modal">
                <div className="mobilenav-modal-contents">

                
                <div className="mobilenav-modal-logo">
                    <a href="#">
                        <span className="logo-decor"> {code} </span>
                        <span>
                            Jonas<b>Petrikas</b>
                        </span>
                        <span className="logo-decor"> {code2} </span>
                    </a>
                </div>
                
                <div className='mobilenav-modal-close' onClick={_ => setMobileNavVisible(!mobileNavVisable)}>
                    <img src={closeIcon} alt="close icon" />
                </div>
                <div className="mobilenav-modal-menu">
                    

                     <Link to="/#about" className="menu-item" onClick={_ => setMobileNavVisible(!mobileNavVisable)} end>
                                  {t('About')}
                                </Link> 
                                <Link to='/#portfolio' className="menu-item" onClick={_ => setMobileNavVisible(!mobileNavVisable)} end>
                                  {t('Portfolio')}
                                </Link> 
                                <Link to="/#pricing" className="menu-item" onClick={_ => setMobileNavVisible(!mobileNavVisable)} end>
                                  {t('Pricing')}
                                </Link>
                                <Link to="/#contacts" className="menu-item" onClick={_ => setMobileNavVisible(!mobileNavVisable)} end>
                                  {t('Contact')}
                                </Link>

                                 <button onClick={i18n.language==='lt'? _=>i18n.changeLanguage('en') : _=>i18n.changeLanguage('lt') }>{i18n.language==='lt' ? 'English' : 'Lietuviškai'}</button>
                </div>

                <div className="mobilenav-modal-soc-icons">
                    <a href="https://github.com/Jonas-Petrikas" onClick={_ => setMobileNavVisible(!mobileNavVisable)}>
                        <img src={githubLogo} alt="Github logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/jonaspetrikas/" onClick={_ => setMobileNavVisible(!mobileNavVisable)}>
                        <img src={LinkedInLogo} alt="LinkedIn logo" />
                    </a>
                </div>
            </div>
            </div>
        )
    }
    else {
        return null;
    }

}