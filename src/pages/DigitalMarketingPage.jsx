// src/pages/DigitalMarketingPage.jsx
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

// THEME COLORS
// ----------------------------------------------
// THEME COLORS
// ----------------------------------------------
const PRIMARY = "#0077ff";
const ACCENT = "#ffb400";
const LIGHT_BG = "#f5f7ff";
const SOFT_BG = "#fdf7e8";

// ----------------------------------------------
// ANIMATIONS
// ----------------------------------------------
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideFade = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

// ----------------------------------------------
// PAGE WRAPPER
// ----------------------------------------------
const PageWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  font-family: "Inter", sans-serif;
  color: #111827;
  overflow-x: hidden;
`;

// ----------------------------------------------
// HERO SECTION
// ----------------------------------------------
const HeroSection = styled.section`
  width: 100%;
  padding: 80px 6% 60px;
  background-image: ${(p) => `url(${p.$bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 70px 4% 40px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(4px);
`;

// LEFT
const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  animation: ${fadeInUp} 0.6s ease forwards;
  position: relative;
  z-index: 2;
`;

const HeroTag = styled.span`
  display: inline-flex;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(0, 119, 255, 0.1);
  color: ${PRIMARY};
  font-weight: 600;
  font-size: 0.8rem;
  width: fit-content;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.1rem, 3.1vw, 3rem);
  line-height: 1.1;
  font-weight: 800;
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
`;

const Pill = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid #e5e7eb;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
`;

// BUTTONS
const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
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
  transition: 0.25s ease;

  &:hover {
    background: #005fcc;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 119, 255, 0.25);
  }
`;

const GhostBtn = styled.button`
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #fff;
  cursor: pointer;
  font-weight: 500;
  transition: 0.25s ease;

  &:hover {
    background: #f9fafb;
  }
`;

// SLIDER DOTS
const SliderDots = styled.div`
  display: flex;
  gap: 6px;
`;

const Dot = styled.button`
  width: ${(p) => (p.$active ? "18px" : "8px")};
  height: 8px;
  border-radius: 999px;
  background: ${(p) => (p.$active ? PRIMARY : "#d1d5db")};
  border: none;
  cursor: pointer;
  transition: 0.2s;
`;

// -------------------------------
// HERO FORM
// -------------------------------
const HeroRight = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  max-width: 420px;
  box-shadow: 0 20px 45px rgba(15,23,42,0.12);
  animation: ${slideFade} 0.5s ease forwards;
  z-index: 3;

  @media (max-width: 900px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
`;

const FormSub = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 14px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 9px 11px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  transition: 0.2s;

  &:focus {
    border-color: ${PRIMARY};
    box-shadow: 0 0 0 1px rgba(0,119,255,0.15);
  }
`;

const TextArea = styled.textarea`
  padding: 9px 11px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  min-height: 80px;
  transition: 0.2s;

  &:focus {
    border-color: ${PRIMARY};
    box-shadow: 0 0 0 1px rgba(0,119,255,0.15);
  }
`;

const SubmitBtn = styled.button`
  margin-top: 6px;
  padding: 10px 14px;
  border-radius: 999px;
  border: none;
  background: ${ACCENT};
  color: #111;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #e19a00;
  }
`;

const FormNote = styled.p`
  margin-top: 6px;
  font-size: 0.7rem;
  color: #9ca3af;
`;

// ----------------------------------------------
// GENERIC SECTIONS
// ----------------------------------------------
const Section = styled.section`
  padding: ${(p) => p.$py || "48px 6%"};
  background: ${(p) => p.$bg || "#ffffff"};

  @media(max-width: 768px){
    padding: 32px 4%;
  }
`;

const FullWidthSection = styled.section`
  width: 100%;
  padding: 0;
  margin: 0;
  background: #fff;
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
  max-width: 640px;
  margin: 0 auto;
  color: #6b7280;
  font-size: 0.9rem;
