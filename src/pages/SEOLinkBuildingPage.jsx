// src/pages/SEOLinkBuildingPage.jsx
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

// THEME COLORS
const PRIMARY = "#0077ff";
const ACCENT = "#ffb400";
const LIGHT_BG = "#f5f7ff";
const SOFT_BG = "#fdf7e8";

// ANIMATIONS
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
  font-family: "Inter", sans-serif;
  color: #111827;
  overflow-x: hidden;
`;

// HERO SECTION
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
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4px);
`;

// LEFT HERO
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

// CTA BUTTONS
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

// HERO FORM
const HeroRight = styled.div`
  background: #ffffffee;
  border-radius: 24px;
  padding: 24px;
  max-width: 420px;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  animation: ${slideFade} 0.5s ease forwards;
  z-index: 3;
  backdrop-filter: blur(10px);

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
    box-shadow: 0 0 0 1px rgba(0, 119, 255, 0.15);
    outline: none;
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
    box-shadow: 0 0 0 1px rgba(0, 119, 255, 0.15);
    outline: none;
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

// GENERIC SECTIONS
const Section = styled.section`
  padding: ${(p) => p.$py || "48px 6%"};
  background: ${(p) => p.$bg || "#ffffff"};

  @media (max-width: 768px) {
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

// CARD GRID
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
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

// SPLIT (IMAGE + CONTENT)
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
    background: rgba(15, 23, 42, 0.25);
  }
