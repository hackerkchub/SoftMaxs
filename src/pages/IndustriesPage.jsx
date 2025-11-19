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

/* ---------------- SECTION TITLE ---------------- */
const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

/* ---------------- INDUSTRY CARDS ---------------- */
const IndustryCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 25px;
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
  transition: 0.3s;

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
    certifications: ["ISO 9001", "Industrial Safety", "Production Compliance", "Robotics Integration"],
  },
  {
    id: 2,
    title: "IT & Software Industry",
    shortDesc: "Complete digital transformation and software development.",
    fullDesc:
      "We develop scalable web platforms, cloud systems, mobile apps, AI models, and secure infrastructures.",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    certifications: ["Cyber Security Compliance", "Cloud Architecture", "Software QA ISO"],
  },
  {
    id: 3,
    title: "Industrial Automation",
    shortDesc: "Robotics, automated assembly lines & industrial IoT systems.",
    fullDesc:
      "We design automated production lines, robotics arms, smart sensors, PLC logic systems, and industrial IoT dashboards.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    certifications: ["PLC Programming Cert", "Robotics Automation ISO", "IoT Integration Standard"],
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    shortDesc: "End-to-end ecommerce platforms, inventory, and order automation.",
    fullDesc:
      "We build scalable ecommerce systems including product management, delivery automation, payment gateways, SEO optimization, and CRM integration.",
    image: "https://images.pexels.com/photos/5632375/pexels-photo-5632375.jpeg",
    certifications: ["Secure Payment Compliance", "E-Commerce Data Protection", "Marketplace Integration Cert"],
  },
  {
    id: 5,
    title: "Media & Publishing",
    shortDesc: "Content management, streaming solutions & digital publishing.",
    fullDesc:
      "We deliver CMS development, OTT streaming support, news portals & real-time content delivery systems.",
    image: "https://images.pexels.com/photos/261706/pexels-photo-261706.jpeg",
    certifications: ["Broadcast Standard Cert", "Content Distribution Compliance", "Media Security License"],
  },
  {
    id: 6,
    title: "Healthcare & Medical Tech",
    shortDesc: "Healthcare software, diagnostics automation & appointment systems.",
    fullDesc:
      "We develop EMR/EHR systems, lab automation, hospital dashboards, telemedicine solutions.",
    image: "https://images.pexels.com/photos/612915/pexels-photo-612915.jpeg",
    certifications: ["HIPAA Compliance", "Health Data Security", "Medical Device Software Cert"],
  },
  {
    id: 7,
    title: "Education & E-Learning",
    shortDesc: "LMS platforms, virtual classrooms and training management.",
    fullDesc:
      "We create digital learning platforms, exam engines, live class tools & AI-based recommendations.",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    certifications: ["EdTech Quality Cert", "Learning Data Protection", "Training Platform Compliance"],
  },
  {
    id: 8,
    title: "Real Estate & Property Tech",
    shortDesc: "Property listings, 3D tours, CRM, and construction workflow systems.",
    fullDesc:
      "We provide booking engines, real-estate CRMs, rental management, 3D mapping, and site progress tracking.",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    certifications: ["Property System Compliance", "Construction Safety Cert", "Digital Mapping Standard"],
  },
];

/* -------------------------------------------------- */
/* ---------------- MAIN PAGE COMPONENT ------------- */
/* -------------------------------------------------- */

export default function IndustriesFullPage() {
  const [openId, setOpenId] = useState(null);

  return (
    <PageWrap>
      {/* REAL NAVBAR */}
      <Navbar />

      {/* INDUSTRIES SECTION */}
      <div style={{ padding: "60px 40px" }}>
        <SectionTitle>Industries We Serve</SectionTitle>

        <div
          style={{
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {INDUSTRIES.map((item) => (
            <IndustryCard key={item.id}>
              <Image src={item.image} />
              <CardBody>
                <h3 style={{ fontSize: 24, fontWeight: 700 }}>{item.title}</h3>
                <p style={{ marginTop: 10 }}>{item.shortDesc}</p>

                <ViewButton onClick={() => setOpenId(openId === item.id ? null : item.id)}>
                  {openId === item.id ? "Hide Details" : "View More"}
                </ViewButton>

                {openId === item.id && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 20 }}>
                    <p>{item.fullDesc}</p>

                    <h4 style={{ marginTop: 15, fontWeight: 700 }}>Certifications</h4>
                    {item.certifications.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          padding: 10,
                          background: "#f3f3f3",
                          marginTop: 8,
                          borderRadius: 8,
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
        </div>
      </div>

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
