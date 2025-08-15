import styled from "styled-components";
import translations from "../translations";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.6);
  padding: 16px;
  margin-top: 32px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    font-size: 9px;
    padding: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 8px;
    padding: 6px 2px;
    gap: 4px;
  }
`;

const FooterLeft = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    text-align: left;
  }
`;

const FooterRight = styled.div`
  font-family: "RagSans", sans-serif;
  font-weight: 600; /* SemiBold */
  font-size: 13px;
  @media (max-width: 600px) {
    width: 100%;
    text-align: left;
  }
`;

const Footer = ({ language }) => (
  <FooterContainer>
    <FooterLeft>{translations[language].footerLeft}</FooterLeft>
    <FooterRight>{translations[language].footerRight}</FooterRight>
  </FooterContainer>
);

export default Footer;
