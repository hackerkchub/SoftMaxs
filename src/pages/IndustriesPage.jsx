import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// USING REAL COMPONENTS
import Navbar from "../components/Navbar";
import ImpactSection from "../components/ImpactSection";
import SuccessStories from "../components/SuccessStories";
import OfficeLocations from "../components/OfficeLocations";
import FooterMain from "../components/Footer";
import Testimonials from "../components/Testimonials";

/* ---------------- WRAPPER ---------------- */
const PageWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8f8f8;
  font-family: "Inter", sans-serif;
`;

const SectionWrap = styled.section`
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

/* ---------------- SECTION TITLE ---------------- */
const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 10px;
  }
`;

const SectionSub = styled.p`
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 24px;
`;

/* ---------------- FILTER BAR ---------------- */
const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 28px;
`;

const FilterButton = styled.button`
  border: none;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  cursor: pointer;
  background: ${({ active }) => (active ? "#111827" : "#e5e7eb")};
  color: ${({ active }) => (active ? "#f9fafb" : "#374151")};
  transition: 0.2s;

  &:hover {
    background: ${({ active }) => (active ? "#030712" : "#d1d5db")};
  }
`;

/* ---------------- INDUSTRY CARDS ---------------- */
const CardsContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* Mobile: turn into horizontal slider */
  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 8px;

    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 999px;
    }
  }
`;

const IndustryCard = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex: 0 0 80%;
    max-width: 80%;
    scroll-snap-align: center;
  }

  @media (max-width: 480px) {
    flex: 0 0 85%;
    max-width: 85%;
    border-radius: 12px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const CardBody = styled.div`
  padding: 22px;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

/* ---------------- ICON + TITLE ROW ---------------- */
const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0, #60a5fa, #1f2937);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
`;

const ShortDesc = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #4b5563;
`;

const ViewButton = styled.button`
  background: #0077ff;
  padding: 10px 18px;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: 0.25s;

  &:hover {
    background: #005fcc;
  }
`;

/* ---------------- INDUSTRY DATA ---------------- */
const INDUSTRIES = [
  {
    id: 1,
    title: "Manufacturing Industry",
    shortDesc: "World-class manufacturing solutions with precision engineering.",
    fullDesc:
      "Our manufacturing services include CNC machining, automation, QA systems, fabrication setups, robotics integration, and more.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    certifications: [
      "ISO 9001",
      "Industrial Safety",
      "Production Compliance",
      "Robotics Integration",
    ],
    filterKey: "manufacturing",
  },
  {
    id: 2,
    title: "IT & Software Industry",
    shortDesc: "Complete digital transformation and software development.",
    fullDesc:
      "We develop scalable web platforms, cloud systems, mobile apps, AI models, and secure infrastructures.",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    certifications: [
      "Cyber Security Compliance",
      "Cloud Architecture",
      "Software QA ISO",
    ],
    filterKey: "it",
  },
  {
    id: 3,
    title: "Industrial Automation",
    shortDesc: "Robotics, automated assembly lines & industrial IoT systems.",
    fullDesc:
      "We design automated production lines, robotics arms, smart sensors, PLC logic systems, and industrial IoT dashboards.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    certifications: [
      "PLC Programming Cert",
      "Robotics Automation ISO",
      "IoT Integration Standard",
    ],
    filterKey: "manufacturing",
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    shortDesc: "End-to-end ecommerce platforms, inventory, and order automation.",
    fullDesc:
      "We build scalable ecommerce systems including product management, delivery automation, payment gateways, SEO optimization, and CRM integration.",
    image: "https://images.pexels.com/photos/5632375/pexels-photo-5632375.jpeg",
    certifications: [
      "Secure Payment Compliance",
      "E-Commerce Data Protection",
      "Marketplace Integration Cert",
    ],
    filterKey: "ecommerce",
  },
  {
    id: 5,
    title: "Media & Publishing",
    shortDesc: "Content management, streaming solutions & digital publishing.",
    fullDesc:
      "We deliver CMS development, OTT streaming support, news portals & real-time content delivery systems.",
    image: "https://images.pexels.com/photos/261706/pexels-photo-261706.jpeg",
    certifications: [
      "Broadcast Standard Cert",
      "Content Distribution Compliance",
      "Media Security License",
    ],
    filterKey: "media",
  },
  {
    id: 6,
    title: "Healthcare & Medical Tech",
    shortDesc:
      "Healthcare software, diagnostics automation & appointment systems.",
    fullDesc:
      "We develop EMR/EHR systems, lab automation, hospital dashboards, and telemedicine platforms with strong security and compliance.",
    // new lightweight healthcare webp image
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=60",
    certifications: [
      "HIPAA Compliance",
      "Health Data Security",
      "Medical Device Software Cert",
    ],
    filterKey: "healthcare",
  },
  {
    id: 7,
    title: "Education & E-Learning",
    shortDesc: "LMS platforms, virtual classrooms and training management.",
    fullDesc:
      "We create digital learning platforms, exam engines, live class tools & AI-based recommendations.",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    certifications: [
      "EdTech Quality Cert",
      "Learning Data Protection",
      "Training Platform Compliance",
    ],
    filterKey: "education",
  },
  {
    id: 8,
    title: "Real Estate & Property Tech",
    shortDesc:
      "Property listings, 3D tours, CRM, and construction workflow systems.",
    fullDesc:
      "We provide booking engines, real-estate CRMs, rental management, 3D mapping, and site progress tracking.",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    certifications: [
      "Property System Compliance",
      "Construction Safety Cert",
      "Digital Mapping Standard",
    ],
    filterKey: "realestate",
  },
  {
    id: 9,
    title: "Travel & Hospitality",
    shortDesc: "Hotel booking engines, travel portals & tourism apps.",
    fullDesc:
      "We build hotel PMS systems, booking engines, travel apps, tour management dashboards, payment integration and review systems.",
    // new lightweight travel webp image
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=60",
    certifications: [
      "Travel Data Compliance",
      "Secure Booking Standard",
      "OTA Integration Cert",
    ],
    filterKey: "travel",
  },
];

