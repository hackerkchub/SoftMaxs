// src/pages/Offerings.jsx
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
const PRIMARY = "#0066ff";
const ACCENT = "#ffb400";
const LIGHT_BG = "#f5f8ff";

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

/* ================================================================
  SECTION 1: HERO + SLIDER + CONSULTANCY FORM
================================================================ */
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
  background: rgba(0, 102, 255, 0.08);
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

  &:hover {
    background: #0055cc;
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

  &:hover {
    background: #f9fafb;
  }
`;

const SliderDots = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 18px;
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

const HeroRight = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
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
    box-shadow: 0 0 0 1px rgba(0, 102, 255, 0.1);
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

  &:focus {
    border-color: ${PRIMARY};
    box-shadow: 0 0 0 1px rgba(0, 102, 255, 0.1);
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
  width: 100%;

  &:hover {
    background: #e19a00;
    transform: translateY(-1px);
  }
`;

const FormNote = styled.p`
  margin-top: 6px;
  font-size: 0.7rem;
  color: #9ca3af;
`;

/* ================================================================
  SECTION 2: GENERIC WRAPPERS
================================================================ */
const Section = styled.section`
  padding: ${(p) => p.$py || "48px 6%"};
  background: ${(p) => p.$bg || "#ffffff"};

  @media (max-width: 768px) {
    padding: 32px 4%;
  }
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

/* ================================================================
  SECTION 3: OUR SERVICES
================================================================ */
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const SoftCard = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 18px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);
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

// Image split blocks
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

const WorkImage = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 26px;
  padding: 18px;
  min-height: 230px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(15, 23, 42, 0.08);
  }

  @media (max-width: 768px) {
    min-height: 200px;
  }

  @media (max-width: 500px) {
    min-height: 170px;
  }
`;

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

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.12);
  }
`;

const MockInner = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 620px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
`;

