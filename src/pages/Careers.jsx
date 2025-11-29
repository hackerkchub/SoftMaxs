// src/pages/CareerPage.jsx

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

// Apply Button (Hero)
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

// Yellow Box Line
const YellowLine = styled.div`
  width: 6px;
  height: 40px;
  background: #facc15;
  border-radius: 4px;
`;

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
  cursor: default;

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

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  background: #fff;
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
  color: #444;
  line-height: 1.6;
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
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
  }
`;

const JobTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const JobMeta = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 8px;
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
  border: none;
  margin-top: 18px;
  cursor: pointer;
  font-weight: 600;
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
  border: none;
  font-size: 16px;
  margin: 32px auto 0 auto;
  display: block;
  cursor: pointer;

  &:hover {
    background: #fbbf24;
  }
`;
/* ==================== MAIN YOUTUBE VIDEO ==================== */

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

/* ========================= APPLY POPUP ========================= */

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(6px);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupBox = styled.div`
  width: 92%;
  max-width: 520px;
  background: white;
  padding: 30px;
  border-radius: 14px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
`;

const PInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const PTextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
  resize: vertical;
`;

const PSubmit = styled.button`
  width: 100%;
  padding: 12px;
  background: #facc15;
  border-radius: 100px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #fbbf24;
  }
`;

/* ========================= JOB DESCRIPTION POPUP ========================= */

const JobDescBody = styled.div`
  font-size: 15px;
  color: #444;
  margin-bottom: 12px;
  line-height: 1.6;
`;

const JobDescMeta = styled.p`
  font-size: 13px;
  margin-bottom: 12px;
  color: #6b7280;
`;

const JobDescList = styled.ul`
  padding-left: 18px;
  margin-bottom: 16px;
`;

const JobDescItem = styled.li`
  margin-bottom: 6px;
