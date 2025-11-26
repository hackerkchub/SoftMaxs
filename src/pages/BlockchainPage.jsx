// src/pages/BlockchainSolutionsPage.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import PartnerStrip from "../components/PartnerStrip";
import Testimonials from "../components/Testimonials";
import OfficeLocations from "../components/OfficeLocations";
import AwardsRecognition from "../components/Awards&Recognition";
import HappyCustomer from "../components/HappyCustomers";
import Question from "../components/Question";
import CounsulationForm from "../components/CounsulationForm";

// ----------------- THEME COLORS -----------------
const PRIMARY = "#0f9cf5";
const ACCENT = "#ffb400";
const LIGHT_BG = "#f4f7ff";
const SOFT_BG = "#fdf7e8";

// ----------------- ANIMATIONS -----------------
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideFade = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

// ----------------- PAGE WRAPPER -----------------
const PageWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #111827;
  overflow-x: hidden;
`;

// =====================================================================================
// 1) HERO + SLIDER + CONSULTANCY FORM
// =====================================================================================
const HeroSection = styled.section`
  width: 100%;
  padding: 80px 6% 60px;
  background-image: ${(p) => `url(${p.$bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 40px;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 70px 4% 40px;
  }

  @media (max-width: 500px) {
    padding: 60px 4% 32px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 23, 0.6);
  backdrop-filter: blur(4px);
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  animation: ${fadeInUp} 0.6s ease forwards;
  position: relative;
  z-index: 1;
  color: #f9fafb;
`;

const HeroTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(15, 156, 245, 0.16);
  color: #e0f2fe;
  font-size: 0.8rem;
  font-weight: 600;
  width: fit-content;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.1rem, 3.1vw, 3rem);
  line-height: 1.1;
  font-weight: 800;
`;

const HeroSub = styled.p`
  max-width: 560px;
  color: #d1d5db;
  font-size: 0.98rem;
`;

const HeroHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 10px;
`;

const Pill = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid #1f2937;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #e5e7eb;
`;

const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
`;

const PrimaryBtn = styled.button`
  padding: 10px 18px;
  border-radius: 999px;
  border: none;
  background: ${PRIMARY};
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #0471c4;
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(15, 156, 245, 0.35);
  }
`;

const GhostBtn = styled.button`
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #4b5563;
  background: transparent;
  color: #e5e7eb;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.8);
  }
`;

// Slider dots
const SliderDots = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 18px;
  align-items: center;
`;

const Dot = styled.button`
  width: ${(p) => (p.$active ? "18px" : "8px")};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${(p) => (p.$active ? PRIMARY : "#4b5563")};
  cursor: pointer;
  transition: all 0.2s ease;
`;

// Right form
const HeroRight = styled.div`
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.4);
  padding: 24px 24px 22px;
  max-width: 420px;
  margin-left: auto;
  animation: ${slideFade} 0.5s ease forwards;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 4px;
`;

const FormSub = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 14px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #374151;
`;

const Input = styled.input`
  padding: 9px 11px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  font-size: 0.85rem;
  outline: none;
  transition: 0.15s ease;

  &:focus {
    border-color: ${PRIMARY};
    box-shadow: 0 0 0 1px rgba(15, 156, 245, 0.15);
  }
`;

const TextArea = styled.textarea`
  padding: 9px 11px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  font-size: 0.85rem;
  resize: vertical;
  min-height: 80px;
  outline: none;
  transition: 0.15s ease;

  &:focus {
    border-color: ${PRIMARY};
    box-shadow: 0 0 0 1px rgba(15, 156, 245, 0.15);
  }
`;

const SubmitBtn = styled.button`
  margin-top: 6px;
  padding: 10px 14px;
  border-radius: 999px;
  border: none;
  background: ${ACCENT};
  color: #111827;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: 0.2s ease;
  width: 100%;

  &:hover {
    background: #e19a00;
    transform: translateY(-1px);
    box-shadow: 0 12px 25px rgba(226, 161, 0, 0.3);
  }
`;

const FormNote = styled.p`
  margin-top: 6px;
  font-size: 0.7rem;
  color: #9ca3af;
`;

// =====================================================================================
// GENERIC SECTION STYLES
// =====================================================================================
const Section = styled.section`
  padding: ${(p) => p.$py || "48px 6%"};
  background: ${(p) => p.$bg || "#ffffff"};

  @media (max-width: 768px) {
    padding: 32px 4%;
  }
`;

