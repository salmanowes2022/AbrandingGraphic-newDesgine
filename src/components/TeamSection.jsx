import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import translations from '../translations';
import png1 from '../assets/png1.png';
import png2 from '../assets/png2.png';

const TeamSectionContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 96px auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
  font-family: 'Inter', sans-serif;

  @media (max-width: 900px) {
    gap: 32px;
    padding: 0 8px;
  }

  @media (max-width: 600px) {
    gap: 16px;
    padding: 0 2px;
  }
`;

const TeamRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const TeamCollage = styled.div`
  flex: 1;
  display: flex;
  width: 371px;
  align-items: center;
  justify-content: center;
`;

const TeamCollageImg = styled.img`
  width: 340px;
  height: 340px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid #fff;

  @media (max-width: 900px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 600px) {
    width: 267px;
    margin-top: 20px;
    height: 199px;
  }
`;

const TeamDesc = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;

  &.team-desc-align-right {
    align-items: flex-end;
    text-align: right;

    @media (max-width: 900px) {
      align-items: flex-start;
      text-align: left;
    }
  }
`;

const TeamBadge = styled.div`
  width: 218px;
  height: 90px;
  background: #9a9a9a;
  color: #fff;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 24px;
  font-family: 'Rag Sans-1.4', 'Inter', 'Montserrat', Arial, sans-serif;
  right: 0;
  left: unset;
  top: 57%;
  transform: translateY(-20%);
  transform: translateX(-40%);
  z-index: 1000;

  &.team-badge-align-right {
    align-self: flex-end;
    margin-left: auto;

    @media (max-width: 900px) {
      align-self: flex-start;
      margin-left: 0;
      margin-right: -259px;
    }
  }

  @media (max-width: 900px) {
    width: 190px;
    height: 70px;
    background: #9a9a9a;
    color: #fff;
    border-radius: 20px 0 0 20px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 24px;
    font-family: 'Rag Sans-1.4', 'Inter', 'Montserrat', Arial, sans-serif;
    right: 0;
    left: unset;
    top: 57%;
    transform: translateY(-20%);
    transform: translateX(-40%);
    z-index: 1000;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 6px 10px;
  }
`;

const TeamBadgePhone = styled.span`
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const TeamTitle = styled.h2`
  font-family: 'Rag Sans-1.4', 'Inter', 'Montserrat', Arial, sans-serif;
  font-weight: 200;
  font-style: ExtraLight;
  font-size: 30px;
  line-height: 40px;
  text-align: left;
  letter-spacing: 0%;
  margin-bottom: 0.25em;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-top: 20px;
    margin-left: 14px;
    padding: 16px;
    margin-bottom: 20px;
  }
`;

const TeamPhilosophy = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TeamPhilosophyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.3;
  color: #222;
  margin: 0;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 1.1rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-top: 20px;
    margin-left: 14px;
    padding: 16px;
    margin-bottom: 20px;
  }
`;

const TeamSection = ({ language }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const descAlignClass = language === 'he' ? '' : 'team-desc-align-right';
  const badgeAlignClass = language === 'he' ? '' : 'team-badge-align-right';

  return (
    <TeamSectionContainer>
      {isMobile ? (
        <>
          <TeamBadge className={badgeAlignClass}>
            {translations[language].teamBadge}<br />
            <TeamBadgePhone>{translations[language].teamPhone}</TeamBadgePhone>
          </TeamBadge>
          <TeamCollage>
            <TeamCollageImg src={png1} alt="team" />
          </TeamCollage>
          <TeamDesc className={descAlignClass}> 
            <TeamTitle>{translations[language].teamTitle}</TeamTitle>
          </TeamDesc>
          <TeamCollage>
            <TeamCollageImg src={png2} alt="philosophy" />
          </TeamCollage>
          <TeamPhilosophy>
            <TeamPhilosophyTitle>{translations[language].teamPhilosophy}</TeamPhilosophyTitle>
          </TeamPhilosophy>
        </>
      ) : (
        <>
          <TeamRow>
            <TeamCollage>
              <TeamCollageImg src={png1} alt="team" />
            </TeamCollage>
            <TeamDesc className={descAlignClass}>
              <TeamBadge className={badgeAlignClass}>
                {translations[language].teamBadge}<br />
                <TeamBadgePhone>{translations[language].teamPhone}</TeamBadgePhone>
              </TeamBadge>
              <TeamTitle>{translations[language].teamTitle}</TeamTitle>
            </TeamDesc>
          </TeamRow>
          <TeamRow>
            <TeamPhilosophy>
              <TeamPhilosophyTitle>{translations[language].teamPhilosophy}</TeamPhilosophyTitle>
            </TeamPhilosophy>
            <TeamCollage>
              <TeamCollageImg src={png2} alt="philosophy" />
            </TeamCollage>
          </TeamRow>
        </>
      )}
    </TeamSectionContainer>
  );
};

export default TeamSection; 