import { useState } from 'react';
import { useTranslation} from 'react-i18next';

function ContactForm() {
  const [status, setStatus] = useState('');
  const { t, i18n } = useTranslation('contacts');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t("status0"));

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://dev.jonaspetrikas.com/send.php', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus(t("status1"));
        e.target.reset();
      } else {
        setStatus(t("status2"));
      }
    } catch (err) {
      console.error('Error:', err);
      setStatus(t("status3"));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder={t("placeholder1")} required />
      <input type="email" name="email" placeholder={t("placeholder2")} required />
      <textarea name="message" placeholder={t("placeholder3")} required />
      <button type="submit">{t("send")}</button>
      <p>{status}</p>
    </form>
  );
}

export default ContactForm;