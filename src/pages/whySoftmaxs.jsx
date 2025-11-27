// WhySoftMaxs.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =======================================================
   WEB IMAGE LINKS
======================================================= */
// Hero
const heroImg =
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=80";

// Values
const value1 =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80";
const value2 =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80";
const value3 =
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80";

// Culture Gallery
const culture1 =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80";
const culture2 =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80";
const culture3 =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80";

/* =======================================================
   BASE STYLED COMPONENTS
======================================================= */

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  color: #111827;
  background: #ffffff;
`;

/* =======================================================
   HERO SECTION
======================================================= */

const HeroSection = styled.section`
  width: 100%;
  height: 480px;
  margin-top: 80px;
  background-image: linear-gradient(
      to bottom,
      rgba(15, 23, 42, 0.4),
      rgba(15, 23, 42, 0.85)
    ),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 380px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 52px;
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: 992px) {
    font-size: 42px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  max-width: 720px;
  margin-top: 14px;
  font-size: 18px;
  line-height: 1.7;
  color: #e5e7eb;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

/* =======================================================
   WHY CHOOSE US SECTION
======================================================= */

const WhySection = styled.section`
  padding: 90px 0;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

const WhyWrapper = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 0 24px;
`;

const WhyGrid = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
`;

const WhyTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const WhyText = styled.p`
  font-size: 17px;
  color: #4b5563;
  margin-top: 14px;
  line-height: 1.9;
`;

const WhyPoint = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 22px;
`;

const Bullet = styled.div`
  width: 14px;
  height: 14px;
  background: #facc15;
  border-radius: 4px;
`;

const WhyPointText = styled.p`
  font-size: 16px;
  color: #374151;
  line-height: 1.8;
`;

/* =======================================================
   VALUES SECTION
======================================================= */

const ValuesSection = styled.section`
  padding: 90px 0;
  background: #f9fafb;
`;

const ValuesWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
`;

const SectionHeading = styled.h2`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 24px;
  background: #fff;
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.1);
  }
`;

const ValueImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const ValueTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

const ValueText = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #555;
`;

/* =======================================================
   SERVICES / CAPABILITIES SECTION
======================================================= */

const ServicesSection = styled.section`
  padding: 90px 0;
  background: #fff;
`;

const ServicesWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
  text-align: center;
`;

const ServiceGrid = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: #f9fafb;
  border-radius: 14px;
  padding: 30px;
  border: 1px solid #e5e7eb;
  transition: 0.3s;

  &:hover {
    background: #ffffff;
    box-shadow: 0 10px 30px rgba(31, 41, 55, 0.08);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

const ServiceText = styled.p`
  font-size: 16px;
  color: #4b5563;
  margin-top: 10px;
  line-height: 1.8;
`;

/* =======================================================
   CULTURE GALLERY
======================================================= */

const CultureSection = styled.section`
  padding: 90px 0;
  background: #f8f5e9;
`;

const CultureWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
`;

const GalleryGrid = styled.div`
  display: grid;
  gap: 30px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CultureImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
`;

/* =======================================================
   CTA SECTION
======================================================= */

const CTASection = styled.section`
  padding: 90px 0;
  background: #ffffff;
`;

const CTAWrapper = styled.div`
  max-width: 850px;
  margin: auto;
  padding: 0 24px;
  text-align: center;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: #facc15;
  color: black;
  padding: 16px 36px;
  border-radius: 40px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    background: #fbbf24;
  }
`;

/* =======================================================
   COMPONENT
======================================================= */

