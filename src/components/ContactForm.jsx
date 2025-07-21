import { useState } from 'react';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://dev.jonaspetrikas.com/send.php', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('Message sent!');
        e.target.reset();
      } else {
        setStatus('Failed to send.');
      }
    } catch (err) {
      console.error('Error:', err);
      setStatus('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}

export default ContactForm;