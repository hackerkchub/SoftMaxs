// src/pages/CloudDevOpsPage.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiPhoneCall } from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Already existing components (reuse)
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
  background: rgba(15, 23, 42, 0.60);
  backdrop-filter: blur(3px);
`;

const HeroLeft = styled.div`
  position: relative;
  z-index: 1;
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
  background: rgba(0, 119, 255, 0.16);
  color: #e5f0ff;
  font-size: 0.8rem;
  font-weight: 600;
  width: fit-content;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.1rem, 3.1vw, 3rem);
  line-height: 1.1;
  font-weight: 800;
  color: #f9fafb;
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
  border: 1px solid rgba(148, 163, 184, 0.7);
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
    background: #005fcc;
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(0, 119, 255, 0.25);
  }
`;

const GhostBtn = styled.button`
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid rgba(209, 213, 219, 0.8);
  background: rgba(15, 23, 42, 0.75);
  color: #e5e7eb;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(31, 41, 55, 0.9);
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
  background: ${(p) => (p.$active ? PRIMARY : "#9ca3af")};
  cursor: pointer;
  transition: all 0.2s ease;
`;

// Right form
const HeroRight = styled.div`
  position: relative;
  z-index: 2;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.18);
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
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
    background: rgba(0, 0, 0, 0.2);
  }
`;

// Glass card on top of images
const Badge = styled.span`
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(59, 130, 246, 0.14);
  color: #1d4ed8;
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

// ---- Related Services ----
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

