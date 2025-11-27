// =============================================
// NAVBAR — SoftMaxs (FINAL UPDATED)
// =============================================
import React, { useState, useRef } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const HIGHLIGHT = "#0077ff";
const BRAND_GRADIENT = "linear-gradient(90deg,#0077ff,#00c8ff)";

/* ----------------------------------------------------
   NAVBAR BASE
---------------------------------------------------- */
const Nav = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3000;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(18px);
  box-shadow: 0 2px 14px rgba(15, 23, 42, 0.12);
  color: #0f172a;
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* BRANDING */
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover img {
    transform: rotate(5deg);
  }
`;

const LogoImg = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  border: 2px solid #5dc9ff;
  transition: 0.3s ease;
  object-fit: cover;
`;

const Brand = styled.div`
  font-weight: 900;
  font-size: 24px;
  background: ${BRAND_GRADIENT};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

/* ----------------------------------------------------
   DESKTOP MENU
---------------------------------------------------- */
const Menu = styled.ul`
  display: flex;
  gap: 28px;
  list-style: none;
  font-weight: 600;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  padding: 6px 2px;
  font-size: 15px;
  position: relative;
  color: #0f172a;

  &:hover {
    color: ${HIGHLIGHT};
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: -6px;
  height: 3px;
  width: 0;
  background: ${HIGHLIGHT};
  border-radius: 999px;
  transition: transform 0.28s ease, width 0.28s ease;
`;

const CTA = styled.button`
  padding: 8px 20px;
  border-radius: 999px;
  border: none;
  background: #0f172a;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #1f2933;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

/* Mobile Toggle */
const MobileToggle = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background: #fff;
    border: 1px solid #cbd5e1;
    border-radius: 50%;
    font-size: 20px;
    color: #0f172a;
  }
`;

/* ----------------------------------------------------
   DESKTOP MEGA MENU
---------------------------------------------------- */
const Mega = styled.div`
  position: absolute;
  top: calc(100%);
  left: 0;
  right: 0;
  pointer-events: ${(p) => (p.$show ? "auto" : "none")};
  opacity: ${(p) => (p.$show ? 1 : 0)};
  transform: translateY(${(p) => (p.$show ? "10px" : "0")});
  transition: opacity 0.25s ease, transform 0.25s ease;
  display: flex;
  justify-content: center;
  z-index: 2600;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MegaInner = styled.div`
  width: min(1180px, 95%);
  background: #ffffff;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 280px 1fr;
  padding: 28px;
  gap: 32px;
  box-shadow: 0 24px 55px rgba(0, 0, 0, 0.14);
  border: 1px solid rgba(148, 163, 184, 0.35);
`;

/* LEFT */
const MegaLeft = styled.div`
  background: #f1f5f9;
  padding: 12px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const MegaLeftItem = styled.button`
  padding: 12px 14px;
  border: none;
  background: ${(p) => (p.$selected ? "#fff" : "transparent")};
  border-left: ${(p) => (p.$selected ? `4px solid ${HIGHLIGHT}` : "4px solid transparent")};
  font-weight: 700;
  cursor: pointer;
  text-align: left;
  border-radius: 10px;
  color: #0f172a;

  &:hover {
    background: #ffffff;
  }
`;

/* OFFERINGS RIGHT GRID */
const MegaRight = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const MegaCard = styled.div`
  padding: 18px 16px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  cursor: pointer;

  &:hover {
    background: #f8fafc;
    transform: translateY(-2px);
  }
`;

const MegaTitle = styled.h4`
  font-weight: 800;
  font-size: 15px;
  color: #0f172a;
`;

const MegaDesc = styled.p`
  font-size: 13px;
  margin-top: 6px;
  color: #475569;
`;

/* RIGHT DETAIL PANEL (Industries / Explore) */
const DetailLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 24px;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const DetailTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
`;

const DetailImage = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: 1100px) {
    height: 200px;
  }
