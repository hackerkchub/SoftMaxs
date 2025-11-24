// CareerPage.jsx

// IMPORTS
import React, { useState } from "react";
import {
  FaUsers,
  FaClock,
  FaGlobe,
  FaGlassCheers,
  FaBuilding,
  FaCalendarCheck,
} from "react-icons/fa";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OfficeLocations from "../components/OfficeLocations";
import Swal from "sweetalert2";

// ==================== Styled Components ====================

// Wrapper
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: sans-serif;
  color: #333;
  background: #f9fafb;
`;

// Hero Background Image
const BgImageSection = styled.section`
  width: 100%;
  height: 360px;
  background-image: url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 420px;
  }
`;

// Apply Button
const ApplyButton = styled.button`
  background: #facc15;
  color: black;
  padding: 14px 28px;
  border-radius: 100px;
  border: none;
  margin: 24px auto 0;
  font-size: 18px;
  font-weight: 600;
  display: block;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #fbbf24;
  }
`;

// Generic yellow line used in headings
const YellowLine = styled.div`
  width: 6px;
  height: 40px;
  background: #facc15;
  border-radius: 4px;
`;

// Common section heading wrapper
const SectionHeadingRow = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const SectionHeadingText = styled.h2`
  font-size: 26px;
  font-weight: 800;
  line-height: 1.3;
  margin: 0;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`;

// PERKS
const PerksOuter = styled.section`
  width: 100%;
  padding: 80px 0;
  background: #fff;
`;

const PerksContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const PerkCard = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 40px 24px;
  text-align: center;
  transition: 0.3s;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const IconCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #facc15;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px auto;
`;

const PerkTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const PerkText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #555;
`;

// TESTIMONIAL
const TestimonialSection = styled.section`
  padding: 80px 0;
  background: #fff;
`;

const TestimonialWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
`;

const TestimonialGrid = styled.div`
  display: grid;
  gap: 32px;
  padding: 0 4px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
`;

const TestimonialImg = styled.img`
  width: 200px;
  height: 240px;
  border-radius: 10px;
  object-fit: cover;
  display: block;
  margin: 0 auto 20px auto;
`;

const TestimonialText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #444;
`;

// JOBS
const JobsSection = styled.section`
  padding: 80px 0;
  background: #fff;
`;

const JobsWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
`;

const JobsGrid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const JobCard = styled.div`
  border: 1px solid #ddd;
  padding: 24px;
  border-radius: 12px;
  background: white;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.05);
`;

const JobTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const JobText = styled.p`
  font-size: 15px;
  line-height: 22px;
`;

const ApplyBtn = styled.button`
  background: #facc15;
  color: black;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  margin-top: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #fbbf24;
  }
`;

const ViewMoreBtn = styled.button`
  background: #facc15;
  color: black;
  padding: 12px 30px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin: 32px auto 0 auto;
  display: block;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #fbbf24;
  }
`;

// MAIN YOUTUBE HERO
const MainVideoSection = styled.section`
  width: 100%;
  padding-top: 24px;
`;

const MainVideoWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px 24px;
`;

const MainVideoFrame = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: 10px;
`;

// YOUTUBE VIDEO GRID
const VideoSection = styled.section`
  background: #f8f5e9;
  padding: 60px 0;
`;

const VideoWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
`;

const VideoGrid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const VideoCard = styled.div`
  width: 100%;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: 8px;
`;

// FORM INPUTS (exported)
export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: #fff;
  width: 100%;
  margin-bottom: 12px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  height: 140px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: #fff;
  width: 100%;
  margin-bottom: 12px;
  resize: vertical;
  box-sizing: border-box;
`;

export const Submit = styled.button`
  margin-top: 10px;
  padding: 12px 22px;
  background: #f4b21a;
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;

  &:hover {
    background: #d99c14;
  }
`;

// QUOTE SECTION
const QuoteSection = styled.section`
  padding: 60px 0 80px;
  background: #fff;
`;

