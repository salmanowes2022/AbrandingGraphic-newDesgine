import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

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
  font-family: "RagSans", sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 10px;

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

const HeaderNavTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: 600px) {
    &.desktop-nav {
      display: none;
    }
  }
`;

const NavTab = styled.button`
  font-family: "RagSans";
  font-weight: 200;
  font-size: 50px; /* 1920px and above */
  color: ${(props) => (props.active ? "#000000" : "#BEBCBC")};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  user-select: none;
  transition: color 0.2s ease;

  &:hover {
    color: #000000;
  }

  @media (max-width: 1728px) {
    font-size: 45px;
  }

  @media (max-width: 1512px) {
    font-size: 40px;
  }

  @media (max-width: 1440px) {
    font-size: 37.5px;
  }

  @media (max-width: 1280px) {
    font-size: 33.33px;
  }

  @media (max-width: 1024px) {
    font-size: 26.67px;
  }
`;

const NavSeparator = styled.span`
  font-family: "RagSans";
  font-weight: 200;
  font-size: 50px; /* 1920px and above */
  color: #bebcbc;
  margin-right: 10px;
  user-select: none;

  @media (max-width: 1728px) {
    font-size: 45px;
  }

  @media (max-width: 1512px) {
    font-size: 40px;
  }

  @media (max-width: 1440px) {
    font-size: 37.5px;
  }

  @media (max-width: 1280px) {
    font-size: 33.33px;
  }

  @media (max-width: 1024px) {
    font-size: 26.67px;
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
  font-family: "RagSans", sans-serif;
  font-weight: 200; /* ExtraLight */
  color: #bebcbc;
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

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    display: flex;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: #000;
    margin: 2px 0;
    transition: all 0.3s ease;
  }
`;

const MobileMenuPopup = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;

  @media (max-width: 600px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

const MobileMenuContent = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  min-width: 200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const MobileNavTab = styled.button`
  font-family: "RagSans";
  font-weight: 200;
  font-size: 24px;
  color: ${(props) => (props.active ? "#000000" : "#BEBCBC")};
  background: none;
  border: none;
  padding: 12px 0;
  cursor: pointer;
  user-select: none;
  transition: color 0.2s ease;
  display: block;
  width: 100%;
  text-align: left;

  &:hover {
    color: #000000;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const MobileNavSeparator = styled.span`
  font-family: "RagSans";
  font-weight: 200;
  font-size: 24px;
  color: #bebcbc;
  margin: 0 8px;
  user-select: none;
`;

const Header = ({ language, toggleLanguage }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNotRoot = location.pathname !== "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <StyledHeader>
      {/* Logo/Brand */}
      <HeaderLogo>
        <HeaderLogoImg src={logo} alt="Logo" />
        {isNotRoot && (
          <>
            <HeaderNavTabs className="desktop-nav">
              <NavTab
                active={location.pathname === "/home"}
                onClick={() => handleNavigation("/home")}
              >
                WORKS
              </NavTab>
              <NavSeparator>,</NavSeparator>
              <NavTab
                active={location.pathname === "/customers"}
                onClick={() => handleNavigation("/customers")}
              >
                CUSTOMERS
              </NavTab>
              <NavSeparator>,</NavSeparator>
              <NavTab
                active={location.pathname === "/contact"}
                onClick={() => handleNavigation("/contact")}
              >
                CONTACT
              </NavTab>
            </HeaderNavTabs>
            <MobileMenuButton onClick={toggleMobileMenu}>
              <div className="line"></div>
              <div className="line"></div>
            </MobileMenuButton>
          </>
        )}
      </HeaderLogo>
      {/* Navigation */}
      <HeaderNav>
        {/* Language Switcher */}
        <HeaderLang onClick={toggleLanguage}>
          {language === "en" ? "עב" : "EN"}
        </HeaderLang>
      </HeaderNav>

      {/* Mobile Menu Popup */}
      {isNotRoot && (
        <MobileMenuPopup isOpen={isMobileMenuOpen} onClick={toggleMobileMenu}>
          <MobileMenuContent onClick={(e) => e.stopPropagation()}>
            <MobileNavTab
              active={location.pathname === "/home"}
              onClick={() => handleNavigation("/home")}
            >
              WORKS
            </MobileNavTab>
            <MobileNavTab
              active={location.pathname === "/customers"}
              onClick={() => handleNavigation("/customers")}
            >
              CUSTOMERS
            </MobileNavTab>
            <MobileNavTab
              active={location.pathname === "/contact"}
              onClick={() => handleNavigation("/contact")}
            >
              CONTACT
            </MobileNavTab>
          </MobileMenuContent>
        </MobileMenuPopup>
      )}
    </StyledHeader>
  );
};

export default Header;
