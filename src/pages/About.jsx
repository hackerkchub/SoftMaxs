// src/pages/AboutPage.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// =========================================================
// WEB IMAGE LINKS
// =========================================================

const heroImg =
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80";

const missionImg =
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80";

const visionImg =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80";

const culture1 =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80";

const culture2 =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80";

const culture3 =
  "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80";

const valueImgs = [
  "https://images.unsplash.com/photo-1581091870631-7a5c76e88b9a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
];

// =========================================================
// BASE WRAPPERS
// =========================================================

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow-x: hidden;
  color: #111827;
  font-family: "Inter", sans-serif;
`;

const Section = styled.section`
  padding: 80px 0;
  background: ${(p) => (p.alt ? "#f9fafb" : "white")};

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

// =========================================================
// HERO
// =========================================================

const Hero = styled.section`
  width: 100%;
  height: 420px;
  margin-top: 70px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 12, 40, 0.4),
      rgba(0, 12, 40, 0.85)
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

const HeroInner = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 24px;
  color: #ffffff;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const HeroSubtitle = styled.p`
  margin-top: 14px;
  max-width: 680px;
  font-size: 18px;
  color: #e3e8ef;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// =========================================================
// GRID LAYOUTS
// =========================================================

const TwoColumn = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
`;

// =========================================================
// TEXT
// =========================================================

const Heading = styled.h2`
  font-size: 38px;
  font-weight: 800;
  color: #0f172a;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.85;
  color: #475569;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// =========================================================
// VALUES GRID
// =========================================================

const ValuesGrid = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 22px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
  }
`;

const ValueImg = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 16px;
`;

const ValueTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const ValueText = styled.p`
  color: #4b5563;
  font-size: 15px;
`;

// =========================================================
// CULTURE GALLERY
// =========================================================

const Gallery = styled.div`
  display: grid;
  gap: 30px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 14px;
  object-fit: cover;
`;

// =========================================================
// CTA
// =========================================================

const CTA = styled.section`
  padding: 90px 0;
  background: #fffbeb;
`;

const CTAInner = styled.div`
  max-width: 700px;
  text-align: center;
  margin: auto;
  padding: 0 24px;
`;

const CTAButton = styled.button`
  background: linear-gradient(90deg, #0077ff, #00c8ff);
  padding: 16px 40px;
  border: none;
  border-radius: 40px;
  margin-top: 22px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  letter-spacing: 0.3px;

  &:hover {
    opacity: 0.9;
  }
`;

// =========================================================
// COMPONENT
// =========================================================

const AboutPage = () => {
  return (
    <PageWrapper>
      <Navbar />

      {/* HERO */}
      <Hero>
        <HeroInner>
          <HeroTitle>About SoftMaxs</HeroTitle>
          <HeroSubtitle>
            We’re a global digital transformation partner helping businesses
            innovate, scale, and thrive in a fast-moving world.
          </HeroSubtitle>
        </HeroInner>
      </Hero>

      {/* OUR STORY */}
      <Section>
        <Wrapper>
          <TwoColumn>
            <div>
              <Heading>Our Story</Heading>
              <Paragraph>
                SoftMaxs began as a small cluster of curious builders and has grown
                into a full-scale global technology partner trusted across 30+
                countries. Our journey is shaped by a simple belief: when technology
                feels effortless, businesses move further.
              </Paragraph>

              <Paragraph>
                From startups to enterprises, we design, build, and scale digital
                products with a blend of creativity, logic, and a human-centered
                approach.
              </Paragraph>
            </div>

            <Image src={missionImg} />
          </TwoColumn>
        </Wrapper>
      </Section>

      {/* OUR VISION */}
      <Section alt>
        <Wrapper>
          <TwoColumn>
            <Image src={visionImg} />

            <div>
              <Heading>Our Vision</Heading>

              <Paragraph>
                To empower companies with future-ready digital experiences that
                feel intuitive, scalable, and quietly powerful.
              </Paragraph>

              <Paragraph>
                We imagine a world where technology becomes invisible—
                simply enabling people, ideas, and businesses to thrive.
              </Paragraph>
            </div>
          </TwoColumn>
        </Wrapper>
      </Section>

      {/* VALUES */}
      <Section>
        <Wrapper>
          <Heading>Our Values</Heading>

          <ValuesGrid>
            <ValueCard>
              <ValueImg src={valueImgs[0]} />
              <ValueTitle>Innovation</ValueTitle>
              <ValueText>
                We push boundaries and explore ideas that unlock new possibilities.
              </ValueText>
            </ValueCard>

            <ValueCard>
              <ValueImg src={valueImgs[1]} />
              <ValueTitle>Integrity</ValueTitle>
              <ValueText>
                Our relationships are built on clarity, honesty, and trust.
              </ValueText>
            </ValueCard>

            <ValueCard>
              <ValueImg src={valueImgs[2]} />
              <ValueTitle>Collaboration</ValueTitle>
              <ValueText>
                Great things happen when people feel supported, aligned, and inspired.
              </ValueText>
            </ValueCard>
          </ValuesGrid>
        </Wrapper>
      </Section>

      {/* CULTURE */}
      <Section alt>
        <Wrapper>
          <Heading>Life at SoftMaxs</Heading>

          <Gallery>
            <GalleryImg src={culture1} />
            <GalleryImg src={culture2} />
            <GalleryImg src={culture3} />
          </Gallery>
        </Wrapper>
      </Section>

      {/* CTA */}
      <CTA>
        <CTAInner>
          <h2 style={{ fontSize: "34px", fontWeight: "800", color: "#111827" }}>
            Want to work with us?
          </h2>

          <p
            style={{
              marginTop: "12px",
              color: "#6b7280",
              fontSize: "17px",
            }}
          >
            Explore opportunities to grow your career with a global team.
          </p>

          {/* REDIRECT FIXED */}
          <CTAButton onClick={() => (window.location.href = "/careers")}>
            Explore Careers →
          </CTAButton>
        </CTAInner>
      </CTA>

      <Footer />
    </PageWrapper>
  );
};

export default AboutPage;
