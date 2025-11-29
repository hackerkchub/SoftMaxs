// src/pages/MagentoPage.jsx
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

// =====================================================================
// Animated Stat Card (to keep hooks valid)
// =====================================================================
const AnimatedStatCard = ({ icon, end, label, index, variant = "warm" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1300;
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

    const timeout = setTimeout(() => requestAnimationFrame(animate), index * 200);

    return () => clearTimeout(timeout);
  }, [end, index]);

  const bg =
    variant === "warm"
      ? "linear-gradient(to bottom right, #fdf8e8, #fff)"
      : "linear-gradient(to bottom right, #ffffff, #f0f6ff)";

  return (
    <StatCard
      style={{
        background: bg,
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        borderRadius: "18px",
        padding: "22px",
        transition: "0.3s",
        textAlign: "center",
        width: "100%",
        maxWidth: "220px",
        cursor: "pointer",
        transform: "translateY(0)",
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
          animationDelay: `${index * 0.15}s`,
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
// MAIN MAGENTO PAGE COMPONENT
// =====================================================================================
const MagentoPage = () => {
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
      tag: "SoftMaxs Magento / Adobe Commerce Studio",
      title: "High-performing Magento storefronts built to scale.",
      sub: "From UX to checkout, we design and engineer Magento experiences that convert better and run faster across devices.",
    },
    {
      tag: "Headless & Composable Commerce",
      title: "Modern, API-first Magento architectures.",
      sub: "Decouple your frontend, power multiple storefronts and launch campaigns faster with a composable Magento stack.",
    },
    {
      tag: "B2B & D2C Commerce",
      title: "One Magento platform for complex catalogs & rules.",
      sub: "Tiered pricing, custom quotes, multi-storefront and advanced workflows for serious B2B and D2C brands.",
    },
    {
      tag: "Performance, Security & CX",
      title: "Lightning fast, secure and stable Magento stores.",
      sub: "Performance tuning, security hardening and UX optimisation to keep customers engaged and checkout friction free.",
    },
    {
      tag: "Migration & Replatforming",
      title: "Smooth migration to Magento or Adobe Commerce.",
      sub: "Structured migration plans, data integrity and SEO-safe launches when moving from legacy platforms.",
    },
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1600&q=60&fm=webp",
  ];

  const workItems = [
    {
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "D2C Brand Storefront Revamp",
      desc: "Reimagined product pages, navigation and checkout for a lifestyle brand – boosting conversion and AOV.",
    },
    {
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "B2B Ordering Portal On Magento",
      desc: "Self-serve ordering, negotiated pricing and account-level permissions for a global distributor.",
    },
    {
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Headless Magento + React Frontend",
      desc: "API-first storefront with blazing fast page loads, built for experimentation and rapid merchandising.",
    },
  ];

  const caseSlides = [
    {
      title: "D2C Cosmetics – Magento Storefront Rebuild",
      body:
        "A fast-growing cosmetics brand needed a Magento storefront that matched their pace of campaigns and launches. We redesigned the UX and optimised performance end-to-end.",
      results: [
        "22% uplift in overall conversion rate",
        "35% faster page loads on mobile",
        "Significant drop in checkout abandonment",
        "Flexible content blocks for the marketing team",
      ],
      img:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=50&fm=webp",
    },
    {
      title: "Industrial Supplier – B2B Commerce on Magento",
      body:
        "A B2B supplier wanted to move offline orders to digital, without losing complex contracts and pricing rules. We implemented Magento with tailored B2B workflows.",
      results: [
        "60%+ of orders now placed online",
        "Account-specific pricing & catalogs live in Magento",
        "Reduced load on sales & support teams",
        "Better visibility across customers and orders",
      ],
      img:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=50&fm=webp",
    },
    {
      title: "Global Brand – Magento Performance & CX Audit",
      body:
        "An established ecommerce brand needed to improve speed, UX and reliability ahead of peak season. We ran a deep Magento audit and executed a series of fixes.",
      results: [
        "Up to 45% improvement in key page load times",
        "Stabilised checkout during high-traffic spikes",
        "Reduced 500/timeout errors under load",
        "Clear roadmap for ongoing optimisation",
      ],
      img:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=50&fm=webp",
    },
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

  // Web3Forms submit (Magento leads)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");

    try {
      const formData = new FormData(e.target);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMsg(
          "✅ Thank you! Our Magento team will get back to you shortly."
        );
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
          1) HERO + SLIDER + CONSULTANCY FORM (MAGENTO)
      ================================================================ */}
      <HeroSection id="magento-hero" $bg={heroImages[slide]}>
        <HeroOverlay />

        <HeroLeft>
          <HeroTag>
            <span>🛒</span> Magento / Adobe Commerce Development
          </HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>⚙️ Custom Magento Storefronts</Pill>
            <Pill>🚀 Performance & Core Web Vitals</Pill>
            <Pill>🧱 Headless & Composable Commerce</Pill>
            <Pill>💳 Checkout, Payments & Integrations</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button" onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              <span>Book a Magento Strategy Call</span>
            </PrimaryBtn>

            {/* <GhostBtn type="button">
              <span>View Magento Case Studies</span>
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
          <FormTitle>Tell us about your Magento or ecommerce project.</FormTitle>
          <FormSub>
            Share a few details and our Magento solution architect will respond
            within 24 hours with next steps.
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
              value="New Magento / Adobe Commerce Consultation Lead - SoftMaxs"
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
              <Label htmlFor="company">Brand / Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="D2C brand / B2B supplier / Marketplace..."
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="scope">What are you planning?</Label>
              <Input
                id="scope"
                name="scope"
                type="text"
                placeholder="New build / migration / revamp / performance..."
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">Project Brief</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Share current platform, pain points, timelines and target markets…"
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Free Magento Consultation →"}
            </SubmitBtn>

            <FormNote>
              100% confidential · NDA available on request · Platform and
              vendor-neutral recommendations.
            </FormNote>

            {successMsg && (
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: successMsg.startsWith("✅") ? "#0b8a36" : "#b91c1c",
                  textAlign: "center",
                }}
              >
                {successMsg}
              </p>
            )}
          </Form>
        </HeroRight>
      </HeroSection>

      {/* ================================================================
          2) PARTNER STRIP + OUR MAGENTO SERVICES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Magento & Commerce Services</SectionTitle>
          <SectionSub>
            From greenfield builds and migrations to performance audits and
            continuous optimisation, SoftMaxs covers the full Magento lifecycle.
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
          4) STRUGGLING WITH YOUR MAGENTO STORE?
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>
            Struggling To Turn Traffic Into High-Value Customers?
          </SectionTitle>
          <SectionSub>
            Slow pages, clunky UX or fragile deployments? We help you get your
            Magento experience, performance and operations under control.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Magento Architecture & Code Audits</CardTitle>
            <CardBody>
              Deep reviews of your Magento stack, custom modules and hosting
              setup to uncover bottlenecks and risks.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>UX & Conversion Optimisation</CardTitle>
            <CardBody>
              Data-driven UX improvements for PDPs, PLPs, search and checkout to
              lift add-to-cart and conversion rates.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Performance & Core Web Vitals</CardTitle>
            <CardBody>
              Image optimisation, caching, CDN, query tuning and theme
              refactoring for a snappy shopping experience.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Integrations & Extensions</CardTitle>
            <CardBody>
              ERP, CRM, PIM, marketing automation, payment gateways and
              logistics integrations done right.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Security & Compliance</CardTitle>
            <CardBody>
              Security hardening, patching, PCI-aware implementations and
              role-based access for your teams.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Ongoing Support & Enhancements</CardTitle>
            <CardBody>
              Reliable retainers for feature releases, campaign launches and
              continuous optimisation.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          5) OUR WORK (MAGENTO SHOWCASE)
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Magento Experience & Platform Snapshot</SectionTitle>
          <SectionSub>
            A glimpse into how SoftMaxs designs Magento storefronts, optimises
            performance and supports brands across segments.
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
                  transition: "opacity 0.4s ease",
                }}
                loading="lazy"
                alt={workItems[activeWork].title}
              />

              <MockInner>
                <Badge>Commerce Highlight</Badge>
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
                      marginBottom: "10px",
                    }}
                    loading="lazy"
                    alt={item.title}
                  />
                  <Badge>Magento / Commerce</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardBody>{item.desc}</CardBody>
                </SoftCard>
              ))}
            </CardsGrid>
          </div>
        </Split>
      </Section>

      {/* ================================================================
          6) MAGENTO TEAM STATS
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Magento & Commerce Specialists</SectionTitle>
          <SectionSub>
            A focused team of Magento engineers, UX designers and solution
            architects working as an extension of your ecommerce team.
          </SectionSub>
        </SectionHeader>

        <StatStrip
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {[
            { icon: "🧑‍💻", end: 20, label: "Magento / Adobe Commerce Devs" },
            { icon: "🛍", end: 80, label: "Commerce Projects Delivered" },
            { icon: "🌍", end: 15, label: "Countries Our Stores Serve" },
            { icon: "📈", end: 50, label: "Average Perf. Gain (%)" },
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
          7) MAGENTO CAPABILITIES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Magento & Commerce Capabilities</SectionTitle>
          <SectionSub>
            Everything you need to move from “we have an online store” to “we
            have a high-performing commerce engine that keeps growing.”
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>End-to-End Magento Builds</CardTitle>
            <CardBody>
              Discovery, UX, development, QA and launch for new Magento or
              Adobe Commerce stores.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Theme & Component Systems</CardTitle>
            <CardBody>
              Reusable design systems and components so your team can launch
              campaigns quickly.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Headless & PWA Storefronts</CardTitle>
            <CardBody>
              React, Vue or Next.js frontends backed by Magento APIs for
              modern, app-like experiences.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Search, Merchandising & Content</CardTitle>
            <CardBody>
              Advanced search, recommendations, content blocks and promotions
              wired into your stack.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Order Management & Ops</CardTitle>
            <CardBody>
              Workflows for fulfilment, returns, inventory and multi-warehouse
              operations.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Analytics & Experimentation</CardTitle>
            <CardBody>
              Tracking, dashboards and A/B testing so decisions are driven by
              data, not guesses.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) WE ARE COMMERCE EXPERTS
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <SectionHeader>
          <SectionTitle>We Are Commerce & Growth Partners</SectionTitle>
          <SectionSub>
            Technology, UX and performance combined in one cross-functional team
            – from first line of code to long-term growth.
          </SectionSub>
        </SectionHeader>

        <StatStrip
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {[
            { icon: "💳", end: 120, label: "Payment & Logistics Integrations" },
            { icon: "📦", end: 500000, label: "Orders Processed / Month" },
            { icon: "⚡", end: 30, label: "Avg. Faster Page Loads (%)" },
            { icon: "📆", end: 10, label: "Years in Ecommerce" },
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
            Commerce experiences and Magento implementations recognised by
            clients, partners and ecosystems.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          10) MAGENTO DELIVERY PROCESS
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Magento Delivery Process</SectionTitle>
          <SectionSub>
            Transparent, iterative and growth-focused – so your team always
            knows what’s in flight and what’s next.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Discover & Prioritise</CardTitle>
            <CardBody>
              We map customer journeys, tech landscape and constraints, then
              prioritise roadmap items by impact.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>2. Experience & Architecture</CardTitle>
            <CardBody>
              UX, IA and system design across Magento, integrations, hosting and
              observability.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>3. Build & Integrate</CardTitle>
            <CardBody>
              Agile sprints to build storefronts, modules, APIs and workflows,
              integrated with your tools.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>4. Test & Harden</CardTitle>
            <CardBody>
              Functional, performance and security testing with load tests and
              launch rehearsals.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>5. Launch & Learn</CardTitle>
            <CardBody>
              SEO-aware go-live, monitoring and rapid fixes as real customers
              start using the store.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>6. Optimise & Grow</CardTitle>
            <CardBody>
              Ongoing CRO, UX and technical optimisation in partnership with
              your marketing and product teams.
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
          13) MAGENTO CASE STUDY SNAPSHOT
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Magento Case Study Snapshot</SectionTitle>
          <SectionSub>
            One of many stories where we rebuilt storefronts, optimised Magento
            performance and unlocked new revenue.
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
                fontWeight: 700,
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
              View Full Magento Case Study
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
              overflowY: "auto",
            }}
            onClick={closeCaseModal}
          >
            <div
              style={{
                width: "min(900px, 95%)",
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalData.img}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
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
                  What We Built
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#444" }}>
                  <li>Magento architecture and theme implementation</li>
                  <li>Performance optimisation & Core Web Vitals improvements</li>
                  <li>Checkout, payment and logistics integrations</li>
                  <li>Analytics, tracking and experimentation setup</li>
                  <li>Playbooks for launches and peak-season readiness</li>
                </ul>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  Results Achieved
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#444" }}>
                  <li>Higher conversion and repeat purchase rates</li>
                  <li>Faster, more stable experience under load</li>
                  <li>Happier customers and fewer support tickets</li>
                  <li>Clear foundation for future growth initiatives</li>
                </ul>

                <img
                  src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1200&q=50&fm=webp"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginTop: "20px",
                    objectFit: "cover",
                  }}
                  alt="Magento Storefront Detail"
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
                    cursor: "pointer",
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
            gap: "6px",
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
                transition: "0.2s",
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
          <SectionTitle>Need Clarity On Your Magento Roadmap?</SectionTitle>
          <SectionSub>
            Share where your store is today, and our team will help you design a
            pragmatic, step-by-step plan to reach your revenue and CX goals.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          15) RELATED COMMERCE SERVICES
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related Commerce & D2C Services</SectionTitle>
          <SectionSub>
            Plug our team into specific parts of your ecommerce stack, or let us
            own end-to-end storefront, performance and growth.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/magento.svg"
              alt="Magento"
            />
            <h4>Magento / Adobe Commerce</h4>
            <p>
              Custom builds, migrations, upgrades and optimisation for Magento
              and Adobe Commerce.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/graphql.svg"
              alt="GraphQL"
            />
            <h4>Headless Storefronts</h4>
            <p>
              API-first and GraphQL-powered frontends for blazing fast, modern
              shopping journeys.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg"
              alt="Stripe"
            />
            <h4>Payments & Subscriptions</h4>
            <p>
              Stripe, PayPal and local payment integrations, plus subscription
              setups for recurring revenue.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg"
              alt="Adobe"
            />
            <h4>Adobe Experience Cloud</h4>
            <p>
              Connecting Magento with Adobe tools for personalisation and
              marketing automation.
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
            Book a Call To Discuss Magento
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

export default MagentoPage;
