import './style/Pricing.scss';
import { useTranslation, Trans } from 'react-i18next';

export default function Pricing() {
    const { t, i18n } = useTranslation('pricing');
    return (
        <section className='pricing wrapper' id='pricing'>
            <h2>{t("title")}</h2>
            <div className="pricing-cards">
                <div className="pricing-card-1">
                    <h3>{t("starter")}</h3>
                    <p className='pricing-card-subtitle'>Perfect for small personal projects or landing pages.</p>
                    <ul>
                        <Trans
                            i18nKey={t("ul1")}
                            components={{ li: <li/> }}
                        />
                    </ul>
                    <p>{t("price1")}</p>


                </div>
                <div className="pricing-card-2">
                    <h3>{t('professional')}</h3>
                    <p className='pricing-card-subtitle'>{t('subtitle2')}</p>
                    <ul>
                      <Trans
                            i18nKey={t("ul2")}
                            components={{ li: <li/> }}
                        />
                    </ul>
                    <p>{t("price2")}</p>
                </div>
                <div className="pricing-card-3">
                    <h3>{t('premium')}</h3>
                    <p className='pricing-card-subtitle'>{t('subtitle3')}</p>
                    <ul>
                      <Trans
                            i18nKey={t("ul3")}
                            components={{ li: <li/> }}
                        />
                    </ul>
                    <p>{t("price3")}</p>

                </div>
            </div>

            <div className="pricing-addons">
                <p>{t("addons")}</p>
                <hr />
                <div>
                      <Trans
                            i18nKey={t("addonOptions")}
                            components={{ li: <li/> }}
                        />
                </div>


            </div>

        </section>
    )
}