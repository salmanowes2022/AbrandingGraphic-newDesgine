import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

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

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #000;
`;

function Seat({ language, toggleLanguage }) {
  return (
    <AppRoot
      className={language === "he" ? "rtl" : ""}
      dir={language === "he" ? "rtl" : "ltr"}
    >
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Content>Seat Project</Content>
      <Footer language={language} />
    </AppRoot>
  );
}

export default Seat;