const WhySoftMaxs = () => {
  return (
    <PageWrapper>
      <Navbar />

      {/* HERO */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Why SoftMaxs?</HeroTitle>
          <HeroSubtitle>
            Because we combine precision, creativity, and a culture of ownership
            to build digital solutions that feel effortless and drive impact.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* WHY CHOOSE US */}
      <WhySection>
        <WhyWrapper>
          <WhyGrid>
            <div>
              <WhyTitle>Why businesses choose SoftMaxs</WhyTitle>
              <WhyText>
                We help brands scale, transform, and innovate by weaving
                technology and design into meaningful digital experiences.
              </WhyText>

              <WhyPoint>
                <Bullet />
                <WhyPointText>Fast, reliable delivery with ownership.</WhyPointText>
              </WhyPoint>

              <WhyPoint>
                <Bullet />
                <WhyPointText>Solutions that scale — without complexity.</WhyPointText>
              </WhyPoint>

              <WhyPoint>
                <Bullet />
                <WhyPointText>
                  Dedicated teams that act as an extension of your company.
                </WhyPointText>
              </WhyPoint>

              <WhyPoint>
                <Bullet />
                <WhyPointText>
                  Transparent communication every step of the way.
                </WhyPointText>
              </WhyPoint>
            </div>

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Why SoftMaxs"
              style={{ width: "100%", borderRadius: "14px", objectFit: "cover" }}
            />
          </WhyGrid>
        </WhyWrapper>
      </WhySection>

      {/* VALUES */}
      <ValuesSection>
        <ValuesWrapper>
          <SectionHeading>Our Core Values</SectionHeading>

          <ValuesGrid>
            <ValueCard>
              <ValueImage src={value1} />
              <ValueTitle>Ownership</ValueTitle>
              <ValueText>
                We own problems, outcomes, and relationships — not just tasks.
              </ValueText>
            </ValueCard>

            <ValueCard>
              <ValueImage src={value2} />
              <ValueTitle>Innovation</ValueTitle>
              <ValueText>
                Building tomorrow’s solutions through creativity and exploration.
              </ValueText>
            </ValueCard>

            <ValueCard>
              <ValueImage src={value3} />
              <ValueTitle>Transparency</ValueTitle>
              <ValueText>
                Open conversations, clear expectations, and honest execution.
              </ValueText>
            </ValueCard>
          </ValuesGrid>
        </ValuesWrapper>
      </ValuesSection>

      {/* SERVICES */}
      <ServicesSection>
        <ServicesWrapper>
          <SectionHeading>What We Deliver</SectionHeading>
          <p style={{ color: "#4b5563", maxWidth: "700px", margin: "0 auto" }}>
            We bring together strategy, design, and engineering to build
            solutions that accelerate growth and delight users.
          </p>

          <ServiceGrid>
            <ServiceCard>
              <ServiceTitle>Digital Product Development</ServiceTitle>
              <ServiceText>
                Web apps, mobile apps, platforms, tools — built for scale,
                performance, and reliability.
              </ServiceText>
            </ServiceCard>

            <ServiceCard>
              <ServiceTitle>UX & UI Design</ServiceTitle>
              <ServiceText>
                Human-centered design that blends aesthetics with usability to
                create delightful interfaces.
              </ServiceText>
            </ServiceCard>

            <ServiceCard>
              <ServiceTitle>End-to-End Tech Consulting</ServiceTitle>
              <ServiceText>
                Architecture guidance, cloud engineering, and digital
                transformation for modern businesses.
              </ServiceText>
            </ServiceCard>
          </ServiceGrid>
        </ServicesWrapper>
      </ServicesSection>

      {/* CULTURE GALLERY */}
      <CultureSection>
        <CultureWrapper>
          <SectionHeading>Life at SoftMaxs</SectionHeading>

          <GalleryGrid>
            <CultureImg src={culture1} />
            <CultureImg src={culture2} />
            <CultureImg src={culture3} />
          </GalleryGrid>
        </CultureWrapper>
      </CultureSection>

      {/* CTA */}
      <CTASection>
        <CTAWrapper>
          <h2 style={{ fontSize: "38px", fontWeight: "800", lineHeight: "1.3" }}>
            Ready to work with SoftMaxs?
          </h2>

          <p style={{ color: "#4b5563", marginTop: "12px", fontSize: "18px" }}>
            Whether you're building a product, modernizing a system, or scaling
            your team — we're here to help.
          </p>

          <CTAButton to="/contact">Contact Us →</CTAButton>
        </CTAWrapper>
      </CTASection>

      <Footer />
    </PageWrapper>
  );
};

export default WhySoftMaxs;
