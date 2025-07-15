import './style/SlideUp.scss';
import slideUpIcon from '../assets/images/icons/slide-up.svg';
import { useState, useEffect } from 'react';

export default function SlideUp() {
    const [visible, setVisible] = useState(0);
    const [opacity, setOpacity] = useState(100);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setVisible(scrollY > 100);
            if (scrollY <300){
                setOpacity(0);
                console.log(opacity);
                console.log(scrollY);
            }
            else{
                setOpacity(100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // cleanup
    }, []);

    return (
        <div className='slide-up' style={{ display: visible ? 'block' : 'none', opacity: opacity }} onClick={_ => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>
            <div className="button-container">
                <div>
                    <img src={slideUpIcon} alt="" />
                </div>
            </div>
        </div>
    )
}