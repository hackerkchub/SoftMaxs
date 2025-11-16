import React from "react";
import styled from "styled-components";

/* ---------------------------------------------
   FOOTER WRAPPER
--------------------------------------------- */
const FooterWrap = styled.footer`
  width: 100%;
  background: #0d0d0d;
  color: #d9d9d9;
  padding: 70px 0 0 0;
  font-family: "Inter", sans-serif;
`;

/* ---------------------------------------------
   GRID SECTION
--------------------------------------------- */
const Grid = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 40px;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/* ---------------------------------------------
   LOGO & INTRO
--------------------------------------------- */
const Brand = styled.div``;

const BrandName = styled.h2`
  font-size: 32px;
  color: #facc15;
  font-weight: 900;
  margin-bottom: 12px;
`;

const BrandText = styled.p`
  font-size: 15px;
  line-height: 1.55;
  max-width: 350px;
  color: #c9c9c9;
`;

/* ---------------------------------------------
   COLUMN
--------------------------------------------- */
const Column = styled.div``;

const Title = styled.h4`
  font-size: 17px;
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
  font-size: 14.5px;
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
  gap: 16px;

  a {
    width: 42px;
    height: 42px;
    background: #1a1a1a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
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
  margin-top: 60px;
  padding: 18px 0;
  background: #000;

  text-align: center;
  font-size: 14px;
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
        <Brand>
          <BrandName>YourBrand</BrandName>
          <BrandText>
            We deliver enterprise-grade digital engineering, marketing,
            cloud transformation, and scalable solutions for global brands.
          </BrandText>

          <Socials>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </Socials>
        </Brand>

        {/* Column 1 */}
        <Column>
          <Title>Company</Title>
          <Link href="#">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Why Choose Us</Link>
          <Link href="#">Team</Link>
        </Column>

        {/* Column 2 */}
        <Column>
          <Title>Services</Title>
          <Link href="#">E-Commerce</Link>
          <Link href="#">Cloud & DevOps</Link>
          <Link href="#">UI/UX Design</Link>
          <Link href="#">Digital Marketing</Link>
        </Column>

        {/* Column 3 */}
        <Column>
          <Title>Support</Title>
          <Link href="#">Contact Us</Link>
          <Link href="#">Our Locations</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Privacy Policy</Link>
        </Column>

      </Grid>

      <Bottom>
        © {new Date().getFullYear()} YourBrand. All Rights Reserved.
      </Bottom>

    </FooterWrap>
  );
}
