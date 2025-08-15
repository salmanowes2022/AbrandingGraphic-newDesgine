import React, { useState } from "react";
import styled from "styled-components";
import translations from "../translations";

const ContactSectionContainer = styled.div`
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
  min-height: 60vh;
  background: #fff;
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  border-top: 1px solid rgba(0, 0, 0, 0.855);
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (max-width: 900px) {
    min-height: unset;
    padding: 0 4px;
    width: 100%;
    max-width: 100vw;
  }

  @media (max-width: 600px) {
    padding: 0 2px;
    width: 100%;
    max-width: 100vw;
  }
`;

const ContactTitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: -94px;
  margin-bottom: 78px;

  @media (max-width: 900px) {
    margin-top: 0;
    margin-bottom: 12px;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 8px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  font-family: "RagSans", sans-serif;
  font-weight: 200; /* ExtraLight */
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-right: 75%;
  line-height: 1.05;
  font-family: "RagSans", sans-serif;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 314px;
  margin: 0 auto;
  margin-top: 52px;
  background: none;
  box-shadow: none;
  padding: 0;
  border-radius: 0;

  @media (max-width: 900px) {
    max-width: 314px;
    margin: 0 auto 12px auto;
    gap: 18px;
    padding: 0;
    width: 100%;
  }

  @media (max-width: 600px) {
    max-width: 314px;
    margin: 0 auto 8px auto;
    gap: 18px;
    padding: 0;
    width: 100%;
  }
`;

const ContactInput = styled.input`
  border: 1.5px solid #111;
  padding: 16px 24px;
  font-size: 1.15rem;
  border-radius: 8px;
  width: 100%;
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  box-sizing: border-box;
  background: #fff;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  @media (max-width: 900px) {
    border: 1.5px solid #111;
    padding: 16px 24px;
    font-size: 1rem;
    border-radius: 5px;
    width: 100%;
    font-family: "RagSans", sans-serif;
    box-sizing: border-box;
    background: #fff;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 300;
  }

  @media (max-width: 600px) {
    border: 1.5px solid #111;
    padding: 16px 24px;
    font-size: 1rem;
    border-radius: 5px;
    width: 100%;
    font-family: "RagSans", sans-serif;
    box-sizing: border-box;
    background: #fff;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 300;
  }
`;

const ContactTextarea = styled.textarea`
  border: 1.5px solid #111;
  padding: 16px 24px;
  font-size: 1.15rem;
  border-radius: 8px;
  width: 100%;
  font-family: "RagSans", sans-serif;
  font-weight: 200;
  box-sizing: border-box;
  background: #fff;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  resize: vertical;
  min-height: 110px;

  @media (max-width: 900px) {
    border: 1.5px solid #111;
    padding: 16px 24px;
    font-size: 1rem;
    border-radius: 5px;
    width: 100%;
    font-family: "RagSans", sans-serif;
    box-sizing: border-box;
    background: #fff;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 300;
    resize: vertical;
    min-height: 110px;
  }

  @media (max-width: 600px) {
    border: 1.5px solid #111;
    padding: 16px 24px;
    font-size: 1rem;
    border-radius: 5px;
    width: 100%;
    font-family: "RagSans", sans-serif;
    box-sizing: border-box;
    background: #fff;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 300;
    resize: vertical;
    min-height: 110px;
  }
`;

const ContactButton = styled.button`
  background: #111;
  color: #fff;
  padding: 20px 0;
  font-size: 1.2rem;
  font-family: "RagSans", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: none;
  border-radius: 8px;
  width: 100%;
  margin-top: 8px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 900px) {
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

  @media (max-width: 600px) {
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
`;

const ContactSuccessMessage = styled.div`
  color: green;
  text-align: center;
  margin-top: 12px;
  font-family: "RagSans", sans-serif;
  font-weight: 200;
`;

const ContactInfoSocialRow = styled.div`
  justify-content: space-between;
  max-width: 314px;
  width: 100%;
  gap: 0;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    margin: 0;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4px;
    margin: 0;
    gap: 8px;
    font-size: 0.95rem;
    max-width: 100vw;
    margin: 8px auto 0 auto;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;
  margin-top: 0;
  width: 50%;
  font-size: 1rem;
  vertical-align: top;
  text-align: left;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 900px) {
    margin-top: 100px;
    gap: 4px;
  }

  @media (max-width: 600px) {
    margin: 0;
    gap: 2px;
    font-size: 0.95rem;
    line-height: 1.3;
    font-size: 0.95rem;
    width: 50%;
  }
`;

const ContactLabel = styled.div`
  font-weight: 600;
  font-family: "RagSans", sans-serif;
  font-size: 1rem;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 0;
  letter-spacing: 0.04em;
  font-family: "RagSans", sans-serif;
`;

const ContactSocials = styled.div`
  flex-direction: column;
  margin-top: auto;
  gap: 6px;
  margin-bottom: 24px;
  font-weight: 600;
  font-family: "RagSans", sans-serif;
  text-align: right;
  width: 50%;
  font-size: 1rem;
  vertical-align: top;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 900px) {
    margin: 0;
    gap: 4px;
    font-size: 1rem;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin: 0;
    gap: 2px;
    font-size: 0.95rem;
    flex-direction: column;
    font-size: 0.95rem;
    line-height: 1.3;
    font-size: 0.95rem;
    width: 50%;
  }
`;

const ContactSocial = styled.div`
  font-weight: 600;
  font-family: "RagSans", sans-serif;
  font-size: 1rem;
  text-align: left;
  text-transform: uppercase;
  color: #111;
  letter-spacing: 0.04em;
  font-family: "RagSans", sans-serif;
`;

const ContactSection = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const socials = translations[language].contactSocials;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // No handleSubmit needed for formsubmit.co

  return (
    <ContactSectionContainer id="contact-section">
      <ContactTitleWrapper>
        <ContactTitle>{translations[language].contactTitle}</ContactTitle>
      </ContactTitleWrapper>
      <ContactForm
        action="https://formsubmit.co/Info@agraphicsltd.com"
        method="POST"
        onSubmit={() => setSuccess(true)}
      >
        <ContactInput
          type="text"
          name="name"
          placeholder={translations[language].contactForm.name}
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <ContactInput
          type="email"
          name="email"
          placeholder={translations[language].contactForm.email}
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <ContactInput
          type="text"
          name="subject"
          placeholder={translations[language].contactForm.subject}
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <ContactTextarea
          name="message"
          placeholder={translations[language].contactForm.message}
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <ContactButton type="submit">
          {translations[language].contactForm.send}
        </ContactButton>
        {success && (
          <ContactSuccessMessage>
            {language === "he"
              ? "ההודעה נשלחה בהצלחה!"
              : "Message sent successfully!"}
          </ContactSuccessMessage>
        )}
      </ContactForm>
      <ContactInfoSocialRow>
        <ContactInfo>
          <ContactLabel>{translations[language].contactLabels[0]}</ContactLabel>
          <ContactLabel>{translations[language].contactLabels[1]}</ContactLabel>
        </ContactInfo>
        <ContactSocials>
          {socials.map((social) => (
            <ContactSocial key={social}>{social}</ContactSocial>
          ))}
        </ContactSocials>
      </ContactInfoSocialRow>
    </ContactSectionContainer>
  );
};

export default ContactSection;