const QuoteHeading = styled.h2`
  text-align: center;
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const QuoteWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;
  display: grid;
  gap: 24px;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

// ==================== Component ====================

const CareerPage = () => {
  const [showMoreJobs, setShowMoreJobs] = useState(false);

  return (
    <PageWrapper>
      {/* Global Navbar from project */}
      <Navbar />

      {/* Hero Image */}
      <BgImageSection />

      {/* MAIN BIG HEADING WITH YELLOW LINE */}
      <SectionHeadingRow style={{ marginTop: "40px" }}>
        <YellowLine />
        <SectionHeadingText>
          SoftMaxs Seeks Out Driven A Class Members That Crave Solving Unique
          Technical & Marketing Problems.
        </SectionHeadingText>
      </SectionHeadingRow>

      {/* MAIN VIDEO CARD */}
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200 mx-auto mt-6">
        <MainVideoSection>
          <MainVideoWrapper>
        <MainVideoFrame
  src="https://www.youtube.com/embed/QSwvg9Rv2EI?rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3&playsinline=1"
  title="SoftMaxs Culture Video"
  frameBorder="0"
  allowFullScreen
/>




 
          </MainVideoWrapper>
        </MainVideoSection>
      </div>

      {/* APPLY BUTTON */}
      <ApplyButton>Apply Now →</ApplyButton>

      {/* PERKS */}
      <PerksOuter>
        <PerksContainer>
          {[
            {
              icon: <FaUsers size={28} color="#000" />,
              title: "Equal Opportunity Employer",
              text:
                "SoftMaxs is committed to providing equal opportunity for all employees and considers applicants without regard to race, gender or other protected characteristics.",
            },
            {
              icon: <FaClock size={28} color="#000" />,
              title: "Flexible Timings",
              text:
                "Employees have the freedom to choose their working hours, helping maintain a healthy work-life balance and boosting productivity.",
            },
            {
              icon: <FaGlobe size={28} color="#000" />,
              title: "Global Clients Exposure",
              text:
                "Work with clients from around the world through Microsoft Teams, Zoom and other collaboration tools.",
            },
            {
              icon: <FaGlassCheers size={28} color="#000" />,
              title: "Retreats & Celebrations",
              text:
                "Annual retreats, quarterly town halls and celebrations provide plenty of opportunities for bonding and fun.",
            },
            {
              icon: <FaBuilding size={28} color="#000" />,
              title: "Unique Culture",
              text:
                "Our culture encourages learning, ownership, transparency and collaboration, creating a fulfilling work environment.",
            },
            {
              icon: <FaCalendarCheck size={28} color="#000" />,
              title: "Leave Policy",
              text:
                "32 days of leave per year, including maternity, paternity and sabbatical allowances.",
            },
          ].map((perk, i) => (
            <PerkCard key={i}>
              <IconCircle>{perk.icon}</IconCircle>
              <PerkTitle>{perk.title}</PerkTitle>
              <PerkText>{perk.text}</PerkText>
            </PerkCard>
          ))}
        </PerksContainer>
      </PerksOuter>

      {/* TESTIMONIAL SECTION */}
      <TestimonialSection>
        <TestimonialWrapper>
          <SectionHeadingRow style={{ paddingLeft: 0, marginBottom: 40 }}>
            <YellowLine />
            <SectionHeadingText>
              We’re Proud To Have 200+ Diverse Team Members Consisting Of The
              Best And Talented Members From Around The World.
            </SectionHeadingText>
          </SectionHeadingRow>

          <TestimonialGrid>
            <TestimonialCard>
              <TestimonialImg src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60" />
              <TestimonialText>
                What does an employee want from an organization? It's the
                possibility to showcase creativity, resonate success, and secure
                acclamation. SoftMaxs allows me to grow, learn and contribute in
                meaningful ways.
              </TestimonialText>
              <p style={{ marginTop: "12px", fontWeight: 600 }}>
                – Rahil Asif, (Team Lead – Marketing)
              </p>
            </TestimonialCard>

            <TestimonialCard>
              <TestimonialImg src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60" />
              <TestimonialText>
                SoftMaxs is a great place to work because every day brings new
                opportunities to learn, grow, and mentor. The work culture
                motivates everyone to do their best and explore new skills.
              </TestimonialText>
              <p style={{ marginTop: "12px", fontWeight: 600 }}>
                – Diksha Ghai, (Analyst Programmer)
              </p>
            </TestimonialCard>

            <TestimonialCard>
              <TestimonialImg src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=60" />
              <TestimonialText>
                SoftMaxs has provided me the platform to learn and explore new
                technologies and work on global projects. I improved both my
                technical and communication skills here while working with
                talented people.
              </TestimonialText>
              <p style={{ marginTop: "12px", fontWeight: 600 }}>
                – Vikas Singh, (Analyst Programmer)
              </p>
            </TestimonialCard>
          </TestimonialGrid>
        </TestimonialWrapper>
      </TestimonialSection>

      {/* JOBS */}
      <JobsSection>
        <JobsWrapper>
          <SectionHeadingRow style={{ paddingLeft: 0, marginBottom: 28 }}>
            <YellowLine />
            <SectionHeadingText>Current Openings</SectionHeadingText>
          </SectionHeadingRow>

          <JobsGrid>
            {/* DEFAULT 3 JOBS */}
            <JobCard>
              <div>
                <JobTitle>Front End Developer – AngularJS</JobTitle>
                <JobText>
                  SoftMaxs is looking for passionate Frontend Developers with
                  strong AngularJS skills to build modern web applications.
                </JobText>
              </div>
              <ApplyBtn>APPLY NOW</ApplyBtn>
            </JobCard>

            <JobCard>
              <div>
                <JobTitle>Drupal Developer</JobTitle>
                <JobText>
                  Work on large-scale Drupal projects for international clients,
                  contributing to high-performance web platforms.
                </JobText>
              </div>
              <ApplyBtn>APPLY NOW</ApplyBtn>
            </JobCard>

            <JobCard>
              <div>
                <JobTitle>Technical Architect</JobTitle>
                <JobText>
                  Lead technical decisions, mentor teams and design scalable
                  solutions for our enterprise customers.
                </JobText>
              </div>
              <ApplyBtn>APPLY NOW</ApplyBtn>
            </JobCard>

            {/* EXTRA JOBS (TOGGLE) */}
            {showMoreJobs && (
              <>
                <JobCard>
                  <div>
                    <JobTitle>React Developer</JobTitle>
                    <JobText>
                      Build modern UI systems with React, APIs and component
                      based architecture.
                    </JobText>
                  </div>
                  <ApplyBtn>APPLY NOW</ApplyBtn>
                </JobCard>

                <JobCard>
                  <div>
                    <JobTitle>Node.js Backend Developer</JobTitle>
                    <JobText>
                      Develop scalable backend systems using Node.js, Express
                      and databases.
                    </JobText>
                  </div>
                  <ApplyBtn>APPLY NOW</ApplyBtn>
                </JobCard>

                <JobCard>
                  <div>
                    <JobTitle>UI/UX Designer</JobTitle>
                    <JobText>
                      Create engaging user experiences and beautiful interface
                      designs.
                    </JobText>
                  </div>
                  <ApplyBtn>APPLY NOW</ApplyBtn>
                </JobCard>

                <JobCard>
                  <div>
                    <JobTitle>QA Automation Engineer</JobTitle>
                    <JobText>
                      Write automated test suites and ensure product quality.
                    </JobText>
                  </div>
                  <ApplyBtn>APPLY NOW</ApplyBtn>
                </JobCard>

                <JobCard>
                  <div>
                    <JobTitle>Content Writer</JobTitle>
                    <JobText>
                      Write SEO optimized content for marketing and product
                      pages.
                    </JobText>
                  </div>
                  <ApplyBtn>APPLY NOW</ApplyBtn>
                </JobCard>

                <JobCard>
                  <div>
                    <JobTitle>Digital Marketing Specialist</JobTitle>
                    <JobText>
                      Manage campaigns, SEO, ads and brand visibility.
                    </JobText>
                  </div>
                  <ApplyBtn>APPLY NOW</ApplyBtn>
                </JobCard>
              </>
            )}
          </JobsGrid>

          <ViewMoreBtn onClick={() => setShowMoreJobs(!showMoreJobs)}>
            {showMoreJobs ? "VIEW LESS" : "VIEW MORE"}
          </ViewMoreBtn>
        </JobsWrapper>
      </JobsSection>

      {/* VIDEO SECTION GRID */}
      <VideoSection>
        <VideoWrapper>
          <VideoGrid>
            <VideoCard>
              <VideoFrame
                src="https://www.youtube.com/embed/abWaTcTPgGQ"
                title="Life at SoftMaxs 1"
                allowFullScreen
              />
            </VideoCard>
            <VideoCard>
              <VideoFrame
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Life at SoftMaxs 2"
                allowFullScreen
              />
            </VideoCard>
            <VideoCard>
              <VideoFrame
                src="https://www.youtube.com/embed/oHg5SJYRHA0"
                title="Life at SoftMaxs 3"
                allowFullScreen
              />
            </VideoCard>
          </VideoGrid>
        </VideoWrapper>
      </VideoSection>

      {/* QUOTE SECTION */}
      <QuoteSection style={{ background: "#000", color: "white", paddingTop: "80px" }}>
        <QuoteHeading style={{ color: "white", textAlign: "center" }}>
          Start driving more growth for your business.
        </QuoteHeading>

        <QuoteWrapper
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* LEFT SIDE TEXT + IMAGE SIDE BY SIDE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* TEXT LEFT */}
            <div style={{ textAlign: "left" }}>
              <button
                style={{
                  background: "#facc15",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontWeight: "700",
                  border: "none",
                  color: "#000",
                  marginBottom: "20px",
                }}
              >
                Ask Us
              </button>

              <h1 style={{ fontSize: "50px", fontWeight: "900", lineHeight: "1" }}>
                How
              </h1>
              <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#facc15" }}>
                We Create
              </h2>
              <h2 style={{ fontSize: "32px", fontWeight: "800" }}>
                Your Vision
              </h2>
              <h2 style={{ fontSize: "32px", fontWeight: "800" }}>to Life</h2>
            </div>

            {/* IMAGE RIGHT INSIDE LEFT COLUMN */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=60"
              style={{
                width: "200px",
                height: "260px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const btn = e.target.querySelector("button");
              btn.disabled = true;
              btn.innerText = "Sending...";

              const formData = new FormData(e.target);
              formData.append(
                "access_key",
                "9adfabce-a75b-4ab8-aea1-b79edaeeb7e0"
              );

              const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
              });

              const data = await res.json();

              if (data.success) {
                Swal.fire({
                  title: "✅ Message Sent!",
                  text: "Thank you! We will contact you soon.",
                  icon: "success",
                  confirmButtonColor: "#facc15",
                });

                e.target.reset();
              } else {
                Swal.fire({
                  title: "❌ Error",
                  text: "Failed to send message, please try again.",
                  icon: "error",
                  confirmButtonColor: "#facc15",
                });
              }

              btn.disabled = false;
              btn.innerText = "Request Free Quote";
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            <label style={{ marginBottom: "6px" }}>Full Name</label>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              style={{ color: "black" }}
            />

            <label style={{ marginTop: "12px", marginBottom: "6px" }}>
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              style={{ color: "black" }}
            />

            <label style={{ marginTop: "12px", marginBottom: "6px" }}>
              Company Name
            </label>
            <Input
              type="text"
              name="company"
              placeholder="Company Name"
              style={{ color: "black" }}
            />

            <label style={{ marginTop: "12px", marginBottom: "6px" }}>
              Message
            </label>
            <TextArea
              name="message"
              placeholder="Message"
              required
              style={{ color: "black" }}
            />

            <Submit type="submit" style={{ marginTop: "14px" }}>
              Request Free Quote
            </Submit>
          </form>
        </QuoteWrapper>
      </QuoteSection>

      <OfficeLocations />
      <Footer />
    </PageWrapper>
  );
};

export default CareerPage;
