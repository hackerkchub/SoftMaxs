// src/pages/UiUxPage.jsx
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
  background: rgba(255,255,255,0.55);
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
    background: radial-gradient(circle at top, rgba(15,23,42,0.4), transparent 60%);
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
    background: rgba(0,0,0,0.15);
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
  border: 1px solid rgba(0,0,0,0.08);
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(0,0,0,0.12);
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
// MAIN UI/UX PAGE COMPONENT
// =====================================================================================
const UiUxPage = () => {
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
      tag: "SoftMaxs UI/UX Studio",
      title: "Design interfaces your users actually love to use.",
      sub: "From web apps to mobile products, we craft experiences that feel simple, fast and delightful."
    },
    {
      tag: "Product, Web & Mobile Experiences",
      title: "UI/UX design that connects business goals with user needs.",
      sub: "We blend research, psychology and visual craft to design journeys that convert and retain."
    },
    {
      tag: "Design Systems & Design Ops",
      title: "Scalable design systems for growing product teams.",
      sub: "Tokens, components, guidelines and workflows that keep every screen consistent and on-brand."
    },
    {
      tag: "Idea → Prototype → Launch",
      title: "From low-fidelity wireframes to clickable prototypes.",
      sub: "Get stakeholder alignment fast with prototypes that look and feel like the final product."
    },
    {
      tag: "Data-backed UX",
      title: "Continuous UX optimisation based on real behaviour.",
      sub: "We combine analytics, heatmaps and user feedback to iterate and ship better versions."
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=60&fm=webp"
  ];

  const workItems = [
    {
      img: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "SaaS Dashboard Redesign",
      desc: "Complex analytics simplified into clean cards, charts and flows that anyone can understand."
    },
    {
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "B2B Product Experience",
      desc: "End-to-end UX for onboarding, in-app education and feature discoverability."
    },
    {
      img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Mobile Banking App UI",
      desc: "Secure, trust-building interface design for high-frequency financial journeys."
    }
  ];

  const caseSlides = [
    {
      title: "FlowBoard – Revamping a SaaS Analytics Dashboard",
      body:
        "A B2B SaaS tool with cluttered navigation and low feature adoption. We redesigned the information architecture, dashboard widgets and workflows for better clarity.",
      results: [
        "34% increase in weekly active users",
        "Faster time-to-first key action",
        "Support tickets about ‘how to use’ dropped significantly",
        "Design system created for future modules"
      ],
      img:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=50&fm=webp"
    },
    {
      title: "GlowCare – Mobile App Experience for a Wellness Brand",
      body:
        "The brand wanted to move from static brochures to an interactive wellness companion app with personalised journeys.",
      results: [
        "Onboarding completion jumped by 52%",
        "Session length increased by 38%",
        "Clear habit-tracking UI boosted feature usage",
        "App store rating increased after redesign"
      ],
      img:
        "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=50&fm=webp"
    },
    {
      title: "Commercia UI – Design System for Multi-Brand Commerce",
      body:
        "A group of brands needed one design language across web & mobile apps. We built a robust design system and component library.",
      results: [
        "60% faster design-to-dev handoff",
        "Fewer UI bugs in QA cycles",
        "Consistent brand presence across multiple apps",
        "Reusable components across teams"
      ],
      img:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=50&fm=webp"
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

  // Web3Forms submit (UI/UX leads)
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
        setSuccessMsg("✅ Thank you! Our design team will get back to you shortly.");
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
          1) HERO + SLIDER + CONSULTANCY FORM (UI/UX)
      ================================================================ */}
      <HeroSection id="uiux-hero" $bg={heroImages[slide]}>
        <HeroOverlay />

        <HeroLeft>
          <HeroTag>
            <span>🎨</span> UI / UX Design Studio
          </HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>🧠 UX Research & Strategy</Pill>
            <Pill>📱 Web & Mobile UI Design</Pill>
            <Pill>🧩 Design Systems & Style Guides</Pill>
            <Pill>⚡ Prototyping & Usability Testing</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button" onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              <span>Book a 30-Minute Design Call</span>
            </PrimaryBtn>

            <GhostBtn type="button">
              <span>View Design Portfolio</span>
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
          <FormTitle>Tell us about your product or website.</FormTitle>
          <FormSub>
            Share a few details and our UI/UX lead will respond within 24 hours with
            next steps.
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
              value="New UI/UX Consultation Lead - SoftMaxs"
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
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="company">Company / Product Name</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Product / Startup / Brand"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="scope">What do you want to design?</Label>
              <Input
                id="scope"
                name="scope"
                type="text"
                placeholder="Website / Web app / Mobile app / Dashboard…"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">Project Brief</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Share context, timelines, scope and goals for the UI/UX work…"
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Free Design Consultation →"}
            </SubmitBtn>

            <FormNote>
              100% confidential · NDA available on request · No spam, only clarity.
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
          2) PARTNER STRIP + OUR UI/UX SERVICES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our UI/UX Design Services</SectionTitle>
          <SectionSub>
            From UX research and strategy to high-fidelity UI and design systems,
            SoftMaxs covers the complete product design lifecycle.
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
          4) STRUGGLING TO IMPROVE USER EXPERIENCE?
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>
            Struggling To Turn Visitors Into Engaged, Happy Users?
          </SectionTitle>
          <SectionSub>
            Beautiful screens are not enough. We help you build flows, content and
            interactions that quietly guide users to the right outcome.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>UX Audits & Heuristics</CardTitle>
            <CardBody>
              Deep audits of your existing product to identify friction, drop-offs
              and usability gaps using proven UX frameworks.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>User Journey Mapping</CardTitle>
            <CardBody>
              End-to-end mapping of user journeys to align product flows with real
              user behaviour and expectations.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>High-Fidelity UI Design</CardTitle>
            <CardBody>
              Crisp, modern UI with clear hierarchy, typography and spacing tailored
              to your brand language.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Interactive Prototypes</CardTitle>
            <CardBody>
              Clickable Figma prototypes that feel real, helping you validate
              ideas before development.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Design Systems</CardTitle>
            <CardBody>
              Tokens, components and guidelines that keep design consistent across
              multiple squads and platforms.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Dev-Ready Handoffs</CardTitle>
            <CardBody>
              Clean specs, annotations and workflows so engineering teams can
              implement faster with fewer gaps.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          5) OUR WORK (UI/UX SHOWCASE)
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Design Work Snapshot</SectionTitle>
          <SectionSub>
            A glimpse into how SoftMaxs improves usability, clarity and delight
            across digital products for different industries.
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
                <Badge>Case Highlight</Badge>
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
                  <Badge>UI/UX</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardBody>{item.desc}</CardBody>
                </SoftCard>
              ))}
            </CardsGrid>
          </div>
        </Split>
      </Section>

      {/* ================================================================
          6) DESIGN TEAM STATS
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Design & UX Specialists</SectionTitle>
          <SectionSub>
            A focused team of product designers, UX strategists and design system
            builders working as an extension of your team.
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
            { icon: "🎨", end: 20, label: "Senior Product Designers" },
            { icon: "🧠", end: 12, label: "UX Researchers & Strategists" },
            { icon: "🧩", end: 8, label: "Design System Specialists" },
            { icon: "🤝", end: 50, label: "Products Designed & Shipped" }
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
          7) DESIGN CAPABILITIES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Product Design Capabilities</SectionTitle>
          <SectionSub>
            Everything you need to move from fuzzy problem statements to
            pixel-perfect designs that your developers can ship.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>UX Research & Discovery</CardTitle>
            <CardBody>
              Stakeholder interviews, competitor analysis, journey mapping and
              UX workshops to align on the right problem.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Information Architecture</CardTitle>
            <CardBody>
              Clear navigation, content structure and flows so users always
              understand where they are and what comes next.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Wireframes & User Flows</CardTitle>
            <CardBody>
              Low and mid-fidelity wireframes that outline the most efficient
              paths to value for your users.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Visual UI Design</CardTitle>
            <CardBody>
              High-fidelity screens with thoughtful typography, color, spacing
              and micro-details across breakpoints.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Design Systems & Libraries</CardTitle>
            <CardBody>
              Reusable components, tokens and patterns that speed up both design
              and development cycles.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Usability Testing</CardTitle>
            <CardBody>
              Prototype testing with real users to refine flows, copy and
              interactions before writing code.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) WE ARE DESIGN EXPERTS
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <SectionHeader>
          <SectionTitle>We Are UI/UX Experts</SectionTitle>
          <SectionSub>
            Product thinking, interaction design and engineering awareness
            combined in one design team.
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
            { icon: "🚀", end: 70, label: "Digital Products Designed" },
            { icon: "💡", end: 300, label: "User Journeys Mapped" },
            { icon: "🧪", end: 150, label: "Usability Tests & Experiments" },
            { icon: "📆", end: 12, label: "Years in Product Design" }
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
            Product launches and experiences that have been recognised by clients
            and partners across categories.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          10) DESIGN PROCESS
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our UI/UX Design Process</SectionTitle>
          <SectionSub>
            Transparent, collaborative and structured – so your team always
            knows what is happening next.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Discovery & Alignment</CardTitle>
            <CardBody>
              We align on business goals, users, constraints and success metrics
              through workshops and interviews.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>2. UX Research</CardTitle>
            <CardBody>
              Analysing user behaviour, journeys and existing data to frame the
              right UX problems to solve.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>3. IA & Wireframes</CardTitle>
            <CardBody>
              Information architecture, user flows and wireframes that blueprint
              how your product should work.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>4. Visual UI Design</CardTitle>
            <CardBody>
              Applying brand, typography, color and layout to create polished,
              high-fidelity screens.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>5. Prototyping & Tests</CardTitle>
            <CardBody>
              Interactive prototypes tested with users and stakeholders to
              refine details and interactions.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>6. Handoff & Support</CardTitle>
            <CardBody>
              Design specs, assets, dev support and post-launch UX iterations as
              you learn from real users.
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
          13) DESIGN CASE STUDY SNAPSHOT
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Design Case Study Snapshot</SectionTitle>
          <SectionSub>
            One of many stories where we untangled complexity and turned it into
            a clean, intuitive experience.
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
              View Full Design Case Study
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
                  What We Designed
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#444" }}>
                  <li>Information architecture & navigation</li>
                  <li>Complete UI kit and design system foundations</li>
                  <li>High-fidelity responsive UI screens</li>
                  <li>Prototyped key flows for validation</li>
                  <li>Developer-ready components and specs</li>
                </ul>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  Results Achieved
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#444" }}>
                  <li>Higher task completion rates for core flows</li>
                  <li>Drop in support tickets around “how do I…?”</li>
                  <li>More consistent UI across modules</li>
                  <li>Faster future feature rollout thanks to systemised design</li>
                </ul>

                <img
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=50&fm=webp"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginTop: "20px",
                    objectFit: "cover"
                  }}
                  alt="Design Detail"
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
          <SectionTitle>Need Help Prioritising Design Work?</SectionTitle>
          <SectionSub>
            Share where your product is today, and our team will help you plan
            what to tackle first from a UX perspective.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          15) RELATED DESIGN SERVICES
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related Design Services</SectionTitle>
          <SectionSub>
            Plug our team into specific parts of your product design workflow,
            or let us handle end-to-end UI/UX.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg"
              alt="Figma"
            />
            <h4>Product Design Sprints</h4>
            <p>Problem framing, ideation and rapid prototyping in days, not months.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobexd.svg"
              alt="Adobe XD"
            />
            <h4>Brand-Aligned UI Design</h4>
            <p>Every screen feels on-brand, modern and consistent across platforms.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sketch.svg"
              alt="Sketch"
            />
            <h4>UX Audits & Reports</h4>
            <p>Actionable UX recommendations with clear prioritisation for your team.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/framer.svg"
              alt="Framer"
            />
            <h4>Interactive Prototyping</h4>
            <p>High-fidelity prototypes for pitching, validation and stakeholder buy-in.</p>
          </ServiceCard>
        </ServiceGrid>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <PrimaryBtn
            type="button"
            style={{ fontSize: "1rem", padding: "12px 26px" }}
            onClick={() => navigate("/book-call")}
          >
            <FiPhoneCall style={{ fontSize: "1.1rem" }} />
            Book a Call To Discuss Your UX
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

export default UiUxPage;
