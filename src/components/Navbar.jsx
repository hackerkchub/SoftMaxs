// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const HIGHLIGHT = "#0077ff";

/* ================================
   STYLES
================================ */
const Nav = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2000;
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(255, 255, 255, 0.96)" : "rgba(255, 255, 255, 0.9)"};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 2px 12px rgba(15, 23, 42, 0.12)" : "0 1px 6px rgba(15, 23, 42, 0.06)"};
  transition: background 0.25s ease, box-shadow 0.25s ease, padding 0.25s ease;
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: ${({ $scrolled }) => ($scrolled ? "10px 18px" : "14px 18px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  height: clamp(32px, 6vw, 42px);
  width: clamp(32px, 6vw, 42px);
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #4db6ff;
`;

const Brand = styled.div`
  font-weight: 800;
  color: ${HIGHLIGHT};
  font-size: clamp(18px, 3vw, 22px);
`;

/* desktop menu */
const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 26px;
  font-weight: 600;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

/* underline element */
const Underline = styled.div`
  position: absolute;
  bottom: -6px;
  height: 3px;
  background: ${HIGHLIGHT};
  border-radius: 999px;
  transition: transform 0.28s ease, width 0.28s ease;
  will-change: transform, width;
`;

const MenuItem = styled.li`
  padding: 6px 2px;
  cursor: pointer;
  position: relative;
  font-size: 15px;
  color: #111827;
`;

/* desktop CTA (optional) */
const CTA = styled.button`
  padding: 8px 18px;
  border-radius: 999px;
  border: none;
  background: #0f172a;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.25);
  transition: 0.2s ease;
  margin-left: 16px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(15, 23, 42, 0.35);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

/* Mega menu wrapper */
const Mega = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100%);
  pointer-events: ${(p) => (p.$show ? "auto" : "none")};
  opacity: ${(p) => (p.$show ? 1 : 0)};
  transform: translateY(${(p) => (p.$show ? "8px" : "0px")});
  transition: opacity 0.22s ease, transform 0.22s ease;
  display: flex;
  justify-content: center;
  z-index: 1500;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MegaInner = styled.div`
  width: min(1100px, 94%);
  background: rgba(255, 255, 255, 0.98);
  border-radius: 14px;
  padding: 22px 22px 20px;
  display: flex;
  gap: 24px;
  box-shadow: 0 20px 55px rgba(15, 23, 42, 0.18);
  border: 1px solid rgba(148, 163, 184, 0.35);
`;

/* mega left */
const MegaLeft = styled.div`
  min-width: 250px;
  background: #f9fafb;
  border-radius: 10px;
  padding: 14px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MegaLeftItem = styled.button`
  background: ${(p) => (p.$selected ? "rgba(239, 246, 255, 0.95)" : "transparent")};
  border: none;
  padding: 8px 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  color: ${(p) => (p.$selected ? "#0f172a" : "#111827")};
  border-left: ${(p) =>
    p.$selected ? `3px solid ${HIGHLIGHT}` : "3px solid transparent"};

  span:last-child {
    opacity: 0.6;
  }

  &:hover {
    background: rgba(239, 246, 255, 0.9);
  }
`;

/* mega right */
const MegaRight = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
`;

const MegaCard = styled.div`
  padding: 8px 2px;
`;

const MegaTitle = styled.h5`
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 0.93rem;
  color: #0f172a;
`;

const MegaDesc = styled.p`
  margin: 0;
  color: #4b5563;
  font-size: 0.8rem;
`;

/* ==========================
   MOBILE MENU
========================== */
const MobileToggle = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    width: 34px;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.6);
    background: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    position: relative;
  }
