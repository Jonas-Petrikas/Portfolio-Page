import './style/Contacts.scss';
import ContactForm from './ContactForm';
import { useTranslation, Trans } from 'react-i18next';

export default function Contacts() {
      const { t, i18n } = useTranslation('contacts');
    return (
        <section className='contacts wrapper' id='contacts'>      
                <h2>{t("title")}</h2>
                <div className='contacts-text'>
                <p>{t("p1")}</p>
                <p>                   <Trans
                            i18nKey={t("p2")}
                            components={{ a: <a/> }}
                        /></p>
            </div>
<ContactForm/>
        </section>
    )
}