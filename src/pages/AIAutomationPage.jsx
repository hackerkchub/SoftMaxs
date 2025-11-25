// src/pages/AIAutomationPage.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiPhoneCall } from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import PartnerStrip from "../components/PartnerStrip";
import Testimonials from "../components/Testimonials";
import OfficeLocations from "../components/OfficeLocations";
import AwardsRecognition from "../components/Awards&Recognition";
import HappyCustomer from "../components/HappyCustomers";
import Question from "../components/Question";
import CounsulationForm from "../components/CounsulationForm";

/* THEME */
const PRIMARY = "#4f46e5"; // AI Indigo
const ACCENT = "#f59e0b"; // Amber
const LIGHT_BG = "#f5f6ff";
const SOFT_BG = "#fdf7e8";

/* ANIMATIONS */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideFade = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

/* PAGE WRAPPER */
const PageWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  font-family: "Inter", sans-serif;
  color: #111827;
  overflow-x: hidden;
`;

/* ===================================================================
   SECTION 1: HERO + SLIDER + CONSULTATION FORM
=================================================================== */

const HeroSection = styled.section`
  width: 100%;
  padding: 80px 6% 60px;
  background-image: ${(p) => `url(${p.$bg})`};
  background-size: cover;
  background-position: center;
  position: relative;

  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(5px);
`;

const HeroLeft = styled.div`
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 0.6s ease forwards;
`;

const HeroTag = styled.span`
  background: rgba(79,70,229,0.12);
  padding: 6px 12px;
  border-radius: 999px;
  color: ${PRIMARY};
  font-weight: 600;
  font-size: 0.82rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 3vw, 3.1rem);
  font-weight: 800;
  margin-top: 10px;
`;

const HeroSub = styled.p`
  font-size: 1rem;
  max-width: 560px;
  color: #444;
  margin-top: 10px;
`;

const HeroHighlights = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Pill = styled.span`
  padding: 6px 12px;
  background: #fff;
  border-radius: 999px;
  border: 1px solid #e0e7ff;
  font-size: 0.8rem;
`;

const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

const PrimaryBtn = styled.button`
  padding: 10px 18px;
  background: ${PRIMARY};
  border: none;
  border-radius: 999px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #4338ca;
    transform: translateY(-1px);
  }
`;

const GhostBtn = styled.button`
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #fff;
  font-weight: 500;

  &:hover {
    background: #f9fafb;
  }
`;

const SliderDots = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 6px;
`;

const Dot = styled.button`
  width: ${(p) => (p.$active ? "18px" : "8px")};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${(p) => (p.$active ? PRIMARY : "#d1d5db")};
  transition: 0.25s;
`;

const HeroRight = styled.div`
  background: #fff;
  padding: 26px;
  border-radius: 24px;
  box-shadow: 0 20px 45px rgba(15,23,42,0.12);
  position: relative;
  z-index: 2;
  animation: ${slideFade} 0.5s ease forwards;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const FormNote = styled.p`
  margin-top: 6px;
  font-size: 0.7rem;
  color: #9ca3af;
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid #e5e7eb;
  padding: 9px 11px;
  border-radius: 12px;

  &:focus {
    border-color: ${PRIMARY};
    outline: none;
    box-shadow: 0 0 0 4px rgba(79,70,229,0.06);
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #e5e7eb;
  padding: 9px 11px;
  border-radius: 12px;
  min-height: 80px;
  resize: vertical;

  &:focus {
    border-color: ${PRIMARY};
    outline: none;
    box-shadow: 0 0 0 4px rgba(79,70,229,0.06);
  }
`;

const SubmitBtn = styled.button`
  padding: 12px 16px;
  background: ${ACCENT};
  border-radius: 999px;
  border: none;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #d48806;
  }
`;

/* ================================================================
   GENERIC SECTION WRAPPERS
================================================================ */

const Section = styled.section`
  padding: ${(p) => p.$py || "48px 6%"};
  background: ${(p) => p.$bg || "#fff"};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
`;

const SectionSub = styled.p`
  max-width: 600px;
  margin: 0 auto;
  color: #555;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const SoftCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 18px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 22px rgba(15,23,42,0.06);
`;

/* ----- Split / Work image + MockInner ----- */
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
    background: rgba(15, 23, 42, 0.12);
  }

  @media (max-width: 768px) {
    min-height: 200px;
  }

  .inner {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 620px;
  }
`;

const MockInner = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 620px;
  background: rgba(255,255,255,0.92);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 12px 32px rgba(15,23,42,0.08);
`;

/* ----- Case image block ----- */
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
    background: rgba(0,0,0,0.12);
  }
`;

/* ----- Small shared items ----- */
const Badge = styled.span`
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(79,70,229,0.08);
  color: ${PRIMARY};
  margin-bottom: 6px;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`;

