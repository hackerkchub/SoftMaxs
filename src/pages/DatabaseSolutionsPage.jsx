// src/pages/DatabaseSolutionsPage.jsx
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
const PRIMARY = "#0891b2";
const ACCENT = "#f97316";
const LIGHT_BG = "#f4faff";
const SOFT_BG = "#fff7ed";

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
  background: rgba(15, 23, 42, 0.6);
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
  background: rgba(8, 145, 178, 0.2);
  color: #cffafe;
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
  color: #e5e7eb;
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
    background: #0e7490;
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(8, 145, 178, 0.35);
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
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.35);
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
    box-shadow: 0 0 0 1px rgba(8, 145, 178, 0.15);
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
    box-shadow: 0 0 0 1px rgba(8, 145, 178, 0.15);
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
    background: #ea580c;
    transform: translateY(-1px);
    box-shadow: 0 12px 25px rgba(248, 113, 22, 0.3);
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
    background: radial-gradient(circle at top, rgba(8,145,178,0.3), transparent 60%);
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
      rgba(15, 23, 42, 0.85),
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
  background: rgba(8, 145, 178, 0.16);
  color: #06b6d4;
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
  background: #4c5ba0ee;
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
    box-shadow: 0 18px 35px rgba(105, 127, 174, 0.9);
    border-color: rgba(8, 145, 178, 0.7);
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
    color: #e5e7eb;
  }

  p {
    font-size: 0.82rem;
    color: #9ca3af;
  }
