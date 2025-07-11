import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Pricing from './components/Pricing';
import Contacts from './components/Contacts';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Portfolio/>
      <About/>
      <Pricing/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