const CardBody = styled.p`
  font-size: 0.85rem;
  color: #555;
`;

const List = styled.ul`
  margin: 10px 0 0;
  padding-left: 18px;
  font-size: 0.9rem;
  color: #444;

  li + li {
    margin-top: 6px;
  }
`;

/* ======= Stats / Counter styles ======= */
const StatStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 20px;
`;

const StatCard = styled.div`
  background: ${(p) => p.$bg || "#fff"};
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
  font-size: 0.9rem;
  color: #4b5563;
`;

/* ======= Related services grid ======= */
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
  box-shadow: 0 6px 18px rgba(2,6,23,0.04);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(2,6,23,0.08);
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

/* ================================================================
   BEGIN PAGE COMPONENT
================================================================ */

const AIAutomationPage = () => {
  const [slide, setSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  /* HERO SLIDES */
  const slides = [
    {
      tag: "AI Engineering & Automation",
      title: "Automate your business with AI-driven workflows.",
      sub: "From LLM automation to data pipelines, we build intelligent systems that reduce cost and boost efficiency.",
    },
    {
      tag: "LLM + GPT Solutions",
      title: "Custom AI Agents for Operations, Support & Sales.",
      sub: "We develop private, secure enterprise GPT agents tailored to your internal business processes.",
    },
    {
      tag: "Data Automation",
      title: "Predictive, Realtime & Data Science Automation.",
      sub: "ML pipelines, forecasting, anomaly detection and analytics — built for enterprise scale.",
    },
    {
      tag: "RPA + AI Fusion",
      title: "Combine RPA with AI for high-impact automation.",
      sub: "Automate repetitive tasks with smart decision-making using AI-enhanced bots.",
    },
    {
      tag: "AI for Growth",
      title: "AI-powered personalisation & conversions.",
      sub: "AI recommendation engines, scoring models & behaviour analytics that improve customer experience.",
    },
  ];

  /* HERO BACKGROUND IMAGES */
  const heroImages = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1581091012184-5c41de28434e?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&w=1600&q=60&fm=webp",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  // <-- important: define current so render can use it
  const current = slides[slide];

  /* ===================== form submit (Web3Forms) ===================== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData(e.target);
      // include access key & subject if not present in the form markup
      if (!formData.get("access_key")) {
        formData.append("access_key", "9adfabce-a75b-4ab8-aea1-b79edaeeb7e0");
      }
      if (!formData.get("subject")) {
        formData.append("subject", "New AI & Automation Lead - SoftMaxx");
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setSuccessMsg("✅ Thanks — our AI team will contact you within 24 hours.");
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

  /* ===================== Selected Projects (AI examples) ===================== */
  const workItems = [
    {
      img:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=60&fm=webp",
      title: "Intelligent Support Agent",
      desc: "Deployed an LLM-powered support assistant reducing time-to-first-response by 60%.",
    },
    {
      img:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60&fm=webp",
      title: "Predictive Maintenance Pipeline",
      desc: "End-to-end ML pipeline for early failure detection in industrial equipment.",
    },
    {
      img:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=60&fm=webp",
      title: "Personalisation Engine",
      desc: "Real-time recommendations & ranking that increased conversions by 22%.",
    },
  ];
  const [activeWork, setActiveWork] = useState(0);

  /* ===================== Case studies ===================== */
  const caseSlides = [
    {
      title: "AutoOps – RPA + LLM for Claims Processing",
      body:
        "We combined RPA with LLMs to auto-process claims, classify documents and route exceptions — reducing manual hours by 78%.",
      results: [
        "78% reduction in manual processing",
        "Faster SLA adherence",
        "Lower operational cost",
        "Improved accuracy via human-in-loop",
      ],
      img:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=60&fm=webp",
    },
    {
      title: "Insightify – Forecasting & Anomaly Detection",
      body:
        "Built forecasting models and anomaly detection for a retail chain to predict stock-outs and demand surges.",
      results: [
        "Reduced stock-outs by 34%",
        "Improved forecast accuracy (+18%)",
        "Automated alerts to merchandising teams",
      ],
      img:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60&fm=webp",
    },
    {
      title: "AgentX – Internal Knowledge GPT",
      body:
        "A secure, private GPT trained on company docs that helps employees find SOPs, code snippets and KB articles instantly.",
      results: ["Faster onboarding", "Reduced context-switching", "Higher internal ticket deflection"],
      img:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=60&fm=webp",
    },
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

  /* ===================== Counters (Certified Teams) ===================== */
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
          maxWidth: "220px",
        }}
      >
        <span style={{ fontSize: "28px", marginBottom: 8 }}>{icon}</span>
        <StatNumber>{count}+</StatNumber>
        <StatLabel>{label}</StatLabel>
      </StatCard>
    );
  };

  /* ===================== helper ===================== */
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* ===================== RENDER — remainder of page ===================== */
  return (
    <PageWrap>
      <Navbar />

      {/* HERO */}
      <HeroSection $bg={heroImages[slide]}>
        <HeroOverlay />
        <HeroLeft>
          <HeroTag>🔬 AI & Automation</HeroTag>
          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>🔗 LLM Agents</Pill>
            <Pill>🤖 RPA Integration</Pill>
            <Pill>📊 ML Pipelines</Pill>
            <Pill>🔐 Secure & Private</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button">
              <FiPhoneCall /> Book 30-Min Call
            </PrimaryBtn>
            <GhostBtn type="button">Download AI Capabilities</GhostBtn>
          </CTAGroup>

          <SliderDots>
            {slides.map((_, idx) => (
              <Dot key={idx} $active={idx === slide} onClick={() => setSlide(idx)} />
            ))}
          </SliderDots>
        </HeroLeft>

        <HeroRight>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="9adfabce-a75b-4ab8-aea1-b79edaeeb7e0" />
            <input type="hidden" name="subject" value="AI & Automation Lead - SoftMaxx" />
            <Input name="name" placeholder="Full name" required />
            <Input name="email" type="email" placeholder="you@company.com" required />
            <Input name="company" placeholder="Company" />
            <Input name="budget" placeholder="Monthly budget / ARR" />
            <TextArea name="message" placeholder="Tell us about the problem you want to solve" required />
            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Consultation →"}
            </SubmitBtn>
            <FormNote>We sign NDA on request • 100% confidential.</FormNote>
            {successMsg && <p style={{ marginTop: 12, color: "#0b8a36", fontWeight: 700, textAlign: "center" }}>{successMsg}</p>}
          </form>
        </HeroRight>
      </HeroSection>

      {/* PARTNER STRIP */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Trusted By Product & Operations Teams</SectionTitle>
          <SectionSub>Partners and clients who rely on our AI engineering and automation work.</SectionSub>
        </SectionHeader>

        <PartnerStrip />
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Testimonials />
      </Section>

      {/* CHALLENGES (AI use-cases) */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Where AI & Automation Deliver Biggest Impact</SectionTitle>
          <SectionSub>We help teams deploy practical AI that moves the needle — not just models for experiments.</SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Automated Support & Triage</CardTitle>
            <CardBody>LLM agents that ingest tickets, summarise issues and auto-suggest resolutions or escalate when needed.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Intelligent Document Processing</CardTitle>
            <CardBody>Parse invoices, contracts and forms with extraction models + RPA to update downstream systems.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Predictive Operations</CardTitle>
            <CardBody>Forecasting, anomaly detection & proactive alerts to prevent incidents and reduce downtime.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Personalisation & Recommendations</CardTitle>
            <CardBody>Real-time model-driven product and content recommendations tuned for conversion lift.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Process Orchestration</CardTitle>
            <CardBody>Combine LLM decisions with RPA to automate end-to-end business workflows with governance.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Data Ops & Pipelines</CardTitle>
            <CardBody>Production ML pipelines, feature stores and reliable data infra for repeatable model delivery.</CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* SELECTED PROJECTS */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Selected AI Projects</SectionTitle>
          <SectionSub>Examples of AI & automation solutions we've built for enterprise customers.</SectionSub>
        </SectionHeader>

        <Split>
          <div>
            <CardsGrid>
              {workItems.map((item, i) => (
                <SoftCard key={i} onMouseEnter={() => setActiveWork(i)} onClick={() => setActiveWork(i)} style={{ cursor: "pointer" }}>
                  <img src={item.img} alt={item.title} style={{ width: "100%", borderRadius: 12, marginBottom: 10 }} loading="lazy" />
                  <Badge>Project</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardBody>{item.desc}</CardBody>
                </SoftCard>
              ))}
            </CardsGrid>
          </div>

          <WorkImage style={{ backgroundImage: `url(${workItems[activeWork].img})` }}>
            <MockInner>
              <h3 style={{ margin: 0 }}>{workItems[activeWork].title}</h3>
              <p style={{ marginTop: 8, color: "#475569" }}>{workItems[activeWork].desc}</p>
              <div style={{ marginTop: 12 }}>
                <PrimaryBtn
                  onClick={() =>
                    openCaseModal({
                      title: workItems[activeWork].title,
                      body: workItems[activeWork].desc,
                      results: ["Performance uplift", "Operational savings", "Improved CX"],
                      img: workItems[activeWork].img,
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
          <SectionTitle>Certified AI & Automation Teams</SectionTitle>
          <SectionSub>Data scientists, ML engineers, DevOps and RPA specialists — all in one team.</SectionSub>
        </SectionHeader>

        <StatStrip style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 20 }}>
          <Counter end={30} icon="👩‍💻" label="ML & Data Engineers" delay={100} />
          <Counter end={25} icon="🤖" label="RPA & Automation Engineers" delay={200} />
          <Counter end={40} icon="🧪" label="Model Experiments Run" delay={300} />
          <Counter end={12} icon="☁️" label="Cloud & MLOps Leads" delay={400} />
        </StatStrip>
      </Section>

      {/* CASE STUDY SNAPSHOT */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Case Study Snapshot</SectionTitle>
          <SectionSub>Real outcomes — measurable improvements delivered by our AI teams.</SectionSub>
        </SectionHeader>

        <Split>
          <div>
            <Badge>Case Study</Badge>
            <HeroTitle style={{ fontSize: "1.3rem", marginTop: 8 }}>{caseSlides[cs].title}</HeroTitle>
            <SectionSub style={{ marginTop: 6 }}>{caseSlides[cs].body}</SectionSub>

            <h4 style={{ marginTop: 16, fontSize: "0.95rem", fontWeight: 700 }}>Results</h4>
            <List>{caseSlides[cs].results.map((r, i) => <li key={i}>{r}</li>)}</List>

            <PrimaryBtn style={{ marginTop: 16 }} onClick={() => openCaseModal(caseSlides[cs])}>
              View Full Case Study
            </PrimaryBtn>
          </div>

          <CaseImage style={{ backgroundImage: `url(${caseSlides[cs].img})` }}>
            <div className="overlay" />
          </CaseImage>
        </Split>

        {/* Case modal */}
        {showCaseModal && modalData && (
          <div
            onClick={closeCaseModal}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "40px 12px",
              overflowY: "auto",
            }}
          >
            <div onClick={(e) => e.stopPropagation()} style={{ width: "min(900px,95%)", background: "#fff", borderRadius: 12, overflow: "hidden" }}>
              <img src={modalData.img} alt={modalData.title} style={{ width: "100%", height: 320, objectFit: "cover" }} />
              <div style={{ padding: 20 }}>
                <h2 style={{ margin: 0 }}>{modalData.title}</h2>
                <p style={{ marginTop: 8, color: "#444" }}>{modalData.body}</p>

                <h3 style={{ marginTop: 16 }}>What We Did</h3>
                <ul>
                  <li>Designed the solution & data contracts</li>
                  <li>Built and deployed models to production</li>
                  <li>Instrumented monitoring & human-in-loop</li>
                </ul>

                <h3 style={{ marginTop: 12 }}>Results</h3>
                <ul>{modalData.results.map((r, idx) => <li key={idx}>{r}</li>)}</ul>

                <div style={{ marginTop: 18 }}>
                  <PrimaryBtn onClick={closeCaseModal}>Close</PrimaryBtn>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* pager dots */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 18, gap: 8 }}>
          {caseSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCs(i)}
              style={{
                width: cs === i ? 20 : 8,
                height: 8,
                borderRadius: 999,
                background: cs === i ? PRIMARY : "#d1d5db",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </Section>

      {/* CONSULTATION FORM */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Need help scoping an AI project?</SectionTitle>
          <SectionSub>Share a few details and our team will suggest the best technical approach.</SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* RELATED SERVICES */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related AI & Automation Services</SectionTitle>
          <SectionSub>Choose the capabilities that match your roadmap.</SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tensorflow.svg" alt="TensorFlow" />
            <h4>Model Development</h4>
            <p>From prototyping to production-grade models and versioned deployments.</p>
          </ServiceCard>

          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pytorch.svg" alt="PyTorch" />
            <h4>ML Engineering & MLOps</h4>
            <p>Feature stores, pipelines, CI for models & monitoring.</p>
          </ServiceCard>

          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/robotframework.svg" alt="RPA" />
            <h4>RPA & Orchestration</h4>
            <p>Automate repetitive workflows with robust orchestration & audits.</p>
          </ServiceCard>

          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" alt="LLM" />
            <h4>LLM Agents & Tools</h4>
            <p>Private LLMs, prompt engineering and secure agent frameworks.</p>
          </ServiceCard>
        </ServiceGrid>

        <div style={{ textAlign: "center", marginTop: 28 }}>
          <PrimaryBtn onClick={scrollToTop}>
            <FiPhoneCall /> Book Architecture Call
          </PrimaryBtn>
        </div>
      </Section>

      {/* OFFICE LOCATIONS + FOOTER */}
      <Section $py="40px 0">
        <OfficeLocations />
      </Section>

      <Footer />
    </PageWrap>
  );
};

export default AIAutomationPage;
