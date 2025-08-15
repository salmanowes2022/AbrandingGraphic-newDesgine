import styled from 'styled-components';
import logo from '../assets/logo.png';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 32px 8px 32px;
  box-sizing: border-box;
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 8px 8px 8px;
    gap: 8px;
  }
  
  @media (max-width: 600px) {
    padding: 8px 2px 4px 2px;
    position: relative;
  }
`;

const HeaderLogo = styled.div`
  font-size: 2rem;
  font-family: serif;
  font-weight: 300;
  letter-spacing: -0.02em;
  user-select: none;
  
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const HeaderLogoImg = styled.img`
  height: 48px;
  width: auto;
  display: block;
  
  @media (max-width: 900px) {
    height: 32px;
  }
  
  @media (max-width: 600px) {
    height: 24px;
  }
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 900px) {
    gap: 16px;
  }
`;

const HeaderLang = styled.button`
  font-size: 2.5rem;
  font-family: 'Inter', 'Montserrat', Arial, sans-serif;
  font-weight: 200;
  color: #bbb;
  background: none;
  border: none;
  border-radius: 0;
  padding: 0;
  opacity: 1;
  user-select: none;
  letter-spacing: -0.01em;
  cursor: pointer;
  
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
    position: absolute;
    top: 8px;
    right: 8px;
    left: auto;
    
    .rtl & {
      right: auto;
      left: 8px;
    }
  }
`;

const Header = ({ language, toggleLanguage }) => {

  return (
    <StyledHeader>
      {/* Logo/Brand */}
      <HeaderLogo>
        <HeaderLogoImg src={logo} alt="Logo" />
      </HeaderLogo>
      {/* Navigation */}
      <HeaderNav>
        {/* Language Switcher */}
        <HeaderLang onClick={toggleLanguage}>
          {language === 'en' ? 'עב' : 'EN'}
        </HeaderLang>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header; 