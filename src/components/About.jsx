import './style/About.scss';
import aboutDecorImg from "../assets/images/About-code-decor.webp";
import { Trans, useTranslation } from 'react-i18next';

export default function About() {
    const { t, i18n } = useTranslation('about');
    return (
        <>
            <section className="about" id="about">
                <div className="about-container wrapper">
                    <h2>{t("title")}</h2>
                    <div className="about-content">
                        <div className='about-content-description'>
                            <p>{t("p1")}</p>
                            <p><Trans
                                i18nKey={t("p2")}
                                components={{ span: <span className="highlight" /> }}
                            /></p>
                            <p>{t("p3")}</p>
                            <p>{t("p4")}</p>
                            <p><Trans
                                i18nKey={t("p5")}
                                components={{ span: <span className="highlight" /> }}
                            /></p>
                        </div>
                        <div className='about-content-image'>
                            <img src={aboutDecorImg} alt="" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}