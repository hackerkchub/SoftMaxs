// PrivacyPolicyPage.jsx
// IMPORTS
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =======================================================
   WEB HERO IMAGE
======================================================= */
const heroImage =
  "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e0?auto=format&fit=crop&w=1600&q=80";

/* =======================================================
   Styled Components
======================================================= */

// Wrapper
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

const BgImageSection = styled.section`
  width: 100%;
  height: 360px;
  background-image: linear-gradient(
      to bottom,
      rgba(15, 23, 42, 0.4),
      rgba(15, 23, 42, 0.85)
    ),
    url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 72px;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeroInner = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
  color: #f9fafb;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: 992px) {
    font-size: 40px;
  }
  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  margin-top: 12px;
  font-size: 18px;
  max-width: 720px;
  line-height: 1.7;
  color: #e5e7eb;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

const HeroMeta = styled.p`
  margin-top: 20px;
  font-size: 15px;
  color: #e5e7eb;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

/* =======================================================
   MAIN CONTENT SECTION
======================================================= */

const ContentSection = styled.section`
  padding: 80px 0 120px;
  background: #f9fafb;

  @media (max-width: 768px) {
    padding: 60px 0 90px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
  display: grid;
  gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: 2fr 0.9fr;
  }
`;

const MainContent = styled.article`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  padding: 40px 34px;
  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.08);

  @media (max-width: 576px) {
    padding: 28px 22px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const YellowLine = styled.span`
  width: 6px;
  height: 26px;
  border-radius: 8px;
  background: #facc15;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.9;
  color: #4b5563;
  margin-bottom: 18px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 15px;
  line-height: 1.9;
  color: #4b5563;
  margin-bottom: 8px;
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #111827;
`;

/* =======================================================
   SIDEBAR CARD
======================================================= */

const SideCard = styled.aside`
  background: #fffaf0;
  border-radius: 18px;
  border: 1px solid #facc15;
  padding: 28px 24px;
  box-shadow: 0 6px 20px rgba(250, 204, 21, 0.15);

  @media (max-width: 768px) {
    padding: 22px 20px;
  }
`;

const SideHeading = styled.h3`
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SideText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 16px;
  color: #4b5563;
`;

const ContactBox = styled.div`
  margin-top: 18px;
  padding: 18px;
  border-radius: 12px;
  background: #fef3c7;
  font-size: 15px;
  line-height: 1.7;