const FullWidthSection = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 0;
  margin: 0;
  display: block;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 6px;
`;

const SectionSub = styled.p`
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.9rem;
  color: #6b7280;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const WorkImageContainer = styled.div`
  grid-column: 1 / -1;

  @media (min-width: 1025px) {
    grid-column: auto;
  }
`;

const SoftCard = styled.div`
  background: ${(p) => p.$bg || "#ffffff"};
  border-radius: 18px;
  padding: 18px 18px 16px;
  border: 1px solid ${(p) => p.$border || "#e5e7eb"};
  box-shadow: ${(p) => p.$shadow || "0 10px 24px rgba(15, 23, 42, 0.05)"};
`;

const CardTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 4px;
`;

const CardBody = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
`;

// Stat strip
const StatStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
`;

const StatCard = styled.div`
  background: ${(p) => p.$bg || "#ffffff"};
  border-radius: 18px;
  padding: 16px 14px;
  border: 1px solid ${(p) => p.$border || "transparent"};
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${PRIMARY};
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: #4b5563;
`;

// Split layout
const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

// Work image
const WorkImage = styled.div`
  border-radius: 26px;
  padding: 18px;
  min-height: 230px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at top, #0b1120, #020617);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top, rgba(56, 189, 248, 0.3), transparent 60%);
  }

  @media (max-width: 768px) {
    min-height: 200px;
  }

  @media (max-width: 500px) {
    min-height: 170px;
  }
`;

// Case study image
const CaseImage = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 26px;
  min-height: 260px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 200px;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(15, 23, 42, 0.8),
      rgba(15, 23, 42, 0.1)
    );
  }
`;

const MockInner = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 620px;
  background: rgba(15, 23, 42, 0.9);
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.6);
  padding: 18px;
  backdrop-filter: blur(6px);
  color: #e5e7eb;
`;

const Badge = styled.span`
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(56, 189, 248, 0.15);
  color: #0ea5e9;
  margin-bottom: 6px;
`;

const List = styled.ul`
  margin: 10px 0 0;
  padding-left: 18px;
  font-size: 0.82rem;
  color: #4b5563;

  li + li {
    margin-top: 4px;
  }
`;

// Related services grid
const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #020617ee;
  backdrop-filter: blur(8px);
  border-radius: 18px;
  padding: 24px 18px;
  text-align: center;
  border: 1px solid rgba(148, 163, 184, 0.4);
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(15, 23, 42, 0.9);
    border-color: rgba(56, 189, 248, 0.7);
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: contain;
    opacity: 0.9;
    filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.7));
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin: 4px 0;
    color: #e5e7eb;
  }

  p {
    font-size: 0.82rem;
    color: #9ca3af;
  }
