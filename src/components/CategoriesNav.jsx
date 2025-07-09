import React from 'react';
import './CategoriesNav.css';

const categories = [
  'BRANDING',
  'UX UI',
  'PRINT',
  'SIGNS',
  'LOGOS',
  'MERCHANDIES',
  'PRESENTATIONS',
  'SOCAIL MEDIA',
];

const repeatCount = 6; // Repeat enough times for seamless scroll

const CategoriesNav = () => (
  <nav className="categories-nav">
    <div className="categories-track manual-scroll">
      {Array.from({ length: repeatCount }).map((_, repIdx) => (
        categories.map((cat, idx) => (
          <span key={cat + '-' + repIdx + '-' + idx} className="categories-item">
            <span className="categories-label">{cat}</span>
            {idx !== categories.length - 1 && (
              <span className="categories-sep">|</span>
            )}
          </span>
        ))
      ))}
    </div>
  </nav>
);

export default CategoriesNav; 