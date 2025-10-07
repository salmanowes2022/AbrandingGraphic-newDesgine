import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

const Seat = ({ language, toggleLanguage }) => {
  const rows = [
    {
      right: {
        type: "full-image",
        image: "/src/assets/Seat/seat-1.png",
        alt: "SEAT Product Mockup",
      },
      left: {
        type: "text-image",
        text: "THE DESIGN OF THE SOFAS AND CHAIRS OF 'SEAT' IS MODERN, MINIMALISTIC, AND SOPHISTICATED. IT WAS IMPORTANT FOR US TO CONVEY THIS VALUE IN THE LOGO ITSELF. A TYPOGRAPHIC LOGO, MODERN AND SOPHISTICATED, WHICH IS WHY WE CREATED A BACKREST FOR THE LETTER T.",
        image: "/src/assets/Seat/seat-2.png",
        alt: "SEAT Chair Detail",
      },
    },
    {
      right: {
        type: "text-image",
        text: "THE PHOTOS OF THE CHAIRS AND SOFAS ARE STUDIO SHOTS WITH NEUTRAL BACKGROUNDS. WE PLACED THE PRODUCT WITHOUT ANY BACKGROUND NOISE, ALLOWING IT TO RECEIVE ALL THE FOCUS, AND HIGHLIGHTED THE CLEANLINESS OF THE BRAND.",
        image: "/src/assets/Seat/seat-3.png",
        alt: "SEAT Store Interior",
      },
      left: {
        type: "full-image",
        image: "/src/assets/Seat/seat-4.png",
        alt: "SEAT Branded Merchandise",
      },
    },
    {
      right: {
        type: "full-image",
        image: "/src/assets/Seat/seat-5.png",
        alt: "SEAT Digital Interface",
      },
      left: {
        type: "text-image",
        text: "THE FAMILY DESIGNS THE MODELS AND CHOOSES EVERY DETAIL, WHICH MAKES EACH PRODUCT LUXURIOUS AND HIGH QUALITY.",
        image: "/src/assets/Seat/seat-6.png",
        alt: "SEAT Product Collection",
      },
    },
    {
      right: {
        type: "text-image",
        text: "THE COMPANY WANTED THE BRAND TO SPEAK TO EVERYONE, AS IT TARGETS ALL SKIN TYPES. VISUALLY, SUCH A VALUE CAN BE EXPRESSED THROUGH ITS COLOR PALETTE, WHICH IS WHY IT WAS DECIDED TO USE LIGHT AND DARK NEGATIVE COLORS ON THE SKIN TONE COLOR SCALE.",
        image: "/src/assets/Seat/seat-7.png",
        alt: "SEAT Product Collection",
      },
      left: {
        type: "full-image",
        image: "/src/assets/Seat/seat-8.png",
        alt: "SEAT Final Showcase",
      },
    },
  ];

  return (
    <CaseStudyLayout
      language={language}
      toggleLanguage={toggleLanguage}
      title="Seat"
      services="LOGO, PRINT, DIGITAL, PACKAGING"
      introTitle="SOFA AND CHAIR STORE"
      introParagraphs={[
        "THE STORE IS LOCATED IN DENMARK AND OFFERS A VARIETY OF LOCALLY MADE CHAIRS AND SOFAS.",
        "ALTHOUGH IT IS A FAMILY BUSINESS, THE STORE ALREADY HAS THREE BRANCHES.",
        "THE FAMILY DESIGNS THE MODELS AND CHOOSES EVERY DETAIL, WHICH MAKES EACH PRODUCT LUXURIOUS AND HIGH QUALITY.",
      ]}
      rows={rows}
    />
  );
};

export default Seat;
