// src/pages/PaidAdsPage.jsx
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

// COLORS
const PRIMARY = "#0A7BFF";
const ACCENT = "#ffb400";
const LIGHT_BG = "#f5f8ff";
const SOFT_BG = "#fff9e9";

// ANIMATIONS
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideFade = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

// PAGE WRAP
const PageWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  font-family: "Inter", sans-serif;
  color: #111827;
  overflow-x: hidden;
`;

// HERO
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
  background: rgba(10, 123, 255, 0.12);
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
    background: #0067d6;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(10,123,255,0.25);
  }
`;

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

// RIGHT FORM
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
    box-shadow: 0 0 0 1px rgba(10,123,255,0.15);
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
    box-shadow: 0 0 0 1px rgba(10,123,255,0.15);
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
`;

const FormNote = styled.p`
  margin-top: 6px;
  font-size: 0.7rem;
  color: #9ca3af;
`;

// UNIVERSAL SECTIONS
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

// GRID
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

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

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;

  @media(max-width: 1024px){
    grid-template-columns: 1fr;
  }
`;

const WorkImage = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 26px;
  min-height: 260px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(15,23,42,0.25);
  }
`;

const Badge = styled.span`
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(10,123,255,0.12);
  color: #084c9f;
  margin-bottom: 6px;
