// src/pages/EcommercePage.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiPhoneCall } from "react-icons/fi";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Already existing components (names/path agar thode diff ho to adjust kar lena)
import PartnerStrip from "../components/PartnerStrip";
import Testimonials from "../components/Testimonials";
import OfficeLocations from "../components/OfficeLocations";
import AwardsRecognition from "../components/Awards&Recognition"; // Award&Recognization
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

// Slider small indicator
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
  padding: 0;        /* remove internal padding */
  margin: 0;
  display: block;

  @media (max-width: 768px) {
    padding: 0;
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

// For stat boxes
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

// For image-type split sections
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

// ---- Our Work image block ----
const WorkImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=40&fm=webp");
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
    background: rgba(15, 23, 42, 0.25);
    backdrop-filter: blur(3px);
  }

  @media (max-width: 768px) {
    min-height: 200px;
  }

  @media (max-width: 500px) {
    min-height: 170px;
  }
`;

// ---- Case Study image block ----
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
    background: rgba(0,0,0,0.15); /* ✅ very light dark overlay */
    backdrop-filter: none;        /* ✅ NO BLUR */
  }
`;

// Glass card on top of images
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

// ---- Related Services redesign ----
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
// MAIN PAGE COMPONENT
// =====================================================================================
const EcommercePage = () => {
  const [slide, setSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const slides = [
    {
      tag: "SoftMaxx eCommerce Studio",
      title: "Lightning-Fast, High-Converting eCommerce Websites.",
      sub: "Turn your online store into a revenue engine with performance-first design, conversion-focused UX, and enterprise-grade security."
    },
    {
      tag: "Headless, Shopify, WooCommerce & More",
      title: "Platform-agnostic builds tailored for your business.",
      sub: "We choose the right stack for you—no templates, no bloat. Just clean architecture and measurable outcomes."
    },
    {
      tag: "From Idea → Launch → Scale",
      title: "End-to-end eCommerce development & growth support.",
      sub: "Requirement analysis, UX, integrations, analytics, CRO and ongoing support. One team, full lifecycle."
    },
    {
      tag: "Global Brands, Local Mindset",
      title: "Commerce experiences your customers actually enjoy.",
      sub: "Pixel-perfect storefronts, smooth checkout, and 24/7 monitoring to keep every sale frictionless."
    },
    {
      tag: "Data-backed Decisions",
      title: "Built-in analytics & experimentation.",
      sub: "We wire your store with insights so you can test, learn and optimise every marketing rupee."
    }
  ];

  const heroImages = [
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1600&q=60&fm=webp",
  "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=60&fm=webp",
  "https://images.unsplash.com/photo-1556742400-b5b7c5121f05?auto=format&fit=crop&w=1600&q=60&fm=webp",
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=60&fm=webp",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=60&fm=webp"
];


  // Slider autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[slide];

  // Web3Forms submit
const [successMsg, setSuccessMsg] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  try {
    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setSuccessMsg("✅ Thank you! We will contact you soon.");
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

  return (
    <PageWrap>
      <Navbar />

      {/* ================================================================
          1) HERO + SLIDER + CONSULTANCY FORM
      ================================================================ */}
     <HeroSection id="ecommerce-hero" $bg={heroImages[slide]}>
  <HeroOverlay />

        <HeroLeft>
          <HeroTag>
            <span>⚡</span> eCommerce Development Services
          </HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>⚙️ Magento · Shopify · WooCommerce</Pill>
            <Pill>🚀 Performance & Core Web Vitals</Pill>
            <Pill>🔐 Secure Payments & Integrations</Pill>
            <Pill>📈 CRO & A/B Testing Ready</Pill>
          </HeroHighlights>

          <CTAGroup>
           <PrimaryBtn type="button">
  <FiPhoneCall style={{ fontSize: "1.1rem" }} />
  <span>Book a 30-Minute Call</span>
</PrimaryBtn>

            <GhostBtn type="button">
              <span>Download eCommerce Deck</span>
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
  <FormTitle>Please share details so we can discuss your project.</FormTitle>
  <FormSub>
    Fill the form and our eCommerce consultant will get back within 24 hours.
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
      value="New eCommerce Consultation Lead - SoftMaxx"
    />
    <input type="hidden" name="from_name" value="SoftMaxx Website" />

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
        placeholder="Brand / Store name"
      />
    </FieldGroup>

    <FieldGroup>
      <Label htmlFor="budget">Approx. Monthly Revenue / Budget</Label>
      <Input
        id="budget"
        name="budget"
        type="text"
        placeholder="₹5L–₹10L / Flexible / Not sure"
      />
    </FieldGroup>

    <FieldGroup>
      <Label htmlFor="message">Project Brief</Label>
      <TextArea
        id="message"
        name="message"
        placeholder="Tell us about your store, platform, timelines and goals…"
        required
      />
    </FieldGroup>

    <SubmitBtn type="submit" disabled={submitting}>
      {submitting ? "Sending..." : "Request Free Quote →"}
    </SubmitBtn>

    <FormNote>
      100% confidential · We sign NDA on request · No spam, ever.
    </FormNote>
    {successMsg && (
  <p style={{
    marginTop: "10px",
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#0b8a36",
    textAlign: "center"
  }}>
    {successMsg}
  </p>
)}

  </Form>
</HeroRight>

      </HeroSection>

      {/* ================================================================
          2) PARTNER STRIP + OUR SERVICES HEADING
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our eCommerce Services</SectionTitle>
          <SectionSub>
            From platform consulting to full-stack implementation and post-launch
            optimisation, SoftMaxx covers the complete eCommerce lifecycle.
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
          4) STRUGGLING TO STAND OUT? (6 cards)
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>
            Struggling To Stand Out In The Digital Marketplace?
          </SectionTitle>
          <SectionSub>
            Setting up a store is easy. Building a high-performing eCommerce business
            that actually grows with you is hard. We help you close that gap.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Quality Assurance</CardTitle>
            <CardBody>
              Rigorous QA processes, device lab testing and automated checks keep your
              store stable, fast and bug-free before and after launch.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Skilled Developers</CardTitle>
            <CardBody>
              A cross-functional team of eCommerce specialists: UX, front-end,
              back-end, DevOps and growth, all aligned to your KPIs.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Robust Architecture</CardTitle>
            <CardBody>
              Modern, scalable architecture with clean APIs, secure integrations and a
              future-ready tech stack.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>On-Time Delivery</CardTitle>
            <CardBody>
              Clear roadmaps, frequent demos and transparent communication ensure your
              launch dates are always realistic and achievable.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Flexible Engagement</CardTitle>
            <CardBody>
              Choose from fixed-scope projects, dedicated teams or hybrid models to
              match your stage and budget.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Complete Transparency</CardTitle>
            <CardBody>
              Detailed reporting, shared dashboards and open documentation so you never
              lose track of progress.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          5) OUR WORK (image type)
      ================================================================ */}
     <Section $bg="#f3f7ff">
  <SectionHeader>
    <SectionTitle>Our Work</SectionTitle>
    <SectionSub>
      A quick snapshot of brands SoftMaxx helped launch, redesign & scale with performance-driven eCommerce solutions.
    </SectionSub>
  </SectionHeader>

  {(() => {
    const workItems = [
      {
        img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=50&fm=webp",
        title: "Macmillan Publishers",
        desc: "Multi-store setup, high traffic handling & secure global checkout."
      },
      {
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=50&fm=webp",
        title: "Retail · D2C",
        desc: "Mobile-first storefront, improved conversion & repeat purchase boost."
      },
      {
        img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=50&fm=webp",
        title: "Optimisation + Migration",
        desc: "Performance uplift, UX redesign, SEO-safe migration & automation."
      }
    ];

    const [active, setActive] = React.useState(0);

    return (
      <Split>
        <WorkImageContainer>
             <WorkImage
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            minHeight: "260px"
          }}
        >
          <img
            key={active}
            src={workItems[active].img}
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
          />
        </WorkImage>
        </WorkImageContainer>
        <div>
          <CardsGrid>
            {workItems.map((item, i) => (
              <SoftCard
                key={i}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
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
                />
                <Badge>Client</Badge>
                <CardTitle>{item.title}</CardTitle>
                <CardBody>{item.desc}</CardBody>
              </SoftCard>
            ))}
          </CardsGrid>
        </div>
      </Split>
    );
  })()}
</Section>


      {/* ================================================================
          6) CERTIFIED EXPERTS
      ================================================================ */}
   <Section $bg="#ffffff">
  <SectionHeader>
    <SectionTitle>Certified Commerce Experts</SectionTitle>
    <SectionSub>
      A specialised team with deep experience across leading eCommerce platforms
      and supporting technologies.
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
      { icon: "🎓", end: 30, label: "Certified eCommerce Specialists" },
      { icon: "💻", end: 15, label: "Front-End & UI Engineering Experts" },
      { icon: "🏗️", end: 10, label: "Senior Solution Architects" },
      { icon: "☁️", end: 5, label: "Cloud & DevOps Specialists" },
    ].map((item, i) => {
      const [count, setCount] = React.useState(0);

      React.useEffect(() => {
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

        const timeout = setTimeout(() => requestAnimationFrame(animate), i * 200);

        return () => clearTimeout(timeout);
      }, []);

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
            transform: "translateY(0)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px) scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <span
            style={{
              fontSize: "32px",
              display: "block",
              marginBottom: "6px",
              opacity: 0,
              animation: "fadeScale 0.6s ease forwards",
              animationDelay: `${i * 0.15}s`,
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
          7) BACK-END CAPABILITIES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Back-End eCommerce Capabilities</SectionTitle>
          <SectionSub>
            Clean, secure and scalable back-end architecture that keeps your store
            running reliably while you focus on growth.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Expert eCommerce Consultation</CardTitle>
            <CardBody>
              We analyse your stack, business model and roadmap to recommend the right
              platform, integrations and architecture.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Custom Store Development</CardTitle>
            <CardBody>
              Bespoke features, workflows and admin tools built for your operations—
              not generic plugins.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Theme & UX Development</CardTitle>
            <CardBody>
              Fast, accessible and conversion-first front-end that looks great on every
              device and browser.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Extensions & Integrations</CardTitle>
            <CardBody>
              Payment gateways, ERPs, CRMs, marketing tools and logistics—wired
              together with stable, documented APIs.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Seamless Migrations</CardTitle>
            <CardBody>
              Zero-downtime re-platforming with SEO-safe redirects, data clean-up and
              integrity checks.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Support & Maintenance</CardTitle>
            <CardBody>
              Ongoing performance tuning, bug fixes, security patches and feature
              enhancements under structured SLAs.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) WE ARE EXPERTS
      ================================================================ */}
      <Section $bg={SOFT_BG}>
  <SectionHeader>
    <SectionTitle>We Are eCommerce Experts</SectionTitle>
    <SectionSub>
      Scale, uptime and growth—backed by teams who live and breathe digital
      commerce every day.
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
      { icon: "🚀", end: 80, label: "eCommerce Specialists" },
      { icon: "🛍️", end: 600, label: "Stores Designed & Built" },
      { icon: "🔗", end: 550, label: "Custom Integrations & Features" },
      { icon: "📈", end: 15, label: "Years In Commerce" },
    ].map((item, i) => {
      const [count, setCount] = React.useState(0);

      React.useEffect(() => {
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

        const timeout = setTimeout(() => requestAnimationFrame(animate), i * 200);

        return () => clearTimeout(timeout);
      }, []);

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
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px) scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <span
            style={{
              fontSize: "32px",
              display: "block",
              marginBottom: "6px",
              opacity: 0,
              animation: "fadeScale 0.6s ease forwards",
              animationDelay: `${i * 0.15}s`,
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
            Industry recognition and partner badges that validate the work we do for
            our clients.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          10) DEVELOPMENT PROCESS
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our eCommerce Development Process</SectionTitle>
          <SectionSub>
            A structured, transparent and collaborative process that keeps every
            stakeholder aligned from day one.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Requirement Analysis</CardTitle>
            <CardBody>
              Deep discovery sessions to understand your products, customers, tech
              constraints and growth goals.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>2. Designing</CardTitle>
            <CardBody>
              UX flows, wireframes and visual design systems that map perfectly to your
              brand and business model.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>3. Development</CardTitle>
            <CardBody>
              Agile sprints with frequent demos, incorporating feedback before it
              becomes expensive to change.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>4. Testing</CardTitle>
            <CardBody>
              Manual and automated testing across devices, browsers, edge cases and
              integrations.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>5. Deployment</CardTitle>
            <CardBody>
              Cloud-optimised deployments with CI/CD, monitoring and rollback plans.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>6. Optimisation</CardTitle>
            <CardBody>
              Post-launch analytics, heatmaps and A/B tests to continuously boost
              conversions and retention.
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
    13) SUCCESS STORY SLIDER
================================================================ */}
<Section $bg="#ffffff">
  <SectionHeader>
    <SectionTitle>Case Study Snapshot</SectionTitle>
    <SectionSub>
      One of many success stories where we turned complex requirements into
      simple customer journeys.
    </SectionSub>
  </SectionHeader>

  {(() => {
    const caseSlides = [
      {
        title: "AvecPlaisirs – Scaling a Gourmet Food Brand Online",
        body:
          "A ready-to-heat meals brand that needed an intuitive ordering experience, smart menu management and a robust subscription engine.",
        results: [
          "Launched on time and within budget.",
          "Improved checkout completion rate and repeat orders.",
          "Flexible CMS for quickly updating menus and offers.",
          "Foundation for long-term collaboration and growth."
        ],
        img:
          "https://images.unsplash.com/photo-1604908177213-5e66f7d30ef1?auto=format&fit=crop&w=1200&q=50&fm=webp"
      },
      {
        title: "UrbanKicks – D2C Footwear Brand Growth",
        body:
          "Focused on mobile-first UI, faster checkout and influencer marketing flows to increase conversions.",
        results: [
          "42% boost in mobile conversions",
          "Integrated COD + UPI + Wallet payments",
          "Automated order processing",
          "Streamlined influencer tracking"
        ],
        img:
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=50&fm=webp"
      },
      {
        title: "GlowEssentials – Beauty & Skincare Store",
        body:
          "Improved product storytelling, reviews integration and subscription model to scale recurring revenue.",
        results: [
          "118% increase in repeat customers",
          "Faster page loads",
          "SEO-driven product discovery",
          "Subscriptions boosted revenue"
        ],
        img:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=50&fm=webp"
      }
    ];

    const [cs, setCs] = React.useState(0);
    const [showCaseModal, setShowCaseModal] = React.useState(false);
    const [modalData, setModalData] = React.useState(null);

    React.useEffect(() => {
      const id = setInterval(() => {
        setCs((p) => (p + 1) % caseSlides.length);
      }, 6000);
      return () => clearInterval(id);
    }, []);

    const slide = caseSlides[cs];

    const openCaseModal = (data) => {
      setModalData(data);
      setShowCaseModal(true);
    };

    const closeCaseModal = () => {
      setShowCaseModal(false);
      setModalData(null);
    };

    return (
      <>
        <Split>
          <div>
            <Badge>Case Study</Badge>
            <HeroTitle style={{ fontSize: "1.4rem", marginTop: "6px" }}>
              {slide.title}
            </HeroTitle>
            <SectionSub>{slide.body}</SectionSub>

            <h4
              style={{
                marginTop: "16px",
                fontSize: "0.9rem",
                fontWeight: 700
              }}
            >
              Results
            </h4>

            <List>
              {slide.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </List>

            <PrimaryBtn
              style={{ marginTop: "18px" }}
              type="button"
              onClick={() => openCaseModal(slide)}
            >
              View Full Case Study
            </PrimaryBtn>
          </div>

          <CaseImage style={{ backgroundImage: `url(${slide.img})` }}>
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
                  <li>Full eCommerce platform migration</li>
                  <li>Custom UI/UX redesign</li>
                  <li>API-based subscription system</li>
                  <li>Payment gateway integration</li>
                  <li>Performance optimisation (LCP under 1.8s)</li>
                </ul>

                <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                  Results Achieved
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#444" }}>
                  <li>+65% conversion rate improvement</li>
                  <li>+120% returning customers</li>
                  <li>Reduced bounce rate by 45%</li>
                  <li>Order processing time reduced by 70%</li>
                </ul>

                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=50&fm=webp"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginTop: "20px",
                    objectFit: "cover"
                  }}
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
      </>
    );
  })()}
