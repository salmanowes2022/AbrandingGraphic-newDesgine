import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const socials = [
    'INSTAGRAM',
    'LINKEDIN', 
    'THREADS',
    'FACEBOOK',
    'TIKTOK'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-section">
      <div className="contact-title-wrapper">
        <h2 className="contact-title">CONTACT</h2>
      </div>
      
      <div className="contact-content">
        <div className="contact-left">
          <div className="contact-info">
            <div className="contact-label">PHONE</div>
            <div className="contact-label">EMAIL</div>
          </div>
          
          <div className="contact-socials">
            {socials.map((social) => (
              <div key={social} className="contact-social">
                {social}
              </div>
            ))}
          </div>
        </div>
        
        <div className="contact-right">
          <div className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              className="contact-input"
              value={formData.name}
              onChange={handleInputChange}
            />
            
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              className="contact-input"
              value={formData.email}
              onChange={handleInputChange}
            />
            
            <input
              type="text"
              name="subject"
              placeholder="SUBJECT"
              className="contact-input"
              value={formData.subject}
              onChange={handleInputChange}
            />
            
            <textarea
              name="message"
              placeholder="MESSAGE"
              className="contact-textarea"
              value={formData.message}
              onChange={handleInputChange}
            />
            
            <button 
              type="button" 
              className="contact-button"
              onClick={handleSubmit}
            >
              SEND
            </button>
          </div>
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
          margin-top: 40px;
          margin-bottom: 40px;
        }

        .contact-title {
          font-size: 5rem;
          font-weight: 200;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0 auto;
          line-height: 1.05;
          font-family: inherit;
          color: #111;
        }

        .contact-content {
          display: flex;
          flex-direction: row;
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
          flex: 1;
          min-height: 60vh;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12vw;
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 18%;
          min-width: 180px;
          padding: 0 0 0 32px;
          box-sizing: border-box;
          height: 60vh;
          font-weight: 300;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 0;
        }

        .contact-label {
          font-weight: 600;
          font-size: 1.1rem;
          text-align: left;
          text-transform: uppercase;
          margin-bottom: 0;
          letter-spacing: 0.04em;
          font-family: inherit;
          color: #111;
        }

        .contact-socials {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 24px;
          font-weight: 600;
        }

        .contact-social {
          font-weight: 600;
          font-size: 1.1rem;
          text-align: left;
          text-transform: uppercase;
          color: #111;
          letter-spacing: 0.04em;
          font-family: inherit;
          cursor: pointer;
        }

        .contact-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          padding: 0 32px 0 0;
          box-sizing: border-box;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
          width: 100%;
          max-width: 500px;
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
          font-size: 1.15rem;
          border-radius: 8px;
          width: 100%;
          font-family: inherit;
          box-sizing: border-box;
          background: #fff;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-weight: 300;
          outline: none;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .contact-textarea {
          resize: vertical;
          min-height: 110px;
          font-family: inherit;
        }

        .contact-button {
          background: #111;
          color: #fff;
          padding: 20px 0;
          font-size: 1.2rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          border: none;
          border-radius: 8px;
          width: 100%;
          margin-top: 8px;
          cursor: pointer;
          transition: opacity 0.2s;
          font-family: inherit;
        }

        .contact-button:hover {
          opacity: 0.85;
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
          .contact-left {
            justify-content: flex-start;
          }
          .contact-info {
            margin-top: 16px;
            margin-bottom: 24px;
          }
          .contact-socials {
            margin-bottom: 24px;
          }
          .contact-form {
            max-width: 100%;
            padding: 0;
            margin: 24px 0 0 0;
            gap: 16px;
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
          .contact-content {
            padding: 0 4px;
          }
          .contact-form {
            padding: 0;
            max-width: 100%;
            gap: 12px;
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
        }
      `}</style>
    </div>
  );
};

export default ContactSection;