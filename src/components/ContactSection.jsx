import React, { useState } from 'react';
import translations from '../translations';

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

      <style jsx>{`

.contact-section {
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
  min-height: 90vh;
  background: #fff;
  font-family: 'Inter', 'Montserrat', Arial, sans-serif;
  border-top: 1px solid rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.contact-title-wrapper {
  width: 100%;
  text-align: center;
  margin-top: -94px;
  margin-bottom: 78px;
}

.contact-title {
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-right: 75%;
  line-height: 1.05;
  font-family: inherit;
}

.contact-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  flex: 1;
  min-height: 60vh;
  justify-content: space-between;
  gap: 12vw;
}

.contact-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 18%;
  min-width: 180px;
  padding: 0 0 0 32px;
  box-sizing: border-box;
  height: 100%;
  font-weight: 300;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;
  margin-top: 0;
}

.contact-label {
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 0;
  letter-spacing: 0.04em;
  font-family: inherit;
}

.contact-socials {
  display: flex;
  flex-direction: column;
  margin-top: 400px;
  gap: 6px;
  font-weight: 600;
}

.contact-social {
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  text-transform: uppercase;
  color: #111;
  letter-spacing: 0.04em;
  font-family: inherit;
}

.contact-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  margin-right: 28%;
  box-sizing: border-box;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 314px;
  margin: 0 auto;
  background: none;
  box-shadow: none;
  padding: 0;
      border-radius: 0;
}

.contact-input,
.contact-textarea {
  border: 1.5px solid #111;
  padding: 16px 24px;
  font-size: 1rem;
  border-radius: 5px;
  width: 100%;
  font-family: inherit;
  box-sizing: border-box;
  background: #fff;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 300;
}

.contact-textarea {
  resize: vertical;
  min-height: 110px;
}

.contact-button {
  background: #111;
  color: #fff;
  padding: 20px 0;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: none;
  border-radius: 8px;
  width: 100%;
  margin-top: 8px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.contact-button:hover {
  opacity: 0.85;
}

/* Remove badge styles if present */
.contact-lets-talk-badge, .contact-lets-talk-phone { display: none !important; }

.contact-info-social-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 314px;
  margin: 8px auto 0 auto;
  width: 100%;
  gap: 0;
}
.contact-info, .contact-socials {
  width: 50%;
  font-size: 1rem;
  vertical-align: top;
  text-align: left;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.contact-socials {
  text-align: right;
}

.contact-success-message {
  color: #1a7f37;
  background: #e6f4ea;
  border: 1px solid #b7e4c7;
  border-radius: 6px;
  padding: 10px 0;
  margin-top: 12px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition: opacity 0.3s;
}

@media (max-width: 1200px) {
  .contact-title {
    font-size: 3rem;
  }
  .contact-content {
    gap: 4vw;
  }
}

@media (max-width: 900px) {
  .contact-title {
    font-size: 2.2rem;
  }
  .contact-content {
    flex-direction: column;
    min-height: unset;
    padding: 0 8px;
    align-items: stretch;
    gap: 0;
  }
  .contact-left, .contact-right {
    width: 100%;
    min-width: 0;
    height: auto;
    padding: 0;
    align-items: flex-start;
  }
  .contact-info {
    margin-top: 16px;
    margin-bottom: 24px;
  }
  .contact-form {
    display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 314px;
  margin: 0 auto;
  background: none;
  box-shadow: none;
  padding: 0;
      border-radius: 0;
  }
       .contact-title-wrapper {
      margin-top: -39px;

    }
  .contact-input,
  .contact-textarea {
    font-size: 1rem;
    padding: 12px 12px;
    border-radius: 6px;
  }
  .contact-button {
    font-size: 1rem;
    padding: 14px 0;
    border-radius: 6px;
  }
  .contact-label, .contact-social {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .contact-title {
    font-size: 1.3rem;
  }
    .contact-title-wrapper {
      margin-top: -39px;

    }

    .contact-section {
            min-height: 67vh;
    }

  .contact-content {
    padding: 0 4px;
  }
  .contact-form {
   display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 314px;
  margin: 20px auto 0 auto;
  background: none; 
  box-shadow: none;
  padding: 0;
      border-radius: 0;
  }
  .contact-input,
  .contact-textarea {
    border-radius: 6px;
    font-size: 0.95rem;
    padding: 10px 8px;
  }
  .contact-button {
    border-radius: 6px;
    font-size: 0.95rem;
    padding: 12px 0;
  }
  .contact-info {
    margin-top: 8px;
    margin-bottom: 12px;
  }
  .contact-info, .contact-socials {
    font-size: 0.95rem;
     width: 27%;
  }
  .contact-info-social-row {
    max-width: 100vw;
    margin: 8px auto 0 auto;
  }
} 
      `}</style>
    </div>
  );
};

export default ContactSection;