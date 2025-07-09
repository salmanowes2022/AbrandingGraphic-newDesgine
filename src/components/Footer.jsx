import './Footer.css';
import translations from '../translations';

const Footer = ({ language }) => (
  <footer className="footer">
    <div className="footer-left">{translations[language].footerLeft}</div>
    <div className="footer-right">{translations[language].footerRight}</div>
  </footer>
);

export default Footer; 