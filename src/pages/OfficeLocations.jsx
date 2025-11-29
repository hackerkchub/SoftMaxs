// src/pages/AddressPage.jsx
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// =========================================================
// WEB IMAGES
// =========================================================

const heroImg =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=80";

const office1Img =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80";

const office2Img =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=50&fm=webp";

const office3Img =
  "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?auto=format&fit=crop&w=1000&q=80";

// =========================================================
// BASE WRAPPERS
// =========================================================

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  color: #111827;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 80px 0;
  background: ${(p) => (p.alt ? "#f9fafb" : "white")};

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
`;

// =========================================================
// HERO
// =========================================================

const Hero = styled.section`
  width: 100%;
  height: 400px;
  margin-top: 70px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 18, 40, 0.45),
      rgba(0, 18, 40, 0.88)
    ),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const HeroInner = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 24px;
  color: #f9fafb;
`;

const HeroTitle = styled.h1`
  font-size: 46px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  margin-top: 12px;
  max-width: 650px;
  font-size: 18px;
  color: #e2e8f0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// =========================================================
// OFFICE GRID
// =========================================================

const Heading = styled.h2`
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const OfficeGrid = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const OfficeCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
  }
`;

const OfficeImage = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

const OfficeContent = styled.div`
  padding: 22px;
`;

const OfficeCity = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

const OfficeAddress = styled.p`
  margin-top: 10px;
  color: #4b5563;
  line-height: 1.7;
  font-size: 15px;
`;

const OfficeEmail = styled.p`
  margin-top: 14px;
  font-size: 15px;
  font-weight: 600;
`;

const OfficePhone = styled.p`
  margin-top: 4px;
  font-size: 15px;
  font-weight: 600;
  color: #111827;
`;

// =========================================================
// MAP SECTION
// =========================================================

const MapFrame = styled.iframe`
  width: 100%;
  height: 420px;
  border: none;
  border-radius: 14px;

  @media (max-width: 768px) {
    height: 320px;
  }
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
  margin: auto;
  padding: 0 24px;
  text-align: center;
`;

const CTAButton = styled.button`
  background: linear-gradient(90deg, #0077ff, #00c8ff);
  padding: 16px 36px;
  border: none;
  border-radius: 40px;
  margin-top: 22px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

// =========================================================
// COMPONENT
// =========================================================

const AddressPage = () => {
  return (
    <PageWrapper>
      <Navbar />

      {/* HERO */}
      <Hero>
        <HeroInner>
          <HeroTitle>Our Offices</HeroTitle>
          <HeroSubtitle>
            With global teams and local presence, we’re always closer than you think.
          </HeroSubtitle>
        </HeroInner>
      </Hero>

      {/* OFFICES GRID */}
      <Section>
        <Wrapper>
          <Heading>Our Global Locations</Heading>

          <OfficeGrid>
            <OfficeCard>
              <OfficeImage src={office1Img} />
              <OfficeContent>
                <OfficeCity>Dehradun, India</OfficeCity>
                <OfficeAddress>
                  SoftMaxs India HQ  
                  3rd Floor, Horizon Tower  
                  Rajpur Road, Dehradun – 248001
                </OfficeAddress>
                <OfficeEmail>Email: contact@softmaxs.com</OfficeEmail>
                <OfficePhone>Phone: +91 99100 12345</OfficePhone>
              </OfficeContent>
            </OfficeCard>

            <OfficeCard>
              <OfficeImage src={office2Img} />
              <OfficeContent>
                <OfficeCity>Noida, India</OfficeCity>
                <OfficeAddress>
                  SoftMaxs Tech Center  
                  Sector 62, Noida – 201301  
                  Uttar Pradesh, India
                </OfficeAddress>
                <OfficeEmail>Email: noida@softmaxs.com</OfficeEmail>
                <OfficePhone>Phone: +91 88822 98765</OfficePhone>
              </OfficeContent>
            </OfficeCard>

            <OfficeCard>
              <OfficeImage src={office3Img} />
              <OfficeContent>
                <OfficeCity>New York, USA</OfficeCity>
                <OfficeAddress>
                  SoftMaxs US Headquarters  
                  32nd Street, Manhattan  
                  New York, NY 10001
                </OfficeAddress>
                <OfficeEmail>Email: usa@softmaxs.com</OfficeEmail>
                <OfficePhone>Phone: +1 212 555 7890</OfficePhone>
              </OfficeContent>
            </OfficeCard>
          </OfficeGrid>
        </Wrapper>
      </Section>

      {/* MAP SECTION */}
      <Section alt>
        <Wrapper>
          <Heading>Find Us on the Map</Heading>
          <MapFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.082365235243!2d78.03682087427118!3d30.316495908644094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bead32d7217%3A0x2d87e83fe4f645cc!2sRajpur%20Road%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
          ></MapFrame>
        </Wrapper>
      </Section>

      {/* CTA */}
      <CTA>
        <CTAInner>
          <h2 style={{ fontSize: "34px", fontWeight: "800", color: "#111827" }}>
            Need help or want to collaborate?
          </h2>
          <p style={{ marginTop: "12px", color: "#6b7280" }}>
            Reach out to any of our global offices — we’d love to connect.
          </p>

          <CTAButton onClick={() => (window.location.href = "/contact")}>
            Contact Us →
          </CTAButton>
        </CTAInner>
      </CTA>

      <Footer />
    </PageWrapper>
  );
};

export default AddressPage;
