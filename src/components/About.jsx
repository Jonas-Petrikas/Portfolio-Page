import './style/About.scss';
import aboutDecorImg from "../assets/images/About-code-decor.webp"

export default function About() {
    return (
        <>
            <div className="separator"></div>
            <section className="about" id="about">
                <div className="about-container wrapper">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <div className='about-content-description'>
                            <p>I'm a freelance web developer from Lithuania with a passion for creating digital experiences that make a difference. </p>
                            <p>Specializing in <span>React</span>, <span>Symfony</span>, and <span>WordPress</span>, I build everything from sleek business websites to complex web applications.</p>
                            <p>My background in marketing gives me a unique perspective – I understand not just how to build websites, but how to make them work for your business goals. I'm obsessed with performance, accessibility, and creating interfaces that users actually enjoy using.</p>
                            <p>I work with clients who value quality, communication, and results. Whether you need a complete website overhaul or custom functionality for your existing site, I bring technical expertise and creative problem-solving to every project.</p>
                            <p><span>Ready to discuss your next project?</span></p>
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