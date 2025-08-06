import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import ToS from './pages/ToS';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SlideUp from './components/SlideUp';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <>
      <Header />
      <SlideUp />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/terms-of-service" element={<ToS />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <CookieConsent />
      <Footer />
    </>
  )
}

export default App
