import './style/PortfolioScrollBtns.scss'
import leftArrow from '../assets/images/icons/left-arrow.svg'
import rightArrow from '../assets/images/icons/right-arrow.svg'
import { useEffect, useState } from 'react';

export default function PortfolioScrollBtns() {
    const [scrollX, setScrollX] = useState(0);
    useEffect(() => {
        const el = document.getElementById("portfolio-items");
        setScrollX(el.scrollLeft);
    }, []) //UseEffect runs when Component is mounted

    const scrollLeft = _ => {
        const el = document.getElementById("portfolio-items");
    if (!el) return;

        if (scrollX > 0) {
            el.scrollLeft = el.scrollLeft - 370;
            setScrollX(scrollX - 250);
        }

        console.log('scroll left from', scrollX)

    }
    const scrollRight = _ => {

         const el = document.getElementById("portfolio-items");
    if (!el) return;

        if (scrollX < 350) {
            el.scrollLeft = el.scrollLeft + 370;
            setScrollX(scrollX + 250);
        }

        console.log('scroll right from', scrollX)

    }
    return (

        <>
            <div className="portfolio-btns-container">
                <div className="portfolio-btn-left" onClick={scrollLeft} >
                    <img src={leftArrow} alt="scroll-left-icon" />
                </div>
                <div className="portfolio-btn-right">
                    <img src={rightArrow} alt="scroll-right-icon" onClick={scrollRight} />
                </div>

            </div>
        </>
    )
}