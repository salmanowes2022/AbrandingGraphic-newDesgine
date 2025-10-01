import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

function Skiner({ language, toggleLanguage }) {
  const rows = [
    {
      right: {
        type: "full-image",
        image: "/src/assets/Skiner/skiner-1.png",
        alt: "SKINER Bag",
      },
      left: {
        type: "text-image",
        text: "WE CREATED A TYPOGRAPHIC LOGO THAT VISUALLY RESEMBLES CREAM COMING OUT OF A TUBE. ON ONE HAND, IT HAS MOVEMENT, BUT ON THE OTHER HAND, IT IS ALSO STABLE AND STRONG. WE WANTED A LOGO THAT WOULD BE FRIENDLY TO THE EYE, BUT ALSO COMMUNICATE SERIOUSNESS.",
        image: "/src/assets/Skiner/skiner-2.png",
        alt: "SKINER Wordmark",
      },
    },
    {
      right: {
        type: "text-image",
        text: "PACKAGING AND COLLATERAL ARE PHOTOGRAPHED IN NATURAL LIGHT AND SOFT SHADOWS TO EMPHASIZE TEXTURE AND MATERIAL HONESTY.",
        image: "/src/assets/Skiner/skiner-3.png",
        alt: "SKINER Cards",
      },
      left: {
        type: "full-image",
        image: "/src/assets/Skiner/skiner-4.png",
        alt: "SKINER Box",
      },
    },
    {
      right: {
        type: "full-image",
        image: "/src/assets/Skiner/skiner-5.png",
        alt: "SKINER Tube",
      },
      left: {
        type: "text-image",
        text: "THE COLOR SYSTEM IS BUILT AROUND HUMAN SKIN TONES — A RANGE OF WARM NEUTRALS THAT FEEL CALM AND UNIVERSAL.",
        image: "/src/assets/Skiner/skiner-6.png",
        alt: "SKINER Skin Closeup",
      },
    },
    {
      right: {
        type: "text-image",
        text: "THE LOGO ON THE PACKAGING AND BUSINESS CARDS IS PRINTED USING DEBOSSING (IMPRINTED INTO THE PAPER), JUST AS THE INGREDIENTS PENETRATE THE SKIN AND NOURISH IT.",
        image: "/src/assets/Skiner/skiner-7.png",
        alt: "SKINER Palette",
      },
      left: {
        type: "full-image",
        image: "/src/assets/Skiner/skiner-8.png",
        alt: "SKINER Website",
      },
    },
  ];

  return (
    <CaseStudyLayout
      language={language}
      toggleLanguage={toggleLanguage}
      title="Skiner"
      services="LOGO, PRINT, DIGITAL, PACKAGING"
      introTitle="SKINCARE COMPANY"
      introParagraphs={[
        "A MINIMAL SKINCARE BRAND THAT CELEBRATES QUIET LUXURY AND MATERIAL HONESTY.",
        "PHOTOGRAPHY AND TYPOGRAPHY ARE CONSIDERED AS MATERIALS — ALWAYS SOFT, CALM AND GROUNDED.",
        "DESIGN ELEMENTS ARE PURPOSEFULLY REDUCED, ALLOWING COLOR, LIGHT AND TEXTURE TO LEAD THE EXPERIENCE.",
      ]}
      rows={rows}
    />
  );
}

export default Skiner;
