import React, { useEffect, useState } from 'react';
import './TeamSection.css';
import png1 from '../assets/png1.png';
import png2 from '../assets/png2.png';

const socials = [
  'INSTAGRAM', 'LINKEDIN', 'THREADS', 'FACEBOOK', 'TIKTOK'
];

const TeamSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="team-section">
      {/* First Row: Single Image left, badge and text right */}
      <div className="team-row">
        <div className="team-collage">
          <img src={png1} alt="team" className="team-collage-img" style={{border: '2px solid #fff'}} />
        </div>
        <div className="team-desc team-desc-align-right">
          <div className="team-badge team-badge-align-right">
            LET'S TALK<br /><span className="team-badge-phone">+972 524513388</span>
          </div>
          <h2 className="team-title">
            OUR TEAM IS MADE UP OF DESIGNERS, ILLUSTRATORS, ANIMATORS, DEVELOPERS AND PHOTOGRAPHERS WHO LIVE GRAPHIC DESIGN.
          </h2>
        </div>
      </div>
      {/* Second Row: Conditionally render order based on isMobile */}
      <div className="team-row">
        {isMobile ? (
          <>
            <div className="team-collage">
              <img src={png2} alt="philosophy" className="team-collage-img" style={{border: '2px solid #fff'}} />
            </div>
            <div className="team-philosophy">
              <h3 className="team-philosophy-title">
                WE BELIEVE IN SMART DESIGN, WHICH INCLUDES A VISUAL LANGUAGE THAT HIGHLIGHTS YOUR BRAND'S VALUES AND THE BRAND IDENTITY.
              </h3>
            </div>
          </>
        ) : (
          <>
            <div className="team-philosophy">
              <h3 className="team-philosophy-title">
                WE BELIEVE IN SMART DESIGN, WHICH INCLUDES A VISUAL LANGUAGE THAT HIGHLIGHTS YOUR BRAND'S VALUES AND THE BRAND IDENTITY.
              </h3>
            </div>
            <div className="team-collage">
              <img src={png2} alt="philosophy" className="team-collage-img" style={{border: '2px solid #fff'}} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TeamSection; 