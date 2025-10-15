import { Helmet } from "react-helmet-async";
import { Trans, useTranslation } from 'react-i18next';

function SEO({lang}) {
  const {t} = useTranslation('meta');
  const baseUrl = "https://jonaspetrikas.com"; 

  return (
    <Helmet>
      <html lang={lang} />
      <title>{t("title")}</title>
      <meta name="description" content={t("description")} />
      <meta name="keywords"
    content={t("keywords")}/>
      <meta property="og:title" content={t("title")} />
      <meta property="og:description" content={t("description")} />
      <meta name="twitter:title" content={t("title")} />
      <meta name="twitter:description" content={t("description")} />

       {/* hreflang tags */}
      <link rel="alternate" href={`${baseUrl}/en`} hreflang="en" />
      <link rel="alternate" href={`${baseUrl}/lt`} hreflang="lt" />
      <link rel="alternate" href={baseUrl} hreflang="x-default" />
    </Helmet>
  );
}

export default SEO;