/* ---------------- FILTERS ---------------- */
const FILTERS = [
  { key: "all", label: "All" },
  { key: "manufacturing", label: "Manufacturing & Industrial" },
  { key: "it", label: "IT & Software" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "healthcare", label: "Healthcare" },
  { key: "education", label: "Education" },
  { key: "realestate", label: "Real Estate" },
  { key: "media", label: "Media & Publishing" },
  { key: "travel", label: "Travel & Hospitality" },
];

/* ---------------- INLINE SVG ICONS ---------------- */
const IndustryIcon = ({ filterKey }) => {
  switch (filterKey) {
    case "manufacturing":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 10h4l2-3 3 6 2-3h5v8H4v-8z"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "it":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="4"
            width="18"
            height="13"
            rx="2"
            stroke="#e5efff"
            strokeWidth="1.6"
          />
          <path
            d="M8 20h8M12 17v3"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ecommerce":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 5h2l2 11h10l2-7H9"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="19" r="1" fill="#e5efff" />
          <circle cx="18" cy="19" r="1" fill="#e5efff" />
        </svg>
      );
    case "media":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="5"
            width="10"
            height="14"
            rx="2"
            stroke="#e5efff"
            strokeWidth="1.6"
          />
          <path
            d="M16 9l4-2v10l-4-2"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "healthcare":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="2"
            stroke="#e5efff"
            strokeWidth="1.6"
          />
          <path
            d="M12 9v6M9 12h6"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "education":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 9l8-4 8 4-8 4-8-4z"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M6 11v4l6 3 6-3v-4"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "realestate":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 11l8-6 8 6v8H4v-8z"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10 19v-4h4v4"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "travel":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 10l8-2 3-5 2 1-1 5 6 2-1 2-5-1-2 6-2-1 1-6-6-1 1-3z"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="6"
            stroke="#e5efff"
            strokeWidth="1.6"
          />
          <path
            d="M12 8v4l2 2"
            stroke="#e5efff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
};

/* -------------------------------------------------- */
/* ---------------- MAIN PAGE COMPONENT ------------- */
/* -------------------------------------------------- */

export default function IndustriesFullPage() {
  const [openId, setOpenId] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredIndustries =
    activeFilter === "all"
      ? INDUSTRIES
      : INDUSTRIES.filter((ind) => ind.filterKey === activeFilter);

  return (
    <PageWrap>
      {/* REAL NAVBAR */}
      <Navbar />

      {/* INDUSTRIES SECTION */}
      <SectionWrap>
        <SectionTitle>Industries We Serve</SectionTitle>
        <SectionSub>
          From manufacturing floors to modern SaaS and global travel, SoftMax
          supports digital transformation across multiple domains.
        </SectionSub>

        {/* FILTERS */}
        <FilterBar>
          {FILTERS.map((f) => (
            <FilterButton
              key={f.key}
              active={activeFilter === f.key}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </FilterButton>
          ))}
        </FilterBar>

        {/* CARDS */}
        <CardsContainer>
          {filteredIndustries.map((item) => (
            <IndustryCard key={item.id}>
              <Image src={item.image} alt={item.title} loading="lazy" />
              <CardBody>
                <HeaderRow>
                  <IconCircle>
                    <IndustryIcon filterKey={item.filterKey} />
                  </IconCircle>
                  <TitleText>{item.title}</TitleText>
                </HeaderRow>

                <ShortDesc>{item.shortDesc}</ShortDesc>

                <ViewButton
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                >
                  {openId === item.id ? "Hide Details" : "View More"}
                </ViewButton>

                {openId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginTop: 16 }}
                  >
                    <p style={{ fontSize: 14, color: "#374151" }}>
                      {item.fullDesc}
                    </p>

                    <h4
                      style={{
                        marginTop: 14,
                        marginBottom: 6,
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      Certifications
                    </h4>
                    {item.certifications.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          padding: 9,
                          background: "#f3f4f6",
                          marginTop: 6,
                          borderRadius: 8,
                          fontSize: 13,
                        }}
                      >
                        {c}
                      </div>
                    ))}
                  </motion.div>
                )}
              </CardBody>
            </IndustryCard>
          ))}
        </CardsContainer>
      </SectionWrap>

      {/* REAL IMPACT SECTION */}
      <ImpactSection />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* SUCCESS STORIES SECTION */}
      <SuccessStories />

      {/* OFFICE LOCATIONS SECTION */}
      <OfficeLocations />

      {/* FOOTER */}
      <FooterMain />
    </PageWrap>
  );
}