`;

// CASE STUDY IMAGE
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
    background: rgba(0, 0, 0, 0.15);
  }
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

// STATS
const StatStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
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

// RELATED SERVICES
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

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
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
// SEO & LINK BUILDING PAGE COMPONENT
// ============================================================================================

const SEOLinkBuildingPage = () => {
  const [slide, setSlide] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  // HERO SLIDES (SEO FOCUSED)
  const slides = [
    {
      tag: "SEO & Link Building Studio",
      title: "Get Found by the Right Customers on Search.",
      sub: "Technical SEO, content strategy and authority link building engineered for long-term organic growth.",
    },
    {
      tag: "Organic Growth Engine",
      title: "Rank Higher, Drive Qualified Inbound Leads.",
      sub: "Advanced keyword research, topical clustering and on-page optimisation tuned for conversions.",
    },
    {
      tag: "Authority & Digital PR",
      title: "Earn High-Quality Links That Search Engines Trust.",
      sub: "Outreach, digital PR and partnerships to build a moat of authority around your brand.",
    },
    {
      tag: "Technical SEO & Performance",
      title: "Clean Technical Foundation for Every URL.",
      sub: "Crawlability, indexation, page speed and Core Web Vitals optimised for better rankings.",
    },
    {
      tag: "Analytics & SEO Ops",
      title: "SEO As a System, Not a One-Time Project.",
      sub: "Dashboards, monitoring and experiments to keep improving month after month.",
    },
  ];

  // SEO-THEMED HERO IMAGES
  const heroImages = [
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=1600&q=60&fm=webp",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=1600&q=60&fm=webp",
  ];

  // SLIDER AUTOPLAY
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = slides[slide];

  // FORM SUBMIT (Web3Forms)
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
        setSuccessMsg("✅ Thanks! Our SEO strategist will contact you soon.");
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

      {/* HERO */}
      <HeroSection $bg={heroImages[slide]}>
        <HeroOverlay />

        {/* LEFT SIDE */}
        <HeroLeft>
          <HeroTag>🔍 SEO & Link Building Services</HeroTag>

          <HeroTitle>{current.title}</HeroTitle>
          <HeroSub>{current.sub}</HeroSub>

          <HeroHighlights>
            <Pill>📈 Technical SEO</Pill>
            <Pill>🔗 Authority Link Building</Pill>
            <Pill>🧭 Content Strategy</Pill>
            <Pill>📊 SEO Analytics</Pill>
          </HeroHighlights>

          <CTAGroup>
            <PrimaryBtn type="button" onClick={() => navigate("/book-call")}>
              <FiPhoneCall style={{ fontSize: "1.1rem" }} />
              Book a FREE SEO Call
            </PrimaryBtn>

            {/* <GhostBtn type="button">Download SEO Playbook</GhostBtn> */}
          </CTAGroup>

          <SliderDots>
            {slides.map((_, i) => (
              <Dot key={i} $active={i === slide} onClick={() => setSlide(i)} />
            ))}
          </SliderDots>
        </HeroLeft>

        {/* RIGHT SIDE FORM */}
        <HeroRight>
          <FormTitle>Get a Free SEO Audit</FormTitle>
          <FormSub>
            Share your details — we’ll review your site, competitors and growth opportunities.
          </FormSub>

          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="9adfabce-a75b-4ab8-aea1-b79edaeeb7e0"
            />
            <input
              type="hidden"
              name="subject"
              value="New SEO & Link Building Lead - SoftMaxx"
            />
            <input type="hidden" name="from_name" value="SEO & Link Building Page" />

            <FieldGroup>
              <Label>Name</Label>
              <Input name="name" placeholder="Full name" required />
            </FieldGroup>

            <FieldGroup>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </FieldGroup>

            <FieldGroup>
              <Label>Website URL</Label>
              <Input name="website" placeholder="https://yourdomain.com" />
            </FieldGroup>

            <FieldGroup>
              <Label>Primary Market / Region</Label>
              <Input name="market" placeholder="India, US, EU, Global..." />
            </FieldGroup>

            <FieldGroup>
              <Label>SEO Goals</Label>
              <TextArea
                name="message"
                placeholder="Tell us what you want SEO to achieve… (traffic, leads, authority, etc.)"
                required
              />
            </FieldGroup>

            <SubmitBtn type="submit">
              {submitting ? "Sending..." : "Request SEO Audit →"}
            </SubmitBtn>

            <FormNote>Confidential · NDA on request · No spam</FormNote>

            {successMsg && (
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#0b8a36",
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
          <SectionTitle>Brands That Trust Our SEO</SectionTitle>
          <SectionSub>
            SaaS, D2C, marketplaces, B2B and global enterprises relying on
            long-term organic growth.
          </SectionSub>
        </SectionHeader>
        <PartnerStrip />
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Testimonials />
      </Section>

      {/* SEO CHALLENGES */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>SEO Problems We Commonly Fix</SectionTitle>
          <SectionSub>
            Many websites publish content – very few have a structured SEO system.
            We help you build that.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard $bg="#f3f6ff">
            <CardTitle>Low Organic Traffic</CardTitle>
            <CardBody>
              Deep keyword research, content gaps analysis and topical clusters
              to unlock scalable traffic.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>No Rankings for Money Keywords</CardTitle>
            <CardBody>
              Strategic landing pages, internal linking and link building around
              your core commercial intent.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>Slow or Unstable Rankings</CardTitle>
            <CardBody>
              Technical SEO audits, performance fixes and crawl budget
              optimisation.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>Weak Domain Authority</CardTitle>
            <CardBody>
              White-hat outreach, digital PR and link earning campaigns for
              sustainable authority.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>Thin / Duplicate Content</CardTitle>
            <CardBody>
              Content rewrites, consolidation and structured templates for
              high-intent pages.
            </CardBody>
          </SoftCard>

          <SoftCard $bg="#f3f6ff">
            <CardTitle>Confusing SEO Reporting</CardTitle>
            <CardBody>
              GA4 + Search Console dashboards and SEO KPIs that your leadership
              actually understands.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* OUR SEO WORK */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Our SEO & Link Building Work</SectionTitle>
          <SectionSub>
            Real examples of ranking improvements, traffic growth and
            authority-building campaigns.
          </SectionSub>
        </SectionHeader>

        {(() => {
          const workItems = [
            {
              img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "B2B SaaS SEO Engine",
              desc: "Built a content + link system that 3× organic demos in 9 months.",
            },
            {
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "Ecommerce Category SEO",
              desc: "Fixed indexation, structured internal links and grew non-brand traffic by 120%.",
            },
            {
              img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=50&fm=webp",
              title: "Global Blog & Resource Hub",
              desc: "Editorial strategy + digital PR delivering compounding traffic every quarter.",
            },
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
                    alt={workItems[active].title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "20px",
                      position: "absolute",
                      inset: 0,
                      opacity: 1,
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
                        alt={item.title}
                        style={{
                          width: "100%",
                          borderRadius: "12px",
                          marginBottom: "10px",
                        }}
                      />

                      <Badge>SEO Project</Badge>
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

      {/* CERTIFIED SEO EXPERTS */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>Certified SEO & Outreach Experts</SectionTitle>
          <SectionSub>
            Strategists, technical SEOs, content specialists and outreach
            teams working as one pod.
          </SectionSub>
        </SectionHeader>

        <StatStrip>
          {[
            { icon: "🧭", end: 20, label: "SEO Strategists" },
            { icon: "🛠️", end: 15, label: "Technical SEO Specialists" },
            { icon: "✍️", end: 18, label: "Content & On-Page Experts" },
            { icon: "🔗", end: 12, label: "Outreach & PR Specialists" },
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
                  background:
                    "linear-gradient(to bottom right, #ffffff, #f0f6ff)",
                  boxShadow: "0 10px 26px rgba(0,0,0,0.06)",
                  padding: "24px",
                  borderRadius: "18px",
                }}
              >
                <span style={{ fontSize: "32px", marginBottom: 6 }}>
                  {item.icon}
                </span>
                <StatNumber>{count}+</StatNumber>
                <StatLabel>{item.label}</StatLabel>
              </StatCard>
            );
          })}
        </StatStrip>
      </Section>

      {/* SEO CAPABILITIES */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Full-Stack SEO & Link Building Capabilities</SectionTitle>
          <SectionSub>
            Everything you need for a long-term, compounding organic growth
            engine.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>Technical SEO Framework</CardTitle>
            <CardBody>
              Site architecture, Core Web Vitals, indexation, structured data
              and error clean-up.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Keyword & Topic Strategy</CardTitle>
            <CardBody>
              Keyword research, clusters and prioritised roadmaps aligned to
              business goals.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>On-Page & Content SEO</CardTitle>
            <CardBody>
              Search-optimised content templates, internal links and schema
              that Google understands.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Link Building & Digital PR</CardTitle>
            <CardBody>
              White-hat outreach, guest posts and mentions on relevant,
              authoritative domains.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>Local & Map Rankings</CardTitle>
            <CardBody>
              Local SEO, GMB optimisation, citations and reputation management
              for geo-focused brands.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>SEO Analytics & CRO</CardTitle>
            <CardBody>
              GA4 + Search Console dashboards, A/B tests and SEO impact tracking
              on leads & revenue.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* AWARDS & RECOGNITION */}
      <Section>
        <SectionHeader>
          <SectionTitle>Awards &amp; Recognition</SectionTitle>
          <SectionSub>
            Recognised by industry partners and review platforms for delivering
            sustainable organic growth.
          </SectionSub>
        </SectionHeader>

        <AwardsRecognition />
      </Section>

      {/* SEO PROCESS */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Our SEO & Link Building Process</SectionTitle>
          <SectionSub>
            A clear, step-by-step framework to align SEO with your product,
            sales and content teams.
          </SectionSub>
        </SectionHeader>

        <CardsGrid>
          <SoftCard>
            <CardTitle>1. Technical & Content Audit</CardTitle>
            <CardBody>
              Deep dive into site health, content footprint and competitor
              landscape.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>2. Strategy & Roadmap</CardTitle>
            <CardBody>
              Prioritised roadmap of technical fixes, content plans and link
              initiatives.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>3. Fix Foundations</CardTitle>
            <CardBody>
              Implementation of architecture, speed and indexation
              recommendations.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>4. Create & Optimise Content</CardTitle>
            <CardBody>
              New pages, refreshed content and on-page enhancements across key
              clusters.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>5. Authority & Links</CardTitle>
            <CardBody>
              Outreach and digital PR to earn quality links and mentions over
              time.
            </CardBody>
          </SoftCard>

          <SoftCard>
            <CardTitle>6. Measure & Iterate</CardTitle>
            <CardBody>
              Dashboards, experiments and quarterly strategy reviews to keep
              growing.
            </CardBody>
          </SoftCard>
        </CardsGrid>
      </Section>

      {/* HAPPY CUSTOMERS */}
      <FullWidthSection>
        <HappyCustomer />
      </FullWidthSection>

      {/* FAQ / QUESTION */}
      <Section $bg={SOFT_BG}>
        <Question />
      </Section>

      {/* SUCCESS STORY SLIDER (SEO CASES) */}
      <Section $bg="#ffffff">
        <SectionHeader>
          <SectionTitle>SEO Success Story Snapshot</SectionTitle>
          <SectionSub>
            A few live examples of how structured SEO & link building changed
            the growth curve.
          </SectionSub>
        </SectionHeader>

        {(() => {
          const caseSlides = [
            {
              title: "SaaSFlow – B2B SEO for Pipeline Growth",
              body:
                "Targeted content clusters and link acquisition around high-intent SaaS keywords.",
              results: [
                "Organic demo requests +210% in 8 months",
                "30+ priority keywords in top 3",
                "Consistent inbound pipeline without increasing ad spend",
              ],
              img:
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=50&fm=webp",
            },
            {
              title: "StoreX – Ecommerce SEO & Category Lift",
              body:
                "Architecture fixes, internal linking and link building for core money pages.",
              results: [
                "Non-brand organic revenue +88%",
                "Thousands of long-tail keywords gained",
                "Improved UX & conversion along the way",
              ],
              img:
                "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=50&fm=webp",
            },
            {
              title: "GrowthHub – Content & Authority Play",
              body:
                "Editorial calendar, pillar pages and digital PR to build a long-term content moat.",
              results: [
                "Organic traffic 3× over 12 months",
                "Featured on multiple industry publications",
                "Higher brand searches and inbound partnership requests",
              ],
              img:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=50&fm=webp",
            },
          ];

          const [cs, setCs] = React.useState(0);
          const [showCaseModal, setShowCaseModal] = React.useState(false);
          const [modalData, setModalData] = React.useState(null);

          React.useEffect(() => {
            const id = setInterval(
              () => setCs((p) => (p + 1) % caseSlides.length),
              6000
            );
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

          const slideObj = caseSlides[cs];

          return (
            <>
              <Split>
                <div>
                  <Badge>SEO Case Study</Badge>
                  <HeroTitle style={{ fontSize: "1.3rem", marginTop: 8 }}>
                    {slideObj.title}
                  </HeroTitle>
                  <SectionSub style={{ marginTop: 6 }}>
                    {slideObj.body}
                  </SectionSub>

                  <h4
                    style={{
                      marginTop: 16,
                      fontSize: "0.95rem",
                      fontWeight: 700,
                    }}
                  >
                    Results
                  </h4>
                  <List>
                    {slideObj.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </List>

                  <PrimaryBtn
                    style={{ marginTop: 16 }}
                    onClick={() => openCaseModal(slideObj)}
                  >
                    View Full Case Study
                  </PrimaryBtn>
                </div>

                <CaseImage style={{ backgroundImage: `url(${slideObj.img})` }}>
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
                      style={{
                        width: "100%",
                        height: 320,
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ padding: 20 }}>
                      <h2 style={{ margin: 0 }}>{modalData.title}</h2>
                      <p style={{ marginTop: 8, color: "#444" }}>
                        {modalData.body}
                      </p>

                      <h3 style={{ marginTop: 12 }}>What We Did</h3>
                      <ul style={{ paddingLeft: 20 }}>
                        <li>Technical & content audit</li>
                        <li>Keyword + cluster strategy</li>
                        <li>On-page optimisation & link building</li>
                      </ul>

                      <h3 style={{ marginTop: 12 }}>Results</h3>
                      <ul style={{ paddingLeft: 20 }}>
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

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 18,
                  gap: 8,
                }}
              >
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
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </>
          );
        })()}
      </Section>

      {/* CONSULTATION FORM SECTION */}
      <Section $bg={LIGHT_BG}>
        <SectionHeader>
          <SectionTitle>Need Help Planning SEO Roadmap?</SectionTitle>
          <SectionSub>
            Share where you are today and where you want to be — we’ll suggest
            an SEO & link building plan.
          </SectionSub>
        </SectionHeader>

        <CounsulationForm />
      </Section>

      {/* RELATED SERVICES */}
      <Section $bg="#f3f7ff">
        <SectionHeader>
          <SectionTitle>Related Services</SectionTitle>
          <SectionSub>
            We operate as a full-stack growth partner — organic, paid and
            product teams working together.
          </SectionSub>
        </SectionHeader>

        <ServiceGrid>
          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg"
              alt="Search"
            />
            <h4>Search Strategy</h4>
            <p>
              Market research, keyword mapping and forecasting to align SEO with
              business goals.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/semrush.svg"
              alt="SEO Tools"
            />
            <h4>SEO Operations</h4>
            <p>
              Tooling, workflows and reporting for ongoing SEO execution and
              governance.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt="Content"
            />
            <h4>Content & Thought Leadership</h4>
            <p>
              SEO-friendly articles, guides and resources that build authority
              and trust.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleanalytics.svg"
              alt="Analytics"
            />
            <h4>Analytics & CRO</h4>
            <p>
              Measurement, testing and UX improvements so SEO traffic turns into
              revenue.
            </p>
          </ServiceCard>
        </ServiceGrid>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <PrimaryBtn
            type="button"
            style={{ fontSize: "1rem", padding: "12px 26px" }}
            onClick={() => navigate("/book-call")}
          >
            <FiPhoneCall style={{ fontSize: "1.1rem" }} /> Book an SEO Strategy
            Call
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

export default SEOLinkBuildingPage;
