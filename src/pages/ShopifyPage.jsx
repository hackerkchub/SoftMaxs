// src/pages/ShopifyPage.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Reuse components
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

// PAGE WRAPPER
const PageWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  color: #111827;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
`;

// ======================================================================
// HERO SECTION (SHOPIFY)
// ======================================================================
const HeroSection = styled.section`
  width: 100%;
  padding: 80px 6% 60px;
  background-image: ${(p) => `url(${p.$bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 70px 4% 40px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4px);
`;

const HeroLeft = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeInUp} 0.6s ease forwards;
`;

const HeroTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 119, 255, 0.08);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.82rem;
  color: ${PRIMARY};
  font-weight: 600;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.1rem, 3.2vw, 3rem);
  font-weight: 800;
  color: #111;
`;

const HeroSub = styled.p`
  max-width: 520px;
  color: #4b5563;
`;

const Pill = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid #e5e7eb;
  font-size: 0.8rem;
`;

const HeroHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 10px;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 18px;
`;

const PrimaryBtn = styled.button`
  background: ${PRIMARY};
  padding: 10px 18px;
  color: #fff;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const GhostBtn = styled.button`
  background: #fff;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  cursor: pointer;
`;

// DOTS
const SliderDots = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 18px;
`;

const Dot = styled.button`
  width: ${(p) => (p.$active ? "18px" : "8px")};
  height: 8px;
  border-radius: 999px;
  background: ${(p) => (p.$active ? PRIMARY : "#d1d5db")};
  border: none;
  transition: 0.2s ease;
`;

// FORM PANEL
const HeroRight = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  position: relative;
  z-index: 2;
  animation: ${slideFade} 0.6s ease forwards;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
`;

const TextArea = styled.textarea`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  min-height: 90px;
`;

const SubmitBtn = styled.button`
  background: ${ACCENT};
  padding: 12px;
  border-radius: 999px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  margin-top: 6px;
`;

// ======================================================================
// GENERIC SECTIONS, CARDS, SPLIT LAYOUT, ETC.
// SAME STRUCTURE AS IOT PAGE (SHORTENED FOR SPACE)
// ======================================================================
const Section = styled.section`
  padding: ${(p) => p.$py || "48px 6%"};
  background: ${(p) => p.$bg || "#fff"};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
`;

const SectionSub = styled.p`
  max-width: 600px;
  margin: 0 auto;
  color: #6b7280;
`;

const CardsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const SoftCard = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`;

const CardBody = styled.p`
  font-size: 0.85rem;
  color: #555;
`;

