// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

/* -------------------------------------------
   NAV WRAPPER — using $scrolled (transient prop)
------------------------------------------- */
const Nav = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2000;

  background: ${({ $scrolled }) => ($scrolled ? "#ffffff" : "transparent")};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 2px 10px rgba(2,6,23,0.08)" : "none"};

  transition: 0.3s ease;
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: ${({ $scrolled }) => ($scrolled ? "12px 22px" : "20px 22px")};

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease;
`;

/* -------------------------------------------
   LOGO + BRAND
------------------------------------------- */
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: clamp(36px, 6vw, 48px);
  height: clamp(36px, 6vw, 48px);
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #4db6ff;
`;

const Brand = styled.div`
  font-size: clamp(20px, 4vw, 26px);
  font-weight: 800;
  color: #0077ff;
`;

/* -------------------------------------------
   DESKTOP MENU
------------------------------------------- */
const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  font-weight: 600;
  color: #111;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-size: 15px;
  position: relative;

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: "";
    width: 0%;
    height: 2px;
    background: #0077ff;
    position: absolute;
    bottom: -6px;
    left: 0;
    transition: 0.25s;
  }
`;

/* -------------------------------------------
   DESKTOP CTA
------------------------------------------- */
const CTA = styled.button`
  padding: 10px 26px;
  background: #0077ff;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;

  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
    background: #0d8bff;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

/* -------------------------------------------
   MOBILE MENU BUTTON
------------------------------------------- */
const MobileMenuBtn = styled.button`
  display: none;
  border: none;
  background: none;
  font-size: 30px;
  cursor: pointer;

  color: ${({ $scrolled }) => ($scrolled ? "#111" : "#fff")};

  @media (max-width: 900px) {
    display: block;
  }
`;

/* -------------------------------------------
   MOBILE MENU (using $show to avoid warnings)
------------------------------------------- */
const MobileMenu = styled.ul`
  display: ${({ $show }) => ($show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  background: #fff;
  list-style: none;
  padding: 24px 28px;
  gap: 18px;
  font-weight: 600;

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  li {
    cursor: pointer;
    padding: 6px 0;
  }
`;

const MobileCTA = styled.button`
  margin-top: 12px;
  padding: 12px;
  width: 100%;
  background: #0077ff;
  border: none;
  border-radius: 40px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;

/* -------------------------------------------
   MAIN COMPONENT
------------------------------------------- */
export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll background effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Safe Navigation */
  const go = (path) => {
    navigate(path);
    setOpen(false); // close mobile menu
  };

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Inner $scrolled={scrolled}>
          {/* LOGO → HOME */}
          <LogoWrap onClick={() => go("/")}>
            <LogoImg src={Logo} alt="SoftMaxs Logo" />
            <Brand>SoftMaxs</Brand>
          </LogoWrap>

          {/* DESKTOP MENU */}
          <Menu>
            <MenuItem onClick={() => go("/")}>Offerings</MenuItem>
            <MenuItem onClick={() => go("/")}>Industries</MenuItem>
            <MenuItem onClick={() => go("/")}>Explore</MenuItem>
            <MenuItem onClick={() => go("/")}>Resources</MenuItem>
            <MenuItem onClick={() => go("/")}>Careers</MenuItem>

            <MenuItem onClick={() => go("/contact")}>Contact Us</MenuItem>
          </Menu>

          {/* Desktop CTA */}
          <CTA onClick={() => go("/contact")}>Get Proposal</CTA>

          {/* Mobile Toggle */}
          <MobileMenuBtn
            $scrolled={scrolled}
            onClick={() => setOpen(!open)}
          >
            ☰
          </MobileMenuBtn>
        </Inner>
      </Nav>

      {/* MOBILE MENU */}
      <MobileMenu $show={open}>
        <li onClick={() => go("/")}>Offerings</li>
        <li onClick={() => go("/")}>Industries</li>
        <li onClick={() => go("/")}>Explore</li>
        <li onClick={() => go("/")}>Resources</li>
        <li onClick={() => go("/")}>Careers</li>

        <li onClick={() => go("/contact")}>Contact Us</li>

        <MobileCTA onClick={() => go("/contact")}>
          Get Proposal
        </MobileCTA>
      </MobileMenu>
    </>
  );
}
