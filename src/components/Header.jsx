import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
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
        <div className="header-lang">עב</div>
      </div>
    </header>
  );
};

export default Header; 