`;

/* ==================== JOB DATA (same as earlier) ==================== */

const JOBS = [
  {
    id: 1,
    title: "Front End Developer – AngularJS",
    shortMeta: "Full-time · 3–5 years · Pune / Remote",
    shortText:
      "Build modern, responsive UIs using AngularJS and REST APIs for global brands.",
    longSummary:
      "As a Front End Developer at SoftMaxs, you will work closely with designers, backend engineers and project managers to ship performant, accessible and scalable web experiences.",
    responsibilities: [
      "Develop high-quality AngularJS apps.",
      "Work with designers to create pixel-perfect UIs.",
      "Integrate REST/GraphQL APIs.",
      "Ensure accessibility and performance.",
    ],
    mustHave: [
      "3–5 years experience in AngularJS.",
      "Strong HTML/CSS/JS fundamentals.",
      "Experience with Git & Agile.",
    ],
  },
  {
    id: 2,
    title: "Drupal Developer",
    shortMeta: "Full-time · 3–6 years · Remote",
    shortText:
      "Implement and maintain enterprise-grade Drupal platforms for global clients.",
    longSummary:
      "You will architect and develop Drupal-based web applications, custom modules and integrations while working with an international client base.",
    responsibilities: [
      "Develop and maintain Drupal 9/10 sites.",
      "Create custom modules & integrations.",
      "Implement secure, scalable systems.",
    ],
    mustHave: [
      "3+ years Drupal experience.",
      "PHP, MySQL, Drupal config knowledge.",
      "Performance + security understanding.",
    ],
  },
  {
    id: 3,
    title: "Technical Architect",
    shortMeta: "Full-time · 7+ years · Hybrid",
    shortText:
      "Lead solution architecture and guide teams delivering complex digital platforms.",
    longSummary:
      "As a Technical Architect, you will define technical roadmaps, review solution designs and mentor engineering teams.",
    responsibilities: [
      "Define scalable cloud architectures.",
      "Review technical designs.",
      "Guide engineering teams.",
    ],
    mustHave: [
      "7+ years experience.",
      "Strong cross-stack knowledge.",
      "Great communication skills.",
    ],
  },
  // Extra jobs
  {
    id: 4,
    title: "React Developer",
    shortMeta: "Full-time · 2–4 years · Remote",
    shortText:
      "Build component-driven frontends using React, TypeScript and modern tooling.",
    longSummary:
      "You'll work on modern React systems, reusable UI components and fast user interfaces.",
    responsibilities: [
      "Build reusable React components.",
      "Integrate REST/GraphQL APIs.",
      "Ensure performance and accessibility.",
    ],
    mustHave: ["React + JS mastery.", "TypeScript is a bonus."],
  },
  {
    id: 5,
    title: "Node.js Backend Developer",
    shortMeta: "Full-time · 3–5 years · Remote",
    shortText:
      "Design and implement scalable backend services using Node.js and databases.",
    longSummary:
      "You will be responsible for building robust APIs, microservices and backend logic.",
    responsibilities: [
      "Build secure REST/GraphQL APIs.",
      "Handle databases efficiently.",
      "Implement monitoring & logs.",
    ],
    mustHave: ["3+ years Node.js.", "Strong DB knowledge."],
  },
  {
    id: 6,
    title: "UI/UX Designer",
    shortMeta: "Full-time · 3–6 years · Remote",
    shortText:
      "Design clean, conversion-focused experiences for web and mobile products.",
    longSummary:
      "You will own designs from research to final prototypes and design systems.",
    responsibilities: [
      "User flows, wireframes, prototypes.",
      "High-fidelity UI designs.",
      "Ensure developer alignment.",
    ],
    mustHave: ["Strong portfolio.", "Figma/Sketch expertise."],
  },
];

/* ==================== MAIN COMPONENT ==================== */

const CareerPage = () => {
  const [showMoreJobs, setShowMoreJobs] = useState(false);
  const [showApplyPopup, setShowApplyPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [showJobPopup, setShowJobPopup] = useState(false);
  const [jobDetail, setJobDetail] = useState(null);

  const openApplyPopup = (job) => {
    setSelectedJob(job);
    setShowApplyPopup(true);
  };

  const openJobPopup = (job) => {
    setJobDetail(job);
    setShowJobPopup(true);
  };

  const closeApplyPopup = () => setShowApplyPopup(false);
  const closeJobPopup = () => setShowJobPopup(false);

  /* ==================== SAFE APPLY FORM (FREE PLAN OK) ==================== */
  async function handleApplySubmit(e) {
    e.preventDefault();

    const btn = e.target.querySelector("button[type='submit']");
    btn.disabled = true;
    btn.innerText = "Submitting…";

    const formData = new FormData(e.target);

    // Web3Forms REQUIRED FIELDS
    formData.append("access_key", "9adfabce-a75b-4ab8-aea1-b79edaeeb7e0");
    formData.append("subject", `New Application – ${selectedJob}`);

    // REMOVE resume before sending (free-plan restriction)
    formData.delete("resume");

    try {
      const res = await fetch(
        "https://api.web3forms.com/submit?redirect=0",
        { method: "POST", body: formData }
      );

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "🎉 Application Submitted!",
          text: "Our HR team will contact you soon.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => setShowApplyPopup(false), 900);
        e.target.reset();
      } else {
        Swal.fire({
          title: "❌ Failed",
          text: data.message || "Please try again.",
          icon: "error",
          timer: 2300,
          showConfirmButton: false,
        });
      }
    } catch {
      Swal.fire({
        title: "❌ Network Error",
        text: "Please check your connection.",
        icon: "error",
      });
    }

    btn.disabled = false;
    btn.innerText = "Submit Application";
  }

  const primaryJobs = JOBS.slice(0, 3);
  const extraJobs = JOBS.slice(3);

  return (
    <PageWrapper>
      <Navbar />
      <BgImageSection />

      {/* MAIN HEADING */}
      <SectionHeadingRow style={{ marginTop: 40 }}>
        <YellowLine />
        <SectionHeadingText>
          SoftMaxs Seeks Out Driven A-Class Members That Crave Solving Digital Problems.
        </SectionHeadingText>
      </SectionHeadingRow>

      {/* MAIN VIDEO */}
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-xl overflow-hidden mx-auto mt-6">
        <MainVideoSection>
          <MainVideoWrapper>
            <MainVideoFrame
              src="https://www.youtube.com/embed/QSwvg9Rv2EI"
              title="SoftMaxs Culture Video"
              allowFullScreen
            />
          </MainVideoWrapper>
        </MainVideoSection>
      </div>

      <ApplyButton onClick={() => openApplyPopup("General Application")}>
        Apply Now →
      </ApplyButton>

      {/* PERKS */}
      <PerksOuter>
        <PerksContainer>
          {[
            {
              icon: <FaUsers size={28} />,
              title: "Equal Opportunity Employer",
              text:
                "SoftMaxs welcomes talented people from all backgrounds and celebrates diversity.",
            },
            {
              icon: <FaClock size={28} />,
              title: "Flexible Timings",
              text:
                "Choose working hours that help you stay productive and balanced.",
            },
            {
              icon: <FaGlobe size={28} />,
              title: "Global Clients Exposure",
              text:
                "Work with international teams via modern collaboration platforms.",
            },
            {
              icon: <FaGlassCheers size={28} />,
              title: "Retreats & Celebrations",
              text:
                "Annual retreats and fun events ensure a vibrant work culture.",
            },
            {
              icon: <FaBuilding size={28} />,
              title: "Unique Culture",
              text:
                "We foster ownership, growth and openness across every team.",
            },
            {
              icon: <FaCalendarCheck size={28} />,
              title: "Leave Policy",
              text: "32+ leaves including maternity, paternity & sabbaticals.",
            },
          ].map((p, i) => (
            <PerkCard key={i}>
              <IconCircle>{p.icon}</IconCircle>
              <PerkTitle>{p.title}</PerkTitle>
              <PerkText>{p.text}</PerkText>
            </PerkCard>
          ))}
        </PerksContainer>
      </PerksOuter>

      {/* TESTIMONIALS */}
      <TestimonialSection>
        <TestimonialWrapper>
          <SectionHeadingRow style={{ paddingLeft: 0, marginBottom: 30 }}>
            <YellowLine />
            <SectionHeadingText>
              We’re Proud To Have 200+ Diverse Team Members Around The World.
            </SectionHeadingText>
          </SectionHeadingRow>

          <TestimonialGrid>
            <TestimonialCard>
              <TestimonialImg src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" />
              <TestimonialText>
                SoftMaxs gives me the creative freedom to innovate and the support to grow.
              </TestimonialText>
              <strong>– Rahil Asif (Team Lead – Marketing)</strong>
            </TestimonialCard>

            <TestimonialCard>
              <TestimonialImg src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" />
              <TestimonialText>
                A workspace where every project brings learning and growth.
              </TestimonialText>
              <strong>– Diksha Ghai (Analyst Programmer)</strong>
            </TestimonialCard>

            <TestimonialCard>
              <TestimonialImg src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39" />
              <TestimonialText>
                Working with global clients sharpened my technical and communication skills.
              </TestimonialText>
              <strong>– Vikas Singh (Analyst Programmer)</strong>
            </TestimonialCard>
          </TestimonialGrid>
        </TestimonialWrapper>
      </TestimonialSection>

      {/* JOBS LIST */}
      <JobsSection>
        <JobsWrapper>
          <SectionHeadingRow style={{ paddingLeft: 0, marginBottom: 24 }}>
            <YellowLine />
            <SectionHeadingText>Current Openings</SectionHeadingText>
          </SectionHeadingRow>

          <JobsGrid>
            {primaryJobs.map((job) => (
              <JobCard key={job.id} onClick={() => openJobPopup(job)}>
                <div>
                  <JobTitle>{job.title}</JobTitle>
                  <JobMeta>{job.shortMeta}</JobMeta>
                  <JobText>{job.shortText}</JobText>
                </div>

                <ApplyBtn
                  onClick={(e) => {
                    e.stopPropagation();
                    openApplyPopup(job.title);
                  }}
                >
                  APPLY NOW
                </ApplyBtn>
              </JobCard>
            ))}

            {showMoreJobs &&
              extraJobs.map((job) => (
                <JobCard key={job.id} onClick={() => openJobPopup(job)}>
                  <div>
                    <JobTitle>{job.title}</JobTitle>
                    <JobMeta>{job.shortMeta}</JobMeta>
                    <JobText>{job.shortText}</JobText>
                  </div>

                  <ApplyBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      openApplyPopup(job.title);
                    }}
                  >
                    APPLY NOW
                  </ApplyBtn>
                </JobCard>
              ))}
          </JobsGrid>

          <ViewMoreBtn onClick={() => setShowMoreJobs(!showMoreJobs)}>
            {showMoreJobs ? "VIEW LESS" : "VIEW MORE"}
          </ViewMoreBtn>
        </JobsWrapper>
      </JobsSection>

      {/* JOB DESCRIPTION POPUP */}
      {showJobPopup && jobDetail && (
        <PopupOverlay>
          <PopupBox>
            <CloseBtn onClick={closeJobPopup}>×</CloseBtn>

            <h2 style={{ fontWeight: 800 }}>{jobDetail.title}</h2>
            <JobDescMeta>{jobDetail.shortMeta}</JobDescMeta>
            <JobDescBody>{jobDetail.longSummary}</JobDescBody>

            <h4 style={{ fontWeight: 700 }}>Key Responsibilities</h4>
            <JobDescList>
              {jobDetail.responsibilities.map((r, i) => (
                <JobDescItem key={i}>{r}</JobDescItem>
              ))}
            </JobDescList>

            <h4 style={{ fontWeight: 700 }}>Must-Have Skills</h4>
            <JobDescList>
              {jobDetail.mustHave.map((r, i) => (
                <JobDescItem key={i}>{r}</JobDescItem>
              ))}
            </JobDescList>

            <ApplyBtn
              onClick={() => {
                closeJobPopup();
                openApplyPopup(jobDetail.title);
              }}
            >
              Apply Now
            </ApplyBtn>
          </PopupBox>
        </PopupOverlay>
      )}

      {/* APPLY POPUP */}
      {showApplyPopup && (
        <PopupOverlay>
          <PopupBox>
            <CloseBtn onClick={closeApplyPopup}>×</CloseBtn>

            <h2 style={{ fontWeight: 800 }}>Apply for {selectedJob}</h2>

            <form onSubmit={handleApplySubmit}>
              <PInput name="fullname" placeholder="Full Name" required />
              <PInput name="email" type="email" placeholder="Email Address" required />
              <PInput name="phone" placeholder="Phone Number" required />

              <PInput
                name="position"
                value={selectedJob}
                readOnly
                style={{ background: "#eee", fontWeight: 600 }}
              />

              <PTextArea
                name="message"
                placeholder="Tell us why you're a great fit"
                required
              />

              {/* This UI stays but file doesn't get uploaded (free plan) */}
              <label style={{ fontWeight: 600 }}>Upload Resume (not sent in free plan)</label>
              <PInput type="file" name="resume" accept=".pdf,.doc,.docx" />

              <PSubmit type="submit">Submit Application</PSubmit>
            </form>
          </PopupBox>
        </PopupOverlay>
      )}

      <OfficeLocations />
      <Footer />
    </PageWrapper>
  );
};

export default CareerPage;
