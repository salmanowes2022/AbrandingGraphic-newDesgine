import React from 'react';
import translations from '../translations';
import './CategoriesNav.css';

const repeatCount = 6; // Repeat enough times for seamless scroll

const CategoriesNav = ({ language }) => (
  <nav className="categories-nav">
    <div className="categories-track manual-scroll">
      {Array.from({ length: repeatCount }).map((_, repIdx) => (
        translations[language].categories.map((cat, idx) => (
          <span key={cat + '-' + repIdx + '-' + idx} className="categories-item">
            <span className="categories-label">{cat}</span>
            {idx !== translations[language].categories.length - 1 && (
              <span className="categories-sep">|</span>
            )}
          </span>
        ))
      ))}
    </div>
  </nav>
);

export default CategoriesNav; 