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
const PRIMARY = "#4f46e5";
const ACCENT = "#f59e0b";
const LIGHT_BG = "#f5f6ff";

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
   HERO + SLIDER + FORM
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
  cursor: pointer;

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
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 25px 55px rgba(15,23,42,0.14);
  position: relative;
  z-index: 2;
  animation: ${slideFade} 0.5s ease forwards;
  border: 1px solid #eef2ff;
`;

/* Improved hero form only */
const Input = styled.input`
  border: 1px solid #d1d5db;
  padding: 12px 14px;
  border-radius: 14px;
  font-size: 0.92rem;
  background: #f9fafb;
  transition: 0.2s;

  &:focus {
    border-color: ${PRIMARY};
    background: #fff;
    outline: none;
    box-shadow: 0 0 0 4px rgba(79,70,229,0.08);
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #d1d5db;
  padding: 12px 14px;
  border-radius: 14px;
  font-size: 0.92rem;
  min-height: 90px;
  background: #f9fafb;
  transition: 0.2s;

  &:focus {
    border-color: ${PRIMARY};
    background: #fff;
    outline: none;
    box-shadow: 0 0 0 4px rgba(79,70,229,0.08);
  }
`;

const SubmitBtn = styled.button`
  padding: 12px 16px;
  background: ${ACCENT};
  border-radius: 999px;
  border: none;
  font-weight: 700;
  margin-top: 8px;
  color: #fff;

  &:hover {
    background: #d48806;
  }
`;

const FormNote = styled.p`
  margin-top: 6px;
  font-size: 0.7rem;
  color: #9ca3af;
  text-align: center;
`;

/* ===================== SECTION SYSTEM ===================== */

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

/* --- Work image --- */
const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
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

  .inner {
    position: relative;
    z-index: 2;
  }
`;

const MockInner = styled.div`
  background: rgba(255,255,255,0.96);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 12px 32px rgba(15,23,42,0.08);
`;

/* --- Case study image --- */
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

/* --- Counter --- */
const StatStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 20px;
`;

const StatCard = styled.div`
  background: linear-gradient(to bottom right, #ffffff, #f0f6ff);
  border-radius: 18px;
  padding: 22px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
`;

const StatNumber = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${PRIMARY};
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #4b5563;
`;

/* --- Related services --- */
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

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(2,6,23,0.08);
  }

  img {
    width: 38px;
    height: 38px;
  }
`;

/* ===================================================================
   PAGE COMPONENT
=================================================================== */

const AIAutomationPage = () => {
  /* SLIDER */
  const [slide, setSlide] = useState(0);
  const slides = [
    {
      title: "Automate your business with AI-driven workflows.",
      sub: "From LLM automation to data pipelines, we build intelligent systems that reduce cost and boost efficiency.",
    },
    {
      title: "Custom AI Agents for Operations, Support & Sales.",
      sub: "Private, secure enterprise GPT agents for your processes.",
    },
    {
      title: "Predictive, Realtime & Data Science Automation.",
      sub: "ML pipelines, forecasting, anomaly detection, enterprise scale.",
    },
    {
      title: "Combine RPA with AI for high-impact automation.",
      sub: "Automate repetitive tasks with smart decision-making.",
    },
    {
      title: "AI-powered personalisation & conversions.",
      sub: "Recommendation engines, scoring models, analytics.",
    },
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&w=1600&q=60&fm=webp",
  ];

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  const current = slides[slide];

  /* FORM */
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData(e.target);
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
    } catch {
      setSuccessMsg("❌ Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* WORK PROJECTS */
  const workItems = [
    {
      img:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=60&fm=webp",
      title: "Intelligent Support Agent",
      desc: "LLM support assistant reducing response time by 60%.",
    },
    {
      img:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60&fm=webp",
      title: "Predictive Maintenance Pipeline",
      desc: "ML pipeline for early failure detection.",
    },
    {
      img:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=60&fm=webp",
      title: "Personalisation Engine",
      desc: "Real-time recommendations with +22% conversions.",
    },
  ];

  const [activeWork, setActiveWork] = useState(0);

  /* CASE STUDIES */
  const caseSlides = [
    {
      title: "AutoOps – RPA + LLM for Claims Processing",
      body:
        "LLM + RPA to auto-process claims, classify documents & route exceptions — reducing manual hours by 78%.",
      results: [
        "78% reduced manual process",
        "Faster SLA",
        "Lower cost",
        "Improved accuracy",
      ],
      img:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=60&fm=webp",
    },
    {
      title: "Insightify – Forecasting & Anomaly Detection",
      body:
        "Forecasting & anomaly detection for retail chain to predict stock-outs & surges.",
      results: [
        "34% fewer stock-outs",
        "+18% forecast accuracy",
        "Automated alerts",
      ],
      img:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60&fm=webp",
    },
    {
      title: "AgentX – Internal Knowledge GPT",
      body:
        "Secure private GPT trained on company docs for instant SOP/code search.",
      results: ["Faster onboarding", "Reduced switching", "Higher ticket deflection"],
      img:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=60&fm=webp",
    },
  ];

  const [cs, setCs] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCs((p) => (p + 1) % caseSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  /* MODAL */
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

  /* COUNTER COMPONENT */
  const Counter = ({ end, icon, label, delay = 0 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const duration = 1200;
      const inc = end / (duration / 16);

      const animate = () => {
        start += inc;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      const t = setTimeout(() => requestAnimationFrame(animate), delay);
      return () => clearTimeout(t);
    }, [end, delay]);

    return (
      <StatCard>
        <div style={{ fontSize: 28 }}>{icon}</div>
        <StatNumber>{count}+</StatNumber>
        <StatLabel>{label}</StatLabel>
      </StatCard>
    );
  };

  /* SCROLL HELP */
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* ===================================================================
     RENDER PAGE
  ==================================================================== */

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
            <PrimaryBtn onClick={() => (window.location.href = "/book-call")}>
              <FiPhoneCall /> Book 30-Min Call
            </PrimaryBtn>

            {/* <GhostBtn>Download AI Capabilities</GhostBtn> */}
          </CTAGroup>

          <SliderDots>
            {slides.map((_, idx) => (
              <Dot key={idx} $active={idx === slide} onClick={() => setSlide(idx)} />
            ))}
          </SliderDots>
        </HeroLeft>

        {/* HERO FORM */}
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

            {successMsg && (
              <p
                style={{
                  marginTop: 12,
                  color: "#0b8a36",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {successMsg}
              </p>
            )}
          </form>
        </HeroRight>
      </HeroSection>

      {/* PARTNER STRIP */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Trusted By Product & Operations Teams</SectionTitle>
          <SectionSub>
            Partners and clients who rely on our AI engineering and automation work.
          </SectionSub>
        </SectionHeader>

        <PartnerStrip />
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Testimonials />
      </Section>

      {/* IMPACT CARDS */}
      <Section>
        <SectionHeader>
          <SectionTitle>Where AI & Automation Deliver Biggest Impact</SectionTitle>
          <SectionSub>
            Practical, enterprise-ready automation that moves the needle.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Automated Support & Triage</CardTitle>
            <CardBody>LLM agents that ingest tickets and auto-suggest resolutions.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Intelligent Document Processing</CardTitle>
            <CardBody>Extract structured data from invoices, contracts & forms.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Predictive Operations</CardTitle>
            <CardBody>Forecasting, anomaly detection & incident prevention.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Personalisation & Recommendations</CardTitle>
            <CardBody>Real-time recommendations tuned for conversion lift.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Process Orchestration</CardTitle>
            <CardBody>LLM decisions + RPA for end-to-end workflows.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Data Ops & Pipelines</CardTitle>
            <CardBody>ML pipelines, feature stores & model lifecycle infrastructure.</CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* SELECTED AI PROJECTS */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Selected AI Projects</SectionTitle>
          <SectionSub>Enterprise-grade deployments built by our team.</SectionSub>
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
                {/* <PrimaryBtn
                  onClick={() =>
                    openCaseModal({
                      title: workItems[activeWork].title,
                      body: workItems[activeWork].desc,
                      results: ["Performance uplift", "Operational savings", "Improved CX"],
                      img: workItems[activeWork].img,
                    })
                  }
                >
                </PrimaryBtn> */}
              </div>
            </MockInner>
          </WorkImage>
        </Split>
      </Section>

      {/* CERTIFIED TEAMS */}
      <Section>
        <SectionHeader>
          <SectionTitle>Certified AI & Automation Teams</SectionTitle>
          <SectionSub>Data science, ML, RPA & MLOps experts.</SectionSub>
        </SectionHeader>

        <StatStrip>
          <Counter end={30} icon="👩‍💻" label="ML & Data Engineers" delay={100} />
          <Counter end={25} icon="🤖" label="RPA Engineers" delay={200} />
          <Counter end={40} icon="🧪" label="Model Experiments Run" delay={300} />
          <Counter end={12} icon="☁️" label="Cloud & MLOps Leads" delay={400} />
        </StatStrip>
      </Section>

      {/* CASE STUDY SNAPSHOT */}
      <Section>
        <SectionHeader>
          <SectionTitle>Case Study Snapshot</SectionTitle>
          <SectionSub>Real results from our automation work.</SectionSub>
        </SectionHeader>

        <Split>
          <div>
            <Badge>Case Study</Badge>
            <HeroTitle style={{ fontSize: "1.3rem", marginTop: 8 }}>
              {caseSlides[cs].title}
            </HeroTitle>
            <SectionSub style={{ marginTop: 6 }}>{caseSlides[cs].body}</SectionSub>

            <h4 style={{ marginTop: 16 }}>Results</h4>
            <List>
              {caseSlides[cs].results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </List>

            <PrimaryBtn onClick={() => openCaseModal(caseSlides[cs])} style={{ marginTop: 16 }}>
              View Full Case Study
            </PrimaryBtn>
          </div>

          <CaseImage style={{ backgroundImage: `url(${caseSlides[cs].img})` }}>
            <div className="overlay" />
          </CaseImage>
        </Split>

        <div style={{ textAlign: "center", marginTop: 18, display: "flex", justifyContent: "center", gap: 8 }}>
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
              }}
            />
          ))}
        </div>

        {/* MODAL */}
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
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "min(900px,95%)",
                background: "#fff",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <img
                src={modalData.img}
                alt={modalData.title}
                style={{ width: "100%", height: 320, objectFit: "cover" }}
              />
              <div style={{ padding: 20 }}>
                <h2>{modalData.title}</h2>
                <p style={{ marginTop: 8, color: "#444" }}>{modalData.body}</p>

                <h3 style={{ marginTop: 16 }}>What We Did</h3>
                <ul>
                  <li>Designed AI + automation system</li>
                  <li>Developed & deployed models</li>
                  <li>Monitoring + human-in-loop</li>
                </ul>

                <h3 style={{ marginTop: 12 }}>Results</h3>
                <ul>
                  {modalData.results.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>

                <div style={{ marginTop: 18 }}>
                  <PrimaryBtn onClick={closeCaseModal}>Close</PrimaryBtn>
                </div>
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* CONSULTATION FORM */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Need help scoping an AI project?</SectionTitle>
          <SectionSub>Share details — our AI architects will respond.</SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* RELATED SERVICES */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related AI & Automation Services</SectionTitle>
          <SectionSub>Choose what matches your roadmap.</SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tensorflow.svg" />
            <h4>Model Development</h4>
            <p>Prototyping to production-grade model delivery.</p>
          </ServiceCard>

          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pytorch.svg" />
            <h4>ML Engineering & MLOps</h4>
            <p>Feature stores, pipelines, model CI/CD.</p>
          </ServiceCard>

          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/robotframework.svg" />
            <h4>RPA & Orchestration</h4>
            <p>End-to-end automation with audit trails.</p>
          </ServiceCard>

          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" />
            <h4>LLM Agents</h4>
            <p>Private LLMs & secure agent automation.</p>
          </ServiceCard>
        </ServiceGrid>

        <div style={{ textAlign: "center", marginTop: 28 }}>
          <PrimaryBtn onClick={() => (window.location.href = "/book-call")}>
            <FiPhoneCall /> Book Architecture Call
          </PrimaryBtn>
        </div>
      </Section>

      <Section>
        <OfficeLocations />
      </Section>

      <Footer />
    </PageWrap>
  );
};

export default AIAutomationPage;