`;

// COMPONENT START
const PaidAdsPage = () => {
  const navigate = useNavigate();

  const [slide, setSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const slides = [
    {
      title: "Scale Faster with High-ROI Paid Ads.",
      sub: "Meta, Google, YouTube, LinkedIn — engineered to maximise ROAS at scale.",
    },
    {
      title: "Full-Funnel Paid Acquisition Engine.",
      sub: "Creative testing, targeting intelligence and funnel optimisation for predictable growth.",
    },
    {
      title: "Reduce CAC, Improve LTV.",
      sub: "Performance ads powered by data, automation and continuous experimentation.",
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&w=1600&q=60&fm=webp"
  ];

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  const current = slides[slide];

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
        setSuccessMsg("Thanks! We’ll reach out shortly.");
        e.target.reset();
      } else {
        setSuccessMsg("Something went wrong, try again.");
      }
    } catch (err) {
      setSuccessMsg("Network error, try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrap>
      <Navbar />

      {/* HERO */}
      <HeroSection $bg={heroImages[slide]}>
        <HeroOverlay />
        <HeroLeft>
          <HeroTag>🔥 Paid Ads Performance Studio</HeroTag>
          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>Meta Ads</Pill>
            <Pill>Google PPC</Pill>
            <Pill>YouTube Ads</Pill>
            <Pill>LinkedIn Ads</Pill>
            <Pill>Funnel Scaling</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              Book a FREE Growth Call
            </PrimaryBtn>
          </CTAGroup>

          <SliderDots>
            {slides.map((_, i) => (
              <Dot key={i} $active={i === slide} onClick={() => setSlide(i)} />
            ))}
          </SliderDots>
        </HeroLeft>

        {/* FORM */}
        <HeroRight>
          <FormTitle>Request Paid Ads Audit</FormTitle>
          <FormSub>We’ll analyse your current campaigns & improvement opportunities.</FormSub>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="9adfabce-a75b-4ab8-aea1-b79edaeeb7e0" />

            <FieldGroup>
              <Label>Name</Label>
              <Input name="name" required />
            </FieldGroup>

            <FieldGroup>
              <Label>Email</Label>
              <Input name="email" type="email" required />
            </FieldGroup>

            <FieldGroup>
              <Label>Brand / Company</Label>
              <Input name="company" />
            </FieldGroup>

            <FieldGroup>
              <Label>Monthly Ad Spend</Label>
              <Input name="spend" placeholder="₹50k – ₹25L" />
            </FieldGroup>

            <FieldGroup>
              <Label>Brief</Label>
              <TextArea name="message" required />
            </FieldGroup>

            <SubmitBtn type="submit">{submitting ? "Sending..." : "Request Audit →"}</SubmitBtn>

            <FormNote>We never spam. NDA available.</FormNote>

            {successMsg && (
              <p style={{ marginTop: 10, fontWeight: 600, color: "#0b8a36" }}>{successMsg}</p>
            )}
          </form>
        </HeroRight>
      </HeroSection>

      {/* PARTNERS */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Brands That Scale With Our Paid Ads</SectionTitle>
          <SectionSub>eCommerce, SaaS, D2C, EdTech & B2B companies.</SectionSub>
        </SectionHeader>
        <PartnerStrip />
      </Section>

      {/* CHALLENGES */}
      <Section>
        <SectionHeader>
          <SectionTitle>Are Your Ads Not Scaling?</SectionTitle>
          <SectionSub>We fix what most agencies ignore — signal, creative, funnels & LTV.</SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f2f6ff">
            <CardTitle>Low ROAS</CardTitle>
            <CardBody>Creative testing, targeting refinement & CPA reduction strategies.</CardBody>
          </SoftCard>

          <SoftCard $bg="#f2f6ff">
            <CardTitle>High CAC</CardTitle>
            <CardBody>Better segmentation, landing page optimisation & audience modelling.</CardBody>
          </SoftCard>

          <SoftCard $bg="#f2f6ff">
            <CardTitle>Weak Creatives</CardTitle>
            <CardBody>Winning hooks, angles, UGC scripts & motion-first storytelling.</CardBody>
          </SoftCard>

          <SoftCard $bg="#f2f6ff">
            <CardTitle>Broken Funnel</CardTitle>
            <CardBody>End-to-end journey optimisation across all platforms.</CardBody>
          </SoftCard>

          <SoftCard $bg="#f2f6ff">
            <CardTitle>No Scaling Strategy</CardTitle>
            <CardBody>Rule-based, manual & automated scaling frameworks.</CardBody>
          </SoftCard>

          <SoftCard $bg="#f2f6ff">
            <CardTitle>Poor Tracking</CardTitle>
            <CardBody>GA4, Pixel, Events, UTMs, attribution & conversion API fixes.</CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* WORK */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Paid Ads Work</SectionTitle>
          <SectionSub>High-performance campaigns across niches.</SectionSub>
        </SectionHeader>

        {(() => {
          const workItems = [
            {
              img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "D2C Skincare Brand",
              desc: "3.4× ROAS through creative testing & UGC funnels."
            },
            {
              img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1600&q=60&fm=webp",
              title: "EdTech Acquisition",
              desc: "CPL reduced by 38% using search+video blend."
            },
            {
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60&fm=webp",
              title: "SaaS Trial Campaign",
              desc: "Improved free-to-paid conversions with remarketing."
            }
          ];

          const [active, setActive] = React.useState(0);

          return (
            <Split>
              <div>
                <WorkImage style={{ backgroundImage: `url(${workItems[active].img})` }} />
              </div>

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
                        style={{ width: "100%", borderRadius: 12, marginBottom: 10 }}
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

      {/* CAPABILITIES */}
      <Section>
        <SectionHeader>
          <SectionTitle>Paid Ads Capabilities</SectionTitle>
          <SectionSub>Everything needed to scale profitably.</SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Creative Testing Engine</CardTitle>
            <CardBody>Hooks, angles, UGC, motion graphics & split testing.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Full-Funnel Strategy</CardTitle>
            <CardBody>Awareness → Consideration → Retargeting → Retention.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Media Buying</CardTitle>
            <CardBody>Meta, Google, YouTube, LinkedIn & programmatic.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Landing Pages</CardTitle>
            <CardBody>CRO, storytelling, speed & persuasion frameworks.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Analytics & Attribution</CardTitle>
            <CardBody>GA4, Pixel, CAPI, UTMs & multi-touch models.</CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Automation</CardTitle>
            <CardBody>Rule-based scaling, alerts, scripts and dashboards.</CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* HAPPY CUSTOMERS */}
      <FullWidthSection>
        <HappyCustomer />
      </FullWidthSection>

      {/* FAQ */}
      <Section $bg={SOFT_BG}>
        <Question />
      </Section>

      {/* CONSULTATION */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Ready To Scale Your Paid Ads?</SectionTitle>
          <SectionSub>Let’s build a predictable, profitable paid acquisition engine.</SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* RELATED SERVICES */}
      <Section $bg="#eef4ff">
        <SectionHeader>
          <SectionTitle>Related Services</SectionTitle>
          <SectionSub>We handle creative, strategy and execution end-to-end.</SectionSub>
        </SectionHeader>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <PrimaryBtn onClick={() => navigate("/book-call")}>
            <FiPhoneCall /> Book a Strategy Call
          </PrimaryBtn>
        </div>
      </Section>

      {/* FOOTER */}
      <Footer />
    </PageWrap>
  );
};

export default PaidAdsPage;
