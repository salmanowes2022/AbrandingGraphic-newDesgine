import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Header from "./components/Header";
import CategoriesNav from "./components/CategoriesNav";
import TeamSection from "./components/TeamSection";
import CustomersSection from "./components/CustomersSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import translations from "./translations";

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

const AppMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 0 4px;
  }

  @media (max-width: 600px) {
    padding: 0 2px;
  }
`;

const AppIntro = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 64px auto 48px auto;
  text-align: center;

  @media (max-width: 900px) {
    margin: 32px auto 24px auto;
  }

  @media (max-width: 600px) {
    margin: 16px auto 12px auto;
  }
`;

const AppTitle = styled.h1`
  text-transform: uppercase;
  font-family: "RagSans", sans-serif;
  font-weight: 200; /* ExtraLight */
  letter-spacing: 0.01em;
  font-size: 4rem;
  line-height: 1.2;
  margin: 0 0 32px 0;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const AppContactBtn = styled.button`
  background: #111;
  color: #fff;
  width: 327px;
  padding: 12px 0;
  font-size: 16px;
  font-family: "RagSans", sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  margin: 40px auto 0 auto;
  display: block;
  text-align: center;
  box-shadow: none;
  text-transform: uppercase;
  letter-spacing: normal;
  cursor: pointer;
  transition: opacity 0.2s;
  height: 65px;
  width: 140;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 900px) {
  }

  @media (max-width: 600px) {
    width: 224px;
    height: 44px;
  }
`;

function App() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "he" : "en"));

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalStyles />
      <AppRoot
        className={language === "he" ? "rtl" : ""}
        dir={language === "he" ? "rtl" : "ltr"}
      >
        <Header language={language} toggleLanguage={toggleLanguage} />
        <AppMain>
          {/* <Hero language={language} /> */}
          <AppIntro>
            <AppTitle>{translations[language].introTitle}</AppTitle>
            <AppContactBtn onClick={scrollToContact}>
              {translations[language].contactBtn}
            </AppContactBtn>
          </AppIntro>
          <CategoriesNav language={language} />
          <TeamSection language={language} />
          <CustomersSection language={language} />
          <ContactSection language={language} />
          {/* Next sections will go here */}
        </AppMain>
        <Footer language={language} />
      </AppRoot>
    </>
  );
}

export default App;
