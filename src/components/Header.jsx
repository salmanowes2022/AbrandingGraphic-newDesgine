import './Header.css';
import logo from '../assets/logo.png';
import React from 'react';

const Header = ({ language, toggleLanguage }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      {/* Logo/Brand */}
      <div className="header-logo">
        <img src={logo} alt="Logo" className="header-logo-img" />
      </div>
      {/* Navigation */}
      <div className="header-nav">
        {/* Language Switcher */}
        <button className="header-lang" onClick={toggleLanguage}>
          {language === 'en' ? 'עב' : 'EN'}
        </button>
      </div>
    </header>
  );
};

export default Header; 