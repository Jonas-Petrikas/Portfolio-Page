import About from "../components/About";
import Contacts from "../components/Contacts";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";

export default function Home(){
    return (
        <>
            <Hero />
            <Portfolio />
            <About />
            <Pricing />
            <Contacts />
        </>
    )
}