</Section>

      {/* ================================================================
          14) COUNSULATION FORM COMPONENT
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Still Not Sure Where To Start?</SectionTitle>
          <SectionSub>
            Share a few details and our consultants will suggest the best way to move
            your eCommerce plans forward.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          15) RELATED SERVICES (redesigned)
      ================================================================ */}
     <Section $bg="#f3f7ff">
  <SectionHeader>
    <SectionTitle>Related eCommerce Services</SectionTitle>
    <SectionSub>
      Choose the platform that fits your roadmap. Our certified teams deliver robust, scalable and high-performing commerce solutions.
    </SectionSub>
  </SectionHeader>

  <ServiceGrid>
    <ServiceCard>
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/magento.svg" alt="Magento" />
      <h4>Magento Development</h4>
      <p>Enterprise-grade custom stores & integrations.</p>
    </ServiceCard>

    <ServiceCard>
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg" alt="Shopify" />
      <h4>Shopify & Shopify Plus</h4>
      <p>High-conversion storefronts with custom features.</p>
    </ServiceCard>

    <ServiceCard>
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/bigcommerce.svg" alt="BigCommerce" />
      <h4>BigCommerce Solutions</h4>
      <p>Scalable SaaS commerce with API-driven builds.</p>
    </ServiceCard>

    <ServiceCard>
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/woocommerce.svg" alt="WooCommerce" />
      <h4>WooCommerce Customisation</h4>
      <p>Powerful WordPress-based eCommerce experiences.</p>
    </ServiceCard>
  </ServiceGrid>

  <div style={{ textAlign: "center", marginTop: "32px" }}>
   <PrimaryBtn type="button" style={{ fontSize: "1rem", padding: "12px 26px" }}>
  <FiPhoneCall style={{ fontSize: "1.1rem" }} />
  Book a Call To Discuss Platform Fit
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

export default EcommercePage;
