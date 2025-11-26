// src/pages/CxConsultingPage.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Reuse existing components
import PartnerStrip from "../components/PartnerStrip";
import Testimonials from "../components/Testimonials";
import OfficeLocations from "../components/OfficeLocations";
import AwardsRecognition from "../components/Awards&Recognition";
import HappyCustomer from "../components/HappyCustomers";
import Question from "../components/Question";
import CounsulationForm from "../components/CounsulationForm";

// ----------------- THEME COLORS -----------------
const PRIMARY = "#0077ff";
const ACCENT = "#ffb400";
const LIGHT_BG = "#f5f7ff";
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
  background: rgba(255, 255, 255, 0.55);
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
`;

const HeroTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(0, 119, 255, 0.08);
  color: ${PRIMARY};
  font-size: 0.8rem;
  font-weight: 600;
  width: fit-content;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.1rem, 3.1vw, 3rem);
  line-height: 1.1;
  font-weight: 800;
  color: #111827;
`;

const HeroSub = styled.p`
  max-width: 560px;
  color: #4b5563;
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
  background: #fff;
  border: 1px solid #e5e7eb;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
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
    background: #005fcc;
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(0, 119, 255, 0.25);
  }
`;

const GhostBtn = styled.button`
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #111827;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f9fafb;
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
  background: ${(p) => (p.$active ? PRIMARY : "#d1d5db")};
  cursor: pointer;
  transition: all 0.2s ease;
`;

// Right form
const HeroRight = styled.div`
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
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
    box-shadow: 0 0 0 1px rgba(0, 119, 255, 0.1);
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
    box-shadow: 0 0 0 1px rgba(0, 119, 255, 0.1);
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
  background: #020617;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top, rgba(15, 23, 42, 0.4), transparent 60%);
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
    background: rgba(0, 0, 0, 0.15);
  }
`;

const MockInner = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 620px;
  background: rgba(255, 255, 255, 0.82);
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.18);
  padding: 18px;
  backdrop-filter: blur(6px);
`;

const Badge = styled.span`
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(255, 180, 0, 0.12);
  color: #92400e;
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
  background: #ffffffcc;
  backdrop-filter: blur(8px);
  border-radius: 18px;
  padding: 24px 18px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
    border-color: #0077ff55;
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: contain;
    opacity: 0.9;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin: 4px 0;
    color: #111;
  }

  p {
    font-size: 0.82rem;
    color: #555;
  }
