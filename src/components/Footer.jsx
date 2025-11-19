import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";

/* ---------------------------------------------
   FOOTER WRAPPER
--------------------------------------------- */
const FooterWrap = styled.footer`
  width: 100%;
  background: #0d0d0d;
  color: #d9d9d9;
  padding: clamp(50px, 7vw, 70px) 0 0 0;
  font-family: "Inter", sans-serif;
`;

/* ---------------------------------------------
   GRID SECTION
--------------------------------------------- */
const Grid = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 clamp(18px, 5vw, 40px);

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: clamp(25px, 5vw, 50px);

  @media (max-width: 1000px) {
    grid-template-columns: 1.5fr 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/* ---------------------------------------------
   BRAND ROW (Logo + Name)
--------------------------------------------- */
const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const BrandLogo = styled.img`
  width: clamp(40px, 8vw, 48px);
  height: clamp(40px, 8vw, 48px);
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(255, 221, 87, 0.25);
`;

const BrandName = styled.h2`
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 900;
  color: #1e40af;
  margin: 0;
`;

/* ---------------------------------------------
   BRAND TEXT
--------------------------------------------- */
const BrandText = styled.p`
  font-size: clamp(14px, 2.8vw, 15px);
  line-height: 1.55;
  max-width: 380px;
  color: #c9c9c9;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

/* ---------------------------------------------
   COLUMN
--------------------------------------------- */
const Column = styled.div``;

const Title = styled.h4`
  font-size: clamp(16px, 2.7vw, 17px);
  font-weight: 700;
  color: #fff;
  margin-bottom: 18px;

  position: relative;
  padding-bottom: 6px;

  &::after {
    content: "";
    width: 45px;
    height: 3px;
    background: #facc15;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 4px;
  }
`;

const Link = styled.a`
  display: block;
  font-size: clamp(13.5px, 2.5vw, 14.5px);
  color: #c9c9c9;
  margin-bottom: 10px;
  transition: 0.2s;

  &:hover {
    color: #facc15;
    padding-left: 4px;
  }
`;

/* ---------------------------------------------
   SOCIAL ICONS
--------------------------------------------- */
const Socials = styled.div`
  margin-top: 30px;
  display: flex;
  gap: clamp(12px, 3vw, 16px);

  a {
    width: clamp(36px, 7vw, 42px);
    height: clamp(36px, 7vw, 42px);
    background: #1a1a1a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: clamp(16px, 4vw, 18px);
    color: #fff;

    border: 1px solid #2b2b2b;
    transition: 0.25s ease;

    &:hover {
      background: #facc15;
      color: #111;
      transform: translateY(-3px);
    }
  }
`;

/* ---------------------------------------------
   BOTTOM BAR
--------------------------------------------- */
const Bottom = styled.div`
  margin-top: clamp(35px, 7vw, 60px);
  padding: 18px 0;
  background: #000;

  text-align: center;
  font-size: clamp(12.5px, 2.4vw, 14px);
  color: #b5b5b5;

  border-top: 1px solid #1f1f1f;
`;

/* ---------------------------------------------
   MAIN FOOTER
--------------------------------------------- */
export default function Footer() {
  return (
    <FooterWrap>
      <Grid>

        {/* LEFT BRAND SECTION */}
        <div>
          <BrandRow>
            <BrandLogo src={Logo} alt="SoftMaxs Logo" />
            <BrandName>SoftMaxs</BrandName>
          </BrandRow>

          <BrandText>
            Empowering global businesses with AI-driven technology,
            cloud engineering, digital transformation, and enterprise
            software solutions built for scale and performance.
          </BrandText>

          <Socials>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </Socials>
        </div>

        {/* Column 1 */}
        <Column>
          <Title>Company</Title>
          <Link href="#">About SoftMaxs</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Why SoftMaxs</Link>
          <Link href="#">Leadership</Link>
        </Column>

        {/* Column 2 */}
        <Column>
          <Title>Services</Title>
          <Link href="#">AI & Automation</Link>
          <Link href="#">Cloud & DevOps</Link>
          <Link href="#">UI/UX Engineering</Link>
          <Link href="#">Digital Marketing</Link>
        </Column>

        {/* Column 3 */}
        <Column>
          <Title>Support</Title>
          <Link href="#">Contact Us</Link>
          <Link href="#">Office Locations</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Privacy Policy</Link>
        </Column>

      </Grid>

      <Bottom>
        © {new Date().getFullYear()} SoftMaxs. All Rights Reserved.
      </Bottom>

    </FooterWrap>
  );
}