`;

const DetailCTA = styled.button`
  background: none;
  border: none;
  color: ${HIGHLIGHT};
  margin-top: 10px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

/* ----------------------------------------------------
   MOBILE PANEL (Overlay + Drawer)
---------------------------------------------------- */
const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${(p) => (p.$open ? "rgba(0,0,0,0.5)" : "transparent")};
  backdrop-filter: ${(p) => (p.$open ? "blur(8px)" : "none")};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition: 0.3s;
  z-index: 3000;

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobilePanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 82%;
  max-width: 360px;
  height: ${(p) => (p.$open ? "100%" : "0")};
  overflow: hidden;
  background: #0f172a;
  color: #fff;
  border-bottom-right-radius: 22px;
  transition: 0.32s ease;
  z-index: 3500;
  padding: ${(p) => (p.$open ? "18px" : "0")};

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileList = styled.ul`
  list-style: none;
  margin-top: 22px;
  padding: 0;
  width: 100%;
`;

const Section = styled.li`
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px 0;
`;

const SectionHeader = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.95rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Chevron = styled.span`
  transition: 0.25s ease;
  transform: ${(p) => (p.$open ? "rotate(90deg)" : "rotate(0deg)")};
`;

const Dropdown = styled.div`
  max-height: ${(p) => (p.$open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.28s ease;
  padding-left: ${(p) => (p.$open ? "10px" : "0")};
`;

const SubList = styled.ul`
  list-style: none;
  padding-left: 12px;
  margin: 6px 0;
`;

const SubItem = styled.li`
  padding: 5px 0;
`;

const SubLink = styled.button`
  background: transparent;
  border: none;
  color: #cbd5f5;
  font-size: 0.85rem;
  text-align: left;
  width: 100%;

  &:hover {
    color: #ffffff;
  }
`;

const SimpleLink = styled.button`
  background: transparent;
  border: none;
  color: #cbd5f5;
  font-size: 0.9rem;
  width: 100%;
  text-align: left;
  padding: 4px 0;

  &:hover {
    color: #ffffff;
  }
`;

