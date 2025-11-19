// src/pages/OfferingsFullPage.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import OfficeLocation from "../components/OfficeLocations";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

/* ----------------------------
   ASSET PATHS (local uploads + web fallbacks)
   Developer note: local uploaded images available at /mnt/data/...
   The build/tooling may convert these to URLs during preview/deploy.
-----------------------------*/
const IMG_AWARDS_LOCAL = "/mnt/data/Screenshot 2025-11-19 215040.png";
const IMG_SKILLS_LOCAL = "/mnt/data/Screenshot 2025-11-19 215449.png";
const IMG_WORK_LOCAL = "/mnt/data/Screenshot 2025-11-19 215631.png";
const IMG_GALLERY_LOCAL = "/mnt/data/Screenshot 2025-11-19 220158.png";

/* web-friendly fallbacks (fast-loading Unsplash / placeholder) */
const IMG_AWARDS_WEB = "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=1400&q=60";
const IMG_SKILLS_WEB = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60";
const IMG_WORK_WEB = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=60";
const IMG_GALLERY_WEB = "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=60";

/* blurred background for consultation section (lightweight blur param) */
const CONSULT_BG = "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=30&blur=60";

/* ===========================
   THEME / COLORS
   =========================== */
const HIGHLIGHT = "#0b6cff";
const ACCENT = "#e67e22";
const BG = "#f6f8fb";
const CARD = "#ffffff";
const TEXT = "#0b1220";
const MUTED = "#6b7a90";

/* ===========================
   STYLED COMPONENTS
   =========================== */
const Page = styled.div`
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: ${BG};
  color: ${TEXT};
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

/* HERO */
const Hero = styled.section`
  padding: 56px 0 36px;
  background: linear-gradient(180deg, rgba(11,18,32,0.02), rgba(255,255,255,0.0));
`;

const HeroInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 28px;
  align-items: center;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(28px, 4vw, 42px);
  margin: 0 0 12px 0;
  font-weight: 900;
  line-height: 1.02;
`;

const HeroLead = styled.p`
  color: ${MUTED};
  max-width: 70ch;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const HeroCTArow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.button`
  background: linear-gradient(90deg, ${HIGHLIGHT}, ${ACCENT});
  color: #fff;
  border: none;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 12px 36px rgba(11,18,32,0.08);
  transition: transform .14s ease;
  &:hover { transform: translateY(-3px); }
`;

const SecondaryBtn = styled.button`
  background: ${CARD};
  color: ${TEXT};
  border: 1px solid #e8ecf6;
  padding: 11px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
`;

/* Slider */
const SliderCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background: ${CARD};
  box-shadow: 0 18px 40px rgba(7,12,34,0.06);
  position: relative;
  min-height: 320px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
`;

/* Sections */
const Section = styled.section`
  padding: 48px 0;
  background: ${(p) => p.bg || "transparent"};
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  text-align: center;
  margin: 0 0 16px 0;
  font-weight: 800;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${(p) => p.cols || "1fr 1fr"};
  gap: 18px;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${CARD};
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 12px 36px rgba(7,12,34,0.06);
`;

/* Services grid */
const ServicesGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Card)`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

const ServiceImg = styled.img`
  width: 140px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
`;

/* Logos grid */
const LogosGrid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const LogoBox = styled.div`
  width: 140px;
  height: 70px;
  background: #fff;
  border-radius: 8px;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 20px rgba(7,12,34,0.04);
`;

/* Gallery */
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

/* Steps */
const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: linear-gradient(180deg, #ffffff, #fbfbff);
  border-radius: 10px;
  padding: 14px;
  text-align: left;
  min-height: 120px;
  box-shadow: 0 10px 28px rgba(7,12,34,0.04);
`;

/* Consultation section background + overlay */
const ConsultSectionWrap = styled.section`
  position: relative;
  padding: 56px 0;
  background: url(${CONSULT_BG}) center/cover no-repeat;
  /* fallback gradient if image fails */
  background-color: #f8fbff;
  overflow: hidden;
`;

const ConsultOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.72);
  backdrop-filter: blur(4px);
`;

/* Consultation container to ensure full-width bg but centered content */
const ConsultContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 2;
`;