`;

// ----------------------------------------------
// CARD GRID + SOFT CARDS
// ----------------------------------------------
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media(max-width: 1024px){
    grid-template-columns: repeat(3,1fr);
  }
  @media(max-width: 768px){
    grid-template-columns: repeat(2,1fr);
  }
  @media(max-width: 520px){
    grid-template-columns: 1fr;
  }
`;

const SoftCard = styled.div`
  background: ${(p) => p.$bg || "#ffffff"};
  border-radius: 18px;
  padding: 18px 18px 16px;
  border: 1px solid ${(p) => p.$border || "#e5e7eb"};
  box-shadow: ${(p) => p.$shadow || "0 10px 24px rgba(15,23,42,0.05)"};
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

// ----------------------------------------------
// SPLIT SECTION (IMAGE + CONTENT)
// ----------------------------------------------
const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;

  @media(max-width: 1024px){
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const WorkImage = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 26px;
  padding: 18px;
  min-height: 260px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(15,23,42,0.25);
  }
`;

// ----------------------------------------------
// CASE STUDY IMAGE + CARD
// ----------------------------------------------
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
    background: rgba(0,0,0,0.15);
  }
`;

const Badge = styled.span`
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(255,180,0,0.12);
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

// ----------------------------------------------
// STATS (CERTIFIED EXPERTS)
// ----------------------------------------------
const StatStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
  gap: 16px;
`;

const StatCard = styled.div`
  background: ${(p) => p.$bg || "#ffffff"};
  border-radius: 18px;
  padding: 16px 14px;
  text-align: center;
  border: 1px solid ${(p) => p.$border || "transparent"};
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

// ----------------------------------------------
// RELATED SERVICES GRID
// ----------------------------------------------
const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 22px;

  @media(max-width: 992px){
    grid-template-columns: repeat(2,1fr);
  }

  @media(max-width: 520px){
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

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(0,0,0,0.12);
    border-color: #0077ff55;
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: contain;
  }

  h4 {
    margin-top: 8px;
    font-size: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 0.82rem;
    color: #555;
  }