// ======================================================================
// MAIN PAGE
// ======================================================================
const ShopifyPage = () => {
  const navigate = useNavigate();

  // HERO SLIDES
  const slides = [
    {
      tag: "SoftMaxs Shopify Studio",
      title: "High-conversion Shopify stores that grow with your brand.",
      sub: "Custom themes, headless storefronts, CRO and Shopify automation tuned for modern ecommerce.",
    },
    {
      tag: "Shopify Design & Development",
      title: "Beautiful, fast, scalable Shopify experiences.",
      sub: "We design pixel-perfect storefronts that increase conversions and elevate your brand online.",
    },
    {
      tag: "Shopify Plus & Enterprise",
      title: "Migration, automation & advanced workflows.",
      sub: "We help scale brands with Shopify Plus, API integrations and custom commerce logic.",
    },
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1600&q=60",
  ];

  const [slide, setSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((p) => (p + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = slides[slide];

  // FORM SUBMISSION (WEB3FORMS)
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
        setSuccessMsg("✅ Thank you! Our Shopify team will get back to you.");
        e.target.reset();
      } else setSuccessMsg("❌ Something went wrong.");
    } catch {
      setSuccessMsg("❌ Network error.");
    }
    setSubmitting(false);
  };

  return (
    <PageWrap>
      <Navbar />

      {/* HERO */}
      <HeroSection $bg={heroImages[slide]}>
        <HeroOverlay />

        <HeroLeft>
          <HeroTag>🛍 Shopify, eCommerce & Growth</HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>🎨 Custom Shopify Themes</Pill>
            <Pill>🧩 App Integrations</Pill>
            <Pill>⚡ Speed Optimisation</Pill>
            <Pill>🔄 Shopify Migrations</Pill>
            <Pill>🚀 Conversion Optimisation</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn onClick={() => navigate("/book-call")}>
              <FiPhoneCall /> Book Shopify Call
            </PrimaryBtn>

            <GhostBtn>View Shopify Case Studies</GhostBtn>
          </CTAGroup>

          <SliderDots>
            {slides.map((s, i) => (
              <Dot key={i} $active={i === slide} onClick={() => setSlide(i)} />
            ))}
          </SliderDots>
        </HeroLeft>

        {/* FORM */}
        <HeroRight>
          <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>
            Tell us about your Shopify project.
          </h3>
          <p style={{ fontSize: "0.85rem", marginBottom: "10px" }}>
            Our ecommerce consultant will get back to you within 24 hours.
          </p>

          <Form onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
            <input type="hidden" name="subject" value="New Shopify Lead" />

            <Label>Name</Label>
            <Input name="name" required placeholder="Your full name" />

            <Label>Email</Label>
            <Input name="email" required type="email" placeholder="you@brand.com" />

            <Label>Store / Business</Label>
            <Input name="company" placeholder="Brand, Startup, D2C…" />

            <Label>Project Details</Label>
            <TextArea name="message" required placeholder="New theme, redesign, Shopify Plus…" />

            <SubmitBtn disabled={submitting}>
              {submitting ? "Sending..." : "Request Consultation →"}
            </SubmitBtn>

            {successMsg && (
              <p style={{ marginTop: 8, fontWeight: 600 }}>{successMsg}</p>
            )}
          </Form>
        </HeroRight>
      </HeroSection>

      {/* PARTNER STRIP */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Shopify Expertise</SectionTitle>
          <SectionSub>
            Design, development, CRO and growth — everything for a thriving Shopify brand.
          </SectionSub>
        </SectionHeader>
        <PartnerStrip />
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeader>
          <SectionTitle>Shopify Services We Offer</SectionTitle>
          <SectionSub>End-to-end ecommerce engineering for scaling brands.</SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Custom Shopify Theme</CardTitle>
            <CardBody>
              Bespoke, lightning-fast themes designed for high conversion and brand identity.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Shopify App Integrations</CardTitle>
            <CardBody>
              Integrate CRMs, fulfilment, subscriptions, analytics and more.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Shopify Plus Solutions</CardTitle>
            <CardBody>
              Enterprise workflows, automation, scripts and advanced customisations.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Store Migration</CardTitle>
            <CardBody>
              Seamless migration from WooCommerce, Magento, OpenCart or custom stores.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Headless Shopify</CardTitle>
            <CardBody>
              Next.js, Hydrogen, Oxygen storefronts with API-driven commerce.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>CRO & Speed Optimisation</CardTitle>
            <CardBody>
              Improve site speed, UX, funnels and AOV for better revenue.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* TESTIMONIALS */}
      <Section $bg={LIGHT_BG}>
        <Testimonials />
      </Section>

      {/* CASE STUDY SNAPSHOT */}
      <Section>
        <SectionHeader>
          <SectionTitle>Shopify Case Study Snapshot</SectionTitle>
          <SectionSub>
            A quick look at how we build impactful ecommerce experiences.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Fashion D2C Brand</CardTitle>
            <CardBody>
              +38% conversion, +22% faster load, new theme + product storytelling.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Beauty & Skincare Store</CardTitle>
            <CardBody>
              Shopify Plus build with subscriptions, bundles and advanced analytics.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Gadgets & Electronics</CardTitle>
            <CardBody>
              Headless Shopify + blazing-fast React storefront for scale.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* HAPPY CUSTOMERS */}
      <Section $bg={SOFT_BG}>
        <HappyCustomer />
      </Section>

      {/* QUESTIONS */}
      <Section>
        <Question />
      </Section>

      {/* CONSULTATION FORM */}
      <Section $bg={LIGHT_BG}>
        <CounsulationForm />
      </Section>

      {/* OFFICE LOCATIONS */}
      <Section>
        <OfficeLocations />
      </Section>

      <Footer />
    </PageWrap>
  );
};

export default ShopifyPage;