`;

/* =======================================================
   FOOTER NOTE
======================================================= */

const FooterNote = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px 50px;
  font-size: 14px;
  color: #6b7280;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

/* =======================================================
   Component
======================================================= */

const PrivacyPolicyPage = () => {
  return (
    <PageWrapper>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <BgImageSection>
        <HeroInner>
          <HeroTitle>Privacy Policy</HeroTitle>

          <HeroSubtitle>
            Your privacy matters. This Policy outlines how SoftMaxs collects,
            protects, and respects your personal information when you interact
            with our website and services.
          </HeroSubtitle>

          <HeroMeta>Last Updated: 15 November 2025</HeroMeta>
        </HeroInner>
      </BgImageSection>

      {/* MAIN CONTENT */}
      <ContentSection>
        <ContentWrapper>
          {/* LEFT – FULL POLICY TEXT */}
          <MainContent>
            {/* 1. INTRODUCTION */}
            <SectionTitle>
              <YellowLine />
              <span>1. Introduction</span>
            </SectionTitle>

            <Paragraph>
              This Privacy Policy applies to all visitors, users, and others who
              access our website and services (collectively called “Services”).
              By using our website, you agree to the practices described here.
            </Paragraph>

            {/* 2. DATA WE COLLECT */}
            <SectionTitle>
              <YellowLine />
              <span>2. Information We Collect</span>
            </SectionTitle>

            <Paragraph>
              SoftMaxs collects information to deliver better digital
              experiences. This includes:
            </Paragraph>

            <List>
              <ListItem>
                <Highlight>Personal Information:</Highlight> Your name, email,
                phone, company details, or job title when you fill forms.
              </ListItem>

              <ListItem>
                <Highlight>Usage Data:</Highlight> Pages visited, time spent,
                device information, IP address, and browser details.
              </ListItem>

              <ListItem>
                <Highlight>Cookies & Similar Tech:</Highlight> Used to improve
                analytics, personalization, and performance.
              </ListItem>
            </List>

            {/* 3. HOW WE USE DATA */}
            <SectionTitle>
              <YellowLine />
              <span>3. How We Use Your Information</span>
            </SectionTitle>

            <Paragraph>
              SoftMaxs uses your information to enhance your experience and
              improve our services:
            </Paragraph>

            <List>
              <ListItem>Deliver, operate, and maintain our website.</ListItem>
              <ListItem>Respond to inquiries or support requests.</ListItem>
              <ListItem>Send updates, insights, and communication.</ListItem>
              <ListItem>
                Enhance performance, user experience, and security.
              </ListItem>
              <ListItem>Meet legal or compliance obligations.</ListItem>
            </List>

            {/* 4. COOKIES */}
            <SectionTitle>
              <YellowLine />
              <span>4. Cookies & Tracking</span>
            </SectionTitle>

            <Paragraph>
              Cookies help us improve functionality and personalization. You can
              control or disable them from your browser settings.
            </Paragraph>

            {/* 5. DATA SHARING */}
            <SectionTitle>
              <YellowLine />
              <span>5. Sharing Your Information</span>
            </SectionTitle>

            <Paragraph>We do not sell your personal data. We partner with:</Paragraph>

            <List>
              <ListItem>Hosting & cloud infrastructure providers</ListItem>
              <ListItem>Analytics & performance platforms</ListItem>
              <ListItem>Email & marketing-automation services</ListItem>
            </List>

            <Paragraph>
              All partners follow strict confidentiality and security standards.
            </Paragraph>

            {/* 6. RETENTION */}
            <SectionTitle>
              <YellowLine />
              <span>6. Data Retention</span>
            </SectionTitle>

            <Paragraph>
              Personal data is retained only as long as needed for operational
              or legal reasons and is securely deleted afterward.
            </Paragraph>

            {/* 7. YOUR RIGHTS */}
            <SectionTitle>
              <YellowLine />
              <span>7. Your Rights</span>
            </SectionTitle>

            <Paragraph>Depending on your location, you may request to:</Paragraph>

            <List>
              <ListItem>Access your data</ListItem>
              <ListItem>Correct or delete data</ListItem>
              <ListItem>Opt out of communications</ListItem>
              <ListItem>Restrict processing activities</ListItem>
            </List>

            {/* 8. SECURITY */}
            <SectionTitle>
              <YellowLine />
              <span>8. Data Security</span>
            </SectionTitle>

            <Paragraph>
              SoftMaxs uses industry-grade security to protect your data.
              However, no online system is fully secure, so we cannot guarantee
              absolute protection.
            </Paragraph>

            {/* 9. INTERNATIONAL TRANSFERS */}
            <SectionTitle>
              <YellowLine />
              <span>9. International Transfers</span>
            </SectionTitle>

            <Paragraph>
              Your data may be stored or processed in regions outside your
              country. Using our services means consenting to such transfers.
            </Paragraph>

            {/* 10. CHILDREN */}
            <SectionTitle>
              <YellowLine />
              <span>10. Children’s Privacy</span>
            </SectionTitle>

            <Paragraph>
              SoftMaxs does not knowingly collect data from children under 16.
              If such data is discovered, it will be removed immediately.
            </Paragraph>

            {/* 11. UPDATES */}
            <SectionTitle>
              <YellowLine />
              <span>11. Changes to This Policy</span>
            </SectionTitle>

            <Paragraph>
              We may update this Policy from time to time. Please review it
              periodically to stay informed.
            </Paragraph>

            {/* 12. CONTACT */}
            <SectionTitle>
              <YellowLine />
              <span>12. Contact Us</span>
            </SectionTitle>

            <Paragraph>For privacy-related questions:</Paragraph>

            <Paragraph>
              <strong>Email:</strong> privacy@softmaxs.com <br />
              <strong>Address:</strong> SoftMaxs India Pvt Ltd, [Your Office Address]
            </Paragraph>
          </MainContent>

          {/* RIGHT SIDEBAR */}
          <SideCard>
            <SideHeading>Your Privacy Matters</SideHeading>
            <SideText>
              We believe transparency is the foundation of trust. Understanding
              how your data is used helps you make informed choices.
            </SideText>

            <SideHeading>Quick Links</SideHeading>
            <List>
              <ListItem>How we use your data</ListItem>
              <ListItem>Cookie preferences</ListItem>
              <ListItem>Unsubscribe from emails</ListItem>
              <ListItem>Request data deletion</ListItem>
            </List>

            <ContactBox>
              <Highlight>Need assistance?</Highlight> <br />
              Contact us at <strong>privacy@softmaxs.com</strong> — our privacy
              team will respond quickly.
            </ContactBox>
          </SideCard>
        </ContentWrapper>
      </ContentSection>

      {/* FOOTER */}
      <Footer />

      <FooterNote>
        Disclaimer: This Privacy Policy layout is for informational and design
        purposes only. Please consult legal counsel to adapt it for official
        compliance.
      </FooterNote>
    </PageWrapper>
  );
};

export default PrivacyPolicyPage;
