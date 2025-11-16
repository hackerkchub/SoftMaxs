import React from "react";
import styled from "styled-components";

/* ----------------------------------------------------
      INLINE SVG LOGOS (BIG + PERFECT ALIGNMENT)
---------------------------------------------------- */

// Clone Main Logo (EbizON style — inline SVG)
const CloneMainLogo = () => (
  <svg width="120" height="34" viewBox="0 0 200 60">
    <text x="0" y="40" fontSize="38" fontWeight="700" fill="#f7b500" fontFamily="Inter, sans-serif">
      EbizON
    </text>
  </svg>
);

// Partner Badge Icon (Bigger – same as screenshot)
const BadgeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="#e2b100">
    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
  </svg>
);

// ADOBE LOGO (Large)
const AdobeLogo = () => (
  <svg width="120" height="34" viewBox="0 0 512 512">
    <path fill="#FA0F00" d="M315.6 0h196.4v512L315.6 0zM0 0h196.4L0 512V0zm258.9 170.7L345 341.3h-66.1l-21.3-47.2h-79l-20.4 47.2h-62.8l84.8-170.7h78.7z"/>
  </svg>
);

// Hyvä Logo (Large)
const HyvaLogo = () => (
  <svg width="120" height="34" viewBox="0 0 300 80">
    <text x="0" y="55" fontSize="56" fontWeight="800" fill="#1A4ED8" fontFamily="Inter, sans-serif">
      hyvä
    </text>
  </svg>
);

// HubSpot Logo (Large)
const HubSpotLogo = () => (
  <svg width="135" height="34" viewBox="0 0 512 512">
    <path fill="#FF7A59" d="M256 152a104 104 0 100 208 104 104 0 000-208zM437 75l-40 40 20 20 40-40zM256 32h28v60h-28zM104 75l20 20-40 40-20-20z"/>
  </svg>
);

// Klaviyo Logo (Large)
const KlaviyoLogo = () => (
  <svg width="145" height="34" viewBox="0 0 300 80">
    <text x="0" y="55" fontSize="50" fontWeight="700" fill="#00A86B" fontFamily="Inter, sans-serif">
      klaviyo
    </text>
  </svg>
);


/* ----------------------------------------------------
      STYLES – Same as real website
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

        {/* Clone’s Main Logo (front-left)
        <Box>
          <LogoRow>
            <CloneMainLogo />
          </LogoRow>
          <Title>EbizON Clone</Title>
          <Desc>Your trusted digital transformation partner.</Desc>
        </Box> */}

        <Box>
          <LogoRow>
            <BadgeIcon />
            <AdobeLogo />
          </LogoRow>
          <Title>Adobe Solution Bronze Partner</Title>
          <Desc>EbizON Is Now An Adobe Solution Partner</Desc>
        </Box>

        <Box>
          <LogoRow>
            <BadgeIcon />
            <HyvaLogo />
          </LogoRow>
          <Title>Hyvä Themes Silver Partner</Title>
          <Desc>EbizON Becomes a Hyvä Themes Silver Partner</Desc>
        </Box>

        <Box>
          <LogoRow>
            <BadgeIcon />
            <HubSpotLogo />
          </LogoRow>
          <Title>HubSpot Solution Partner</Title>
          <Desc>EbizON is Now A HubSpot Solution Partner</Desc>
        </Box>

        <Box>
          <LogoRow>
            <BadgeIcon />
            <KlaviyoLogo />
          </LogoRow>
          <Title>Silver Master Partner</Title>
          <Desc>EbizON is now a Silver Master Partner with Klaviyo.</Desc>
        </Box>

      </Container>
    </Wrap>
  );
}
