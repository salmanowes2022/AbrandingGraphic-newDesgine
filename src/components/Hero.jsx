import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  background: #fff;

  @media (max-width: 900px) {
    padding-top: 40px;
  }

  @media (max-width: 600px) {
    padding-top: 16px;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 0 4px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-family: "RagSans", sans-serif;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const HeroTitleHighlight = styled.span`
  color: #3b82f6;
  font-family: "RagSans", sans-serif;
  font-weight: 600;
`;

const HeroDesc = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 32px;
  max-width: 600px;
  font-weight: 200;
  font-family: "RagSans", sans-serif;

  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const HeroBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-size: 1rem;
  font-family: "RagSans", sans-serif;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 8px 12px;
    border-radius: 6px;
  }
`;

const HeroBtnPrimary = styled(HeroBtn)`
  background: #3b82f6;
  color: #fff;

  &:hover {
    background: #2563eb;
  }
`;

const HeroBtnSecondary = styled(HeroBtn)`
  background: #fff;
  color: #222;
  border: 1px solid #e5e7eb;

  &:hover {
    background: #f3f4f6;
  }
`;

const HeroImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    height: 220px;
  }

  @media (max-width: 600px) {
    height: 120px;
  }
`;

const HeroImageBg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #3b82f633 0%, #10b98133 100%);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImagePlaceholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImageText = styled.div`
  font-size: 2rem;
  font-family: "RagSans", sans-serif;
  font-weight: 600;
  color: #3b82f688;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Hero = ({ language }) => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroGrid>
          {/* Left Column - Text Content */}
          <HeroContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>
              {language === "he"
                ? "הפוך את הנוכחות הדיגיטלית שלך"
                : "Transform Your "}
              <HeroTitleHighlight>
                {language === "he" ? "לדיגיטלית" : "Digital Presence"}
              </HeroTitleHighlight>
            </HeroTitle>
            <HeroDesc>
              {language === "he"
                ? "אנחנו עוזרים לעסקים ליצור חוויות דיגיטליות מרהיבות שמניעות צמיחה ומעורבות. הצוות שלנו מספק פתרונות חדשניים המותאמים לצרכים שלך."
                : "We help businesses create stunning digital experiences that drive growth and engagement. Our team of experts delivers innovative solutions tailored to your needs."}
            </HeroDesc>
            <HeroActions>
              <HeroBtnPrimary
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "he" ? "התחל עכשיו" : "Get Started"}
                <FiArrowRight />
              </HeroBtnPrimary>
              <HeroBtnSecondary
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "he" ? "למידע נוסף" : "Learn More"}
              </HeroBtnSecondary>
            </HeroActions>
          </HeroContent>

          {/* Right Column - Image/Illustration */}
          <HeroImageWrapper
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroImageBg>
              {/* Placeholder for hero image/illustration */}
              <HeroImagePlaceholder>
                <HeroImageText>
                  {language === "he" ? "תמונת גיבור" : "Hero Image"}
                </HeroImageText>
              </HeroImagePlaceholder>
            </HeroImageBg>
          </HeroImageWrapper>
        </HeroGrid>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