`;

const BurgerLines = styled.div`
  position: relative;
  width: 18px;
  height: 2px;
  background: #0f172a;
  border-radius: 999px;
  transition: 0.22s ease;
  transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0deg)")};

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 18px;
    height: 2px;
    background: #0f172a;
    border-radius: 999px;
    transition: 0.22s ease;
  }

  &::before {
    top: ${({ $open }) => ($open ? "0px" : "-6px")};
    opacity: 1;
  }

  &::after {
    top: ${({ $open }) => ($open ? "0px" : "6px")};
    transform: ${({ $open }) => ($open ? "rotate(-90deg)" : "rotate(0deg)")};
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  z-index: 1900;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.25s ease;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const MobilePanel = styled.div`
  width: 100%;
  max-width: 480px;
  background: rgba(15, 23, 42, 0.96);
  color: #f9fafb;
  padding: 16px 18px 32px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.45);
  transform: translateY(${({ $open }) => ($open ? "0" : "-14px")});
  transition: transform 0.28s ease;
`;

const MobileTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileBrandWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MobileClose = styled.button`
  border: none;
  background: transparent;
  color: #e5e7eb;
  font-size: 1.2rem;
  cursor: pointer;
`;

const MobileList = styled.ul`
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
`;

const MobileItem = styled.li`
  padding: 10px 2px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.4);
`;

const MobileBtn = styled.button`
  width: 100%;
  text-align: left;
  border: none;
  background: transparent;
  color: #e5e7eb;
  font-size: 0.98rem;
  font-weight: 600;
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const MobileSub = styled.div`
  margin-top: 6px;
  padding-left: 4px;
  font-size: 0.82rem;
  color: #9ca3af;
`;

/* ================================
   COMPONENT
================================ */
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef(null);
  const menuRef = useRef(null);
  const underlineRef = useRef(null);

  const [hovered, setHovered] = useState("");
  const [activeTop, setActiveTop] = useState("");
  const [megaOpen, setMegaOpen] = useState(false);
  const [megaLocked, setMegaLocked] = useState(false);
  const [megaTop, setMegaTop] = useState("");
  const [leftSelected, setLeftSelected] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  /* ACTIVE SECTION BY PAGE */
  useEffect(() => {
    if (location.pathname.startsWith("/offerings")) setActiveTop("Offerings");
    else if (location.pathname.startsWith("/industries")) setActiveTop("Industries");
    else if (location.pathname.startsWith("/explore")) setActiveTop("Explore SoftMaxs");
    else if (location.pathname.startsWith("/resources")) setActiveTop("Resources");
    else if (location.pathname.startsWith("/careers")) setActiveTop("Careers");
    else if (location.pathname.startsWith("/contact")) setActiveTop("Contact Us");
    else setActiveTop("");
  }, [location.pathname]);

  /* SCROLL → COMPACT NAV */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* UNDERLINE MOVEMENT */
  const moveUnderline = (label) => {
    const items = menuRef.current?.querySelectorAll("li");
    const underline = underlineRef.current;

    if (!items || !underline) return;

    const item = [...items].find((el) => el.innerText === label);
    if (!item) return;

    const rect = item.getBoundingClientRect();
    const parentRect = menuRef.current.getBoundingClientRect();

    underline.style.width = rect.width + "px";
    underline.style.transform = `translateX(${rect.left - parentRect.left}px)`;
  };

  /* hover underline */
  useEffect(() => {
    if (hovered) moveUnderline(hovered);
  }, [hovered]);

  /* active underline */
  useEffect(() => {
    if (activeTop) moveUnderline(activeTop);
    else if (underlineRef.current) {
      underlineRef.current.style.width = "0px";
    }
  }, [activeTop]);

  /* OUTSIDE CLICK TO CLOSE MEGA WHEN OPEN OR LOCKED */
  useEffect(() => {
    const handler = (e) => {
      const navEl = navRef.current;
      const megaEl = document.getElementById("mega-menu");

      if (!megaOpen && !megaLocked) return;

      if (
        navEl &&
        megaEl &&
        !navEl.contains(e.target) &&
        !megaEl.contains(e.target)
      ) {
        setMegaOpen(false);
        setMegaLocked(false);
        setMegaTop("");
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [megaOpen, megaLocked]);

  /* MEGA MENU DATA */
  const MEGA_DATA = {
    Offerings: {
      left: [
        "Engineering & Development",
        "Marketing & Communication",
        "Data Science & Analytics",
        "CX Consulting & Strategy",
        "Maintenance & Support",
      ],
      rightByLeft: [
        [
          { title: "Web & Mobile", desc: "React, Next, Flutter apps." },
          { title: "Backend", desc: "Node, Go, Java APIs." },
        ],
        [
          { title: "Growth Marketing", desc: "Conversion-led campaigns." },
          { title: "Brand Systems", desc: "Visual identity systems." },
        ],
        [
          { title: "ML Models", desc: "Predictive systems." },
          { title: "Data Warehousing", desc: "ETL pipelines." },
        ],
        [
          { title: "CX Strategy", desc: "Customer journey mapping." },
          { title: "Design Systems", desc: "UI/UX foundations." },
        ],
        [
          { title: "Support & Ops", desc: "Monitoring & alerts." },
          { title: "SRE", desc: "Cloud reliability." },
        ],
      ],
    },

    Industries: {
      left: ["Industry & Automation", "Nonprofit", "eCommerce", "Media & Publishing"],
      rightByLeft: [
        [
          { title: "Smart Factories", desc: "IoT + automation." },
          { title: "Robotics", desc: "Telemetry & control." },
        ],
        [
          { title: "Donor Platforms", desc: "Fundraising + CRM." },
          { title: "Volunteer Tools", desc: "Engagement apps." },
        ],
        [
          { title: "Storefronts", desc: "Commerce engines." },
          { title: "Marketplace", desc: "Vendor platforms." },
        ],
        [
          { title: "Publishing", desc: "CMS + workflows." },
          { title: "OTT", desc: "Streaming platforms." },
        ],
      ],
    },

    "Explore SoftMaxs": {
      left: ["Success Stories", "Insights", "The Team", "Blog"],
      rightByLeft: [
        [
          { title: "Case Studies", desc: "Business outcomes." },
          { title: "Testimonials", desc: "Client voices." },
        ],
        [
          { title: "Guides", desc: "Step-by-step resources." },
          { title: "Research", desc: "Deep insights." },
        ],
        [
          { title: "Leadership", desc: "Team profiles." },
          { title: "Culture", desc: "Our values." },
        ],
        [
          { title: "Articles", desc: "Latest updates." },
          { title: "Announcements", desc: "Major releases." },
        ],
      ],
    },
  };

  /* CLICK ON TOP ITEM (desktop) */
  const handleTopClick = (label) => {
    if (["Offerings", "Industries", "Explore SoftMaxs"].includes(label)) {
      setMegaTop(label);
      setLeftSelected(0);
      setMegaOpen(true);
      setMegaLocked(true); // lock until outside click
      return;
    }

    const map = {
      Resources: "/resources",
      Careers: "/careers",
      "Contact Us": "/contact",
    };

    navigate(map[label] || "/");
    setActiveTop(label);
    setMegaOpen(false);
    setMegaLocked(false);
  };

  /* DOUBLE CLICK => DIRECT NAV */
  const handleDoubleClick = (label) => {
    const map = {
      Offerings: "/offerings",
      Industries: "/industries",
      "Explore SoftMaxs": "/explore",
    };

    if (map[label]) {
      navigate(map[label]);
      setActiveTop(label);
    }

    setMegaOpen(false);
    setMegaLocked(false);
  };

  /* HOVER TO OPEN MEGA (ONLY WHEN NOT LOCKED) */
  const handleHover = (label) => {
    setHovered(label);

    if (!megaLocked && ["Offerings", "Industries", "Explore SoftMaxs"].includes(label)) {
      setMegaTop(label);
      setLeftSelected(0);
      setMegaOpen(true);
    }
  };

  /* MOBILE NAVIGATION HANDLERS */
  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <Nav id="navbar-root" ref={navRef} $scrolled={scrolled}>
        <Inner $scrolled={scrolled}>
          <LogoWrap onClick={() => navigate("/")}>
            <LogoImg src={Logo} alt="SoftMaxs logo" />
            <Brand>SoftMaxs</Brand>
          </LogoWrap>

          {/* DESKTOP MENU */}
          <Menu ref={menuRef}>
            <Underline ref={underlineRef} />

            {["Offerings", "Industries", "Explore SoftMaxs", "Resources", "Careers", "Contact Us"].map(
              (item) => (
                <MenuItem
                  key={item}
                  onMouseEnter={() => handleHover(item)}
                  onMouseLeave={() => setHovered("")}
                  onClick={() => handleTopClick(item)}
                  onDoubleClick={() => handleDoubleClick(item)}
                >
                  {item}
                </MenuItem>
              )
            )}
          </Menu>

          {/* Desktop CTA (optional) */}
          <CTA onClick={() => navigate("/contact")}>
            Let&apos;s talk
          </CTA>

          {/* MOBILE TOGGLE */}
          <MobileToggle
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((p) => !p)}
          >
            <BurgerLines $open={mobileOpen} />
          </MobileToggle>
        </Inner>

        {/* MEGA MENU (DESKTOP ONLY) */}
        <Mega
          id="mega-menu"
          $show={megaOpen}
          onMouseLeave={() => {
            if (!megaLocked) setMegaOpen(false);
          }}
        >
          {megaOpen && megaTop && MEGA_DATA[megaTop] && (
            <MegaInner>
              <MegaLeft>
                {MEGA_DATA[megaTop].left.map((item, i) => (
                 <MegaLeftItem
  key={item}
  $selected={i === leftSelected}
  onMouseEnter={() => setLeftSelected(i)}
  onClick={() => {
    if (megaTop === "Industries" && item === "eCommerce") {
      navigate("/ecommerce");
      setMegaOpen(false);
      setMegaLocked(false);
      setMegaTop("");
      return;
    }
  }}
>

                    <span>{item}</span>
                    <span>›</span>
                  </MegaLeftItem>
                ))}
              </MegaLeft>

              <MegaRight>
                {MEGA_DATA[megaTop].rightByLeft[leftSelected].map((card, c) => (
                  <MegaCard key={c}>
                    <MegaTitle>{card.title}</MegaTitle>
                    <MegaDesc>{card.desc}</MegaDesc>
                  </MegaCard>
                ))}
              </MegaRight>
            </MegaInner>
          )}
        </Mega>
      </Nav>

      {/* MOBILE FULL-SCREEN OVERLAY MENU */}
      <MobileOverlay
        $open={mobileOpen}
        onClick={(e) => {
          // click outside panel => close
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
      >
        <MobilePanel $open={mobileOpen}>
          <MobileTopBar>
            <MobileBrandWrap onClick={() => goTo("/")}>
              <LogoImg src={Logo} alt="SoftMaxs" />
              <Brand>SoftMaxs</Brand>
            </MobileBrandWrap>

            <MobileClose onClick={() => setMobileOpen(false)}>✕</MobileClose>
          </MobileTopBar>

          <MobileList>
            <MobileItem>
              <MobileBtn onClick={() => goTo("/offerings")}>
                <span>Offerings</span>
                <span>›</span>
              </MobileBtn>
              <MobileSub>Engineering, marketing, analytics & more.</MobileSub>
            </MobileItem>

            <MobileItem>
              <MobileBtn onClick={() => goTo("/industries")}>
                <span>Industries</span>
                <span>›</span>
              </MobileBtn>
              <MobileSub>Solutions for eCommerce, media, nonprofit & more.</MobileSub>
            </MobileItem>

            <MobileItem>
              <MobileBtn onClick={() => goTo("/explore")}>
                <span>Explore SoftMaxs</span>
                <span>›</span>
              </MobileBtn>
              <MobileSub>Case studies, team, culture & insights.</MobileSub>
            </MobileItem>

            <MobileItem>
              <MobileBtn onClick={() => goTo("/resources")}>
                <span>Resources</span>
              </MobileBtn>
            </MobileItem>

            <MobileItem>
              <MobileBtn onClick={() => goTo("/careers")}>
                <span>Careers</span>
              </MobileBtn>
            </MobileItem>

            <MobileItem>
              <MobileBtn onClick={() => goTo("/contact")}>
                <span>Contact Us</span>
              </MobileBtn>
            </MobileItem>
          </MobileList>
        </MobilePanel>
      </MobileOverlay>
    </>
  );
}