`;

// =====================================================================================
// MAIN CX CONSULTING PAGE COMPONENT
// =====================================================================================
const CxConsultingPage = () => {
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
      tag: "SoftMaxs CX Studio",
      title: "Design customer journeys your buyers actually enjoy.",
      sub: "We align marketing, sales, support and product into one consistent, memorable customer experience."
    },
    {
      tag: "Customer Experience Consulting",
      title: "Turn CX into a measurable growth engine.",
      sub: "We connect NPS, CSAT and retention to clear journeys, playbooks and frontline behaviours."
    },
    {
      tag: "Omnichannel CX",
      title: "One experience across web, app, chat, and contact centre.",
      sub: "Remove friction between channels so customers never have to repeat themselves again."
    },
    {
      tag: "Voice of Customer & Insights",
      title: "Listen, learn and act on real customer signals.",
      sub: "We build VOC programs that feed directly into product, process and service improvements."
    },
    {
      tag: "CX Operations & Governance",
      title: "Make great experiences repeatable, not random.",
      sub: "Playbooks, standards and training that scale CX across regions and teams."
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1521790945508-bf2a36314e85?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1587613864521-9ef8dfe617cc?auto=format&fit=crop&w=1600&q=60&fm=webp"
  ];

  const workItems = [
    {
      img: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Retail CX Transformation",
      desc: "Unified online and store journeys with one profile, one loyalty view and consistent service standards."
    },
    {
      img: "https://images.unsplash.com/photo-1587613864521-9ef8dfe617cc?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "SaaS Customer Success Playbook",
      desc: "Onboarding, QBRs and renewals redesigned to increase adoption and reduce churn."
    },
    {
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Contact Centre Experience",
      desc: "Routing, scripts and knowledge base optimised to reduce handling times while improving CSAT."
    }
  ];

  const caseSlides = [
    {
      title: "RetailCo – Boosting NPS Across Online & Offline Journeys",
      body:
        "A growing retail brand had disconnected experiences between website, app and stores. Customers were frustrated by inconsistent offers, support and loyalty visibility.",
      results: [
        "NPS improved by 21 points in 9 months",
        "12% uplift in repeat online purchases",
        "Drop in ‘issue not resolved’ tickets from contact centre",
        "One shared CX journey map used across all departments"
      ],
      img:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=50&fm=webp"
    },
    {
      title: "B2B SaaS – From Support-Heavy To Product-Led CX",
      body:
        "The SaaS company was drowning in support tickets and low adoption. We reworked onboarding, in-app education and success motions.",
      results: [
        "Onboarding completion increased by 46%",
        "30% reduction in how-to support tickets",
        "Higher expansion revenue from engaged accounts",
        "Customer success teams working from one playbook"
      ],
      img:
        "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1200&q=50&fm=webp"
    },
    {
      title: "FinServe – Humanising Contact Centre CX",
      body:
        "A financial services brand needed to reduce average handle time without hurting experience. We redesigned contact flows, scripts and knowledge tools.",
      results: [
        "Average handle time down by 18%",
        "First contact resolution significantly improved",
        "CSAT and agent satisfaction both increased",
        "Consistent tone of voice and resolutions across channels"
      ],
      img:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=50&fm=webp"
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

  // Web3Forms submit (CX leads)
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
        setSuccessMsg("✅ Thank you! Our CX consultants will get back to you shortly.");
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
          1) HERO + SLIDER + CONSULTANCY FORM (CX)
      ================================================================ */}
      <HeroSection id="cx-hero" $bg={heroImages[slide]}>
        <HeroOverlay />

        <HeroLeft>
          <HeroTag>
            <span>🤝</span> CX Consulting Studio
          </HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>🛣️ Journey Mapping & Personas</Pill>
            <Pill>📞 Omnichannel CX (Web, App, Contact Centre)</Pill>
            <Pill>📊 NPS, CSAT & Retention Uplift</Pill>
            <Pill>🧭 CX Governance & Playbooks</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button" onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              <span>Book a 30-Minute CX Strategy Call</span>
            </PrimaryBtn>

            <GhostBtn type="button">
              <span>View CX Case Studies</span>
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
          <FormTitle>Tell us about your CX challenges.</FormTitle>
          <FormSub>
            Share a few details and our CX consultants will respond within 24 hours
            with next steps and quick-win ideas.
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
              value="New CX Consulting Lead - SoftMaxs"
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
              <Label htmlFor="company">Company / Brand</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Retail / SaaS / D2C / B2B..."
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="scope">What CX area needs the most help?</Label>
              <Input
                id="scope"
                name="scope"
                type="text"
                placeholder="Onboarding / Support / Renewals / Complaints..."
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">CX Brief</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Share current challenges, metrics (NPS, CSAT, churn) and what success looks like..."
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Free CX Consultation →"}
            </SubmitBtn>

            <FormNote>
              100% confidential · NDA available on request · We focus on practical,
              measurable CX improvements.
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
          2) PARTNER STRIP + OUR CX SERVICES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our CX Consulting Services</SectionTitle>
          <SectionSub>
            Strategy, journeys and operations – SoftMaxs helps you design and run
            customer experiences that drive loyalty and revenue.
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
          4) STRUGGLING TO IMPROVE CUSTOMER EXPERIENCE?
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>
            Struggling To Turn Customers Into Promoters?
          </SectionTitle>
          <SectionSub>
            Great campaigns alone won&apos;t fix churn. We connect the dots between
            expectations, journeys and every touchpoint in your CX.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>CX Audits & Diagnostics</CardTitle>
            <CardBody>
              End-to-end review of your current journeys, channels and KPIs to
              identify experience gaps and quick wins.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Customer Journey Mapping</CardTitle>
            <CardBody>
              Visual maps of how customers discover, buy, use and renew – with
              pain points and delight moments clearly marked.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Voice of Customer Programs</CardTitle>
            <CardBody>
              NPS, CSAT and survey programs that actually feed into product and
              service improvements, not just reports.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Contact Centre & Support CX</CardTitle>
            <CardBody>
              Better routing, knowledge management and playbooks so agents can
              resolve issues faster with more empathy.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Customer Success & Retention</CardTitle>
            <CardBody>
              Success motions, health scores and playbooks that turn customers
              into long-term, expanding accounts.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>CX Training & Governance</CardTitle>
            <CardBody>
              CX principles, standards and rituals that keep teams aligned even
              as you scale.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          5) OUR WORK (CX SHOWCASE)
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>CX Transformation Snapshot</SectionTitle>
          <SectionSub>
            A glimpse into how SoftMaxs reduces friction, increases satisfaction
            and drives lifetime value across industries.
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
                <Badge>CX Highlight</Badge>
                <CardTitle>{workItems[activeWork].title}</CardTitle>
                <CardBody>{workItems[activeWork].desc}</CardBody>
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
                  style={{ cursor: "pointer" }}
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
                  <Badge>CX</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardBody>{item.desc}</CardBody>
                </SoftCard>
              ))}
            </CardsGrid>
          </div>
        </Split>
      </Section>

      {/* ================================================================
          6) CX TEAM STATS
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>CX & Customer Success Specialists</SectionTitle>
          <SectionSub>
            A cross-functional team of CX strategists, journey designers and
            operations experts acting as an extension of your team.
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
            { icon: "🤝", end: 15, label: "Senior CX Consultants" },
            { icon: "🌍", end: 10, label: "Industries Advised" },
            { icon: "📊", end: 120, label: "Journeys & Playbooks Delivered" },
            { icon: "💬", end: 250, label: "CX Workshops & Training Sessions" }
          ].map((item, i) => {
            const [count, setCount] = useState(0);

            useEffect(() => {
              let start = 0;
              const duration = 1200;
              const increment = item.end / (duration / 16);

              const animate = () => {
                start += increment;
                if (start < item.end) {
                  setCount(Math.floor(start));
                  requestAnimationFrame(animate);
                } else {
                  setCount(item.end);
                }
              };

              const timeout = setTimeout(
                () => requestAnimationFrame(animate),
                i * 200
              );

              return () => clearTimeout(timeout);
            }, [item.end]);

            return (
              <StatCard
                key={i}
                style={{
                  background: "linear-gradient(to bottom right, #fdf8e8, #fff)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  borderRadius: "18px",
                  padding: "22px",
                  transition: "0.3s",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "220px",
                  cursor: "pointer",
                  transform: "translateY(0)"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.03)")
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
                    animationDelay: `${i * 0.15}s`
                  }}
                >
                  {item.icon}
                </span>

                <StatNumber>{count}+</StatNumber>
                <StatLabel>{item.label}</StatLabel>
              </StatCard>
            );
          })}
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
          7) CX CAPABILITIES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our CX & Journey Design Capabilities</SectionTitle>
          <SectionSub>
            Everything you need to move from fragmented experiences to a
            connected customer journey that teams can own and improve.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>CX Strategy & North Star</CardTitle>
            <CardBody>
              CX principles, promises and a measurable roadmap that connects
              experience to business outcomes.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Persona & Journey Design</CardTitle>
            <CardBody>
              Segments, personas and multi-channel journeys grounded in real
              data and customer stories.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Service Blueprinting</CardTitle>
            <CardBody>
              Mapping what customers see with the processes, tools and teams
              behind the scenes that enable it.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Measurement & Dashboards</CardTitle>
            <CardBody>
              NPS, CSAT, CES and behavioural metrics wired into dashboards your
              teams actually use.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>CX Ops & Playbooks</CardTitle>
            <CardBody>
              Standard operating procedures, scripts and checklists that make
              great experiences repeatable.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Change Management & Training</CardTitle>
            <CardBody>
              Workshops, roleplays and coaching to embed CX thinking into daily
              decisions across teams.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) WE ARE CX EXPERTS
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <SectionHeader>
          <SectionTitle>We Are CX Experts</SectionTitle>
          <SectionSub>
            Strategy, analytics and frontline coaching working together to
            create experiences your customers remember for the right reasons.
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
            { icon: "🚀", end: 80, label: "CX & Retention Initiatives Delivered" },
            { icon: "📈", end: 35, label: "Average NPS Improvement (Clients)" },
            { icon: "🧪", end: 200, label: "CX Experiments & A/B Tests" },
            { icon: "📆", end: 10, label: "Years Driving CX Outcomes" }
          ].map((item, i) => {
            const [count, setCount] = useState(0);

            useEffect(() => {
              let start = 0;
              const duration = 1300;
              const increment = item.end / (duration / 16);

              const animate = () => {
                start += increment;
                if (start < item.end) {
                  setCount(Math.floor(start));
                  requestAnimationFrame(animate);
                } else {
                  setCount(item.end);
                }
              };

              const timeout = setTimeout(
                () => requestAnimationFrame(animate),
                i * 200
              );

              return () => clearTimeout(timeout);
            }, [item.end]);

            return (
              <StatCard
                key={i}
                style={{
                  background: "linear-gradient(to bottom right, #ffffff, #f0f6ff)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  borderRadius: "18px",
                  padding: "26px 22px",
                  transition: "0.3s",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "220px",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.03)")
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
                    animationDelay: `${i * 0.15}s`
                  }}
                >
                  {item.icon}
                </span>

                <StatNumber>{count}+</StatNumber>
                <StatLabel>{item.label}</StatLabel>
              </StatCard>
            );
          })}
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
            CX programs, retention outcomes and service experiences recognised
            by clients and partners across sectors.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          10) CX CONSULTING PROCESS
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our CX Consulting Process</SectionTitle>
          <SectionSub>
            Transparent, collaborative and data-backed – so your teams always
            know what&apos;s happening and why.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Discover & Diagnose</CardTitle>
            <CardBody>
              Workshops, data review and customer interviews to understand what
              customers experience today and where gaps exist.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>2. Journey Mapping</CardTitle>
            <CardBody>
              Define priority journeys, key moments of truth and the metrics
              that matter for each stage.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>3. CX North Star & Roadmap</CardTitle>
            <CardBody>
              Create a shared CX vision and a realistic roadmap of initiatives,
              experiments and ownership.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>4. Design & Pilot</CardTitle>
            <CardBody>
              Implement new journeys, scripts, playbooks and content with
              controlled pilots and A/B tests.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>5. Scale & Enable</CardTitle>
            <CardBody>
              Roll out successful patterns across teams with training, tools and
              change management support.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>6. Measure & Optimise</CardTitle>
            <CardBody>
              Build dashboards, rituals and feedback loops to continuously
              improve CX results over time.
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
          13) CX CASE STUDY SNAPSHOT
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>CX Case Study Snapshot</SectionTitle>
          <SectionSub>
            One of many stories where we turned fragmented interactions into a
            single, seamless customer experience.
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
              View Full CX Case Study
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
              background: "rgba(0,0,0,0.55)",
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
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
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

                <p style={{ fontSize: "0.95rem", color: "#555" }}>
                  {modalData.body}
                </p>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  What We Did
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#444" }}>
                  <li>End-to-end CX audit and diagnostics</li>
                  <li>Customer journey mapping and prioritisation</li>
                  <li>New support and success playbooks across channels</li>
                  <li>Training and enablement for frontline teams</li>
                  <li>Measurement framework with CX dashboards</li>
                </ul>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  Business Impact
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#444" }}>
                  <li>Improved NPS and CSAT in priority journeys</li>
                  <li>Reduction in repeat contacts for the same issue</li>
                  <li>Higher adoption of self-service and digital channels</li>
                  <li>Leadership visibility into CX performance by journey</li>
                </ul>

                <img
                  src="https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=1200&q=50&fm=webp"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginTop: "20px",
                    objectFit: "cover"
                  }}
                  alt="CX Detail"
                />

                <button
                  onClick={closeCaseModal}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    padding: "12px",
                    borderRadius: "999px",
                    background: "#0077ff",
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
          <SectionTitle>Not Sure Where To Start With CX?</SectionTitle>
          <SectionSub>
            Share where your customer experience stands today, and our team will
            help you prioritise the journeys and changes that matter most.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          15) RELATED CX SERVICES
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related CX & CRM Services</SectionTitle>
          <SectionSub>
            Plug our CX team into a specific journey, channel or platform – or
            let us design your end-to-end customer experience program.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/salesforce.svg"
              alt="Salesforce"
            />
            <h4>Salesforce CX Journeys</h4>
            <p>Design journeys, playbooks and dashboards on top of your Salesforce stack.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zendesk.svg"
              alt="Zendesk"
            />
            <h4>Zendesk Support Optimisation</h4>
            <p>Ticket flows, macros and knowledge base structure tuned for faster resolutions.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg"
              alt="HubSpot"
            />
            <h4>HubSpot Service Hub CX</h4>
            <p>Lifecycle communication, feedback loops and automation that keep customers engaged.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twilio.svg"
              alt="Twilio"
            />
            <h4>Omnichannel Messaging Journeys</h4>
            <p>WhatsApp, SMS and voice interactions designed to feel human and connected.</p>
          </ServiceCard>
        </ServiceGrid>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <PrimaryBtn
            type="button"
            style={{ fontSize: "1rem", padding: "12px 26px" }}
            onClick={() => navigate("/book-call")}
          >
            <FiPhoneCall style={{ fontSize: "1.1rem" }} />
            Book a Call To Discuss Your CX
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

export default CxConsultingPage;
