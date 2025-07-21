import './style/MobileNav.scss';
import githubLogo from "../assets/images/logos/github2.svg";
import LinkedInLogo from "../assets/images/logos/linkedin.svg";
import closeIcon from "../assets/images/icons/close.svg";


const code = "<";
const code2 = "/>";


export default function MobileNav({mobileNavVisable, setMobileNavVisible}) {
    
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
                    <a href="#about" className="menu-item" onClick={_ => setMobileNavVisible(!mobileNavVisable)}>
                        About
                    </a>
                    <a href="#portfolio" className="menu-item" onClick={_ => setMobileNavVisible(!mobileNavVisable)}>
                        Portfolio
                    </a>
                    <a href="#pricing" className="menu-item" onClick={_ => setMobileNavVisible(!mobileNavVisable)}>
                        Pricing
                    </a>
                    <a href="#contacts" className="menu-item" onClick={_ => setMobileNavVisible(!mobileNavVisable)}>
                        Contact
                    </a>
                    <a href="#contacts" onClick={_ => setMobileNavVisible(!mobileNavVisable)}>
                        <button >Lets talk!</button>
                    </a>

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