// =====================================================================================
// MAIN PAGE COMPONENT
// =====================================================================================
const CloudDevOpsPage = () => {
  const [slide, setSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const slides = [
    {
      tag: "SoftMaxs Cloud & DevOps Studio",
      title: "Reliable, scalable cloud infrastructure for modern teams.",
      sub: "Design, deploy and manage cloud platforms that keep your apps fast, secure and always-on."
    },
    {
      tag: "AWS • Azure • GCP • Kubernetes",
      title: "End-to-end DevOps pipelines that ship safely, faster.",
      sub: "CI/CD, infra-as-code and monitoring stitched together into one clean delivery pipeline."
    },
    {
      tag: "Cost, Performance & Uptime",
      title: "Optimise cloud costs without sacrificing reliability.",
      sub: "Rightsizing, autoscaling and optimisation that aligns cloud spend with real business value."
    },
    {
      tag: "Cloud-Native & Legacy Modernisation",
      title: "Migrate, modernise and future-proof your stack.",
      sub: "Containerisation, microservices, and cloud-native patterns for your existing applications."
    },
    {
      tag: "Security & Observability",
      title: "Security-first infrastructure with deep visibility.",
      sub: "Secure baselines, zero-trust patterns, logging, alerts and SRE practices baked into your stack."
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=60&fm=webp"
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
        setSuccessMsg("✅ Thank you! Our Cloud & DevOps team will contact you shortly.");
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
      <HeroSection id="cloud-devops-hero" $bg={heroImages[slide]}>
        <HeroOverlay />

        <HeroLeft>
          <HeroTag>
            <span>☁</span> Cloud &amp; DevOps Services
          </HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>☁ AWS · Azure · GCP</Pill>
            <Pill>⚙️ CI/CD &amp; Automation</Pill>
            <Pill>📊 Monitoring &amp; Observability</Pill>
            <Pill>🔐 Security &amp; Compliance</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button">
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              <span>Book a Cloud Strategy Call</span>
            </PrimaryBtn>

            <GhostBtn type="button">
              <span>Download Cloud Capabilities Deck</span>
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
          <FormTitle>Share your infra & DevOps challenges.</FormTitle>
          <FormSub>
            Fill the form and our cloud specialists will come back with a clear
            recommendation within 24 hours.
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
              value="New Cloud & DevOps Consultation - SoftMaxs"
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
              <Label htmlFor="company">Company / Product</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Startup / SaaS / Enterprise name"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="stack">Current Stack / Cloud</Label>
              <Input
                id="stack"
                name="stack"
                type="text"
                placeholder="AWS, Azure, On-prem, Hybrid, Not sure…"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">What do you want to fix or improve?</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Tell us about outages, costs, deployment pain or upcoming projects…"
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Infra Review →"}
            </SubmitBtn>

            <FormNote>
              No sales spam. Just a practical, 1:1 review of your cloud &amp; DevOps
              setup from the SoftMaxs team.
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
          2) PARTNER STRIP + SERVICES HEADING
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Cloud &amp; DevOps Services</SectionTitle>
          <SectionSub>
            From first cloud migration to global-scale, multi-region architectures, we
            help you design, build and operate resilient infrastructure.
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
          4) STRUGGLING SECTION
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Struggling To Keep Your Cloud Under Control?</SectionTitle>
          <SectionSub>
            Cloud bills going up, deployments taking too long or outages creeping in?
            We step in as your extended platform &amp; DevOps team.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Unpredictable Costs</CardTitle>
            <CardBody>
              We analyse usage, rightsize workloads and set up guardrails so your
              cloud spend stays healthy and predictable.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Slow Deployments</CardTitle>
            <CardBody>
              CI/CD pipelines, automated testing and one-click rollbacks so you can
              ship multiple times a day with confidence.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Infra Complexity</CardTitle>
            <CardBody>
              Infra-as-code with Terraform, CloudFormation and GitOps keeps your stack
              versioned, documented and reproducible.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Downtime &amp; Incidents</CardTitle>
            <CardBody>
              SRE practices, SLIs/SLOs and alerting that reduce firefighting and keep
              your uptime targets realistic.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Security &amp; Compliance</CardTitle>
            <CardBody>
              Secure baselines, policies and audits aligned with standards like ISO,
              SOC2 &amp; GDPR-friendly patterns.
            </CardBody>
          </SoftCard>
          <SoftCard $bg="#f3f6ff" $border="transparent">
            <CardTitle>Team Bandwidth</CardTitle>
            <CardBody>
              Dedicated pods that work alongside your devs so they focus on features
              while we handle infra and reliability.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          5) OUR WORK (image type)
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Our Cloud &amp; DevOps Work</SectionTitle>
          <SectionSub>
            A quick snapshot of brands SoftMaxs helped stabilise, scale and modernise
            with cloud-native infrastructure and DevOps practices.
          </SectionSub>
        </SectionHeader>

        {(() => {
          const workItems = [
            {
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "Global SaaS Platform",
              desc: "Multi-region architecture, zero-downtime deploys and autoscaling for traffic spikes."
            },
            {
              img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "Fintech Infrastructure",
              desc: "Hardened cloud setup, strict access controls and audited CI/CD workflows."
            },
            {
              img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "Legacy → Kubernetes",
              desc: "Containerisation, service mesh and observability stack for a monolith app."
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
                    alt={workItems[active].title}
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
                        alt={item.title}
                      />
                      <Badge>Cloud Case</Badge>
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
          <SectionTitle>Certified Cloud &amp; DevOps Experts</SectionTitle>
          <SectionSub>
            Engineers and architects with credentials across major cloud providers,
            containers, and security disciplines.
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
            { icon: "☁️", end: 25, label: "Cloud Architects & Engineers" },
            { icon: "⚙️", end: 20, label: "DevOps & Platform Engineers" },
            { icon: "🔐", end: 10, label: "Security & Compliance Specialists" },
            { icon: "📊", end: 8, label: "SRE / Observability Engineers" }
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

              const timeout = setTimeout(
                () => requestAnimationFrame(animate),
                i * 200
              );

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
          7) CLOUD & DEVOPS CAPABILITIES
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Cloud &amp; DevOps Capabilities</SectionTitle>
          <SectionSub>
            We combine infra-as-code, automation and observability into one
            opinionated blueprint that keeps your systems healthy.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Cloud Architecture &amp; Consulting</CardTitle>
            <CardBody>
              Assess, design and blueprint cloud architectures for scalability,
              fault tolerance and performance.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Infrastructure as Code</CardTitle>
            <CardBody>
              Terraform, CloudFormation, Pulumi and GitOps workflows that make infra
              repeatable and auditable.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>CI/CD Pipelines</CardTitle>
            <CardBody>
              Automated build, test and deployment pipelines with canary and blue-green
              strategies.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Container &amp; Kubernetes</CardTitle>
            <CardBody>
              Docker, Kubernetes, EKS/AKS/GKE and service meshes for cloud-native
              workloads.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Monitoring &amp; Observability</CardTitle>
            <CardBody>
              Metrics, logs, traces and dashboards using tools like Prometheus, Grafana
              &amp; OpenTelemetry.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>Managed DevOps &amp; SRE</CardTitle>
            <CardBody>
              Ongoing reliability engineering, incident response and performance tuning
              handled by our team.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) WE ARE EXPERTS
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <SectionHeader>
          <SectionTitle>We Are Cloud &amp; DevOps Experts</SectionTitle>
          <SectionSub>
            From early-stage products to high-traffic platforms, we’ve helped teams
            scale infra with confidence and control.
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
            { icon: "🚀", end: 120, label: "Cloud & DevOps Projects Delivered" },
            { icon: "🌍", end: 40, label: "Countries Served With Cloud Workloads" },
            { icon: "📦", end: 800, label: "CI/CD Pipelines & Deployments" },
            { icon: "📈", end: 12, label: "Years In Cloud & Infra" }
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

              const timeout = setTimeout(
                () => requestAnimationFrame(animate),
                i * 200
              );

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
      </Section>

      {/* ================================================================
          9) AWARDS & RECOGNITION COMPONENT
      ================================================================ */}
      <Section>
        <SectionHeader>
          <SectionTitle>Awards &amp; Recognition</SectionTitle>
          <SectionSub>
            Industry recognition, cloud partner badges and customer success stories
            that back our Cloud &amp; DevOps work.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          10) DELIVERY PROCESS
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Cloud &amp; DevOps Delivery Process</SectionTitle>
          <SectionSub>
            A clear, collaborative process from discovery to run-state operations that
            keeps your team in control.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Discovery &amp; Assessment</CardTitle>
            <CardBody>
              Deep-dive into your stack, bottlenecks, SLAs and constraints to map the
              current state and risks.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>2. Architecture Blueprint</CardTitle>
            <CardBody>
              Cloud reference architecture tailored to your business, workloads and
              growth roadmap.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>3. Implementation</CardTitle>
            <CardBody>
              Infra-as-code, pipelines, security and monitoring implemented across
              environments.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>4. Hardening &amp; Testing</CardTitle>
            <CardBody>
              Load tests, failover drills, security checks and performance tuning
              before going live.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>5. Go-Live</CardTitle>
            <CardBody>
              Controlled rollout, guardrails and observability tuned to catch issues
              early and safely.
            </CardBody>
          </SoftCard>
          <SoftCard>
            <CardTitle>6. Run &amp; Optimise</CardTitle>
            <CardBody>
              Ongoing SRE, cost optimisation and roadmap support as your product and
              traffic evolve.
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
          13) SUCCESS STORY SLIDER (Cloud flavored)
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Case Study Snapshot</SectionTitle>
          <SectionSub>
            One of many stories where we turned fragile legacy setups into reliable
            cloud platforms with predictable releases.
          </SectionSub>
        </SectionHeader>

        {(() => {
          const caseSlides = [
            {
              title: "SaaS Analytics Platform – From Outages to 99.95% Uptime",
              body:
                "A fast-growing analytics product was struggling with downtime during traffic spikes and slow manual deployments.",
              results: [
                "Re-architected on AWS with autoscaling &amp; RDS.",
                "CI/CD with canary releases for every microservice.",
                "Centralised logging and alerting for faster incident response.",
                "Cloud costs monitored and optimised with monthly reviews."
              ],
              img:
                "https://images.unsplash.com/photo-1517244864778-5ee2fda3db5e?auto=format&fit=crop&w=1200&q=50&fm=webp"
            },
            {
              title: "Fintech – Secure, Compliant Cloud Migration",
              body:
                "A regulated fintech needed to move off on-prem infra without disrupting transactions or compromising security.",
              results: [
                "Zero-downtime migration to encrypted cloud workloads.",
                "Hardened IAM, network segmentation and audit-ready logging.",
                "Automated backups and disaster recovery patterns.",
                "Improved deployment time from weekly to multiple times a day."
              ],
              img:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=50&fm=webp"
            },
            {
              title: "Media Streaming – Scaling For Primetime Traffic",
              body:
                "A content platform needed to handle unpredictable spikes when new shows dropped in multiple regions.",
              results: [
                "Multi-region setup with CDN and autoscaling groups.",
                "Latency reduced with edge caching and tuned databases.",
                "Blue-green deployments to avoid downtime during releases.",
                "Detailed dashboards for traffic, errors and capacity planning."
              ],
              img:
                "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=50&fm=webp"
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

          const slideData = caseSlides[cs];

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
                  <Badge>Cloud Case Study</Badge>
                  <HeroTitle
                    style={{ fontSize: "1.4rem", marginTop: "6px", color: "#111827" }}
                  >
                    {slideData.title}
                  </HeroTitle>
                  <SectionSub>{slideData.body}</SectionSub>

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
                    {slideData.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </List>

                  <PrimaryBtn
                    style={{ marginTop: "18px" }}
                    type="button"
                    onClick={() => openCaseModal(slideData)}
                  >
                    View Full Cloud Case Study
                  </PrimaryBtn>
                </div>

                <CaseImage style={{ backgroundImage: `url(${slideData.img})` }}>
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
                        <li>Cloud architecture redesign &amp; migration planning</li>
                        <li>Infrastructure as code and CI/CD pipelines</li>
                        <li>Monitoring, logging and alerting implementation</li>
                        <li>Security hardening and access governance</li>
                        <li>Performance and cost optimisation tuning</li>
                      </ul>

                      <h3 style={{ marginTop: "18px", fontWeight: "700" }}>
                        Results Achieved
                      </h3>

                      <ul style={{ paddingLeft: "20px", color: "#444" }}>
                        <li>Significant uptime and reliability improvement</li>
                        <li>Faster, safer releases with automated pipelines</li>
                        <li>Reduced infrastructure costs with better utilisation</li>
                        <li>Improved visibility into system health and issues</li>
                      </ul>

                      <img
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=50&fm=webp"
                        style={{
                          width: "100%",
                          borderRadius: "12px",
                          marginTop: "20px",
                          objectFit: "cover"
                        }}
                        alt="Cloud DevOps visual"
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
          14) COUNSULTATION FORM COMPONENT
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Not Sure Where To Start?</SectionTitle>
          <SectionSub>
            Share a few details and our Cloud &amp; DevOps consultants will suggest
            the safest, most practical path to modernising your infrastructure.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          15) RELATED SERVICES
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related Cloud &amp; DevOps Services</SectionTitle>
          <SectionSub>
            Pick the platform stack you’re on (or want to move to). Our teams are
            certified and experienced across these ecosystems.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg"
              alt="AWS"
            />
            <h4>AWS Cloud Engineering</h4>
            <p>Design, build and optimise workloads on Amazon Web Services.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftazure.svg"
              alt="Azure"
            />
            <h4>Microsoft Azure Solutions</h4>
            <p>Enterprise-ready Azure landing zones, governance and DevOps.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlecloud.svg"
              alt="Google Cloud"
            />
            <h4>Google Cloud Platform</h4>
            <p>Data-heavy, analytics and SaaS workloads on GCP.</p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kubernetes.svg"
              alt="Kubernetes"
            />
            <h4>Kubernetes &amp; Containers</h4>
            <p>Production-grade clusters, GitOps and service mesh setups.</p>
          </ServiceCard>
        </ServiceGrid>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <PrimaryBtn
            type="button"
            style={{ fontSize: "1rem", padding: "12px 26px" }}
          >
            <FiPhoneCall style={{ fontSize: "1.1rem" }} />
            Book a Call To Discuss Your Cloud Roadmap
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

export default CloudDevOpsPage;
