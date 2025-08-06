import { useState, useEffect } from "react";
import './style/CookieConsent.scss';
import { Link } from "react-router";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const handleConsent = (choice) => {
    localStorage.setItem("cookieConsent", choice);
    setShowBanner(false);
    if (choice === "accepted") {
      loadGoogleAnalytics();
    }
  };

  const loadGoogleAnalytics = () => {
    if (window.gtag) return; // prevent double load

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-D5HR7EPPZ9";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-D5HR7EPPZ9");
  };

  if (!showBanner) return null;

  return (
    <>

    <div className="cookie-consent">
               <div className="separator"></div>
      <div className="cookie-consent-content">

      
      <p>
        This site uses cookies for analytics. See our <Link to="/privacy-policy" end>Privacy Policy</Link>.
      </p>
      <div className="cookie-btns">
 <button onClick={() => handleConsent("accepted")} >Accept all</button>
      <button onClick={() => handleConsent("rejected")} >Reject all</button>
      </div>
     </div>
    </div>
    </>
  );
};

export default CookieConsent;
