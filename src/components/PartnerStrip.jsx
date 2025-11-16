import React from "react";
import styled from "styled-components";

/* ----------------------------------------------------
      IMPORT SoftMaxx LOGO
---------------------------------------------------- */
import Logo from "../assets/Logo.png";

/* ----------------------------------------------------
      UPDATED PREMIUM LOGOS 
---------------------------------------------------- */

/* -------- ADOBE -------- */
const AdobeLogo = () => (
  <svg width="122" height="36" viewBox="0 0 512 512">
    <path fill="#FA0F00" d="M315.6 0h196.4v512L315.6 0zM0 0h196.4L0 512V0zm258.9 170.7L345 341.3h-66.1l-21.3-47.2h-79l-20.4 47.2h-62.8l84.8-170.7h78.7z"/>
  </svg>
);

/* -------- HYVÄ -------- */
const HyvaLogo = () => (
  <svg width="125" height="40">
    <text x="0" y="32" fontSize="34" fontWeight="800" fill="#1A4ED8" fontFamily="Inter">
      hyvä
    </text>
  </svg>
);

/* -------- HUBSPOT (UPGRADED) -------- */
const HubSpotLogo = () => (
  <svg width="145" height="40" viewBox="0 0 300 80">
    <circle cx="28" cy="28" r="18" fill="#FF7A59" />
    <circle cx="28" cy="9" r="6" fill="#FF7A59" />
    <circle cx="46" cy="28" r="6" fill="#FF7A59" />
    <circle cx="28" cy="47" r="6" fill="#FF7A59" />
    <line x1="28" y1="9" x2="28" y2="47" stroke="#FF7A59" strokeWidth="4" strokeLinecap="round" />

    <text x="70" y="34" fontSize="30" fontWeight="700" fill="#FF7A59" fontFamily="Inter">
      HubSpot
    </text>
  </svg>
);

/* -------- KLAVIYO (UPGRADED) -------- */
const KlaviyoLogo = () => (
  <svg width="155" height="42" viewBox="0 0 300 80">
    {/* Green layered waves */}
    <path d="M10 40 Q40 10, 70 40 Q40 70, 10 40" fill="#00C673" opacity="0.32" />
    <path d="M15 40 Q40 20, 65 40 Q40 60, 15 40" fill="#00C673" />

    <text x="85" y="42" fontSize="32" fontWeight="800" fill="#00A86B" fontFamily="Inter">
      Klaviyo
    </text>
  </svg>
);


/* ----------------------------------------------------
      STYLES (Same layout)
---------------------------------------------------- */

const Wrap = styled.section`
  width: 100%;
  background: #f8f3e4;
  padding: 52px 0;
`;

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  padding: 0 60px;

  @media(max-width: 900px){
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const Box = styled.div`
  flex: 1;
  min-width: 200px;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
`;

/* Softmaxx Logo */
const BrandLogo = styled.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
  border-radius: 8px;
  background: white;
  padding: 4px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.15);
`;

/* -------- BLUR DIVIDER -------- */
const DividerBlur = styled.div`
  width: 2px;
  height: 36px;
  background: rgba(0,0,0,0.15);
  backdrop-filter: blur(4px);
  border-radius: 20px;
`;

/* Text */
const Title = styled.h4`
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 6px;
  line-height: 1.3;
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 1.45;
  color: #4a4a4a;
  max-width: 240px;
`;


/* ----------------------------------------------------
      MAIN COMPONENT
---------------------------------------------------- */

export default function PartnerStrip() {
  return (
    <Wrap>
      <Container>

        {/* Adobe */}
        <Box>
          <LogoRow>
            <BrandLogo src={Logo} />
            <DividerBlur />
            <AdobeLogo />
          </LogoRow>
          <Title>Adobe Solution Bronze Partner</Title>
          <Desc>SoftMaxs is now an Adobe Solution Partner.</Desc>
        </Box>

        {/* Hyvä */}
        <Box>
          <LogoRow>
            <BrandLogo src={Logo} />
            <DividerBlur />
            <HyvaLogo />
          </LogoRow>
          <Title>Hyvä Themes Silver Partner</Title>
          <Desc>SoftMaxs officially becomes a Hyvä Themes partner.</Desc>
        </Box>

        {/* HubSpot */}
        <Box>
          <LogoRow>
            <BrandLogo src={Logo} />
            <DividerBlur />
            <HubSpotLogo />
          </LogoRow>
          <Title>HubSpot Solution Partner</Title>
          <Desc>SoftMaxs is recognized as a HubSpot Solution Partner.</Desc>
        </Box>

        {/* Klaviyo */}
        <Box>
          <LogoRow>
            <BrandLogo src={Logo} />
            <DividerBlur />
            <KlaviyoLogo />
          </LogoRow>
          <Title>Silver Master Partner</Title>
          <Desc>SoftMaxs is now a Silver Master Partner with Klaviyo.</Desc>
        </Box>

      </Container>
    </Wrap>
  );
}