`;

// Simple animated stat card to keep hooks out of maps
const AnimatedStatCard = ({ icon, end, label, index, variant = "warm" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let frameId;
    const duration = 1200;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const timeoutId = setTimeout(() => {
      frameId = requestAnimationFrame(animate);
    }, index * 200);

    return () => {
      clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [end, index]);

  const baseStyle =
    variant === "warm"
      ? {
          background: "linear-gradient(to bottom right, #fdf8e8, #fff)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          padding: "22px"
        }
      : {
          background: "linear-gradient(to bottom right, #020617, #0b1120)",
          boxShadow: "0 8px 24px rgba(15,23,42,0.6)",
          padding: "26px 22px",
          color: "#e5e7eb"
        };

  return (
    <StatCard
      style={{
        ...baseStyle,
        borderRadius: "18px",
        transition: "0.3s",
        textAlign: "center",
        width: "100%",
        maxWidth: "220px",
        cursor: "pointer",
        transform: "translateY(0)"
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-6px) scale(1.03)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0)")
      }
    >
      <span
        style={{
          fontSize: "32px",
          display: "block",
          marginBottom: "6px",
          opacity: 0,
          animation: "fadeScale 0.6s ease forwards",
          animationDelay: `${index * 0.15}s`
        }}
      >
        {icon}
      </span>

      <StatNumber>{count}+</StatNumber>
      <StatLabel>{label}</StatLabel>
    </StatCard>
  );
};

// =====================================================================================
// MAIN BLOCKCHAIN PAGE COMPONENT
// =====================================================================================
const BlockchainSolutionsPage = () => {
  const navigate = useNavigate();

  const [slide, setSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [activeWork, setActiveWork] = useState(0);

  const [cs, setCs] = useState(0);
  const [showCaseModal, setShowCaseModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const slides = [
    {
      tag: "SoftMaxs Blockchain Lab",
      title: "Enterprise blockchain solutions that go beyond hype.",
      sub: "From PoCs to production-grade networks, we architect and ship blockchain solutions that actually align with business goals."
    },
    {
      tag: "Smart Contracts · dApps · Private Chains",
      title: "Turn complex workflows into secure, automated smart contracts.",
      sub: "Codify agreements on Ethereum, Polygon or private chains with clear audits and robust testing."
    },
    {
      tag: "Tokenisation & Digital Assets",
      title: "Design token utilities and platforms with real-world value.",
      sub: "We help you design token models, wallets and user flows that are compliant and easy to use."
    },
    {
      tag: "Integration & Observability",
      title: "Blockchain that plays nicely with your existing stack.",
      sub: "Integrate on-chain logic with CRM, ERP, APIs and data pipelines your teams already use."
    },
    {
      tag: "Security First",
      title: "Security, audits and monitoring baked into every release.",
      sub: "Threat modelling, smart contract audits and runtime monitoring to keep assets and users safe."
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60&fm=webp"
  ];

  const workItems = [
    {
      img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "DeFi Analytics Dashboard",
      desc: "Unified on-chain metrics and protocol health signals for DeFi teams and investors."
    },
    {
      img: "https://images.unsplash.com/photo-1644342259930-5a5fb4d1263c?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Supply Chain Traceability",
      desc: "End-to-end traceability for shipments and certificates anchored on a private ledger."
    },
    {
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Tokenised Asset Platform",
      desc: "Primary + secondary market flows for tokenised assets with KYC and compliance flows."
    }
  ];

  const caseSlides = [
    {
      title: "DeFiGuard – Risk & Analytics for a DeFi Protocol",
      body:
        "A fast-growing DeFi protocol needed better transparency around protocol health, collaterals and liquidation risks. We built a unified analytics dashboard powered by on-chain data.",
      results: [
        "Real-time protocol health view for the core team",
        "Improved investor confidence and transparency",
        "Reduced manual reporting overhead for the ops team",
        "Modular architecture ready for multi-chain expansion"
      ],
      img:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=50&fm=webp"
    },
    {
      title: "TraceChain – Blockchain for Supply Chain Provenance",
      body:
        "A manufacturing group wanted to prove provenance and authenticity for high-value shipments across multiple countries.",
      results: [
        "Immutable events for every major shipment milestone",
        "Faster dispute resolution with shared, tamper-proof data",
        "Improved partner trust with transparent tracking",
        "APIs for ERP and logistics platforms to plug into"
      ],
      img:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=1200&q=50&fm=webp"
    },
    {
      title: "TokenHub – Tokenised Investment Marketplace",
      body:
        "A fintech player wanted to launch a tokenised investment platform with strong compliance and intuitive UX.",
      results: [
        "Smooth investor onboarding with KYC/AML checks",
        "Simplified flows for primary and secondary market trades",
        "Role-based dashboards for issuers, investors and admins",
        "Modular smart contracts for future asset classes"
      ],
      img:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=50&fm=webp"
    }
  ];

  // Hero slider autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  // Case study auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setCs((p) => (p + 1) % caseSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [caseSlides.length]);

  // Web3Forms submit (Blockchain leads)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");

    try {
      const formData = new FormData(e.target);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMsg("✅ Thank you! Our blockchain consultants will get back to you shortly.");
        e.target.reset();
      } else {
        setSuccessMsg("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg("❌ Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const openCaseModal = (data) => {
    setModalData(data);
    setShowCaseModal(true);
  };

  const closeCaseModal = () => {
    setShowCaseModal(false);
    setModalData(null);
  };

  const current = slides[slide];
  const currentCase = caseSlides[cs];

  return (
    <PageWrap>
      <Navbar />

      {/* ================================================================
          1) HERO + SLIDER + CONSULTANCY FORM (BLOCKCHAIN)
      ================================================================ */}
      <HeroSection id="blockchain-hero" $bg={heroImages[slide]}>
        <HeroOverlay />

        <HeroLeft>
          <HeroTag>
            <span>⛓️</span> Blockchain &amp; Web3 Engineering
          </HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>🧾 Smart Contract Development</Pill>
            <Pill>🧱 dApps &amp; Protocol UX</Pill>
            <Pill>🏦 Enterprise &amp; Private Chains</Pill>
            <Pill>🛡️ Audits, Security &amp; Monitoring</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button" onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              <span>Book a 30-Minute Blockchain Call</span>
            </PrimaryBtn>

            <GhostBtn type="button">
              <span>Explore Blockchain Case Studies</span>
            </GhostBtn>
          </CTAGroup>

          <SliderDots>
            {slides.map((_, idx) => (
              <Dot
                key={idx}
                $active={idx === slide}
                onClick={() => setSlide(idx)}
                aria-label={`Show slide ${idx + 1}`}
              />
            ))}
          </SliderDots>
        </HeroLeft>

        <HeroRight>
          <FormTitle>Tell us about your blockchain use case.</FormTitle>
          <FormSub>
            Share a few details and our blockchain lead will respond within 24 hours
            with options, complexity and next steps.
          </FormSub>

          <Form onSubmit={handleSubmit}>
            {/* Web3Forms hidden fields */}
            <input
              type="hidden"
              name="access_key"
              value="9adfabce-a75b-4ab8-aea1-b79edaeeb7e0"
            />
            <input
              type="hidden"
              name="subject"
              value="New Blockchain Consultation Lead - SoftMaxs"
            />
            <input type="hidden" name="from_name" value="SoftMaxs Website" />

            <FieldGroup>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="company">Company / Project Name</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Fintech / Supply chain / Gaming…"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="scope">What do you want to build?</Label>
              <Input
                id="scope"
                name="scope"
                type="text"
                placeholder="DeFi app, NFT marketplace, private chain, tokenisation…"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">Project Brief</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Share context, timelines, tech preferences (Ethereum, Polygon, private), compliance needs…"
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Blockchain Consultation →"}
            </SubmitBtn>

            <FormNote>
              100% confidential · NDA available on request · We’ll only contact you
              about this project.
            </FormNote>

            {successMsg && (
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: successMsg.startsWith("✅") ? "#0b8a36" : "#b91c1c",
                  textAlign: "center"
                }}
              >
                {successMsg}
              </p>
            )}
          </Form>
        </HeroRight>
      </HeroSection>

      {/* ================================================================
          2) PARTNER STRIP + OUR BLOCKCHAIN SERVICES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Blockchain & Web3 Services</SectionTitle>
          <SectionSub>
            From strategy and token design to protocol UX and integrations,
            SoftMaxs covers the full blockchain delivery lifecycle.
          </SectionSub>
        </SectionHeader>

        <PartnerStrip />
      </Section>

      {/* ================================================================
          3) TESTIMONIALS
      ================================================================ */}
      <Section>
        <Testimonials />
      </Section>

      {/* ================================================================
          4) STRUGGLING TO SHIP REAL BLOCKCHAIN VALUE?
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>
            Struggling To Move From Blockchain PowerPoint To Production?
          </SectionTitle>
          <SectionSub>
            We help you cut through hype cycles and design blockchain solutions
            that are technically sound, compliant and usable.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Use Case &amp; Network Strategy</CardTitle>
            <CardBody>
              Evaluate if blockchain is the right fit, pick the right network
              (public, private, consortium) and define success metrics.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Smart Contract Architecture</CardTitle>
            <CardBody>
              Modular contract architectures designed for upgradability,
              security and gas efficiency across EVM-compatible chains.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>dApp &amp; Protocol UX</CardTitle>
            <CardBody>
              Wallet flows, transactions, gas, signatures and on-chain data
              presented in a way non-technical users understand.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Integration &amp; Data Pipes</CardTitle>
            <CardBody>
              Connect on-chain events with your CRM, KYC, risk engines,
              analytics and internal dashboards.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Security Reviews &amp; Audits</CardTitle>
            <CardBody>
              Threat modelling, test coverage, third-party audit preparation
              and remediation for smart contracts and dApps.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>DevOps &amp; Observability</CardTitle>
            <CardBody>
              CI/CD for smart contracts and nodes, with monitoring, alerts and
              incident playbooks for production teams.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          5) OUR WORK (BLOCKCHAIN SHOWCASE)
      ================================================================ */}
      <Section $bg="#020617">
        <SectionHeader>
          <SectionTitle style={{ color: "#f9fafb" }}>
            Blockchain Work Snapshot
          </SectionTitle>
          <SectionSub style={{ color: "#9ca3af" }}>
            A glimpse into how SoftMaxs uses blockchain to bring trust,
            automation and transparency to complex ecosystems.
          </SectionSub>
        </SectionHeader>

        <Split>
          <WorkImageContainer>
            <WorkImage>
              <img
                key={activeWork}
                src={workItems[activeWork].img}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  position: "absolute",
                  inset: 0,
                  opacity: 1,
                  transition: "opacity 0.4s ease"
                }}
                loading="lazy"
                alt={workItems[activeWork].title}
              />

              <MockInner>
                <Badge>On-Chain Highlight</Badge>
                <CardTitle style={{ color: "#e5e7eb" }}>
                  {workItems[activeWork].title}
                </CardTitle>
                <CardBody style={{ color: "#cbd5f5" }}>
                  {workItems[activeWork].desc}
                </CardBody>
              </MockInner>
            </WorkImage>
          </WorkImageContainer>

          <div>
            <CardsGrid>
              {workItems.map((item, i) => (
                <SoftCard
                  key={i}
                  onMouseEnter={() => setActiveWork(i)}
                  onClick={() => setActiveWork(i)}
                  style={{
                    cursor: "pointer",
                    background: "#020617",
                    borderColor:
                      i === activeWork ? "rgba(56,189,248,0.6)" : "#1f2933",
                    color: "#e5e7eb"
                  }}
                >
                  <img
                    src={item.img}
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      marginBottom: "10px"
                    }}
                    loading="lazy"
                    alt={item.title}
                  />
                  <Badge>Blockchain</Badge>
                  <CardTitle style={{ color: "#e5e7eb" }}>
                    {item.title}
                  </CardTitle>
                  <CardBody style={{ color: "#9ca3af" }}>
                    {item.desc}
                  </CardBody>
                </SoftCard>
              ))}
            </CardsGrid>
          </div>
        </Split>
      </Section>

      {/* ================================================================
          6) BLOCKCHAIN TEAM STATS
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Blockchain Engineering Squad</SectionTitle>
          <SectionSub>
            A focused team of protocol engineers, smart contract developers
            and product designers who understand both on-chain and off-chain.
          </SectionSub>
        </SectionHeader>

        <StatStrip
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            justifyItems: "center"
          }}
        >
          {[
            { icon: "👨‍💻", end: 18, label: "Blockchain & Smart Contract Engineers" },
            { icon: "🧠", end: 9, label: "Web3 Product & Token Strategy Leads" },
            { icon: "🧪", end: 60, label: "Smart Contracts Reviewed & Tested" },
            { icon: "🌍", end: 14, label: "Countries With Live Deployments" }
          ].map((item, i) => (
            <AnimatedStatCard
              key={i}
              icon={item.icon}
              end={item.end}
              label={item.label}
              index={i}
              variant="warm"
            />
          ))}
        </StatStrip>

        <style>
          {`
            @keyframes fadeScale {
              0% { opacity: 0; transform: scale(0.6); }
              100% { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
      </Section>

      {/* ================================================================
          7) BLOCKCHAIN CAPABILITIES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Blockchain Capabilities</SectionTitle>
          <SectionSub>
            Everything you need to go from idea to audited, monitored
            blockchain deployment your teams can operate with confidence.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Network &amp; Protocol Selection</CardTitle>
            <CardBody>
              Evaluate Ethereum, Polygon, BNB Chain, private/consortium options
              and layer-2s based on your requirements.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Smart Contract Design</CardTitle>
            <CardBody>
              Token, governance, staking, rewards and business logic designed
              for security and long-term evolution.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>dApp Front-end &amp; Flows</CardTitle>
            <CardBody>
              Wallet connects, transaction flows and dashboards built with UX
              best practices for both retail and institutional users.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Node Infrastructure</CardTitle>
            <CardBody>
              Managed nodes, RPC strategy, archive nodes, indexers and
              observability across networks.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Compliance &amp; Governance</CardTitle>
            <CardBody>
              Role-based controls, audit trails, admin flows and reporting
              aligned with your compliance teams.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Post-Launch Iteration</CardTitle>
            <CardBody>
              Feature rollout, protocol upgrades, UX improvements and
              continuous monitoring based on real-world usage.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) WE ARE BLOCKCHAIN EXPERTS
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <SectionHeader>
          <SectionTitle>We Are Blockchain Builders, Not Tourists</SectionTitle>
          <SectionSub>
            Product thinking, cryptography awareness and integration depth in
            one disciplined engineering team.
          </SectionSub>
        </SectionHeader>

        <StatStrip
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            justifyItems: "center"
          }}
        >
          {[
            { icon: "🚀", end: 40, label: "Blockchain Projects Delivered" },
            { icon: "📜", end: 120, label: "Smart Contracts Shipped" },
            { icon: "🔍", end: 200, label: "Security & QA Test Scenarios" },
            { icon: "📆", end: 7, label: "Years Building in Web3" }
          ].map((item, i) => (
            <AnimatedStatCard
              key={i}
              icon={item.icon}
              end={item.end}
              label={item.label}
              index={i}
              variant="cool"
            />
          ))}
        </StatStrip>

        <style>
          {`
            @keyframes fadeScale {
              0% { opacity: 0; transform: scale(0.6); }
              100% { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
      </Section>

      {/* ================================================================
          9) AWARDS & RECOGNITION COMPONENT
      ================================================================ */}
      <Section>
        <SectionHeader>
          <SectionTitle>Awards &amp; Recognition</SectionTitle>
          <SectionSub>
            Blockchain launches and enterprise-grade implementations recognised
            by clients, partners and industry communities.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          10) BLOCKCHAIN PROCESS
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Blockchain Delivery Process</SectionTitle>
          <SectionSub>
            Clear, transparent and collaborative – so your tech, legal and
            business stakeholders stay aligned at every step.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Discovery &amp; Feasibility</CardTitle>
            <CardBody>
              Explore use cases, goals, constraints and confirm if blockchain is
              the right tool for the job.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>2. Architecture &amp; PoC</CardTitle>
            <CardBody>
              Design target architecture, network strategy and deliver a
              proof-of-concept to validate assumptions.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>3. Smart Contracts &amp; dApp</CardTitle>
            <CardBody>
              Implement contracts, dApp interfaces and core workflows with test
              coverage and peer reviews.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>4. Integrations &amp; Data</CardTitle>
            <CardBody>
              Connect with identity, compliance, analytics and core systems to
              close the loop.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>5. Security &amp; Audit</CardTitle>
            <CardBody>
              Hardening, threat modelling, bug bounties and third-party audits
              as needed.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>6. Launch &amp; Run</CardTitle>
            <CardBody>
              Mainnet launch, observability, playbooks and continuous feature &
              UX improvements.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          11) HAPPY CUSTOMER COMPONENT
      ================================================================ */}
      <FullWidthSection>
        <HappyCustomer />
      </FullWidthSection>

      {/* ================================================================
          12) QUESTION COMPONENT
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <Question />
      </Section>

      {/* ================================================================
          13) BLOCKCHAIN CASE STUDY SNAPSHOT
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Blockchain Case Study Snapshot</SectionTitle>
          <SectionSub>
            One of many stories where we transformed complex coordination and
            trust problems into clear, automated on-chain workflows.
          </SectionSub>
        </SectionHeader>

        <Split>
          <div>
            <Badge>Case Study</Badge>
            <HeroTitle style={{ fontSize: "1.4rem", marginTop: "6px" }}>
              {currentCase.title}
            </HeroTitle>
            <SectionSub>{currentCase.body}</SectionSub>

            <h4
              style={{
                marginTop: "16px",
                fontSize: "0.9rem",
                fontWeight: 700
              }}
            >
              Outcomes
            </h4>

            <List>
              {currentCase.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </List>

            <PrimaryBtn
              style={{ marginTop: "18px" }}
              type="button"
              onClick={() => openCaseModal(currentCase)}
            >
              View Full Blockchain Case Study
            </PrimaryBtn>
          </div>

          <CaseImage style={{ backgroundImage: `url(${currentCase.img})` }}>
            <div className="overlay" />
          </CaseImage>
        </Split>

        {showCaseModal && modalData && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(8px)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "40px 12px",
              overflowY: "auto"
            }}
            onClick={closeCaseModal}
          >
            <div
              style={{
                width: "min(900px, 95%)",
                background: "#020617",
                color: "#e5e7eb",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.7)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalData.img}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover"
                }}
                alt={modalData.title}
              />

              <div style={{ padding: "24px" }}>
                <h2 style={{ fontSize: "1.6rem", fontWeight: "800" }}>
                  {modalData.title}
                </h2>

                <p style={{ fontSize: "0.95rem", color: "#cbd5f5" }}>
                  {modalData.body}
                </p>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  What We Built
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#e5e7eb" }}>
                  <li>End-to-end blockchain and system architecture</li>
                  <li>Smart contracts, dApp and admin tooling</li>
                  <li>Node and indexer setup with observability</li>
                  <li>Security reviews and audit preparation</li>
                  <li>Developer documentation and handover</li>
                </ul>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  Results Achieved
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#e5e7eb" }}>
                  <li>Higher trust in system outputs across stakeholders</li>
                  <li>Reduced manual reconciliations and reporting work</li>
                  <li>Clear, real-time visibility into on-chain activity</li>
                  <li>Foundation for new products on the same rails</li>
                </ul>

                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=50&fm=webp"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginTop: "20px",
                    objectFit: "cover"
                  }}
                  alt="Blockchain Detail"
                />

                <button
                  onClick={closeCaseModal}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    padding: "12px",
                    borderRadius: "999px",
                    background: PRIMARY,
                    color: "#fff",
                    fontWeight: "700",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "18px",
            gap: "6px"
          }}
        >
          {caseSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCs(i)}
              style={{
                width: cs === i ? "18px" : "8px",
                height: "8px",
                borderRadius: "999px",
                border: "none",
                background: cs === i ? PRIMARY : "#d1d5db",
                cursor: "pointer",
                transition: "0.2s"
              }}
            />
          ))}
        </div>
      </Section>

      {/* ================================================================
          14) COUNSULATION FORM COMPONENT
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Not Sure Where Blockchain Fits In?</SectionTitle>
          <SectionSub>
            Share your ecosystem and goals. We’ll help you spot the parts where
            blockchain genuinely adds value—without forcing it everywhere.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          15) RELATED BLOCKCHAIN SERVICES
      ================================================================ */}
      <Section $bg="#020617">
        <SectionHeader>
          <SectionTitle style={{ color: "#f9fafb" }}>
            Related Web3 &amp; Infrastructure Services
          </SectionTitle>
          <SectionSub style={{ color: "#9ca3af" }}>
            Plug our team into specific parts of your blockchain journey, or
            let us handle end-to-end delivery.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ethereum.svg"
              alt="Ethereum"
            />
            <h4>Ethereum &amp; EVM Builds</h4>
            <p>
              dApps, DeFi protocols, DAOs and tooling on Ethereum, Polygon and other
              EVM networks.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/polygon.svg"
              alt="Polygon"
            />
            <h4>Layer-2 Scaling</h4>
            <p>
              Reduce gas and latency while keeping security guarantees users need.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hyperledger.svg"
              alt="Hyperledger"
            />
            <h4>Enterprise &amp; Private Chains</h4>
            <p>
              Build permissioned networks for supply chain, trade and internal
              workflows.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ipfs.svg"
              alt="IPFS"
            />
            <h4>Web3 Storage &amp; Data</h4>
            <p>
              Content-addressed storage, data indexing and analytics for on-chain
              products.
            </p>
          </ServiceCard>
        </ServiceGrid>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <PrimaryBtn
            type="button"
            style={{ fontSize: "1rem", padding: "12px 26px" }}
            onClick={() => navigate("/book-call")}
          >
            <FiPhoneCall style={{ fontSize: "1.1rem" }} />
            Book a Call To Discuss Blockchain
          </PrimaryBtn>
        </div>
      </Section>

      {/* ================================================================
          16) OFFICE LOCATIONS + FOOTER
      ================================================================ */}
      <Section $py="40px 0">
        <OfficeLocations />
      </Section>

      <Footer />
    </PageWrap>
  );
};

export default BlockchainSolutionsPage;
