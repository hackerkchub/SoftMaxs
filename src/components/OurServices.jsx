import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";   

/* ---------------- ICONS ---------------- */

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

/* ---------------- STYLES ---------------- */

const Wrap = styled.section`
  padding: clamp(40px, 7vw, 60px) 0;
  width: 100%;
  font-family: "Inter", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 700;
  margin-bottom: 6px;
`;

const Underline = styled.div`
  width: 70px;
  height: 3px;
  background: #e2b100;
  margin: 0 auto clamp(20px, 4vw, 40px) auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 30px);

  display: grid;
  gap: clamp(16px, 3vw, 22px);
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #eef4ff;
  border-radius: 10px;
  padding: clamp(18px, 4vw, 26px);
  min-height: 210px;
  text-align: center;
  transition: 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.12);
  }
`;

const CardTitle = styled.h4`
  font-size: clamp(16px, 2.8vw, 18px);
  font-weight: 700;
  margin: 10px 0 8px;
`;

const CardDesc = styled.p`
  font-size: clamp(13px, 2.5vw, 14px);
  line-height: 1.5;
  color: #475569;
`;

/* ---------------- CTA BAR ---------------- */

const BottomBar = styled.div`
  background: #facc15;
  color: #111;
  margin: clamp(30px, 5vw, 50px) auto 0;
  max-width: 900px;

  padding: clamp(12px, 2.5vw, 18px);
  border-radius: 12px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 2vw, 14px);

  cursor: pointer;
  transition: .25s;

  &:hover {
    background: #ffdd3d;
  }

  img {
    width: clamp(18px, 4vw, 26px);
    height: clamp(18px, 4vw, 26px);
  }
`;

const ArrowRight = () => (
  <svg width="20" height="20" fill="none" stroke="#111" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M13 18l6-6-6-6"/>
  </svg>
);

/* ---------------- MAIN COMPONENT ---------------- */

export default function OurServices() {

  const data = [
    { icon: <IconMobile />, title: "Mobile Application", desc: "Captivate users with feature-rich native iOS/Android apps." },
    { icon: <IconEcommerce />, title: "E-Commerce", desc: "Scalable platforms and outstanding commerce experience." },
    { icon: <IconBlockchain />, title: "Blockchain", desc: "Secure blockchain apps with transparency." },
    { icon: <IconCloud />, title: "Cloud Services", desc: "Cloud migration, setup & support." },
    { icon: <IconSEO />, title: "SEO & Link Building", desc: "Boost visibility & ranking with authority." },
    { icon: <IconAds />, title: "Paid Ads", desc: "High-converting ad campaigns & landing pages." },
    { icon: <IconEngineering />, title: "Engineering Services", desc: "CAD design, prototyping & automation." },
    { icon: <IconAI />, title: "AI Solutions", desc: "AI automation, predictions & integrations." },
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
        <img src={Logo} alt="softmaxs-logo" />
        Avail our services and start driving more growth for your business. Contact us today!
        <ArrowRight />
      </BottomBar>
    </Wrap>
  );
}
