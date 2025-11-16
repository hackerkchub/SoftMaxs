import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
   LOGO
------------------------------------------- */
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 26px;
  color: #facc15;
  cursor: pointer;

  span {
    color: #000;
  }

  svg {
    height: 34px;
  }
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
    background: #facc15;
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
  background: #facc15;
  border: none;
  padding: 10px 20px;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  color: #111;
  transition: 0.25s;

  &:hover {
    background: #ffdd33;
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
   MAIN NAVBAR COMPONENT
------------------------------------------- */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
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
          {/* LOGO */}
          <Logo>
            <svg width="36" height="36" viewBox="0 0 24 24">
              <path
                d="M2 12l6-8 10 8-6 8z"
                fill="#facc15"
              />
            </svg>
            <span>EbizON</span>
          </Logo>

          {/* Desktop Menu */}
          <Menu>
            <MenuItem>Offerings</MenuItem>
            <MenuItem>Industries</MenuItem>
            <MenuItem>Explore EbizON</MenuItem>
            <MenuItem>Resources</MenuItem>
            <MenuItem>Careers</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </Menu>

          {/* CTA */}
          <CTA>Get Proposal</CTA>

          {/* Mobile Menu Button */}
          <MobileMenuBtn onClick={() => setOpen(!open)} scrolled={scrolled}>
            ☰
          </MobileMenuBtn>
        </Inner>
      </Nav>

      {/* MOBILE MENU */}
      <MobileMenu show={open}>
        <li>Offerings</li>
        <li>Industries</li>
        <li>Explore EbizON</li>
        <li>Resources</li>
        <li>Careers</li>
        <li>Contact Us</li>
        <CTA style={{ marginTop: "10px", display: "block" }}>Get Proposal</CTA>
      </MobileMenu>
    </>
  );
}