/* simple form card (kept same UI) */
const FormCard = styled.form`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 18px;
  background: ${CARD};
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 12px 36px rgba(7,12,34,0.06);
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 700;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e8ecf6;
  background: #fbfdff;
  outline: none;
  font-size: 14px;
  &:focus { border-color: ${HIGHLIGHT}; box-shadow: 0 6px 18px rgba(11,108,255,0.06); }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e8ecf6;
  background: #fbfdff;
  outline: none;
  font-size: 14px;
  min-height: 110px;
  resize: vertical;
  &:focus { border-color: ${HIGHLIGHT}; box-shadow: 0 6px 18px rgba(11,108,255,0.06); }
`;

const Small = styled.div`
  font-size: 13px;
  color: ${MUTED};
`;

/* loading spinner keyframes */
const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

/* inline small spinner */
const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(11,18,32,0.12);
  border-top-color: ${HIGHLIGHT};
  animation: ${spin} 0.9s linear infinite;
  display: inline-block;
`;

/* ===========================
   PAGE DATA
   =========================== */

const servicesData = [
  {
    id: "mobile",
    title: "Mobile App Development",
    short: "Native & cross-platform mobile apps (iOS & Android).",
    long:
      "We build performant mobile apps using Flutter and React Native — feature-rich, secure and easy to maintain.",
    img: "https://images.unsplash.com/photo-1523475496153-3d6cc2f0a706?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "web",
    title: "Web & Portal Development",
    short: "Scalable web platforms, admin portals & SaaS products.",
    long:
      "Modern web architectures with React/Next, TypeScript, and backend APIs designed for scale and observability.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "api",
    title: "Backend & API Engineering",
    short: "Robust APIs, microservices & cloud systems.",
    long:
      "Secure APIs, serverless or containerized microservices, and production-grade deployment pipelines.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "ux",
    title: "UX & Product Design",
    short: "Research-led UX, prototypes & design systems.",
    long:
      "End-to-end design from discovery to pixel-perfect UI components and accessible design systems.",
    img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=900&q=60",
  },
];

const logos = [
  { id: "l1", name: "ISO 9001", img: "https://via.placeholder.com/120x60?text=ISO+9001" },
  { id: "l2", name: "AWS", img: "https://via.placeholder.com/120x60?text=AWS" },
  { id: "l3", name: "GCP", img: "https://via.placeholder.com/120x60?text=GCP" },
  { id: "l4", name: "ITIL", img: "https://via.placeholder.com/120x60?text=ITIL" },
  { id: "l5", name: "Clutch", img: "https://via.placeholder.com/120x60?text=Clutch" },
];

/* Development process steps */
const processSteps = [
  { title: "Discover", desc: "Research, stakeholder interviews, goals & scope." },
  { title: "Design", desc: "Wireframes, prototypes, usability testing." },
  { title: "Develop", desc: "Engineering sprints, CI/CD, automated tests." },
  { title: "Scale", desc: "Monitoring, optimisation & growth operations." },
];

/* ===========================
   Helper: choose local path if exists else fallback web url
   (Tooling will typically map /mnt/data/... to a public URL)
   =========================== */
const chooseAsset = (localPath, webPath) => localPath || webPath;

/* ===========================
   MAIN COMPONENT
   =========================== */
export default function OfferingsFullPage() {
  const [slide, setSlide] = useState(0);
  const sliderImgs = [
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80", caption: "We build modern digital products — fast and reliable." },
    { src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80", caption: "Data & AI powering better business decisions." },
    { src: "https://images.unsplash.com/photo-1505765053502-1d9b7c9e9f2a?auto=format&fit=crop&w=1400&q=80", caption: "Design-forward customer experiences that convert." },
  ];

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % sliderImgs.length), 5000);
    return () => clearInterval(t);
  }, []);

  /* consultation form state - keep fields as requested */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    service: servicesData[0].title,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  /* validation */
  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Please enter your name";
    if (!form.email) err.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email";
    if (!form.phone) err.phone = "Please enter your phone";
    if (!form.message) err.message = "Please enter a short message";
    // company_name optional but we will send if present
    return err;
  };

  /* send via Web3Forms */
  const sendForm = async (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setLoading(true);

    // prepare payload required by web3forms (plus phone as custom)
    const payload = {
      access_key: "9adfabce-a75b-4ab8-aea1-b79edaeeb7e0",
      subject: "New Consultation Request - SoftMaxs",
      from_name: form.name,
      reply_to: form.email,
      company_name: form.company_name || "",
      phone: form.phone || "",
      message: `Service: ${form.service}\n\nMessage:\n${form.message}`,
      // optional: you can pass full form raw as well
      form_data: form,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you — we will contact you shortly.",
          confirmButtonColor: "#0b6cff",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          company_name: "",
          service: servicesData[0].title,
          message: "",
        });
      } else {
        const text = await res.text();
        console.error("Web3Forms error:", text);
        Swal.fire({
          icon: "error",
          title: "Error Sending Message",
          text: "Something went wrong — please try again later.",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to send message. Please check your connection.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <Page>
      <Navbar />

      {/* HERO */}
      <Hero>
        <Container>
          <HeroInner>
            <div>
              <HeroTitle>Application Development Services</HeroTitle>
              <HeroLead>
                We deliver end-to-end application development — mobile, web and cloud systems — built for scale,
                security and measurable outcomes.
              </HeroLead>

              <HeroCTArow>
                <PrimaryBtn onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                  Book a Free Call
                </PrimaryBtn>
                <SecondaryBtn onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                  Learn More
                </SecondaryBtn>
              </HeroCTArow>

              <div style={{ marginTop: 16 }}>
                <LogosGrid>
                  {logos.map((l) => (
                    <LogoBox key={l.id}><img src={l.img} alt={l.name} style={{ maxWidth: "90%", maxHeight: "60%" }} /></LogoBox>
                  ))}
                </LogosGrid>
              </div>
            </div>

            <div>
              <SliderCard>
                <SlideImage src={sliderImgs[slide].src} alt={`slide-${slide}`} />
                <div style={{ position: "absolute", right: 12, top: 12 }}>
                  <PrimaryBtn style={{ padding: "8px 12px", fontSize: 13 }} onClick={() => Swal.fire("Connect", "Call placeholder - integrate your call flow here.", "info")}>
                    Connect with Expert
                  </PrimaryBtn>
                </div>
                <div style={{ position: "absolute", left: 12, bottom: 12, background: "rgba(255,255,255,0.9)", padding: "8px 12px", borderRadius: 8 }}>
                  <strong style={{ fontSize: 14 }}>{sliderImgs[slide].caption}</strong>
                </div>
              </SliderCard>
            </div>
          </HeroInner>
        </Container>
      </Hero>

      {/* Info + work image */}
      <Section>
        <Container>
          <Row cols="1fr 1fr">
            <Card>
              <h3 style={{ marginTop: 0 }}>Designed for performance & scale</h3>
              <p style={{ color: MUTED }}>Our engineering teams follow strong design, testing and deployment practices that keep your product reliable as you grow.</p>
              <ul>
                <li>Production-grade observability</li>
                <li>Secure-by-design architecture</li>
                <li>Automated testing & releases</li>
              </ul>
              <PrimaryBtn style={{ marginTop: 12 }} onClick={() => document.getElementById("consult")?.scrollIntoView({ behavior: "smooth" })}>Connect an Expert</PrimaryBtn>
            </Card>

            <Card>
              <img src={chooseAsset(IMG_WORK_LOCAL, IMG_WORK_WEB)} alt="Our work" style={{ width: "100%", borderRadius: 10, objectFit: "cover" }} />
            </Card>
          </Row>
        </Container>
      </Section>

      {/* Gallery / Case studies */}
      <Section bg="#fff">
        <Container>
          <Row cols="1fr 1fr">
            <Card>
              <img src={chooseAsset(IMG_GALLERY_LOCAL, IMG_GALLERY_WEB)} alt="Gallery" style={{ width: "100%", borderRadius: 10 }} />
            </Card>
            <Card>
              <h3 style={{ marginTop: 0 }}>Product Case Studies</h3>
              <p style={{ color: MUTED }}>We ship products across retail, health, logistics and media. Our portfolio shows a mix of consumer and B2B apps with measurable outcomes.</p>
              <ul>
                <li>Multi-region launches</li>
                <li>High availability platforms</li>
                <li>Secure payment & compliance</li>
              </ul>
              <SecondaryBtn style={{ marginTop: 12 }} onClick={() => Swal.fire("Case Studies", "Placeholder — link to case studies.", "info")}>View Case Studies</SecondaryBtn>
            </Card>
          </Row>
        </Container>
      </Section>

      {/* Services */}
      <Section id="services">
        <Container>
          <SectionTitle>Our Application Development Services Include</SectionTitle>
          <p style={{ textAlign: "center", color: MUTED }}>From discovery & design to launch and support — we provide full product delivery capabilities.</p>

          <ServicesGrid style={{ marginTop: 18 }}>
            {servicesData.map((s) => (
              <ServiceCard key={s.id}>
                <ServiceImg src={s.img} alt={s.title} />
                <div>
                  <h4 style={{ margin: 0 }}>{s.title}</h4>
                  <p style={{ color: MUTED }}>{s.short}</p>
                  <div style={{ marginTop: 8 }}>
                    <SecondaryBtn onClick={() => { setTimeout(() => document.getElementById("consult")?.scrollIntoView({ behavior: "smooth" }), 80); }}>Book a Call</SecondaryBtn>
                    <PrimaryBtn style={{ marginLeft: 8 }} onClick={() => Swal.fire(s.title, s.long, "info")}>More Info</PrimaryBtn>
                  </div>
                </div>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      {/* Our Work */}
      <Section>
        <Container>
          <SectionTitle>Our Work</SectionTitle>
          <p style={{ textAlign: "center", color: MUTED }}>Selected projects and product snapshots.</p>

          <GalleryGrid style={{ marginTop: 18 }}>
            <div><Card><img src={chooseAsset(IMG_WORK_LOCAL, IMG_WORK_WEB)} alt="Work 1" style={{ width: "100%", borderRadius: 8 }} /></Card></div>
            <div><Card><img src={sliderImgs[0].src} alt="Work 2" style={{ width: "100%", borderRadius: 8 }} /></Card></div>
            <div><Card><img src={sliderImgs[1].src} alt="Work 3" style={{ width: "100%", borderRadius: 8 }} /></Card></div>
            <div><Card><img src={sliderImgs[2].src} alt="Work 4" style={{ width: "100%", borderRadius: 8 }} /></Card></div>
            <div><Card><img src={chooseAsset(IMG_GALLERY_LOCAL, IMG_GALLERY_WEB)} alt="Work 5" style={{ width: "100%", borderRadius: 8 }} /></Card></div>
            <div><Card><img src={chooseAsset(IMG_GALLERY_LOCAL, IMG_GALLERY_WEB)} alt="Work 6" style={{ width: "100%", borderRadius: 8 }} /></Card></div>
          </GalleryGrid>
        </Container>
      </Section>

      {/* Development Process */}
      <Section bg="#f8fbff">
        <Container>
          <SectionTitle>Development Process</SectionTitle>
          <p style={{ textAlign: "center", color: MUTED }}>Our standard product delivery flow — tailored per client.</p>

          <Steps style={{ marginTop: 18 }}>
            {processSteps.map((p, i) => (
              <StepCard key={i}>
                <div style={{ fontWeight: 900, fontSize: 18 }}>{i + 1}. {p.title}</div>
                <div style={{ color: MUTED, marginTop: 8 }}>{p.desc}</div>
              </StepCard>
            ))}
          </Steps>
        </Container>
      </Section>

      {/* Awards */}
      <Section>
        <Container>
          <SectionTitle>Awards & Recognition</SectionTitle>
          <p style={{ textAlign: "center", color: MUTED }}>Industry awards and recognitions we've earned.</p>

          <div style={{ display: "grid", placeItems: "center", marginTop: 18 }}>
            <img src={chooseAsset(IMG_AWARDS_LOCAL, IMG_AWARDS_WEB)} alt="awards" style={{ maxWidth: 980, width: "100%", borderRadius: 10 }} />
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <Testimonials />
        </Container>
      </Section>

      {/* Skills Possessed */}
      <Section bg="#fff">
        <Container>
          <SectionTitle>Skills Possessed By Our App Developers</SectionTitle>
          <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 12, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <img src={IMG_SKILLS_LOCAL || IMG_SKILLS_WEB} alt="skills" style={{ width: "100%", borderRadius: 10 }} />
            </div>
            <div style={{ width: 360 }}>
              <p style={{ color: MUTED }}>Our agile and cross-functional team has strong technical expertise building mobile and web applications. We focus on continuous skill development and modern toolchains.</p>
              <ul style={{ color: MUTED }}>
                <li>Flutter, React Native</li>
                <li>React / Next.js</li>
                <li>Node.js / Go backends</li>
                <li>Cloud deployments (AWS / GCP)</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Consultation Form (full-width blurred bg behind this section) */}
      <ConsultSectionWrap id="consult">
        <ConsultOverlay />
        <ConsultContainer>
          <SectionTitle style={{ textAlign: "left" }}>Book a Free Consultation</SectionTitle>
          <Small style={{ textAlign: "left", color: MUTED }}>Fill details and we will get back in 1 business day.</Small>

          <div style={{ marginTop: 18 }}>
            <FormCard onSubmit={sendForm}>
              {/* left column: inputs */}
              <div style={{ display: "grid", gap: 12 }}>
                <Field>
                  <Label>Full name</Label>
                  <Input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  {errors.name && <Small style={{ color: "crimson" }}>{errors.name}</Small>}
                </Field>

                <Field>
                  <Label>Email</Label>
                  <Input name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <Small style={{ color: "crimson" }}>{errors.email}</Small>}
                </Field>

                <Field>
                  <Label>Phone</Label>
                  <Input name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  {errors.phone && <Small style={{ color: "crimson" }}>{errors.phone}</Small>}
                </Field>

                <Field>
                  <Label>Company Name</Label>
                  <Input name="company_name" value={form.company_name} onChange={(e) => setForm({ ...form, company_name: e.target.value })} />
                </Field>

                <Field>
                  <Label>Which service?</Label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ padding: 10, borderRadius: 8, border: "1px solid #e8ecf6", background: "#fbfdff" }}>
                    {servicesData.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </Field>

                <Field>
                  <Label>Short message</Label>
                  <Textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  {errors.message && <Small style={{ color: "crimson" }}>{errors.message}</Small>}
                </Field>

                <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6 }}>
                  <PrimaryBtn type="submit" disabled={loading}>
                    {loading ? <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><Spinner /> Sending...</span> : (submitted ? "Request sent" : "Book a Call")}
                  </PrimaryBtn>

                  <SecondaryBtn type="button" onClick={() => Swal.fire("Request call", "We will call you shortly (placeholder).", "info")}>Request Call</SecondaryBtn>
                </div>
              </div>

              {/* right column: quick contact */}
              <div>
                <Card style={{ boxShadow: "none" }}>
                  <h4 style={{ marginTop: 0 }}>Quick Contact</h4>
                  <p style={{ color: MUTED }}>Prefer direct call? Use the number below or request a callback.</p>

                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: HIGHLIGHT, color: "#fff", display: "grid", placeItems: "center", fontWeight: 800 }}>☎</div>
                    <div>
                      <div style={{ fontWeight: 800 }}>+91 98765 43210</div>
                      <div style={{ color: MUTED }}>Mon–Fri, 9am–6pm IST</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 16 }}>
                    <h5 style={{ margin: 0 }}>Download brochure</h5>
                    <SecondaryBtn style={{ marginTop: 8 }} onClick={() => Swal.fire("Download", "Brochure download placeholder", "info")}>Download</SecondaryBtn>
                  </div>
                </Card>
              </div>
            </FormCard>
          </div>
        </ConsultContainer>
      </ConsultSectionWrap>

      {/* Office */}
      <Section>
        <Container>
          <SectionTitle>Our Office</SectionTitle>
          <OfficeLocation />
        </Container>
      </Section>

      <Footer />
    </Page>
  );
}
