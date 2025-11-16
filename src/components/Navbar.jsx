import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png"; 


/* -------------------------------------------
   WRAPPER (Transparent → Solid on Scroll)
------------------------------------------- */
const Nav = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2000;
  transition: 0.3s ease;

  background: ${({ scrolled }) =>
    scrolled ? "#ffffff" : "transparent"};

  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 10px rgba(2,6,23,0.08)" : "none"};
`;

/* -------------------------------------------
   INNER CONTENT
------------------------------------------- */
const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ scrolled }) => (scrolled ? "14px 24px" : "20px 24px")};
  max-width: 1300px;
  margin: 0 auto;
  transition: 0.3s ease;
`;

/* -------------------------------------------
   LOGO + TEXT
------------------------------------------- */
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  height: 46px;
  width: 46px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #4db6ff;
`;

const Brand = styled.span`
  font-size: 26px;
  font-weight: 800;
  color: #0077ff;
  letter-spacing: 0.5px;
`;

/* -------------------------------------------
   DESKTOP MENU
------------------------------------------- */
const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  font-weight: 600;
  color: #111827;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  position: relative;
  font-size: 15.5px;

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
    border-radius: 6px;
  }
`;

/* -------------------------------------------
   CTA BUTTON
------------------------------------------- */
const CTA = styled.button`
  background: #0077ff;
  border: none;
  padding: 10px 22px;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  transition: 0.25s;

  &:hover {
    background: #0d8bff;
    transform: translateY(-2px);
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
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ scrolled }) => (scrolled ? "#111" : "#fff")};

  @media (max-width: 900px) {
    display: block;
  }
`;

/* -------------------------------------------
   MOBILE MENU DROPDOWN
------------------------------------------- */
const MobileMenu = styled.ul`
  display: none;

  @media (max-width: 900px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    gap: 18px;
    padding: 22px 28px;
    list-style: none;
    background: #ffffff;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  li {
    padding: 6px 0;
    cursor: pointer;
  }
`;

/* -------------------------------------------
   NAVBAR COMPONENT
------------------------------------------- */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled}>
        <Inner scrolled={scrolled}>

          {/* 🔵 LOGO + SoftMaxx TEXT */}
          <LogoWrap>
            <LogoImg 
              src={Logo}
              alt="SoftMaxs Logo" 
            />
            <Brand>SoftMaxs</Brand>
          </LogoWrap>

          {/* Desktop Menu */}
          <Menu>
            <MenuItem>Offerings</MenuItem>
            <MenuItem>Industries</MenuItem>
            <MenuItem>Explore SoftMaxs</MenuItem>
            <MenuItem>Resources</MenuItem>
            <MenuItem>Careers</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </Menu>

          {/* CTA */}
          <CTA>Get Proposal</CTA>

          {/* Mobile Button */}
          <MobileMenuBtn onClick={() => setOpen(!open)} scrolled={scrolled}>
            ☰
          </MobileMenuBtn>
        </Inner>
      </Nav>

      {/* Mobile Dropdown */}
      <MobileMenu show={open}>
        <li>Offerings</li>
        <li>Industries</li>
        <li>Explore SoftMaxs</li>
        <li>Resources</li>
        <li>Careers</li>
        <li>Contact Us</li>
        <CTA style={{ marginTop: "10px", display: "block" }}>
          Get Proposal
        </CTA>
      </MobileMenu>
    </>
  );
}
