import './style/Contacts.scss';

export default function Contacts() {
    return (
        <section className='contacts' id='contacts'>
            <h2>Contacts</h2>
            <form action="../send.php" method="POST">
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Your email" required />
                <textarea name="message" placeholder="Your message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}