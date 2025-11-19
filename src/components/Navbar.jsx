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
  background: ${({ $scrolled }) => ($scrolled ? "#ffffff" : "transparent")};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 2px 10px rgba(2,6,23,0.06)" : "none"};
  transition: 0.28s ease;
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: ${({ $scrolled }) => ($scrolled ? "12px 22px" : "18px 22px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  height: clamp(36px, 6vw, 48px);
  width: clamp(36px, 6vw, 48px);
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #4db6ff;
`;

const Brand = styled.div`
  font-weight: 800;
  color: ${HIGHLIGHT};
  font-size: clamp(18px, 3vw, 24px);
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 28px;
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
  border-radius: 4px;
  transition: transform 0.28s ease, width 0.28s ease;
  will-change: transform, width;
`;

const MenuItem = styled.li`
  padding: 6px 2px;
  cursor: pointer;
  position: relative;
  font-size: 15px;
  color: #111;
`;

const CTA = styled.button`
  padding: 10px 20px;
  border-radius: 36px;
  border: none;
  background: ${HIGHLIGHT};
  color: #fff;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Mega = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 8px);
  pointer-events: ${(p) => (p.$show ? "auto" : "none")};
  opacity: ${(p) => (p.$show ? 1 : 0)};
  transform: translateY(${(p) => (p.$show ? "0px" : "-8px")});
  transition: 0.25s ease;
  display: flex;
  justify-content: center;
  z-index: 1500;
`;

const MegaInner = styled.div`
  width: min(1100px, 94%);
  background: #fff;
  border-radius: 10px;
  padding: 26px;
  display: flex;
  gap: 28px;
  box-shadow: 0 18px 50px rgba(7, 12, 34, 0.08);
`;

const MegaLeft = styled.div`
  min-width: 260px;
  background: #fbfbfd;
  border-radius: 8px;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MegaLeftItem = styled.button`
  background: transparent;
  border: none;
  padding: 10px 8px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-left: ${(p) =>
    p.$selected ? `4px solid ${HIGHLIGHT}` : "4px solid transparent"};
`;

const MegaRight = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
`;

const MegaCard = styled.div``;

const MegaTitle = styled.h5`
  font-weight: 800;
  margin-bottom: 6px;
`;

const MegaDesc = styled.p`
  margin: 0;
  color: #444;
`;

/* ================================
   COMPONENT
================================ */
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuRef = useRef(null);
  const underlineRef = useRef(null);

  const [hovered, setHovered] = useState("");
  const [activeTop, setActiveTop] = useState("");
  const [megaOpen, setMegaOpen] = useState(false);
  const [megaLocked, setMegaLocked] = useState(false);
  const [megaTop, setMegaTop] = useState("");
  const [leftSelected, setLeftSelected] = useState(0);

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

  /* Move underline on hover */
  useEffect(() => {
    if (hovered) moveUnderline(hovered);
  }, [hovered]);

  /* Move underline on active section */
  useEffect(() => {
    if (activeTop) moveUnderline(activeTop);
    else underlineRef.current.style.width = "0px";
  }, [activeTop]);

  /* OUTSIDE CLICK TO CLOSE MEGA MENU */
  useEffect(() => {
    const handler = (e) => {
      const mega = document.getElementById("mega-menu");
      const nav = document.getElementById("navbar-root");

      if (
        megaOpen &&
        mega &&
        !mega.contains(e.target) &&
        nav &&
        !nav.contains(e.target)
      ) {
        setMegaOpen(false);
        setMegaLocked(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [megaOpen]);

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

  /* SINGLE CLICK = LOCK */
  const handleTopClick = (label) => {
    if (["Offerings", "Industries", "Explore SoftMaxs"].includes(label)) {
      setMegaTop(label);
      setLeftSelected(0);
      setMegaOpen(true);
      setMegaLocked(true);
      return;
    }

    const map = {
      Resources: "/resources",
      Careers: "/careers",
      "Contact Us": "/contact",
    };

    navigate(map[label] || "/");
    setActiveTop(label);
  };

  /* DOUBLE CLICK = DIRECT NAVIGATE */
  const handleDoubleClick = (label) => {
    const map = {
      Offerings: "/offerings",
      Industries: "/industries",
      "Explore SoftMaxs": "/explore",
    };

    navigate(map[label]);
    setActiveTop(label);
    setMegaOpen(false);
    setMegaLocked(false);
  };

  /* HOVER → OPEN ONLY IF NOT LOCKED */
  const handleHover = (label) => {
    setHovered(label);

    if (!megaLocked && ["Offerings", "Industries", "Explore SoftMaxs"].includes(label)) {
      setMegaTop(label);
      setLeftSelected(0);
      setMegaOpen(true);
    }
  };

  return (
    <>
      <Nav id="navbar-root">
        <Inner>
          <LogoWrap onClick={() => navigate("/")}>
            <LogoImg src={Logo} />
            <Brand>SoftMaxs</Brand>
          </LogoWrap>

          {/* TOP MENU */}
          <Menu ref={menuRef}>
            {/* sliding underline */}
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
                  {item === "Explore" ? "Explore SoftMaxs" : item}
                </MenuItem>
              )
            )}
          </Menu>

         
        </Inner>

        {/* MEGA MENU */}
        <Mega
          id="mega-menu"
          $show={megaOpen}
          onMouseLeave={() => {
            if (!megaLocked) setMegaOpen(false);
          }}
        >
          {megaOpen && (
            <MegaInner>
              <MegaLeft>
                {MEGA_DATA[megaTop].left.map((item, i) => (
                  <MegaLeftItem
                    key={item}
                    $selected={i === leftSelected}
                    onMouseEnter={() => setLeftSelected(i)}
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
    </>
  );
}
