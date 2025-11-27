// LeadershipPage.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// =========================================================
// WEB IMAGE LINKS (Leaders)
// =========================================================
const leader1 =
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80";

const leader2 =
  "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80";

const leader3 =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80";

const leader4 =
  "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80";

// HERO IMAGE (also web link)
const heroImg =
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80";

// =========================================================
// BASE COMPONENTS
// =========================================================

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: sans-serif;
  color: #111827;
  background: #ffffff;
`;

// =========================================================
// HERO SECTION
// =========================================================

const HeroSection = styled.section`
  width: 100%;
  height: 400px;
  margin-top: 72px;
  background-image: linear-gradient(
      to bottom,
      rgba(15, 23, 42, 0.55),
      rgba(15, 23, 42, 0.85)
    ),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    height: 340px;
  }
`;

const HeroInner = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
  color: #f9fafb;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  max-width: 780px;
  line-height: 1.7;
  color: #e5e7eb;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// =========================================================
// LEADERS GRID
// =========================================================

const LeadersSection = styled.section`
  padding: 80px 0;
  background: #f9fafb;

  @media (max-width: 576px) {
    padding: 60px 0;
  }
`;

const LeadersWrapper = styled.div`
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

const LeadersGrid = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LeaderCard = styled.div`
  background: white;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.10);
  }
`;

const LeaderImg = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;

  @media (max-width: 576px) {
    height: 230px;
  }
`;

const LeaderInfo = styled.div`
  padding: 22px;
`;

const LeaderName = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

const LeaderRole = styled.p`
  font-size: 15px;
  color: #6b7280;
  margin-top: 4px;
`;

const LeaderBio = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin-top: 14px;
  line-height: 1.8;
`;

// =========================================================
// MESSAGE SECTION
// =========================================================

const MessageSection = styled.section`
  padding: 90px 0;
  background: #ffffff;

  @media (max-width: 576px) {
    padding: 60px 0;
  }
`;

const MessageWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 24px;
  display: grid;
  gap: 40px;
  align-items: center;

  @media (min-width: 992px) {
    grid-template-columns: 1.4fr 1fr;
  }
`;

const MessageHeading = styled.h2`
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const MessageText = styled.p`
  font-size: 16px;
  line-height: 1.9;
  color: #4b5563;
  margin-bottom: 16px;
`;

const MessageImage = styled.img`
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  height: 420px;

  @media (max-width: 576px) {
    height: 280px;
  }
`;

// =========================================================
// CTA SECTION
// =========================================================

const CTASection = styled.section`
  padding: 90px 0;
  background: #fffbeb;
`;

const CTAWrapper = styled.div`
  max-width: 820px;
  margin: auto;
  padding: 0 24px;
  text-align: center;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: #facc15;
  padding: 16px 38px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  border-radius: 40px;
  margin-top: 25px;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  &:hover {
    background: #fbbf24;
  }
`;

// =========================================================
// COMPONENT
// =========================================================

const LeadershipPage = () => {
  return (
    <PageWrapper>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSection>
        <HeroInner>
          <HeroTitle>Our Leadership</HeroTitle>
          <HeroSubtitle>
            A team of thinkers, builders, explorers, and steady hands — guiding
            SoftMaxs with clarity, humility, and a shared ambition to build
            meaningful digital experiences.
          </HeroSubtitle>
        </HeroInner>
      </HeroSection>

      {/* LEADERS GRID */}
      <LeadersSection>
        <LeadersWrapper>
          <SectionHeading>Meet the Leaders</SectionHeading>

          <LeadersGrid>
            <LeaderCard>
              <LeaderImg src={leader1} />
              <LeaderInfo>
                <LeaderName>Arjun Malhotra</LeaderName>
                <LeaderRole>Chief Executive Officer</LeaderRole>
                <LeaderBio>
                  Arjun brings 15+ years of leadership, driving global digital
                  transformation with a grounded blend of strategy and empathy.
                </LeaderBio>
              </LeaderInfo>
            </LeaderCard>

            <LeaderCard>
              <LeaderImg src={leader2} />
              <LeaderInfo>
                <LeaderName>Ritika Sharma</LeaderName>
                <LeaderRole>Chief Operating Officer</LeaderRole>
                <LeaderBio>
                  Ritika builds systems that scale — orchestrating operations
                  and teams with remarkable calm and precision.
                </LeaderBio>
              </LeaderInfo>
            </LeaderCard>

            <LeaderCard>
              <LeaderImg src={leader3} />
              <LeaderInfo>
                <LeaderName>Kunal Agarwal</LeaderName>
                <LeaderRole>Chief Technology Officer</LeaderRole>
                <LeaderBio>
                  A technologist with vision, Kunal leads engineering and
                  innovation with a strong focus on elegant, future-ready
                  architecture.
                </LeaderBio>
              </LeaderInfo>
            </LeaderCard>
          </LeadersGrid>
        </LeadersWrapper>
      </LeadersSection>

      {/* MESSAGE SECTION */}
      <MessageSection>
        <MessageWrapper>
          <div>
            <MessageHeading>Leadership Message</MessageHeading>

            <MessageText>
              At SoftMaxs, leadership isn’t about hierarchy — it’s about
              cultivating a space where ideas breathe, people grow, and teams
              move with shared purpose.
            </MessageText>

            <MessageText>
              We believe great digital work happens when curiosity is welcomed,
              transparency is standard, and collaboration feels natural.
            </MessageText>

            <MessageText>
              Our north star is simple: build digital experiences that feel
              intuitive, effective, and a touch remarkable.
            </MessageText>
          </div>

          <MessageImage src={leader4} />
        </MessageWrapper>
      </MessageSection>

      {/* CTA */}
      <CTASection>
        <CTAWrapper>
          <h2 style={{ fontSize: "34px", fontWeight: "800" }}>
            Want to collaborate with our leadership?
          </h2>
          <p style={{ marginTop: "12px", color: "#6b7280", fontSize: "17px" }}>
            Let’s explore what we can achieve together.
          </p>

          <CTAButton to="/contact">Get in Touch →</CTAButton>
        </CTAWrapper>
      </CTASection>

      {/* FOOTER */}
      <Footer />
    </PageWrapper>
  );
};

export default LeadershipPage;
