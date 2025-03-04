import './style/Hero.scss';
import codeBg from '../assets/images/code-bg.webp'
import heroPortrait from '../assets/images/Jonas.webp'

export default function Hero() {
    return (
        <>
            {/* <img className='hero-bg' src={codeBg} alt="background picture with code lines" /> */}
            <div className="hero-container wrapper" >


                <div className="left">
                    <h1>Jonas Petrikas - Website development</h1>
                    <p>hellow</p>
                    <div className="hero-btns">
                        <button>Get in touch!</button>
                        <button>Learn more</button>

                    </div>

                </div>
                <div className="right">
                    <img className='hero-portrait' src={heroPortrait} alt="Jonas Petrikas portrait" />


                </div>
            </div>
        </>

    )

}