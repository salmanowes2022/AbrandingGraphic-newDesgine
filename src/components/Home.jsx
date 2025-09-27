import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import workImage1 from "../assets/Works/work-image-1.png";
import workImage2 from "../assets/Works/work-image-2.png";
import activeWorkImage1 from "../assets/Works/active-work-image-1.png";
import activeWorkImage2 from "../assets/Works/active-work-image-2.png";

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

const HeroText = styled.h1`
  font-family: "RagSans";
  font-weight: 200;
  font-size: 111px;
  line-height: 105px;
  text-align: center;
  color: #000;
`;

const WorksTitle = styled.div`
  font-family: "RagSans";
  font-weight: 200;
  line-height: 90px;
  font-size: 90px;
  color: #000;
  text-align: start;
  border-bottom: 1px solid #000;
  padding-left: 100px;
`;

const WorksContainer = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 15px;
  margin-left: 40px;
  margin-right: 40px;
`;

const WorkImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:hover {
    opacity: 0;
  }
`;

const WorkImageContainer = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  overflow: hidden;
`;

const ActiveWorkImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  pointer-events: none;
  z-index: 1;

  ${WorkImage}:hover + & {
    opacity: 1;
  }
`;

function Home({ language, toggleLanguage }) {
  const navigate = useNavigate();

  const handleFirstImageClick = () => {
    navigate("/seat");
  };

  const handleSecondImageClick = () => {
    navigate("/skiner");
  };

  return (
    <AppRoot
      className={language === "he" ? "rtl" : ""}
      dir={language === "he" ? "rtl" : "ltr"}
    >
      <Header language={language} toggleLanguage={toggleLanguage} />
      <HeroText>
        HEY, WE ARE A STUDIO SPECIALIZED IN GRAPHIC DESIGN AND PROGRAMMING
      </HeroText>
      <WorksTitle>WORKS</WorksTitle>
      <WorksContainer>
        <WorkImageContainer onClick={handleFirstImageClick}>
          <WorkImage src={workImage1} alt="Work 1" />
          <ActiveWorkImage src={activeWorkImage1} alt="Active Work 1" />
        </WorkImageContainer>
        <WorkImageContainer onClick={handleSecondImageClick}>
          <WorkImage src={workImage2} alt="Work 2" />
          <ActiveWorkImage src={activeWorkImage2} alt="Active Work 2" />
        </WorkImageContainer>
      </WorksContainer>
      <Footer language={language} />
    </AppRoot>
  );
}

export default Home;
