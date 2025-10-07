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

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
`;

// Match the title styling from CaseStudyLayout.jsx
const ContentWrapper = styled.div`
  padding: 0 109px;

  @media (max-width: 1728px) {
    padding: 0 95.4px;
  }

  @media (max-width: 1512px) {
    padding: 0 83.5px;
  }

  @media (max-width: 1440px) {
    padding: 0 97.5px;
  }

  @media (max-width: 1280px) {
    padding: 0 82px;
  }

  @media (max-width: 1024px) {
    padding: 0 56.63px;
  }

  @media (max-width: 834px) {
    padding: 0 0px;
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  border-bottom: 1px solid #000;
  margin-top: 200px;
  margin-left: -109px;
  margin-right: -109px;
  padding-left: 109px;
  padding-right: 109px;

  @media (max-width: 1728px) {
    margin-left: -95.4px;
    margin-right: -95.4px;
    padding-left: 95.4px;
    padding-right: 95.4px;
  }

  @media (max-width: 1512px) {
    margin-left: -83.5px;
    margin-right: -83.5px;
    padding-left: 83.5px;
    padding-right: 83.5px;
  }

  @media (max-width: 1440px) {
    margin-left: -97.5px;
    margin-right: -97.5px;
    padding-left: 97.5px;
    padding-right: 97.5px;
  }

  @media (max-width: 1280px) {
    margin-left: -82px;
    margin-right: -82px;
    padding-left: 82px;
    padding-right: 82px;
  }

  @media (max-width: 1024px) {
    margin-left: -56.63px;
    margin-right: -56.63px;
    padding-left: 56.63px;
    padding-right: 56.63px;
  }

  @media (max-width: 834px) {
    margin-top: 56px;
    margin-left: -13px;
    margin-right: -13px;
    padding-left: 13px;
    padding-right: 13px;
  }
`;

const BrandText = styled.div`
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  font-size: 90px;
`;

const ServicesText = styled.div`
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  font-size: 25px;
`;

const CustomersText = styled.p`
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  font-size: 48px;
  text-align: center;
  color: #000;
  max-width: 1200px;
  line-height: 1.3;
  margin: 40px auto 0 auto;

  @media (max-width: 1280px) {
    font-size: 40px;
  }

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const CustomerName = styled.span`
  font-weight: 200;
  transition: font-weight 0.2s ease;
  color: #000;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;

const customersList = [
  "PANGO",
  "TRULLION",
  "ELAL",
  "PENLINK",
  "ISRAEL HAYOM",
  "BITUACH YASHIR",
  "RISE",
  "BANK HAPOALIM",
  "YELLOW",
  "PRIMIS",
  "BANK JERUSALEM",
  "BERESHIT HOTEL",
  "MEDINA",
  "HASBARA",
];

const Customers = ({ language, toggleLanguage }) => {
  return (
    <AppRoot className={language === "he" ? "rtl" : ""}>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <ContentWrapper>
        <TitleBar>
          <BrandText>CUSTOMERS</BrandText>
          <ServicesText></ServicesText>
        </TitleBar>

        <MainContent>
          <CustomersText>
            {customersList.map((name, index) => (
              <React.Fragment key={name}>
                <CustomerName>{name}</CustomerName>
                {index < customersList.length - 1 && <span>{", "} </span>}
              </React.Fragment>
            ))}
          </CustomersText>
        </MainContent>
      </ContentWrapper>
      <Footer language={language} />
    </AppRoot>
  );
};

export default Customers;
