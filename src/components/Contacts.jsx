import './style/Contacts.scss';
import ContactForm from './ContactForm';

export default function Contacts() {
    return (
        <section className='contacts wrapper' id='contacts'>      
                <h2>Let's talk!</h2>
                <div className='contacts-text'>
                <p>Have a project in mind or just want to say hi? I'd love to hear from you. </p>
                <p> Fill out the form below or email me directly at <a href="mailto:jonas@jonaspetrikas.com">jonas@jonaspetrikas.com</a>.</p>
            </div>
<ContactForm/>
        </section>
    )
}