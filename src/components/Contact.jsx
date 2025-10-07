import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

const AppRoot = styled.div`
  min-height: 100vh;
  background: #fff;
  color: #111;
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  display: flex;
  flex-direction: column;

  &.rtl {
    direction: rtl;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  margin-top: 100px;

  @media (max-width: 900px) {
    padding: 20px 0;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
  }
`;

const Contact = ({ language, toggleLanguage }) => {
  return (
    <AppRoot className={language === "he" ? "rtl" : ""}>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <MainContent>
        <ContactSection language={language} />
      </MainContent>
      <Footer language={language} />
    </AppRoot>
  );
};

export default Contact;
