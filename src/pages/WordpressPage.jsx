// src/pages/WordpressPage.jsx
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
// Animated Stat Card
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
// MAIN WORDPRESS PAGE COMPONENT
// =====================================================================================
const WordpressPage = () => {
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
      tag: "SoftMaxs WordPress Studio",
      title: "High-performing WordPress sites that convert clicks into customers.",
      sub: "We design and engineer WordPress experiences that are fast, secure and built to scale with your business.",
    },
    {
      tag: "Custom Themes & Block Editor",
      title: "Pixel-perfect designs with a clean, manageable backend.",
      sub: "From Figma to WordPress, we create custom themes that your marketing team can control without touching code.",
    },
    {
      tag: "WooCommerce & Membership",
      title: "Sell products, subscriptions and access with confidence.",
      sub: "Conversion-focused WooCommerce stores, membership portals and funnels integrated with your tools.",
    },
    {
      tag: "Headless WordPress & APIs",
      title: "Headless architecture for modern frontends.",
      sub: "Use WordPress as a content hub while powering lightning-fast frontends with React, Next.js or Gatsby.",
    },
    {
      tag: "Performance, SEO & Security",
      title: "Core Web Vitals, technical SEO and peace-of-mind security.",
      sub: "We optimise your stack for speed, search visibility and protection against common threats.",
    },
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1512757776214-26d36777b513?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=60&fm=webp",
  ];

  const workItems = [
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60&fm=webp",
      title: "B2B Lead-Gen Website",
      desc: "High-converting WordPress site with tailored landing pages and integrated CRM workflows.",
    },
    {
      img: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=60&fm=webp",
      title: "WooCommerce Storefront",
      desc: "Conversion-optimised store with custom product pages, bundling and checkout optimisation.",
    },
    {
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=60&fm=webp",
      title: "Content Hub & Blog",
      desc: "SEO-ready content hub with flexible blocks for campaigns, resources and gated content.",
    },
  ];

  const caseSlides = [
    {
      title: "SaaSLaunch – B2B Marketing Site & Blog",
      body:
        "A SaaS brand needed a new marketing site that their growth team could control. We built a fully custom block-based theme with reusable sections and dynamic landing pages.",
      results: [
        "2.3x increase in demo requests in 4 months",
        "70+ landing pages built by marketing without dev help",
        "Sub-2 second load times across key pages",
        "Global design system synced with Figma",
      ],
      img:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=60&fm=webp",
    },
    {
      title: "ShopWave – Scalable WooCommerce Store",
      body:
        "A fast-growing D2C brand outgrew their DIY store. We replatformed them to a custom WooCommerce build tuned for AOV, repeat purchases and performance.",
      results: [
        "27% uplift in checkout conversion rate",
        "40% faster page loads on mobile",
        "Seamless integration with ERP, CRM & marketing tools",
        "Modular promo sections for campaigns",
      ],
      img:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=60&fm=webp",
    },
    {
      title: "InsightHub – Headless WordPress Content Platform",
      body:
        "A media company wanted modern frontends without losing the familiar WordPress editorial experience. We implemented a headless architecture with WordPress powering a React-based UI.",
      results: [
        "Next.js frontend with instant-page transitions",
        "Editors keep their familiar WordPress workflows",
        "API-first architecture ready for apps & microsites",
        "Core Web Vitals comfortably in the green",
      ],
      img:
        "https://images.unsplash.com/photo-1512757776214-26d36777b513?auto=format&fit=crop&w=1200&q=60&fm=webp",
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

  // Web3Forms submit (WordPress leads)
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
          "✅ Thank you! Our WordPress team will get back to you shortly."
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
          1) HERO + SLIDER + CONSULTANCY FORM (WORDPRESS)
      ================================================================ */}
      <HeroSection id="wordpress-hero" $bg={heroImages[slide]}>
        <HeroOverlay />

        <HeroLeft>
          <HeroTag>
            <span>🌀</span> WordPress, WooCommerce & Headless
          </HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>🎨 Custom Themes & Design Systems</Pill>
            <Pill>🧩 Gutenberg & Block Editor</Pill>
            <Pill>🛒 WooCommerce & Subscriptions</Pill>
            <Pill>⚡ Performance, SEO & Security</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button" onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              <span>Book a WordPress Strategy Call</span>
            </PrimaryBtn>

            {/* <GhostBtn type="button">
              <span>Explore WordPress Case Studies</span>
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
          <FormTitle>Tell us about your WordPress project.</FormTitle>
          <FormSub>
            Share a few details and our WordPress solution architect will respond
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
              value="New WordPress Development Consultation Lead - SoftMaxs"
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
                placeholder="SaaS / D2C / Agency / Media..."
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="site-type">What do you need?</Label>
              <Input
                id="site-type"
                name="scope"
                type="text"
                placeholder="New site / Redesign / WooCommerce / Maintenance…"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">Project Brief</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Share current site URL (if any), goals, timelines and key integrations…"
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Free WordPress Consultation →"}
            </SubmitBtn>

            <FormNote>
              100% confidential · NDA available on request · Platform-agnostic recommendations.
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
          2) PARTNER STRIP + WORDPRESS SERVICES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our WordPress Development Services</SectionTitle>
          <SectionSub>
            From custom themes and WooCommerce stores to headless builds and performance
            optimisation, SoftMaxs covers the full WordPress lifecycle.
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
          4) STRUGGLING WITH YOUR CURRENT WORDPRESS SITE?
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>
            Struggling With A Slow, Hard-To-Manage WordPress Site?
          </SectionTitle>
          <SectionSub>
            We turn cluttered, fragile WordPress sites into clean, modern experiences your team
            can confidently run and grow.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Custom Theme & UX Audits</CardTitle>
            <CardBody>
              Deep review of your current theme, plugins and UX to uncover technical debt,
              performance bottlenecks and UX friction.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Plugin & Architecture Strategy</CardTitle>
            <CardBody>
              Rationalise plugins, choose the right stack and define a maintainable site architecture.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Performance & Core Web Vitals</CardTitle>
            <CardBody>
              Caching, asset optimisation, CDNs and image strategies to keep pages fast worldwide.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Content & Landing Page Systems</CardTitle>
            <CardBody>
              Block-based layouts so marketing can spin up campaigns and landing pages in minutes.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>WooCommerce Optimisation</CardTitle>
            <CardBody>
              Checkout flows, product discovery and customer journeys tuned for conversions and LTV.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Security & Maintenance</CardTitle>
            <CardBody>
              Hardened setups, regular updates, monitoring and backup strategies for peace of mind.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          5) OUR WORK (WORDPRESS SHOWCASE)
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>WordPress Experience Snapshot</SectionTitle>
          <SectionSub>
            A glimpse into how SoftMaxs designs, builds and optimises WordPress sites for
            performance, flexibility and growth.
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
                <Badge>WordPress Highlight</Badge>
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
                  <Badge>WordPress / Web</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardBody>{item.desc}</CardBody>
                </SoftCard>
              ))}
            </CardsGrid>
          </div>
        </Split>
      </Section>

      {/* ================================================================
          6) WORDPRESS TEAM STATS
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Dedicated WordPress & WooCommerce Team</SectionTitle>
          <SectionSub>
            Designers, engineers and growth specialists working together as an extension of
            your in-house team.
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
            { icon: "👨‍💻", end: 30, label: "WordPress Engineers" },
            { icon: "🎨", end: 12, label: "UI/UX & Brand Designers" },
            { icon: "🛒", end: 80, label: "WooCommerce Stores Launched" },
            { icon: "🌍", end: 25, label: "Countries We Serve" },
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
          7) WORDPRESS CAPABILITIES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our WordPress Capabilities</SectionTitle>
          <SectionSub>
            Everything you need to go from “we have a site” to “we have a growth engine that
            our team can control.”
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Discovery & Experience Strategy</CardTitle>
            <CardBody>
              Workshops to align brand, content, funnels and KPIs before we write a single line
              of code.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Custom Theme Development</CardTitle>
            <CardBody>
              Bespoke themes built for speed, accessibility and maintainability with the block editor.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>WooCommerce & Payment Flows</CardTitle>
            <CardBody>
              Product setup, checkout optimisation and integrations with payment, shipping and tax tools.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Headless & API-First Setups</CardTitle>
            <CardBody>
              WordPress as a headless CMS powering modern frontends, apps and microsites.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>SEO & Analytics Foundations</CardTitle>
            <CardBody>
              Technical SEO, schema, tracking and experimentation frameworks baked in from day one.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Care, Support & Retainers</CardTitle>
            <CardBody>
              Ongoing improvements, A/B tests, new sections and updates rolled out safely each month.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) WHY SOFTMAXS FOR WORDPRESS
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <SectionHeader>
          <SectionTitle>We Are WordPress & Growth Partners</SectionTitle>
          <SectionSub>
            Not just site builders – we combine product thinking, conversion strategy and
            engineering discipline.
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
            { icon: "🚀", end: 150, label: "WordPress Projects Delivered" },
            { icon: "📈", end: 300, label: "Landing Pages Optimised" },
            { icon: "💼", end: 90, label: "Long-Term Client Partnerships" },
            { icon: "📆", end: 10, label: "Years Building on WordPress" },
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
            WordPress experiences and digital products recognised by clients, partners and
            industry ecosystems.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          10) WORDPRESS DELIVERY PROCESS
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our WordPress Delivery Process</SectionTitle>
          <SectionSub>
            Transparent, iterative and data-informed – so you always know what’s live now and
            what’s coming next.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Discover & Prioritise</CardTitle>
            <CardBody>
              We unpack brand, content, funnels and integrations, then prioritise the roadmap
              around impact and complexity.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>2. UX, UI & Architecture</CardTitle>
            <CardBody>
              Site maps, wireframes, visual design and technical architecture across theme,
              plugins and infrastructure.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>3. Build & Integrate</CardTitle>
            <CardBody>
              Theme and block development, plugin configuration, custom features and third-party
              integrations.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>4. Content & Launch Prep</CardTitle>
            <CardBody>
              Content migration, redirects, QA and launch checklists to ensure a smooth go-live.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>5. Optimise & Experiment</CardTitle>
            <CardBody>
              A/B testing, UX refinements and performance tuning based on real-world data.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>6. Run & Evolve</CardTitle>
            <CardBody>
              Ongoing support, feature rollouts and strategic reviews aligned with your growth
              goals.
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
          13) WORDPRESS CASE STUDY SNAPSHOT
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>WordPress Case Study Snapshot</SectionTitle>
          <SectionSub>
            One of many stories where we rebuilt a critical website into a fast, flexible
            growth platform.
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
              View Full WordPress Case Study
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
                  <li>Custom WordPress theme and design system</li>
                  <li>Flexible content blocks for landing pages</li>
                  <li>Performance, SEO and analytics foundations</li>
                  <li>Integrations with CRM, marketing and payment tools</li>
                  <li>Secure, scalable hosting architecture</li>
                </ul>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  Results Achieved
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#444" }}>
                  <li>Improved conversion and engagement across key pages</li>
                  <li>Marketing team can launch pages without dev bottlenecks</li>
                  <li>Noticeable gains in performance and SEO metrics</li>
                  <li>Foundation to quickly test and roll out new ideas</li>
                </ul>

                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=60&fm=webp"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginTop: "20px",
                    objectFit: "cover",
                  }}
                  alt="WordPress Experience Detail"
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
          <SectionTitle>Need Clarity On Your WordPress Roadmap?</SectionTitle>
          <SectionSub>
            Share where your site is today and where you&apos;re trying to go, and our team
            will help you design a pragmatic, step-by-step plan.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          15) RELATED WORDPRESS & DIGITAL SERVICES
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related WordPress & Digital Services</SectionTitle>
          <SectionSub>
            Plug our team into specific parts of your digital stack, or let us handle
            end-to-end strategy, design and development.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wordpress.svg"
              alt="WordPress"
            />
            <h4>Custom WordPress Themes</h4>
            <p>
              Design-driven themes tailored to your brand, built for performance and flexibility.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/woocommerce.svg"
              alt="WooCommerce"
            />
            <h4>WooCommerce Stores</h4>
            <p>
              Conversion-optimised WooCommerce setups with subscriptions, bundles and custom flows.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg"
              alt="Headless"
            />
            <h4>Headless & Jamstack</h4>
            <p>
              WordPress as a headless CMS powering React, Next.js or Gatsby frontends.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleanalytics.svg"
              alt="Analytics"
            />
            <h4>Analytics & CRO</h4>
            <p>
              Tracking, reporting and experimentation to keep your site aligned with growth goals.
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
            Book a Call To Discuss Your WordPress Site
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

export default WordpressPage;