`;

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
          background: "linear-gradient(to bottom right, #fff7ed, #ffffff)",
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
// MAIN DATABASE SOLUTIONS PAGE COMPONENT
// =====================================================================================
const DatabaseSolutionsPage = () => {
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
      tag: "SoftMaxs Data Engineering",
      title: "Design databases that keep up with your product.",
      sub: "From MySQL schemas to MongoDB clusters, we help you design and operate data layers that scale with confidence."
    },
    {
      tag: "MySQL · PostgreSQL · MongoDB",
      title: "Performance-first database design for transactional workloads.",
      sub: "Indexes, query plans and schema design optimised for real-world traffic, not just benchmarks."
    },
    {
      tag: "Modernisation & Migrations",
      title: "Refactor legacy databases without breaking everything.",
      sub: "Zero or low-downtime migrations, sharding strategies and rollback plans engineered carefully."
    },
    {
      tag: "Observability & Reliability",
      title: "Know exactly how your data layer behaves in production.",
      sub: "Monitoring, slow query analysis, capacity planning and incident playbooks for your teams."
    },
    {
      tag: "Data For Product & Analytics",
      title: "Turn application data into a reliable foundation for analytics.",
      sub: "OLTP + OLAP strategies, CDC pipelines and data models that keep stakeholders aligned."
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1587202372775-98973d4a9078?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1587202372775-98973d4a9078?auto=format&fit=crop&w=1600&q=60&fm=webp"
  ];

  const workItems = [
    {
      img: "https://images.unsplash.com/photo-1587202372775-98973d4a9078?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Global MySQL Cluster Optimisation",
      desc: "Re-architected schemas, indexes and replication strategy to handle traffic spikes with headroom."
    },
    {
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "MongoDB For Real-Time Analytics",
      desc: "Designed collections and aggregation pipelines for fast user-facing analytics dashboards."
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Hybrid SQL + NoSQL Architecture",
      desc: "Right-sized relational and document stores for a large-scale SaaS platform."
    }
  ];

  const caseSlides = [
    {
      title: "RetailX – Scaling MySQL For Flash Sale Traffic",
      body:
        "A B2C e-commerce company was suffering from slow checkouts and lock contention during high-traffic campaigns.",
      results: [
        "Average checkout duration reduced significantly",
        "Painful table locks eliminated on critical flows",
        "Replication lag brought under control",
        "Clear capacity plan for future traffic growth"
      ],
      img:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=50&fm=webp"
    },
    {
      title: "InsightHub – MongoDB For Customer 360",
      body:
        "A SaaS company needed a unified view of events and customer profiles to power in-app insights.",
      results: [
        "Single source of truth for customer interactions",
        "Fast queries for time-window and segment analysis",
        "Well-documented schemas for multiple teams",
        "Clear governance for index and schema changes"
      ],
      img:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=50&fm=webp"
    },
    {
      title: "LegacyCore – Gradual Migration Without Downtime",
      body:
        "A legacy monolith with a massive MySQL instance needed to be split into services and modernised.",
      results: [
        "Zero-downtime data migration plan executed",
        "Reduced blast radius by service-aligned schemas",
        "Clear ownership between teams for data models",
        "Improved DX for engineers working with the database"
      ],
      img:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=50&fm=webp"
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

  // Web3Forms submit (Database leads)
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
        setSuccessMsg("✅ Thank you! Our database specialists will get back to you shortly.");
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
          1) HERO + SLIDER + CONSULTANCY FORM (DATABASE)
      ================================================================ */}
      <HeroSection id="database-hero" $bg={heroImages[slide]}>
        <HeroOverlay />

        <HeroLeft>
          <HeroTag>
            <span>🗄️</span> MySQL &amp; MongoDB Solutions
          </HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>🧱 MySQL Schema &amp; Query Tuning</Pill>
            <Pill>📂 MongoDB Modeling &amp; Aggregations</Pill>
            <Pill>🚀 Performance &amp; Scalability</Pill>
            <Pill>🔄 Migrations &amp; High Availability</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button" onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              <span>Book a 30-Minute Data Call</span>
            </PrimaryBtn>

            <GhostBtn type="button">
              <span>View Database Case Studies</span>
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
          <FormTitle>Tell us about your database challenges.</FormTitle>
          <FormSub>
            Share where performance, reliability or structure is breaking down.
            We’ll come back with a clear, practical plan.
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
              value="New Database Solutions Consultation Lead - SoftMaxs"
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
              <Label htmlFor="company">Company / Product Name</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Product / Startup / SaaS / Marketplace…"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="scope">What technologies are you using?</Label>
              <Input
                id="scope"
                name="scope"
                type="text"
                placeholder="MySQL, PostgreSQL, MongoDB, Redis…"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">What’s going wrong today?</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Slow queries, outages, schema sprawl, migrations, analytics gaps…"
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Database Consultation →"}
            </SubmitBtn>

            <FormNote>
              100% confidential · NDA available on request · No sales spam.
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
          2) PARTNER STRIP + OUR DATABASE SERVICES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Database &amp; Data Layer Services</SectionTitle>
          <SectionSub>
            From relational design to document modeling and performance tuning,
            SoftMaxs covers the full database lifecycle.
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
          4) STRUGGLING WITH DATABASE PERFORMANCE?
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>
            Slow Queries, Locking Issues Or Data That’s Hard To Trust?
          </SectionTitle>
          <SectionSub>
            We help you fix data foundations so your product can keep growing
            without firefighting every week.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f4f9ff" $border="transparent">
            <CardTitle>MySQL Schema Design</CardTitle>
            <CardBody>
              Normalised or right-sized schemas, foreign keys and indexing
              strategies tuned around your business workflows.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f4f9ff" $border="transparent">
            <CardTitle>MongoDB Document Modeling</CardTitle>
            <CardBody>
              Collection and document structures designed for your access
              patterns and aggregation pipelines.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f4f9ff" $border="transparent">
            <CardTitle>Query &amp; Index Tuning</CardTitle>
            <CardBody>
              Query plan reviews, index coverage, batching and caching to cut
              down response times and resource waste.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f4f9ff" $border="transparent">
            <CardTitle>High Availability &amp; Replication</CardTitle>
            <CardBody>
              Strategies for failover, replica management and read/write
              separation tuned to your SLAs.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f4f9ff" $border="transparent">
            <CardTitle>Migrations &amp; Refactors</CardTitle>
            <CardBody>
              Stepwise migration plans with validation, fallbacks and zero or
              low downtime windows.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f4f9ff" $border="transparent">
            <CardTitle>Data Governance &amp; Observability</CardTitle>
            <CardBody>
              Dashboards, alerts and processes so everyone knows who owns which
              data and how it behaves.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          5) OUR WORK (DATABASE SHOWCASE)
      ================================================================ */}
      <Section $bg="#020617">
        <SectionHeader>
          <SectionTitle style={{ color: "#f9fafb" }}>
            Database Work Snapshot
          </SectionTitle>
          <SectionSub style={{ color: "#9ca3af" }}>
            A glimpse into how SoftMaxs keeps mission-critical data layers
            fast, reliable and understandable.
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
                <Badge>Database Highlight</Badge>
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
                      i === activeWork ? "rgba(8,145,178,0.7)" : "#1f2933",
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
                  <Badge>Data</Badge>
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
          6) DATABASE TEAM STATS
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Database &amp; Data Platform Team</SectionTitle>
          <SectionSub>
            A pod of database engineers, SREs and data architects who’ve
            actually lived through production incidents.
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
            { icon: "🧑‍💻", end: 15, label: "Database &amp; Data Engineers" },
            { icon: "⚙️", end: 1200, label: "Queries Optimised in Production" },
            { icon: "🗄️", end: 300, label: "TB of Data Under Management" },
            { icon: "📈", end: 40, label: "Major Migrations Delivered" }
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
          7) DATABASE CAPABILITIES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Database Capabilities</SectionTitle>
          <SectionSub>
            Everything you need to move from fragile, ad-hoc databases to a
            robust data layer that engineers and stakeholders trust.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Relational Design (MySQL / PostgreSQL)</CardTitle>
            <CardBody>
              Schema modeling, keys, constraints and normalisation tuned for
              high-traffic transactional workloads.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>MongoDB Collection Design</CardTitle>
            <CardBody>
              Document design, embedding vs. referencing and aggregation
              pipeline patterns for your queries.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Read/Write Splits &amp; Replication</CardTitle>
            <CardBody>
              Primary/replica strategies, connection pooling and routing
              approaches for scaling traffic.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Backup, Restore &amp; DR</CardTitle>
            <CardBody>
              Backup cadences, retention policies, restore runbooks and
              disaster recovery drills.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Data Quality &amp; Governance</CardTitle>
            <CardBody>
              Processes, documentation and validation to keep schemas, events
              and pipelines aligned.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>OLTP → OLAP Bridges</CardTitle>
            <CardBody>
              Change data capture (CDC), warehouse loading and data models for
              analytics and reporting.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) WE ARE DATA LAYER EXPERTS
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <SectionHeader>
          <SectionTitle>We Treat Databases As Products, Not Afterthoughts</SectionTitle>
          <SectionSub>
            Engineering rigour, reliability thinking and cost awareness merged
            into one data platform team.
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
            { icon: "📊", end: 90, label: "Apps With Database Consulting" },
            { icon: "⏱️", end: 70, label: "Average Query Time Reduction" },
            { icon: "🧯", end: 50, label: "Major Incidents Prevented" },
            { icon: "📆", end: 10, label: "Years Running Databases" }
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
            Database modernisation and reliability work recognised by clients
            and partners across sectors.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          10) DATABASE PROCESS
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Database Engagement Process</SectionTitle>
          <SectionSub>
            No magic. Just a clear, methodical process that your engineering
            and product teams can follow along with.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Discovery &amp; Health Check</CardTitle>
            <CardBody>
              Review workloads, schemas, slow logs, incidents and business
              expectations for your data layer.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>2. Bottleneck &amp; Risk Mapping</CardTitle>
            <CardBody>
              Identify hotspots, single points of failure and issues blocking
              future evolution.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>3. Design &amp; Architecture Plan</CardTitle>
            <CardBody>
              Propose schema changes, index strategies, replication and
              monitoring improvements with clear trade-offs.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>4. Implementation &amp; Pairing</CardTitle>
            <CardBody>
              Work alongside your engineers to implement, test and roll out
              changes safely.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>5. Validation &amp; Benchmarking</CardTitle>
            <CardBody>
              Load tests, before/after metrics and sign-off so everyone is
              clear on impact.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>6. Runbooks &amp; Handover</CardTitle>
            <CardBody>
              Documentation, dashboards and playbooks so your team can operate
              confidently going forward.
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
          13) DATABASE CASE STUDY SNAPSHOT
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Database Case Study Snapshot</SectionTitle>
          <SectionSub>
            One of many stories where we turned a fragile database into a
            stable, scalable backbone for the business.
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
              View Full Database Case Study
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
                  What We Did
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#e5e7eb" }}>
                  <li>Deep health check on schemas, queries and infra</li>
                  <li>Refactored schema &amp; index strategy for key flows</li>
                  <li>Introduced monitoring &amp; alerting where missing</li>
                  <li>Wrote runbooks, migration and rollback plans</li>
                </ul>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  Results Achieved
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#e5e7eb" }}>
                  <li>Predictable performance during traffic spikes</li>
                  <li>Fewer production incidents and late-night pages</li>
                  <li>Faster shipping of new features touching data</li>
                  <li>Clear shared understanding of the data layer</li>
                </ul>

                <img
                  src="https://images.unsplash.com/photo-1587202372775-98973d4a9078?auto=format&fit=crop&w=1200&q=50&fm=webp"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginTop: "20px",
                    objectFit: "cover"
                  }}
                  alt="Database Detail"
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
          <SectionTitle>Need Help Planning Database Work?</SectionTitle>
          <SectionSub>
            Tell us where your product is today and where you want to go. We’ll
            help you prioritise database work that has the biggest impact.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          15) RELATED DATA SERVICES
      ================================================================ */}
      <Section $bg="#222639ff">
        <SectionHeader>
          <SectionTitle style={{ color: "#f9fafb" }}>
            Related Data &amp; Platform Services
          </SectionTitle>
          <SectionSub style={{ color: "#9ca3af" }}>
            Plug our team into a specific part of your data stack, or let us
            design the full end-to-end story.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mysql.svg"
              alt="MySQL"
            />
            <h4>MySQL &amp; PostgreSQL Tuning</h4>
            <p>
              Schema design, indexing and replication strategies for relational
              workloads.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mongodb.svg"
              alt="MongoDB"
            />
            <h4>MongoDB At Scale</h4>
            <p>
              Sharding, aggregation and reliability for document-heavy
              applications.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postgresql.svg"
              alt="PostgreSQL"
            />
            <h4>Data Warehousing</h4>
            <p>
              Connect app databases to warehouses and BI tools safely and
              reliably.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/redis.svg"
              alt="Redis"
            />
            <h4>Caching &amp; Performance</h4>
            <p>
              Redis, materialised views and other patterns to keep latency low.
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
            Book a Call To Discuss Databases
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

export default DatabaseSolutionsPage;
