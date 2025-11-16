import React from "react";
import styled from "styled-components";

/* -------------------------------------
   REALISTIC MODERN PROFESSIONAL ICONS
------------------------------------- */

const IconMobile = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2">
    <rect x="7" y="2" width="10" height="20" rx="2"></rect>
    <circle cx="12" cy="18" r="1"></circle>
  </svg>
);

const IconEcommerce = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.5 12h13l2.5-8H6"></path>
  </svg>
);

const IconBlockchain = () => (
  <svg width="32" height="32" fill="none" stroke="#1e3a8a" strokeWidth="2">
    <rect x="2" y="2" width="8" height="8"></rect>
    <rect x="14" y="2" width="8" height="8"></rect>
    <rect x="8" y="14" width="8" height="8"></rect>
    <path d="M6 6l4 4M18 6l-4 4M12 10l0 4"></path>
  </svg>
);

const IconCloud = () => (
  <svg width="32" height="32" fill="none" stroke="#1e3a8a" strokeWidth="2">
    <path d="M4 15a4 4 0 014-4 6 6 0 0112 0 4 4 0 010 8H6a4 4 0 01-2-4z"></path>
  </svg>
);

const IconSEO = () => (
  <svg width="32" height="32" fill="none" stroke="#1e3a8a" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="16" y1="16" x2="22" y2="22"></line>
  </svg>
);

const IconAds = () => (
  <svg width="32" height="32" fill="none" stroke="#1e3a8a" strokeWidth="2">
    <rect x="3" y="3" width="18" height="14" rx="2"></rect>
    <path d="M7 21h10M12 17v4"></path>
  </svg>
);

const IconEngineering = () => (
  <svg width="32" height="32" fill="none" stroke="#1e3a8a" strokeWidth="2">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15A7.94 7.94 0 0121 12a7.94 7.94 0 01-1.6-3l2-2-2-3-3 2a7.94 7.94 0 01-3-1.6L12 1l-3 2a7.94 7.94 0 01-3 1.6L4 4 2 7l2 2a7.94 7.94 0 01-1.6 3L1 12l2 3a7.94 7.94 0 013 1.6L4 20l2 3 3-2a7.94 7.94 0 013 1.6l1-2"></path>
  </svg>
);

const IconAI = () => (
  <svg width="32" height="32" fill="none" stroke="#1e3a8a" strokeWidth="2">
    <rect x="3" y="8" width="18" height="12" rx="2"></rect>
    <circle cx="12" cy="14" r="3"></circle>
    <path d="M12 2v4M12 20v4M2 14h4M18 14h4"></path>
  </svg>
);

/* -------------------------------------
          STYLES
------------------------------------- */

const Wrap = styled.section`
  padding: 60px 0;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const Underline = styled.div`
  width: 70px;
  height: 3px;
  background: #e2b100;
  margin: 0 auto 40px auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;

  @media(max-width: 1000px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #eef4ff;
  border-radius: 8px;
  padding: 26px;
  height: 205px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.12);
  }
`;

const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin: 12px 0 8px 0;
  color: #0f172a;
`;

const CardDesc = styled.p`
  font-size: 14px;
  line-height: 1.45;
  color: #475569;
`;

/* -------------------------------------
     YELLOW CTA BAR
------------------------------------- */

const BottomBar = styled.div`
  background: #facc15;
  color: #111;
  margin: 50px auto 0 auto;
  max-width: 900px;
  padding: 14px 22px;
  border-radius: 12px;
  font-weight: 600;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:14px;
  cursor:pointer;
  transition:.2s;

  &:hover {
    background:#ffdd3d;
  }
`;

const ArrowRight = () => (
  <svg width="22" height="22" fill="none" stroke="#111" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M13 18l6-6-6-6"/>
  </svg>
);


/* -------------------------------------
            MAIN COMPONENT
------------------------------------- */

export default function OurServices() {

  const data = [
    { icon:<IconMobile/>, title:"Mobile Application", desc:"Captivate users with feature-rich native iOS/Android apps aligned with business needs." },

    { icon:<IconEcommerce/>, title:"E-Commerce", desc:"Superior customer experience with scalable platforms and digital solutions." },

    { icon:<IconBlockchain/>, title:"Blockchain", desc:"Build secure next-gen blockchain apps with transparency and traceability." },

    { icon:<IconCloud/>, title:"Cloud Services & Support", desc:"Move to cloud with expert guidance, selection, migration & maintenance." },

    { icon:<IconSEO/>, title:"SEO & Link Building", desc:"Boost search visibility, traffic & brand credibility with authoritative SEO." },

    { icon:<IconAds/>, title:"Paid Ads, Landing Pages", desc:"Attract high-intent traffic with targeted ads & persuasive landing pages." },

    { icon:<IconEngineering/>, title:"Engineering Services", desc:"CAD design, prototyping, automation & tech execution." },

    { icon:<IconAI/>, title:"AI Solutions", desc:"AI-powered automations, predictions, integrations & custom models." }
  ];

  return (
    <Wrap>
      <Title>Our Services</Title>
      <Underline />

      <Container>
        {data.map((s, i) => (
          <Card key={i}>
            {s.icon}
            <CardTitle>{s.title}</CardTitle>
            <CardDesc>{s.desc}</CardDesc>
          </Card>
        ))}
      </Container>

      <BottomBar>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
        </svg>
        Avail our services and start driving more growth for your business. Contact Us Now
        <ArrowRight />
      </BottomBar>
    </Wrap>
  );
}
