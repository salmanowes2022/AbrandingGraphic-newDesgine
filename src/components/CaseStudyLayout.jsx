import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

// Grid Component for responsive layout
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0px;

  @media (max-width: 600px) {
    padding: 20px 0px;
  }
`;

// Individual row container for alternating layout
const GridRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 834px) {
    flex-direction: column;
  }
`;

// Left column item
const LeftItem = styled.div`
  flex: 1;
  order: 1;

  @media (max-width: 600px) {
    order: 1;
  }
`;

// Right column item
const RightItem = styled.div`
  flex: 1;
  order: 2;

  @media (max-width: 600px) {
    order: 2;
  }
`;

// GridContent Component for individual grid items
const GridItem = styled.div`
  height: 945px; /* 1920px and above */
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden;
  min-height: 0;

  @media (max-width: 1728px) {
    height: 844.2px;
  }

  @media (max-width: 1512px) {
    height: 738.6px;
  }

  @media (max-width: 1440px) {
    height: 703.5px;
  }

  @media (max-width: 1280px) {
    height: 625.3px;
  }

  @media (max-width: 1024px) {
    height: 500.2px;
  }

  @media (max-width: 834px) {
    height: 1125.9px;
  }

  @media (max-width: 600px) {
    height: 580.5px;
  }

  @media (max-width: 390px) {
    height: 526.5px;
  }

  @media (max-width: 360px) {
    height: 486px;
  }
`;

const TextContent = styled.div`
  padding: 20px;
  background: #fff;
  flex-shrink: 0;
  height: auto;

  @media (max-width: 834px) {
    padding: 13px;
  }
`;

const ContentText = styled.p`
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  font-size: 14px;
  line-height: 1.4;
  margin: 0 0 15px 0;
  text-transform: uppercase;
  color: #333;
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 834px) {
    padding: 0px;
  }
`;

const GridImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center;
`;

const FullImageContainer = styled.div`
  width: 100%;
  height: 945px; /* 1920px and above */
  position: relative;
  overflow: hidden;
  background: #f8f8f8;

  @media (max-width: 1728px) {
    height: 844.2px;
  }

  @media (max-width: 1512px) {
    height: 738.6px;
  }

  @media (max-width: 1440px) {
    height: 703.5px;
  }

  @media (max-width: 1280px) {
    height: 625.3px;
  }

  @media (max-width: 1024px) {
    height: 500.2px;
  }

  @media (max-width: 834px) {
    height: 1125.9px;
  }

  @media (max-width: 600px) {
    height: 580.5px;
  }

  @media (max-width: 390px) {
    height: 526.5px;
  }

  @media (max-width: 360px) {
    height: 486px;
  }
`;

const FullGridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

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

// Wrapper to control horizontal padding across sections
const ContentWrapper = styled.div`
  padding: 0 109px; /* >= 1920px */

  @media (max-width: 1728px) {
    padding: 0 95.4px;
  }

  @media (max-width: 1512px) {
    padding: 0 83.5px;
  }

  @media (max-width: 1440px) {
    padding: 0 97.5px;
  }

  /* Chosen value for 1280px based on interpolation */
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

const Title = styled.div`
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

const ContentSection = styled.div`
  padding: 10px 0px; /* keep vertical padding, move horizontal to wrapper */
  color: #000;
  text-align: left;

  @media (max-width: 834px) {
    padding: 10px 13px;
  }
`;

const MainTitle = styled.h1`
  font-family: "RagSans", sans-serif;
  font-weight: 2600;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const ContentParagraph = styled.div`
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 30px;
`;

function GridContent({ type, text, image, images, alt }) {
  if (type === "full-image") {
    return (
      <FullImageContainer>
        <FullGridImage src={image} alt={alt || "Grid content"} />
      </FullImageContainer>
    );
  }

  if (type === "text-image") {
    return (
      <GridItem>
        <TextContent>{text && <ContentText>{text}</ContentText>}</TextContent>
        <ImageContainer>
          <GridImage src={image} alt={alt || "Grid content"} />
        </ImageContainer>
      </GridItem>
    );
  }

  if (type === "text-images" && images && images.length > 0) {
    return (
      <GridItem>
        <TextContent>{text && <ContentText>{text}</ContentText>}</TextContent>
        <ImageContainer
          style={{ display: "flex", gap: "10px", padding: "10px" }}
        >
          {images.map((img, index) => (
            <GridImage
              key={index}
              src={img}
              alt={alt || `Grid content ${index + 1}`}
            />
          ))}
        </ImageContainer>
      </GridItem>
    );
  }

  return (
    <GridItem>
      <TextContent>
        <ContentText>Content placeholder</ContentText>
      </TextContent>
    </GridItem>
  );
}

const CaseStudyLayout = ({
  language,
  toggleLanguage,
  title,
  services,
  introTitle,
  introParagraphs,
  rows,
}) => {
  return (
    <AppRoot
      className={language === "he" ? "rtl" : ""}
      dir={language === "he" ? "rtl" : "ltr"}
    >
      <Header language={language} toggleLanguage={toggleLanguage} />
      <ContentWrapper>
        <Title>
          <BrandText>{title}</BrandText>
          <ServicesText>{services}</ServicesText>
        </Title>

        <ContentSection>
          {introTitle && <MainTitle>{introTitle}</MainTitle>}
          {Array.isArray(introParagraphs) &&
            introParagraphs.map((p, i) => (
              <ContentParagraph key={i}>{p}</ContentParagraph>
            ))}
        </ContentSection>

        <Grid>
          {rows &&
            rows.map((row, idx) => (
              <GridRow key={idx}>
                <RightItem>
                  <GridContent {...row.right} />
                </RightItem>
                <LeftItem>
                  <GridContent {...row.left} />
                </LeftItem>
              </GridRow>
            ))}
        </Grid>
      </ContentWrapper>
      <Footer language={language} />
    </AppRoot>
  );
};

export default CaseStudyLayout;