/* ================================================
   MAIN COMPONENT
================================================ */
export default function Navbar() {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const underlineRef = useRef(null);

  const [megaOpen, setMegaOpen] = useState(false);
  const [megaTop, setMegaTop] = useState("");
  const [leftSelected, setLeftSelected] = useState(0);

  const [mobileOpen, setMobileOpen] = useState(false);

  // Mobile dropdown states
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [mobileOfferCatIdx, setMobileOfferCatIdx] = useState(null);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  /* OFFERINGS DATA (with descriptions for desktop) */
  const OFFERINGS = {
    left: ["IT & Software", "Emerging Technologies", "Design & Strategy", "Platform Specialization"],
    right: [
      [
        { t: "Mobile App Development", d: "Native & cross-platform apps for iOS and Android.", link: "/offerings" },
        { t: "Web Development", d: "High-performing web apps and portals.", link: "/web-development" },
        { t: "ECommerce Development", d: "Stores & marketplaces optimised for conversion.", link: "/ecommerce" },
        { t: "Database Solutions", d: "Architecture, performance & scaling.", link: "/database-solutions" },
      ],
      [
        { t: "AI & Automation", d: "AI copilots, ML models and workflow automation.", link: "/ai-automation" },
        { t: "Cloud & DevOps", d: "CI/CD pipelines and cloud-native infrastructure.", link: "/cloud-devops" },
        { t: "IoT Engineering", d: "Connected devices, telemetry and control.", link: "/iot-solutions" },
        { t: "Blockchain Solutions", d: "Web3, smart contracts and secure ledgers.", link: "/blockchain-solutions" },
      ],
      [
        { t: "UI/UX Engineering", d: "Interfaces that feel effortless across web and mobile.", link: "/ui-ux" },
        { t: "CX Consulting", d: "Customer journeys, service blueprints & CX.", link: "/cx-consulting" },
      ],
      [
        { t: "Shopify Development", d: "Custom Shopify themes, apps and integrations.", link: "/shopify-development" },
        { t: "Magento Development", d: "Enterprise Adobe Commerce implementations.", link: "/magento-development" },
        { t: "WordPress Development", d: "CMS & marketing sites built for speed.", link: "/wordpress-development" },
      ],
    ],
  };

  /* INDUSTRIES DATA (with descriptions for desktop) */
  const INDUSTRIES = [
    {
      t: "We Serve",
      d: "SoftMaxs partners with enterprises and growing teams across manufacturing, SaaS, retail and services.",
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=900&auto=format&fit=crop&q=80",
      link: "/industries", // ← as you requested
    },
    {
      t: "ECommerce",
      d: "Building scalable digital commerce ecosystems for D2C brands and marketplaces.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&q=80",
      link: "/ecommerce",
    },
    {
      t: "Blockchain Solutions",
      d: "Web3, DeFi and digital identity use-cases delivered safely.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=900&auto=format&fit=crop&q=80",
      link: "/blockchain-solutions",
    },
    {
      t: "CX Consulting",
      d: "Redesign customer journeys across every touchpoint.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&auto=format&fit=crop&q=80",
      link: "/cx-counsulting",
    },
    {
      t: "Digital Marketing",
      d: "Performance SEO, paid media and lifecycle marketing.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&auto=format&fit=crop&q=80",
      link: "/digital-marketing",
    },
  ];

  /* EXPLORE DATA (with descriptions for desktop) */
  const EXPLORE = [
    {
      t: "About Us",
      d: "Learn our story, values and how the SoftMaxs team works.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&q=80",
      link: "/about",
    },
    {
      t: "Why SoftMaxs",
      d: "What makes SoftMaxs different for your roadmap.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
      link: "/why-softmaxs",
    },
    {
      t: "FAQ’s",
      d: "Timelines, tech stacks, engagement models and more.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
      link: "/faq",
    },
    {
      t: "Privacy & Policy",
      d: "Exactly how we handle and protect your data.",
      img: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e0?w=900&auto=format&fit=crop&q=80",
      link: "/privacy-policy",
    },
  ];

  /* ----------------------------------------------------
     DESKTOP — HANDLE TOP NAV
  ---------------------------------------------------- */
  const handleTopClick = (item) => {
    setLeftSelected(0);

    if (["Offerings", "Industries", "Explore SoftMaxs"].includes(item)) {
      setMegaTop(item);
      setMegaOpen(true);
      return; // no redirect for these
    }

    if (item === "Pricing") navigate("/pricing");
    if (item === "Careers") navigate("/careers");
  };

  /* ----------------------------------------------------
     DESKTOP — UNDERLINE HOVER
  ---------------------------------------------------- */
  const moveUnderline = (label) => {
    const underlineEl = underlineRef.current;
    const menuEl = menuRef.current;
    if (!underlineEl || !menuEl) return;

    if (!label) {
      underlineEl.style.width = "0px";
      return;
    }

    const items = menuEl.querySelectorAll("li");
    const target = [...items].find((n) => n.innerText === label);
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const parentRect = menuEl.getBoundingClientRect();

    underlineEl.style.width = `${rect.width}px`;
    underlineEl.style.transform = `translateX(${rect.left - parentRect.left}px)`;
  };

  /* ----------------------------------------------------
     DESKTOP RIGHT PANEL
  ---------------------------------------------------- */
  const renderRight = () => {
    if (megaTop === "Offerings") {
      return (
        <MegaRight>
          {OFFERINGS.right[leftSelected].map((s) => (
            <MegaCard key={s.t} onClick={() => navigate(s.link)}>
              <MegaTitle>{s.t}</MegaTitle>
              <MegaDesc>{s.d}</MegaDesc>
            </MegaCard>
          ))}
        </MegaRight>
      );
    }

    if (megaTop === "Industries") {
      const i = INDUSTRIES[leftSelected];
      return (
        <DetailLayout>
          <div>
            <DetailTitle>{i.t}</DetailTitle>
            <MegaDesc>{i.d}</MegaDesc>
            <DetailCTA onClick={() => navigate(i.link)}>Explore {i.t} →</DetailCTA>
          </div>
          <DetailImage src={i.img} alt={i.t} />
        </DetailLayout>
      );
    }

    if (megaTop === "Explore SoftMaxs") {
      const e = EXPLORE[leftSelected];
      return (
        <DetailLayout>
          <div>
            <DetailTitle>{e.t}</DetailTitle>
            <MegaDesc>{e.d}</MegaDesc>
            <DetailCTA onClick={() => navigate(e.link)}>Open {e.t} →</DetailCTA>
          </div>
          <DetailImage src={e.img} alt={e.t} />
        </DetailLayout>
      );
    }

    return null;
  };

  /* ----------------------------------------------------
     MOBILE HANDLERS
  ---------------------------------------------------- */
  const goTo = (link) => {
    setMobileOpen(false);
    navigate(link);
  };

  const handleToggleOfferingsMain = () => {
    const newOpen = !mobileOfferingsOpen;
    setMobileOfferingsOpen(newOpen);
    setMobileOfferCatIdx(null);
    if (newOpen) {
      setMobileIndustriesOpen(false);
      setMobileExploreOpen(false);
    }
  };

  const handleToggleOfferCategory = (idx) => {
    setMobileOfferCatIdx((prev) => (prev === idx ? null : idx));
  };

  const handleToggleIndustries = () => {
    const newOpen = !mobileIndustriesOpen;
    setMobileIndustriesOpen(newOpen);
    if (newOpen) {
      setMobileOfferingsOpen(false);
      setMobileOfferCatIdx(null);
      setMobileExploreOpen(false);
    }
  };

  const handleToggleExplore = () => {
    const newOpen = !mobileExploreOpen;
    setMobileExploreOpen(newOpen);
    if (newOpen) {
      setMobileOfferingsOpen(false);
      setMobileOfferCatIdx(null);
      setMobileIndustriesOpen(false);
    }
  };

  /* ----------------------------------------------------
     RENDER
  ---------------------------------------------------- */

  return (
    <>
      <Nav>
        <Inner>
          <LogoWrap
            onClick={() => {
              navigate("/");
              setMegaOpen(false);
            }}
          >
            <LogoImg src={Logo} alt="SoftMaxs logo" />
            <Brand>SoftMaxs</Brand>
          </LogoWrap>

          {/* DESKTOP MENU */}
          <Menu ref={menuRef}>
            <Underline ref={underlineRef} />
            {["Offerings", "Industries", "Explore SoftMaxs", "Pricing", "Careers"].map((m) => (
              <MenuItem
                key={m}
                onMouseEnter={() => moveUnderline(m)}
                onMouseLeave={() => moveUnderline("")}
                onClick={() => handleTopClick(m)}
              >
                {m}
              </MenuItem>
            ))}
          </Menu>

          <CTA
            onClick={() => {
              setMegaOpen(false);
              navigate("/contact");
            }}
          >
            Let&apos;s Talk
          </CTA>

          {/* MOBILE HAMBURGER */}
          <MobileToggle onClick={() => setMobileOpen(true)}>☰</MobileToggle>
        </Inner>

        {/* DESKTOP MEGA MENU */}
        <Mega $show={megaOpen}>
          {megaOpen && (
            <MegaInner
              onMouseLeave={() => {
                setMegaOpen(false);
                moveUnderline("");
              }}
            >
              <MegaLeft>
                {megaTop === "Offerings" &&
                  OFFERINGS.left.map((c, idx) => (
                    <MegaLeftItem
                      key={c}
                      $selected={leftSelected === idx}
                      onMouseEnter={() => setLeftSelected(idx)}
                    >
                      {c}
                    </MegaLeftItem>
                  ))}

                {megaTop === "Industries" &&
                  INDUSTRIES.map((i, idx) => (
                    <MegaLeftItem
                      key={i.t}
                      $selected={leftSelected === idx}
                      onClick={() => setLeftSelected(idx)}
                    >
                      {i.t}
                    </MegaLeftItem>
                  ))}

                {megaTop === "Explore SoftMaxs" &&
                  EXPLORE.map((e, idx) => (
                    <MegaLeftItem
                      key={e.t}
                      $selected={leftSelected === idx}
                      onClick={() => setLeftSelected(idx)}
                    >
                      {e.t}
                    </MegaLeftItem>
                  ))}
              </MegaLeft>

              {renderRight()}
            </MegaInner>
          )}
        </Mega>
      </Nav>

      {/* MOBILE OVERLAY */}
      <MobileOverlay $open={mobileOpen} onClick={() => setMobileOpen(false)} />

      {/* MOBILE PANEL */}
      <MobilePanel
        $open={mobileOpen}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {mobileOpen && (
          <>
            {/* Logo */}
            <LogoWrap onClick={() => goTo("/")}>
              <LogoImg src={Logo} alt="SoftMaxs" />
              <Brand>SoftMaxs</Brand>
            </LogoWrap>

            <MobileList>
              {/* OFFERINGS — Category + Subcategory dropdowns */}
              <Section>
                <SectionHeader onClick={handleToggleOfferingsMain}>
                  <span>Offerings</span>
                  <Chevron $open={mobileOfferingsOpen}>›</Chevron>
                </SectionHeader>

                <Dropdown $open={mobileOfferingsOpen}>
                  {OFFERINGS.left.map((cat, idx) => (
                    <div key={cat}>
                      <SectionHeader onClick={() => handleToggleOfferCategory(idx)}>
                        <span>{cat}</span>
                        <Chevron $open={mobileOfferCatIdx === idx}>›</Chevron>
                      </SectionHeader>

                      <Dropdown $open={mobileOfferCatIdx === idx}>
                        <SubList>
                          {OFFERINGS.right[idx].map((svc) => (
                            <SubItem key={svc.t}>
                              <SubLink onClick={() => goTo(svc.link)}>{svc.t}</SubLink>
                            </SubItem>
                          ))}
                        </SubList>
                      </Dropdown>
                    </div>
                  ))}
                </Dropdown>
              </Section>

              {/* INDUSTRIES — simple list under one dropdown, categories redirect on click */}
              <Section>
                <SectionHeader onClick={handleToggleIndustries}>
                  <span>Industries</span>
                  <Chevron $open={mobileIndustriesOpen}>›</Chevron>
                </SectionHeader>

                <Dropdown $open={mobileIndustriesOpen}>
                  {INDUSTRIES.map((i) => (
                    <SubItem key={i.t}>
                      <SimpleLink onClick={() => goTo(i.link)}>{i.t}</SimpleLink>
                    </SubItem>
                  ))}
                </Dropdown>
              </Section>

              {/* EXPLORE SOFTMAXS — simple list */}
              <Section>
                <SectionHeader onClick={handleToggleExplore}>
                  <span>Explore SoftMaxs</span>
                  <Chevron $open={mobileExploreOpen}>›</Chevron>
                </SectionHeader>

                <Dropdown $open={mobileExploreOpen}>
                  {EXPLORE.map((e) => (
                    <SubItem key={e.t}>
                      <SimpleLink onClick={() => goTo(e.link)}>{e.t}</SimpleLink>
                    </SubItem>
                  ))}
                </Dropdown>
              </Section>

              {/* OTHER LINKS */}
              <Section>
                <SimpleLink onClick={() => goTo("/pricing")}>Pricing</SimpleLink>
              </Section>
              <Section>
                <SimpleLink onClick={() => goTo("/careers")}>Careers</SimpleLink>
              </Section>
              <Section>
                <SimpleLink onClick={() => goTo("/contact")}>Contact Us</SimpleLink>
              </Section>
            </MobileList>
          </>
        )}
      </MobilePanel>
    </>
  );
}
