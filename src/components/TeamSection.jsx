import React, { useEffect, useState } from 'react';
import translations from '../translations';
import './TeamSection.css';
import png1 from '../assets/png1.png';
import png2 from '../assets/png2.png';

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
    <section className="team-section">
      {isMobile ? (
        <>
          <div className={`team-badge ${badgeAlignClass}`}>{translations[language].teamBadge}<br /><span className="team-badge-phone">{translations[language].teamPhone}</span></div>
          <div className="team-collage">
            <img src={png1} alt="team" className="team-collage-img" style={{border: '2px solid #fff'}} />
          </div>
          <div className={`team-desc ${descAlignClass}`}> 
            <h2 className="team-title">{translations[language].teamTitle}</h2>
          </div>
          <div className="team-collage">
            <img src={png2} alt="philosophy" className="team-collage-img" style={{border: '2px solid #fff'}} />
          </div>
          <div className="team-philosophy">
            <h3 className="team-philosophy-title">{translations[language].teamPhilosophy}</h3>
          </div>
        </>
      ) : (
        <>
          <div className="team-row">
            <div className="team-collage">
              <img src={png1} alt="team" className="team-collage-img" style={{border: '2px solid #fff'}} />
            </div>
            <div className={`team-desc ${descAlignClass}`}>
              <div className={`team-badge ${badgeAlignClass}`}>{translations[language].teamBadge}<br /><span className="team-badge-phone">{translations[language].teamPhone}</span></div>
              <h2 className="team-title">{translations[language].teamTitle}</h2>
            </div>
          </div>
          <div className="team-row">
            <div className="team-philosophy">
              <h3 className="team-philosophy-title">{translations[language].teamPhilosophy}</h3>
            </div>
            <div className="team-collage">
              <img src={png2} alt="philosophy" className="team-collage-img" style={{border: '2px solid #fff'}} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default TeamSection; 