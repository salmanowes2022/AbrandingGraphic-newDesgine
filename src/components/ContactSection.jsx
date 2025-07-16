import React, { useState } from 'react';
import translations from '../translations';
import './ContactSection.css';

const ContactSection = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const socials = translations[language].contactSocials;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // No handleSubmit needed for formsubmit.co

  return (
    <div className="contact-section" id="contact-section">
      <div className="contact-title-wrapper">
        <h2 className="contact-title">{translations[language].contactTitle}</h2>
      </div>
      <form
        className="contact-form"
        action="https://formsubmit.co/Info@agraphicsltd.com"
        method="POST"
        onSubmit={() => setSuccess(true)}
      >
        <input
          type="text"
          name="name"
          placeholder={translations[language].contactForm.name}
          className="contact-input"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={translations[language].contactForm.email}
          className="contact-input"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder={translations[language].contactForm.subject}
          className="contact-input"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder={translations[language].contactForm.message}
          className="contact-textarea"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button 
          type="submit" 
          className="contact-button"
        >
          {translations[language].contactForm.send}
        </button>
        {success && (
          <div className="contact-success-message">
            {language === 'he' ? 'ההודעה נשלחה בהצלחה!' : 'Message sent successfully!'}
          </div>
        )}
      </form>
      <div className="contact-info-social-row">
        <div className="contact-info">
          <div className="contact-label">{translations[language].contactLabels[0]}</div>
          <div className="contact-label">{translations[language].contactLabels[1]}</div>
        </div>
        <div className="contact-socials">
          {socials.map((social) => (
            <div key={social} className="contact-social">
              {social}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;