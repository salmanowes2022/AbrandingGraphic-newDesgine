import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
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
`;

const NavTab = styled.button`
  font-family: "RagSans";
  font-weight: 200;
  font-size: 50px;
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
`;

const NavSeparator = styled.span`
  font-family: "RagSans";
  font-weight: 200;
  font-size: 50px;
  color: #bebcbc;
  margin-right: 10px;
  user-select: none;
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

const Header = ({ language, toggleLanguage }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNotRoot = location.pathname !== "/";

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <StyledHeader>
      {/* Logo/Brand */}
      <HeaderLogo>
        <HeaderLogoImg src={logo} alt="Logo" />
        {isNotRoot && (
          <HeaderNavTabs>
            <NavTab
              active={location.pathname === "/home"}
              onClick={() => handleNavigation("/home")}
            >
              WORKS
            </NavTab>
            <NavSeparator>,</NavSeparator>
            <NavTab active={false} onClick={() => handleNavigation()}>
              COSTUMERS
            </NavTab>
            <NavSeparator>,</NavSeparator>
            <NavTab active={false} onClick={() => handleNavigation()}>
              CONTACT
            </NavTab>
          </HeaderNavTabs>
        )}
      </HeaderLogo>
      {/* Navigation */}
      <HeaderNav>
        {/* Language Switcher */}
        <HeaderLang onClick={toggleLanguage}>
          {language === "en" ? "עב" : "EN"}
        </HeaderLang>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
