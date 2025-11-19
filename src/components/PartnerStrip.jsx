import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";

/* ----------------------------------------------
        UPDATED PARTNER LOGOS
---------------------------------------------- */
const AdobeLogo = () => (
  <svg width="122" height="36" viewBox="0 0 512 512">
    <path fill="#FA0F00" d="M315.6 0h196.4v512L315.6 0zM0 0h196.4L0 512V0zm258.9 170.7L345 341.3h-66.1l-21.3-47.2h-79l-20.4 47.2h-62.8l84.8-170.7h78.7z"/>
  </svg>
);

const HyvaLogo = () => (
  <svg width="125" height="40">
    <text x="0" y="32" fontSize="34" fontWeight="800" fill="#1A4ED8" fontFamily="Inter">
      hyvä
    </text>
  </svg>
);

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

const KlaviyoLogo = () => (
  <svg width="155" height="42" viewBox="0 0 300 80">
    <path d="M10 40 Q40 10, 70 40 Q40 70, 10 40" fill="#00C673" opacity="0.32" />
    <path d="M15 40 Q40 20, 65 40 Q40 60, 15 40" fill="#00C673" />
    <text x="85" y="42" fontSize="32" fontWeight="800" fill="#00A86B" fontFamily="Inter">
      Klaviyo
    </text>
  </svg>
);

/* ----------------------------------------------
              STYLES (RESPONSIVE)
---------------------------------------------- */

const Wrap = styled.section`
  width: 100%;
  background: #f8f3e4;
  padding: clamp(30px, 6vw, 55px) 0;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px clamp(20px, 4vw, 60px);
  padding: 0 clamp(20px, 4vw, 60px);

  /* Tablet = 2 columns */
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }

  /* Mobile = 1 column */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Box = styled.div`
  min-width: 200px;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(10px, 2vw, 16px);
  margin-bottom: 12px;

  /* Center logos on small screens */
  @media (max-width: 950px) {
    justify-content: center;
  }
`;

const BrandLogo = styled.img`
  width: clamp(34px, 6vw, 42px);
  height: clamp(34px, 6vw, 42px);
  object-fit: contain;
  background: white;
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.15);
`;

const DividerBlur = styled.div`
  width: 2px;
  height: 32px;
  background: rgba(0,0,0,0.18);
  backdrop-filter: blur(4px);
  border-radius: 20px;

  @media (max-width: 600px) {
    height: 28px;
  }
`;

const Title = styled.h4`
  font-weight: 700;
  font-size: clamp(16px, 2.2vw, 18px);
  margin-bottom: 4px;
  color: #111;
`;

const Desc = styled.p`
  font-size: clamp(13px, 2vw, 14px);
  color: #4a4a4a;
  line-height: 1.45;
  max-width: 260px;

  @media (max-width: 950px) {
    margin: 0 auto;
  }
`;

/* ----------------------------------------------
              MAIN COMPONENT
---------------------------------------------- */

export default function PartnerStrip() {
  return (
    <Wrap>
      <Container>

        <Box>
          <LogoRow>
            <BrandLogo src={Logo} />
            <DividerBlur />
            <AdobeLogo />
          </LogoRow>
          <Title>Adobe Solution Bronze Partner</Title>
          <Desc>SoftMaxs is now an Adobe Solution Partner.</Desc>
        </Box>

        <Box>
          <LogoRow>
            <BrandLogo src={Logo} />
            <DividerBlur />
            <HyvaLogo />
          </LogoRow>
          <Title>Hyvä Themes Silver Partner</Title>
          <Desc>SoftMaxs officially becomes a Hyvä Themes partner.</Desc>
        </Box>

        <Box>
          <LogoRow>
            <BrandLogo src={Logo} />
            <DividerBlur />
            <HubSpotLogo />
          </LogoRow>
          <Title>HubSpot Solution Partner</Title>
          <Desc>SoftMaxs is recognized as a HubSpot Solution Partner.</Desc>
        </Box>

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
