import './App.css'
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Header from './components/Header'
import CategoriesNav from './components/CategoriesNav'
import TeamSection from './components/TeamSection'
import CustomersSection from './components/CustomersSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import translations from './translations';

function App() {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'he' : 'en'));

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`app-root${language === 'he' ? ' rtl' : ''}`}
      dir={language === 'he' ? 'rtl' : 'ltr'}>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="app-main">
        {/* <Hero language={language} /> */}
        <div className="app-intro">
          <h1 className="app-title">
            {translations[language].introTitle}
          </h1>
          <button 
            onClick={scrollToContact}
            className="app-contact-btn"
            style={{letterSpacing: '0.15em', width: 140, height: 32}}
          >
            {translations[language].contactBtn}
          </button>
        </div>
        <CategoriesNav language={language} />
        <TeamSection language={language} />
        <CustomersSection language={language} />
        <ContactSection language={language} />
        {/* Next sections will go here */}
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App
