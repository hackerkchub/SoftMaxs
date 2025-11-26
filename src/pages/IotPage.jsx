// src/pages/IotPage.jsx
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
// MAIN IOT PAGE COMPONENT
// =====================================================================================
const IotPage = () => {
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
      tag: "SoftMaxs IoT & Edge Studio",
      title: "Connect devices, unlock data, automate decisions.",
      sub: "We design and build secure IoT platforms that stream real-time data from devices to dashboards, so you can act before problems happen.",
    },
    {
      tag: "Industrial & Enterprise IoT",
      title: "From sensors on the floor to insights in the boardroom.",
      sub: "Unify OT and IT data, monitor assets at scale and reduce downtime with intelligent alerting and predictive analytics.",
    },
    {
      tag: "Edge + Cloud Architecture",
      title: "Low-latency edge processing, cloud-level intelligence.",
      sub: "Process data at the edge, sync to cloud, and keep your operations resilient even with flaky connectivity.",
    },
    {
      tag: "IoT Platforms & Device Management",
      title: "Manage millions of devices with confidence.",
      sub: "Provision, update and monitor fleets of devices with secure, auditable workflows and open APIs.",
    },
    {
      tag: "Streaming & Analytics",
      title: "Turn raw telemetry into live, actionable insights.",
      sub: "Real-time pipelines, anomaly detection and alerting for factories, utilities, logistics and smart buildings.",
    },
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1505746728-3c687fd543c0?auto=format&fit=crop&w=1600&q=60&fm=webp",
  ];

  const workItems = [
    {
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Smart Factory Monitoring",
      desc: "Real-time OEE dashboards, machine health alerts and energy tracking across multiple plants.",
    },
    {
      img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Connected Fleet & Telematics",
      desc: "Live tracking, driver behaviour scoring and route optimisation for logistics and last-mile delivery.",
    },
    {
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=50&fm=webp",
      title: "Smart Energy & Buildings",
      desc: "Metering, occupancy sensing and HVAC optimisation to cut costs without hurting comfort.",
    },
  ];

  const caseSlides = [
    {
      title: "FleetSense – Connected Logistics Platform",
      body:
        "A logistics provider needed full visibility of vehicles, routes and cold-chain temperature in one place. We built a scalable IoT platform across devices, data pipelines and dashboards.",
      results: [
        "27% reduction in delayed deliveries",
        "40% drop in temperature-related spoilage incidents",
        "Single control panel for operations & customer support",
        "Modular platform for new sensor types",
      ],
      img:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=50&fm=webp",
    },
    {
      title: "GridIQ – Smart Energy Management Suite",
      body:
        "A multi-site enterprise wanted to cut energy spend and meet ESG goals. We connected meters, submeters and IoT sensors into a unified analytics layer.",
      results: [
        "Up to 18% energy savings in year one",
        "Live anomaly detection for leaks and spikes",
        "Automated monthly ESG & compliance reports",
        "Unified view of assets across regions",
      ],
      img:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=50&fm=webp",
    },
    {
      title: "ShopFloor AI – Predictive Maintenance for Machines",
      body:
        "A manufacturing client needed to move from reactive maintenance to predictive. We instrumented machines with IoT sensors and streaming analytics.",
      results: [
        "32% reduction in unplanned downtime",
        "Maintenance scheduled on condition, not guesswork",
        "Operators get simple, actionable alerts",
        "Historical dataset for continuous ML improvements",
      ],
      img:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=50&fm=webp",
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

  // Web3Forms submit (IoT leads)
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
          "✅ Thank you! Our IoT team will get back to you shortly."
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
          1) HERO + SLIDER + CONSULTANCY FORM (IOT)
      ================================================================ */}
      <HeroSection id="iot-hero" $bg={heroImages[slide]}>
        <HeroOverlay />

        <HeroLeft>
          <HeroTag>
            <span>📡</span> IoT, Edge & Connected Data
          </HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>🛰 Device & Sensor Connectivity</Pill>
            <Pill>⚙️ Edge & Gateway Engineering</Pill>
            <Pill>☁️ Cloud & Data Pipelines</Pill>
            <Pill>📊 Real-time Dashboards & Alerts</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button" onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              <span>Book an IoT Strategy Call</span>
            </PrimaryBtn>

            <GhostBtn type="button">
              <span>View IoT Case Studies</span>
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
          <FormTitle>Tell us about your IoT or data project.</FormTitle>
          <FormSub>
            Share a few details and our IoT solution architect will respond
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
              value="New IoT & Connected Data Consultation Lead - SoftMaxs"
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
              <Label htmlFor="company">Company / Business Unit</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Manufacturer / Logistics / Energy / Retail..."
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="scope">What are you trying to connect?</Label>
              <Input
                id="scope"
                name="scope"
                type="text"
                placeholder="Machines / Vehicles / Buildings / Devices…"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">Project Brief</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Share current state, goals, timelines and any existing platforms or devices…"
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Free IoT Consultation →"}
            </SubmitBtn>

            <FormNote>
              100% confidential · NDA available on request · Vendor-neutral
              recommendations.
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
          2) PARTNER STRIP + OUR IOT SERVICES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our IoT & Connected Data Services</SectionTitle>
          <SectionSub>
            From device connectivity and edge computing to cloud analytics and
            dashboards, SoftMaxs covers the full IoT lifecycle.
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
          4) STRUGGLING TO USE YOUR IOT DATA?
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>
            Struggling To Turn Sensor Data Into Real-World Impact?
          </SectionTitle>
          <SectionSub>
            Connecting devices is just the first step. We help you design
            reliable data flows, alerts and interfaces that teams actually use
            every day.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>IoT Architecture Audits</CardTitle>
            <CardBody>
              Deep reviews of your current IoT or telemetry stack to identify
              gaps, bottlenecks and security risks across devices, gateways and
              cloud.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Device & Protocol Strategy</CardTitle>
            <CardBody>
              Help choosing the right sensors, gateways, connectivity and
              protocols (MQTT, OPC UA, Modbus, LoRaWAN and more).
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Streaming Data Pipelines</CardTitle>
            <CardBody>
              Robust ingest, transformation and storage pipelines tuned for
              time-series and high-volume telemetry.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Operational Dashboards</CardTitle>
            <CardBody>
              Real-time dashboards and alerting for operations, maintenance and
              management teams in one unified view.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Edge & Offline Resilience</CardTitle>
            <CardBody>
              Edge processing, local buffering and sync strategies so your
              operations work even with spotty connectivity.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Security & Governance</CardTitle>
            <CardBody>
              Identity, access control, encryption and audit trails tuned to
              your industry and compliance needs.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          5) OUR WORK (IOT SHOWCASE)
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>IoT Platform & Analytics Snapshot</SectionTitle>
          <SectionSub>
            A glimpse into how SoftMaxs connects devices, cleans data and
            surfaces insights for teams across industries.
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
                <Badge>IoT Highlight</Badge>
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
                  <Badge>IoT / Data</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardBody>{item.desc}</CardBody>
                </SoftCard>
              ))}
            </CardsGrid>
          </div>
        </Split>
      </Section>

      {/* ================================================================
          6) IOT TEAM STATS
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>IoT, Edge & Data Specialists</SectionTitle>
          <SectionSub>
            A focused team of IoT engineers, data platform experts and solution
            architects working as an extension of your team.
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
            { icon: "📡", end: 25, label: "IoT & Edge Engineers" },
            { icon: "🧠", end: 14, label: "Data & Platform Architects" },
            { icon: "📶", end: 500, label: "Sites & Locations Connected" },
            { icon: "📈", end: 5, label: "Billion+ Events Processed Monthly" },
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
          7) IOT CAPABILITIES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our IoT & Data Capabilities</SectionTitle>
          <SectionSub>
            Everything you need to move from “we have devices and data” to “we
            have live insights and automation running in production.”
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Solution Discovery & Use-Cases</CardTitle>
            <CardBody>
              Workshops to prioritise IoT use-cases, success metrics and
              roll-out plans across plants, fleets or buildings.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Device Connectivity & Integration</CardTitle>
            <CardBody>
              Integrating sensors, PLCs, gateways and existing systems using
              IoT hubs, brokers and APIs.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Real-time Data Pipelines</CardTitle>
            <CardBody>
              Ingestion, stream processing and storage for telemetry, logs and
              events at scale.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Dashboards & Control Panels</CardTitle>
            <CardBody>
              Role-based dashboards for operations, maintenance and leadership
              with drill-downs and reports.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Alerts, Rules & Automation</CardTitle>
            <CardBody>
              Threshold alerts, anomaly detection and automated workflows that
              plug into your existing tools.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Security, Compliance & Scale</CardTitle>
            <CardBody>
              Identity, encryption, network design and governance to keep your
              IoT landscape safe as it grows.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) WE ARE IOT EXPERTS
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <SectionHeader>
          <SectionTitle>We Are IoT & Data Experts</SectionTitle>
          <SectionSub>
            Device engineering, cloud data platforms and business outcomes
            combined in one cross-functional team.
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
            { icon: "🚀", end: 80, label: "IoT Projects Delivered" },
            { icon: "🌐", end: 300, label: "Data Pipelines in Production" },
            { icon: "🏭", end: 150, label: "Industrial Assets Connected" },
            { icon: "📆", end: 10, label: "Years in IoT & Data" },
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
            IoT platforms and connected data initiatives recognised by clients,
            partners and industry ecosystems.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          10) IOT DELIVERY PROCESS
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our IoT Delivery Process</SectionTitle>
          <SectionSub>
            Transparent, vendor-neutral and iterative – so your team always
            knows what’s live today and what’s coming next.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Discover & Prioritise</CardTitle>
            <CardBody>
              We map stakeholders, assets, constraints and potential IoT
              use-cases, then prioritise based on impact and feasibility.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>2. Architecture & Device Plan</CardTitle>
            <CardBody>
              High-level architecture across devices, edge, cloud and data
              stores with security and scalability baked in.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>3. Pilot & MVP</CardTitle>
            <CardBody>
              Connect a subset of assets, build first dashboards and alerts, and
              validate ROI with real data.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>4. Platform Build-Out</CardTitle>
            <CardBody>
              Harden pipelines, onboard more devices and teams, and integrate
              with your existing tools and workflows.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>5. Scale & Optimise</CardTitle>
            <CardBody>
              Scale to new regions and use-cases, fine-tune alerts and
              dashboards, and introduce automation or ML where relevant.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>6. Run & Govern</CardTitle>
            <CardBody>
              Ongoing monitoring, support, security reviews and governance so
              your IoT landscape stays healthy long-term.
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
          13) IOT CASE STUDY SNAPSHOT
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>IoT Case Study Snapshot</SectionTitle>
          <SectionSub>
            One of many stories where we connected critical assets, unified
            telemetry and put live insights in front of the right teams.
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
              View Full IoT Case Study
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
                  <li>Device & gateway connectivity architecture</li>
                  <li>Secure data pipelines into cloud data stores</li>
                  <li>Role-based dashboards and alerting views</li>
                  <li>Edge processing for low-latency decisions</li>
                  <li>Integration with existing tools & workflows</li>
                </ul>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  Results Achieved
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#444" }}>
                  <li>Higher visibility across assets and sites</li>
                  <li>Drop in unplanned incidents and downtime</li>
                  <li>Faster, data-driven decision making</li>
                  <li>Foundation to roll out new IoT use-cases quickly</li>
                </ul>

                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=50&fm=webp"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginTop: "20px",
                    objectFit: "cover",
                  }}
                  alt="IoT Platform Detail"
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
          <SectionTitle>Need Clarity On Your IoT Roadmap?</SectionTitle>
          <SectionSub>
            Share where your devices and data are today, and our team will help
            you design a pragmatic, step-by-step IoT rollout plan.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          15) RELATED IOT & DATA SERVICES
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related IoT & Data Services</SectionTitle>
          <SectionSub>
            Plug our team into specific parts of your IoT stack, or let us
            handle end-to-end device, data and dashboard delivery.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg"
              alt="AWS IoT"
            />
            <h4>AWS / Azure IoT Platforms</h4>
            <p>
              Design and implementation of managed IoT services on AWS, Azure
              and Google Cloud.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mqtt.svg"
              alt="MQTT"
            />
            <h4>MQTT Brokers & Gateways</h4>
            <p>
              Highly available MQTT brokers, device identity and secure
              certificates at scale.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/influxdb.svg"
              alt="Time Series"
            />
            <h4>Time-Series Data Stores</h4>
            <p>
              Storage and querying strategies optimised for telemetry and
              time-series analytics.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/raspberrypi.svg"
              alt="Edge"
            />
            <h4>Edge & On-Prem Deployments</h4>
            <p>
              Edge runtimes, containers and sync strategies for factories and
              remote sites.
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
            Book a Call To Discuss Your IoT
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

export default IotPage;