const Badge = styled.span`
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(0, 119, 255, 0.08);
  color: ${PRIMARY};
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
  background: #fff;
  border-radius: 18px;
  padding: 24px 18px;
  text-align: center;
  border: 1px solid #eef2ff;
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.04);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(2, 6, 23, 0.08);
    border-color: ${PRIMARY}22;
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: contain;
    opacity: 0.95;
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

/* ========================= MAIN COMPONENT ========================= */

const Offerings = () => {
  const navigate = useNavigate();

  // hero slider state
  const [slide, setSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const slides = [
    {
      tag: "SoftMaxs App Studio",
      title: "High-performance mobile apps. Built for growth.",
      sub:
        "We design and develop mobile applications for iOS & Android that are fast, secure and built to scale."
    },
    {
      tag: "Native & Cross-platform Experts",
      title: "Flutter, React Native & Native stacks",
      sub:
        "One codebase or truly native — we choose the right stack to deliver performance and speed to market."
    },
    {
      tag: "End-to-end Product Delivery",
      title: "From idea to app store launch",
      sub:
        "Discovery, UX, development, QA and ongoing support — complete lifecycle under one product team."
    },
    {
      tag: "Secure & Compliant",
      title: "Secure-by-design mobile architectures",
      sub:
        "Best practices for auth, data protection, offline storage and compliance for regulated industries."
    },
    {
      tag: "Scalable Backend APIs",
      title: "APIs, integrations & analytics for your app",
      sub:
        "Cloud-native backends, analytics and integrations to power rich mobile experiences."
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=60&fm=webp"
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((p) => (p + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[slide];

  // Hero / Form submit (Web3Forms)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData(e.target);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await res.json();
      if (result.success) {
        setSuccessMsg("✅ Thank you — our mobile experts will contact you within 24 hours.");
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

  // work items for portfolio grid (mobile / app focused)
  const workItems = [
    {
      img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1600&q=60&fm=webp",
      title: "On-demand Delivery App",
      desc: "Consumer-facing app with live tracking, courier routing and real-time notifications."
    },
    {
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=60&fm=webp",
      title: "FinTech Wallet & Payments",
      desc: "Secure wallet, KYC flows and instant payments with robust fraud monitoring."
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Enterprise Field App",
      desc: "Offline-first app for field teams with sync, reporting and approvals."
    }
  ];

  const [activeWork, setActiveWork] = useState(0);

  // Case studies (mobile)
  const caseSlides = [
    {
      title: "QuickCart – Hyperlocal Delivery App",
      body:
        "We partnered with a retail brand to launch a hyperlocal delivery app with real-time order tracking and route optimisation.",
      results: [
        "4.8⭐ rating on app stores",
        "35% faster deliveries",
        "40% repeat order uplift",
        "Integrated loyalty & referrals"
      ],
      img:
        "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=50&fm=webp"
    },
    {
      title: "FinGo – Digital Wallet & UPI Layer",
      body:
        "From concept to launch of a secure wallet app with KYC, multi-factor auth and real-time fraud checks.",
      results: [
        "PCI-aware architecture",
        "Sub-2s transaction times",
        "Automated reconciliation",
        "In-app analytics dashboards"
      ],
      img:
        "https://images.unsplash.com/photo-1553484771-898ed465e931?auto=format&fit=crop&w=1600&q=60&fm=webp"
    },
    {
      title: "OpsMate – Enterprise Field Service App",
      body:
        "A robust app for field engineers with offline mode, job scheduling and supervisor approvals.",
      results: [
        "60% less paper work",
        "Real-time job status",
        "Better SLA compliance",
        "Improved team productivity"
      ],
      img:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=50&fm=webp"
    }
  ];

  const [cs, setCs] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCs((p) => (p + 1) % caseSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const [showCaseModal, setShowCaseModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openCaseModal = (data) => {
    setModalData(data);
    setShowCaseModal(true);
  };

  const closeCaseModal = () => {
    setShowCaseModal(false);
    setModalData(null);
  };

  // Counters used in certified experts
  const Counter = ({ end, icon, label, delay = 0 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const duration = 1200;
      const increment = end / (duration / 16);

      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      const timeout = setTimeout(() => requestAnimationFrame(animate), delay);
      return () => clearTimeout(timeout);
    }, [end, delay]);

    return (
      <StatCard
        style={{
          background: "linear-gradient(to bottom right, #ffffff, #f0f6ff)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          borderRadius: "18px",
          padding: "22px",
          transition: "0.3s",
          textAlign: "center",
          width: "100%",
          maxWidth: "220px"
        }}
      >
        <span style={{ fontSize: "28px", marginBottom: 8 }}>{icon}</span>
        <StatNumber>{count}+</StatNumber>
        <StatLabel>{label}</StatLabel>
      </StatCard>
    );
  };

  // scroll helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageWrap>
      <Navbar />

      {/* HERO */}
      <HeroSection id="offerings-hero" $bg={heroImages[slide]}>
        <HeroOverlay />
        <HeroLeft>
          <HeroTag>📱 Mobile & Application Development</HeroTag>
          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>📱 iOS & Android Apps</Pill>
            <Pill>⚡ Flutter & React Native</Pill>
            <Pill>☁️ Cloud APIs & Integrations</Pill>
            <Pill>🧪 QA · CI/CD · Analytics</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button" onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              Book a 30-Minute Call
            </PrimaryBtn>

            {/* <GhostBtn type="button">
              View Mobile Capabilities PDF
            </GhostBtn> */}
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
          <FormTitle>Request a Free App Consultation</FormTitle>
          <FormSub>Our mobile engineers will review and propose a clear roadmap.</FormSub>

          <Form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="9adfabce-a75b-4ab8-aea1-b79edaeeb7e0"
            />
            <input
              type="hidden"
              name="subject"
              value="New Mobile App Lead - SoftMaxs"
            />
            <input
              type="hidden"
              name="from_name"
              value="SoftMaxs Website - Offerings Page"
            />

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
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your company"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="platform">
                Target Platforms (iOS, Android, Web…)
              </Label>
              <Input
                id="platform"
                name="platform"
                type="text"
                placeholder="e.g. iOS & Android, or Flutter"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">App Idea / Brief</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Describe your app, users, timeline and key goals…"
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Free App Quote →"}
            </SubmitBtn>

            <FormNote>100% confidential · NDA available · No spam.</FormNote>

            {successMsg && (
              <p
                style={{
                  marginTop: 12,
                  fontWeight: 600,
                  color: "#0b8a36",
                  textAlign: "center"
                }}
              >
                {successMsg}
              </p>
            )}
          </Form>
        </HeroRight>
      </HeroSection>

      {/* PARTNER STRIP */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Mobile & Application Services</SectionTitle>
          <SectionSub>
            End-to-end app development — from concept and UX to launch and ongoing growth.
          </SectionSub>
        </SectionHeader>

        <PartnerStrip />
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Testimonials />
      </Section>

      {/* HAPPY CUSTOMERS (if your component shows counters/logos etc.) */}
      <Section $bg="#ffffff">
        <HappyCustomer />
      </Section>

      {/* STRUGGLE CARDS */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Common App Challenges We Solve</SectionTitle>
          <SectionSub>
            Whether you’re launching a new product or re-building an existing one,
            we help you ship reliable mobile experiences faster.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Choosing the Right Stack</CardTitle>
            <CardBody>
              Native vs cross-platform, backend integrations and architectural decisions made simple.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>App Store Readiness</CardTitle>
            <CardBody>
              App Store & Play Store guidelines, review readiness and release pipelines.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Performance & Battery</CardTitle>
            <CardBody>
              Smooth UI, optimised network calls and efficient background processing.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Security & Compliance</CardTitle>
            <CardBody>
              Secure auth, encrypted storage and compliance for finance, health and enterprise.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Scalable Backends</CardTitle>
            <CardBody>
              APIs, messaging, real-time events and analytics built for growth.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Legacy App Modernisation</CardTitle>
            <CardBody>
              Rebuild, refactor or re-platform existing apps without stopping the business.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* OUR WORK */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Selected Mobile Projects</SectionTitle>
          <SectionSub>Some of the apps and mobile platforms we've worked on.</SectionSub>
        </SectionHeader>

        <Split>
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
                    alt={item.title}
                    style={{ width: "100%", borderRadius: 12, marginBottom: 10 }}
                  />
                  <Badge>Mobile Project</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardBody>{item.desc}</CardBody>
                </SoftCard>
              ))}
            </CardsGrid>
          </div>

          <WorkImage style={{ backgroundImage: `url(${workItems[activeWork].img})` }}>
            <MockInner>
              <h3 style={{ margin: 0 }}>{workItems[activeWork].title}</h3>
              <p style={{ marginTop: 8, color: "#475569" }}>
                {workItems[activeWork].desc}
              </p>
              <div style={{ marginTop: 12 }}>
                <PrimaryBtn
                  onClick={() =>
                    openCaseModal({
                      title: workItems[activeWork].title,
                      body: workItems[activeWork].desc,
                      results: ["Better retention", "Stable performance", "Improved ratings"],
                      img: workItems[activeWork].img
                    })
                  }
                >
                  View Case Study
                </PrimaryBtn>
              </div>
            </MockInner>
          </WorkImage>
        </Split>
      </Section>

      {/* CERTIFIED EXPERTS */}
      <Section>
        <SectionHeader>
          <SectionTitle>Specialised App Teams</SectionTitle>
          <SectionSub>
            Cross-functional teams with strong experience in mobile, backend and product thinking.
          </SectionSub>
        </SectionHeader>

        <StatStrip
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20
          }}
        >
          <Counter end={25} icon="👩‍💻" label="Senior Mobile Engineers" delay={100} />
          <Counter end={80} icon="📱" label="Apps Delivered" delay={200} />
          <Counter end={50} icon="🧩" label="3rd Party Integrations" delay={300} />
          <Counter end={10} icon="☁️" label="Cloud & DevOps Leads" delay={400} />
        </StatStrip>

        <style>{`
          @keyframes fadeScale {
            0% { opacity: 0; transform: scale(0.6); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </Section>

      {/* AWARDS & RECOGNITION COMPONENT */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Awards & Recognition</SectionTitle>
          <SectionSub>
            Recognition for our work in mobile, product engineering and digital transformation.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* CASE STUDY SNAPSHOT */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Case Study Snapshot</SectionTitle>
          <SectionSub>
            A quick look at how we solve complex app problems and deliver measurable results.
          </SectionSub>
        </SectionHeader>

        <Split>
          <div>
            <Badge>Mobile Case Study</Badge>
            <HeroTitle style={{ fontSize: "1.4rem", marginTop: 6 }}>
              {caseSlides[cs].title}
            </HeroTitle>
            <SectionSub>{caseSlides[cs].body}</SectionSub>

            <h4 style={{ marginTop: 16, fontSize: "0.9rem", fontWeight: 700 }}>
              Results
            </h4>
            <List>
              {caseSlides[cs].results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </List>

            <PrimaryBtn
              style={{ marginTop: 18 }}
              onClick={() => openCaseModal(caseSlides[cs])}
            >
              View Full Case Study
            </PrimaryBtn>
          </div>

          <CaseImage style={{ backgroundImage: `url(${caseSlides[cs].img})` }}>
            <div className="overlay" />
          </CaseImage>
        </Split>

        {/* case modal */}
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
                style={{ width: "100%", height: "320px", objectFit: "cover" }}
                alt={modalData.title}
              />

              <div style={{ padding: 24 }}>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 800 }}>
                  {modalData.title}
                </h2>
                <p style={{ fontSize: "0.95rem", color: "#555" }}>
                  {modalData.body}
                </p>

                <h3 style={{ marginTop: 18, fontWeight: 700 }}>What We Did</h3>
                <ul style={{ paddingLeft: 20, color: "#444" }}>
                  <li>Product & UX strategy</li>
                  <li>Mobile architecture & APIs</li>
                  <li>Release pipelines & monitoring</li>
                </ul>

                <h3 style={{ marginTop: 18, fontWeight: 700 }}>Results Achieved</h3>
                <ul style={{ paddingLeft: 20, color: "#444" }}>
                  <li>Improved app stability & performance</li>
                  <li>Higher user engagement and retention</li>
                  <li>Better visibility through analytics & dashboards</li>
                </ul>

                <img
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=50&fm=webp"
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    marginTop: 20,
                    objectFit: "cover"
                  }}
                  alt="App design and collaboration"
                />

                <button
                  onClick={closeCaseModal}
                  style={{
                    marginTop: 22,
                    width: "100%",
                    padding: 12,
                    borderRadius: 999,
                    background: PRIMARY,
                    color: "#fff",
                    fontWeight: 700,
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

        {/* pager dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 18,
            gap: 6
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

      {/* COUNSULTATION FORM */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Not Sure Where To Start With Your App?</SectionTitle>
          <SectionSub>
            Share a few details and our app team will recommend the best approach for your product.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* RELATED SERVICES */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related App Development Services</SectionTitle>
          <SectionSub>
            Mix and match services — we support everything from design sprints to full product builds.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/flutter.svg"
              alt="Flutter"
            />
            <h4>Flutter Apps</h4>
            <p>High quality cross-platform apps with a single codebase.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg"
              alt="React Native"
            />
            <h4>React Native</h4>
            <p>Shared code with web ecosystems and native performance.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/android.svg"
              alt="Android"
            />
            <h4>Native Android</h4>
            <p>Deep platform integrations and performance-critical features.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg"
              alt="iOS"
            />
            <h4>Native iOS</h4>
            <p>Premium iOS experiences that feel truly at home on Apple devices.</p>
          </ServiceCard>
        </ServiceGrid>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <PrimaryBtn
            type="button"
            style={{ fontSize: "1rem", padding: "12px 26px" }}
            onClick={() => navigate("/book-call")}
          >
            <FiPhoneCall style={{ fontSize: "1.1rem" }} /> Book a Call To Discuss Your App
          </PrimaryBtn>
        </div>
      </Section>

      {/* FAQ / QUESTIONS */}
      <Section $bg="#ffffff">
        <Question />
      </Section>

      {/* OFFICE LOCATIONS + FOOTER */}
      <Section $py="40px 0">
        <OfficeLocations />
      </Section>

      <Footer />
    </PageWrap>
  );
};

export default Offerings;