`;
// ============================================================================================
// DIGITAL MARKETING PAGE COMPONENT
// ============================================================================================

const DigitalMarketingPage = () => {
  const [slide, setSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // ---------------- HERO SLIDES ----------------
  const slides = [
    {
      tag: "Digital Marketing Growth Studio",
      title: "Scale Faster with Data-Driven Digital Marketing.",
      sub: "Full-funnel SEO, Ads, Social Media and Automation engineered for conversions — not vanity metrics."
    },
    {
      tag: "Performance + Creative + Analytics",
      title: "ROI-Focused Paid Ads That Actually Scale.",
      sub: "Google Ads, Meta Ads, remarketing funnels and creative testing to maximise ROAS."
    },
    {
      tag: "SEO + Authority Building",
      title: "Rank Higher, Get Consistent Inbound Leads.",
      sub: "Advanced SEO, technical optimisation, content clusters and high-authority link building."
    },
    {
      tag: "Social Media & Creative Studio",
      title: "Build A Brand People Trust & Follow.",
      sub: "Reels, content calendars, storytelling and influencer partnerships."
    },
    {
      tag: "Automation & Analytics",
      title: "Make Every Marketing Rupee Work Harder.",
      sub: "GA4 dashboards, heatmaps, user journeys & automated sales funnels."
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&w=1600&q=60&fm=webp"
  ];

  // SLIDER AUTOPLAY
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = slides[slide];

  // ---------------- FORM SUBMIT (Web3Forms) ----------------
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
        setSuccessMsg("✅ Thanks! Our marketing strategist will contact you soon.");
        e.target.reset();
      } else {
        setSuccessMsg("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      setSuccessMsg("❌ Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <PageWrap>
      <Navbar />

      {/* ============================================================================================
          HERO 
      ============================================================================================ */}
      <HeroSection $bg={heroImages[slide]}>
        <HeroOverlay />

        {/* LEFT SIDE */}
        <HeroLeft>
          <HeroTag>⚡ Digital Marketing Services</HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>📈 SEO Strategy</Pill>
            <Pill>🚀 Meta + Google Ads</Pill>
            <Pill>🎬 Reels + Creative Studio</Pill>
            <Pill>📊 Analytics & Funnels</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button">
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              Book a FREE Strategy Call
            </PrimaryBtn>

            <GhostBtn type="button">Download Marketing Deck</GhostBtn>
          </CTAGroup>

          <SliderDots>
            {slides.map((_, i) => (
              <Dot key={i} $active={i === slide} onClick={() => setSlide(i)} />
            ))}
          </SliderDots>
        </HeroLeft>

        {/* RIGHT SIDE FORM */}
        <HeroRight>
          <FormTitle>Get a Free Marketing Audit</FormTitle>
          <FormSub>
            Share your details — we’ll analyse your brand, competitors and opportunities.
          </FormSub>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="9adfabce-a75b-4ab8-aea1-b79edaeeb7e0" />
            <input type="hidden" name="subject" value="New Digital Marketing Lead - SoftMaxx" />
            <input type="hidden" name="from_name" value="Digital Marketing Page" />

            <FieldGroup>
              <Label>Name</Label>
              <Input name="name" placeholder="Full name" required />
            </FieldGroup>

            <FieldGroup>
              <Label>Email</Label>
              <Input name="email" type="email" placeholder="you@company.com" required />
            </FieldGroup>

            <FieldGroup>
              <Label>Brand / Company</Label>
              <Input name="company" placeholder="Business name" />
            </FieldGroup>

            <FieldGroup>
              <Label>Monthly Budget</Label>
              <Input name="budget" placeholder="₹50k – ₹5L / Flexible" />
            </FieldGroup>

            <FieldGroup>
              <Label>Project Brief</Label>
              <TextArea name="message" placeholder="Tell us your goals…" required />
            </FieldGroup>

            <SubmitBtn type="submit">
              {submitting ? "Sending..." : "Request Audit →"}
            </SubmitBtn>

            <FormNote>Confidential · NDA on request · No spam</FormNote>

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
          </form>
        </HeroRight>
      </HeroSection>


      {/* ============================================================================================
          PARTNER STRIP 
      ============================================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Brands That Trust Our Digital Marketing</SectionTitle>
          <SectionSub>D2C, SaaS, creators, enterprises & fast-growing startups.</SectionSub>
        </SectionHeader>
        <PartnerStrip />
      </Section>


      {/* ============================================================================================
          TESTIMONIALS 
      ============================================================================================ */}
      <Section>
        <Testimonials />
      </Section>


      {/* ============================================================================================
          DIGITAL MARKETING CHALLENGES — 6 CARDS
      ============================================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Struggling To Stand Out Online?</SectionTitle>
          <SectionSub>
            Most brands run ads or post content — but few have a system that actually generates
            revenue. We help you fix that.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff">
            <CardTitle>Low Organic Visibility</CardTitle>
            <CardBody>
              Technical SEO, content clusters, keyword strategy and on-page optimisation.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>Poor Ad Performance</CardTitle>
            <CardBody>
              Full-funnel Meta + Google Ads with creative testing & ROAS-driven scaling.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>Weak Social Media Presence</CardTitle>
            <CardBody>
              Reels, carousels, brand storytelling and consistent content calendars.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>Brand Not Growing</CardTitle>
            <CardBody>
              Funnel strategy, remarketing, influencers and community building.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>No Repeat Customers</CardTitle>
            <CardBody>
              Email + WhatsApp automation, segmentation, retention flows.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>Confusing Analytics</CardTitle>
            <CardBody>
              GA4 dashboards, heatmaps, tracking fixes & CRO.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>


      {/* ============================================================================================
          OUR WORK — CAMPAIGN SHOWCASE
      ============================================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Our Marketing Work</SectionTitle>
          <SectionSub>
            High-impact campaigns across D2C, SaaS, personal brands and eCommerce.
          </SectionSub>
        </SectionHeader>

        {(() => {
          const workItems = [
            {
              img: "https://images.unsplash.com/photo-1551033406-c911a6aa8a66?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "D2C Fashion Brand",
              desc: "Scaled to 5× ROAS using Meta Ads + creative testing."
            },
            {
              img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "EdTech Lead Gen",
              desc: "Reduced CPL by 41% via landing page optimisation & Google Ads."
            },
            {
              img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "SaaS Growth Engine",
              desc: "SEO + paid search created a consistent inbound pipeline."
            }
          ];

          const [active, setActive] = React.useState(0);

          return (
            <Split>
              {/* IMAGE PREVIEW */}
              <div>
                <WorkImage>
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
                      opacity: 1
                    }}
                  />
                </WorkImage>
              </div>

              {/* CARDS */}
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
                      />

                      <Badge>Campaign</Badge>
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


      {/* ============================================================================================
          CERTIFIED DIGITAL MARKETING EXPERTS
      ============================================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Certified Marketing Experts</SectionTitle>
          <SectionSub>
            Specialists in SEO, Paid Ads, Content, Creative, Analytics & Automation.
          </SectionSub>
        </SectionHeader>

        <StatStrip>
          {[
            { icon: "📈", end: 25, label: "Performance Marketers" },
            { icon: "✍️", end: 18, label: "SEO & Content Experts" },
            { icon: "🎨", end: 12, label: "Creative Designers" },
            { icon: "📊", end: 8, label: "Analytics Specialists" }
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
                } else setCount(item.end);
              };

              const timeout = setTimeout(() => requestAnimationFrame(animate), i * 200);

              return () => clearTimeout(timeout);
            }, []);

            return (
              <StatCard
                key={i}
                style={{
                  background: "linear-gradient(to bottom right, #ffffff, #f0f6ff)",
                  boxShadow: "0 10px 26px rgba(0,0,0,0.06)",
                  padding: "24px",
                  borderRadius: "18px"
                }}
              >
                <span style={{ fontSize: "32px", marginBottom: 6 }}>{item.icon}</span>
                <StatNumber>{count}+</StatNumber>
                <StatLabel>{item.label}</StatLabel>
              </StatCard>
            );
          })}
        </StatStrip>
      </Section>
      {/* ================================================================
          7) MARKETING CAPABILITIES — BACK-END + STRATEGY
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Full-Stack Marketing Capabilities</SectionTitle>
          <SectionSub>
            Advanced tools, automations and strategies to grow consistently.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Advanced SEO Framework</CardTitle>
            <CardBody>
              Technical cleanup, schema, content clusters and authority link-building.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>High-Converting Paid Ads</CardTitle>
            <CardBody>
              Meta, Google, YouTube, remarketing — optimised for ROAS and LTV.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Content & Creative Engine</CardTitle>
            <CardBody>
              Reels, short-form, scripts, thumbnails, landing pages — produced to convert.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Marketing Automation</CardTitle>
            <CardBody>
              WhatsApp, email, CRM journeys, drip campaigns, segmentation and retention flows.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Analytics & CRO</CardTitle>
            <CardBody>
              GA4 dashboards, heatmaps, funnel analysis and A/B testing for measurable lift.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Brand & Story</CardTitle>
            <CardBody>
              Positioning, messaging, identity systems and long-form content to build authority.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          8) AWARDS & RECOGNITION
      ================================================================ */}
      <Section>
        <SectionHeader>
          <SectionTitle>Awards &amp; Recognition</SectionTitle>
          <SectionSub>
            Recognised by industry peers and partners for delivering measurable marketing outcomes.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* ================================================================
          9) PROCESS (6 steps)
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our Digital Marketing Process</SectionTitle>
          <SectionSub>
            A repeatable, data-driven process that aligns strategy, creative and execution to your business goals.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Discovery & Audit</CardTitle>
            <CardBody>
              Channel audits, competitor analysis and conversion research to identify quick wins.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>2. Strategy & Roadmap</CardTitle>
            <CardBody>
              Channel mix, creative plan and KPI roadmap tied to business outcomes.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>3. Creative Production</CardTitle>
            <CardBody>
              Scripts, motion, design and landing pages — produced for scale and split-tests.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>4. Campaign Build & Launch</CardTitle>
            <CardBody>
              Funnels, tags, tracking and experiments configured for clean signal and measurement.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>5. Optimization & Growth</CardTitle>
            <CardBody>
              Iterative optimisation via testing, segmentation and budget reallocation.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>6. Reporting & Governance</CardTitle>
            <CardBody>
              Weekly dashboards, playbooks and a growth backlog so improvements compound.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* ================================================================
          10) HAPPY CUSTOMERS (full width)
      ================================================================ */}
      <FullWidthSection>
        <HappyCustomer />
      </FullWidthSection>

      {/* ================================================================
          11) FAQ / QUESTION COMPONENT
      ================================================================ */}
      <Section $bg={SOFT_BG}>
        <Question />
      </Section>

      {/* ================================================================
          12) SUCCESS STORY SLIDER (CASE STUDIES) — with modal
      ================================================================ */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Success Story Snapshot</SectionTitle>
          <SectionSub>
            A few hand-picked results that demonstrate our approach and impact.
          </SectionSub>
        </SectionHeader>

        {(() => {
          const caseSlides = [
            {
              title: "FashionX – Performance Marketing for D2C",
              body:
                "A six-month performance program combining creative testing, funnel optimisation and lifecycle automation.",
              results: [
                "5× ROAS on new customer campaigns",
                "35% improvement in repeat purchase rate",
                "Integrated SMS + Email lifecycle flows"
              ],
              img:
                "https://images.unsplash.com/photo-1520975919411-9a6c6f7f8e23?auto=format&fit=crop&w=1200&q=50&fm=webp"
            },
            {
              title: "LearnGrow – Content + SEO for EdTech",
              body:
                "SEO-first content strategy, technical fixes and conversion-focused landing pages that increased organic signups.",
              results: [
                "Organic traffic +72% in 4 months",
                "Lead quality improved by 41%",
                "Lowered CPL by 33%"
              ],
              img:
                "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=50&fm=webp"
            },
            {
              title: "BizSaaS – Inbound & Paid Search",
              body:
                "Full-funnel paid search strategy combined with gated content and sales enablement to build a repeatable inbound engine.",
              results: [
                "Qualified pipeline growth +3×",
                "CPL reduced by 28%",
                "Improved demo-to-deal conversion"
              ],
              img:
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=50&fm=webp"
            }
          ];

          const [cs, setCs] = React.useState(0);
          const [showCaseModal, setShowCaseModal] = React.useState(false);
          const [modalData, setModalData] = React.useState(null);

          React.useEffect(() => {
            const id = setInterval(() => setCs((p) => (p + 1) % caseSlides.length), 6000);
            return () => clearInterval(id);
          }, []);

          const openCaseModal = (data) => {
            setModalData(data);
            setShowCaseModal(true);
          };

          const closeCaseModal = () => {
            setShowCaseModal(false);
            setModalData(null);
          };

          const slide = caseSlides[cs];

          return (
            <>
              <Split>
                <div>
                  <Badge>Case Study</Badge>
                  <HeroTitle style={{ fontSize: "1.3rem", marginTop: 8 }}>{slide.title}</HeroTitle>
                  <SectionSub style={{ marginTop: 6 }}>{slide.body}</SectionSub>

                  <h4 style={{ marginTop: 16, fontSize: "0.95rem", fontWeight: 700 }}>Results</h4>
                  <List>
                    {slide.results.map((r, i) => <li key={i}>{r}</li>)}
                  </List>

                  <PrimaryBtn style={{ marginTop: 16 }} onClick={() => openCaseModal(slide)}>
                    View Full Case Study
                  </PrimaryBtn>
                </div>

                <CaseImage style={{ backgroundImage: `url(${slide.img})` }}>
                  <div className="overlay" />
                </CaseImage>
              </Split>

              {showCaseModal && modalData && (
                <div
                  onClick={closeCaseModal}
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
                >
                  <div onClick={(e) => e.stopPropagation()} style={{ width: "min(900px,95%)", background: "#fff", borderRadius: 12, overflow: "hidden" }}>
                    <img src={modalData.img} alt={modalData.title} style={{ width: "100%", height: 320, objectFit: "cover" }} />
                    <div style={{ padding: 20 }}>
                      <h2 style={{ margin: 0 }}>{modalData.title}</h2>
                      <p style={{ marginTop: 8, color: "#444" }}>{modalData.body}</p>

                      <h3 style={{ marginTop: 12 }}>What We Did</h3>
                      <ul style={{ paddingLeft: 20 }}>
                        <li>Strategic planning & channel mix</li>
                        <li>Creative testing and scaling winners</li>
                        <li>Lifecycle automation and CRO</li>
                      </ul>

                      <h3 style={{ marginTop: 12 }}>Results</h3>
                      <ul style={{ paddingLeft: 20 }}>
                        {modalData.results.map((r, idx) => <li key={idx}>{r}</li>)}
                      </ul>

                      <div style={{ marginTop: 18 }}>
                        <PrimaryBtn onClick={closeCaseModal}>Close</PrimaryBtn>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "center", marginTop: 18, gap: 8 }}>
                {caseSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCs(i)}
                    style={{
                      width: cs === i ? 20 : 8,
                      height: 8,
                      borderRadius: 999,
                      border: "none",
                      background: cs === i ? PRIMARY : "#d1d5db",
                      cursor: "pointer"
                    }}
                  />
                ))}
              </div>
            </>
          );
        })()}
      </Section>

      {/* ================================================================
          13) CONSULTATION (component)
      ================================================================ */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Ready To Grow?</SectionTitle>
          <SectionSub>
            Tell us about your goals — paid, organic or both — and we’ll suggest a growth plan.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* ================================================================
          14) RELATED SERVICES
      ================================================================ */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related Services</SectionTitle>
          <SectionSub>
            We operate as a full-stack partner — strategy, creative and execution all in-house.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" alt="Search" />
            <h4>Search & SEO</h4>
            <p>Technical SEO, content strategy and authority building to grow sustainable organic traffic.</p>
          </ServiceCard>

          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Paid" />
            <h4>Paid Advertising</h4>
            <p>Meta, Google, YouTube & programmatic — optimised for ROAS and lifetime value.</p>
          </ServiceCard>

          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Social" />
            <h4>Social Media</h4>
            <p>Creative-first content, community building and influencer collaborations.</p>
          </ServiceCard>

          <ServiceCard>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg" alt="Brand" />
            <h4>Brand & Creative</h4>
            <p>Brand identity, story frameworks and campaign creative that converts.</p>
          </ServiceCard>
        </ServiceGrid>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <PrimaryBtn type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <FiPhoneCall style={{ fontSize: "1.1rem" }} /> Book a Strategy Call
          </PrimaryBtn>
        </div>
      </Section>

      {/* ================================================================
          15) OFFICE LOCATIONS + FOOTER
      ================================================================ */}
      <Section $py="40px 0">
        <OfficeLocations />
      </Section>

      <Footer />
    </PageWrap>
  );
}

export default DigitalMarketingPage;
