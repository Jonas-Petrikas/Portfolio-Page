import './style/Contacts.scss';

export default function Contacts() {
    return (
        <section className='contacts wrapper' id='contacts'>      
                <h2>Let's talk!</h2>
                <div className='contacts-text'>
                <p>Have a project in mind or just want to say hi? I'd love to hear from you. </p>
                <p> Fill out the form below or email me directly at <a href="mailto:jonas@jonaspetrikas.com">jonas@jonaspetrikas.com</a>.</p>
            </div>
            {/* <h3>Contact form:</h3> */}
            <form action="https://dev.jonaspetrikas.com/send.php" method="POST">
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Your email" required />
                <textarea name="message" placeholder="Your message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}