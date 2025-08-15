import React from 'react';
import styled, { keyframes } from 'styled-components';
import translations from '../translations';

const repeatCount = 6; // Repeat enough times for seamless scroll

const infiniteScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CategoriesNavContainer = styled.nav`
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
  padding: 24px 16px;
  border-top: 1px solid rgba(0, 0, 0, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  margin-bottom: 64px;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 16px 4px;
    margin-bottom: 32px;
  }

  @media (max-width: 600px) {
    padding: 8px 2px;
    margin-bottom: 16px;
  }

  .app-root.rtl & {
    direction: ltr;
  }
`;

const CategoriesTrack = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  gap: 0;
  animation: ${infiniteScroll} 30s linear infinite;
  width: max-content;
  min-width: 200%;

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }

  .app-root.rtl & {
    direction: ltr;
  }
`;

const CategoriesItem = styled.span`
  display: flex;
  align-items: center;
`;

const CategoriesLabel = styled.span`
  padding: 0 16px;
  user-select: none;

  @media (max-width: 900px) {
    padding: 0 8px;
  }

  @media (max-width: 600px) {
    padding: 0 4px;
  }
`;

const CategoriesSep = styled.span`
  color: rgba(0, 0, 0, 1);
  user-select: none;
`;

const CategoriesNav = ({ language }) => (
  <CategoriesNavContainer>
    <CategoriesTrack>
      {Array.from({ length: repeatCount }).map((_, repIdx) => (
        translations[language].categories.map((cat, idx) => (
          <CategoriesItem key={cat + '-' + repIdx + '-' + idx}>
            <CategoriesLabel>{cat}</CategoriesLabel>
            {idx !== translations[language].categories.length - 1 && (
              <CategoriesSep>|</CategoriesSep>
            )}
          </CategoriesItem>
        ))
      ))}
    </CategoriesTrack>
  </CategoriesNavContainer>
);

export default CategoriesNav; 