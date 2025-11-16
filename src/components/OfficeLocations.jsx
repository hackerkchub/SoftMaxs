import React from "react";
import styled from "styled-components";

/* ---------------------------
   WRAPPER
----------------------------*/
const Wrap = styled.section`
  width: 100%;
  padding: 80px 0;
  background: #fdf4d7;
  font-family: "Inter", sans-serif;
`;

/* ---------------------------
   GRID
----------------------------*/
const Grid = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  text-align: center;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

/* ---------------------------
   CARD
----------------------------*/
const Card = styled.div`
  padding: 10px 22px;
`;

const Illustration = styled.img`
  width: 260px;
  height: 180px;
  object-fit: contain;
  margin-bottom: 18px;

  @media (max-width: 950px) {
    width: 230px;
    height: 150px;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 14px;
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 1.55;
  color: #222;
`;

const Email = styled.p`
  margin-top: 10px;
  font-weight: 600;
  color: #000;
`;

const Phone = styled.p`
  margin: 12px 0;
  font-weight: 500;
`;

/* ---------------------------
   SOCIAL ICONS
----------------------------*/
const Socials = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 18px;

  a {
    width: 42px;
    height: 42px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: black;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    transition: 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      background: #ffe27b;
    }
  }
`;

/* ---------------------------
   MAIN COMPONENT
----------------------------*/
export default function OfficeLocations() {
  return (
    <Wrap>
      <Grid>

        {/* USA Center */}
        <Card>
          <Illustration
            src="https://www.gstatic.com/webp/gallery/1.webp"
            alt="USA"
          />
          <Title>USA Centre</Title>
          <Text>
            3524 Silverside Road Suite 35B,<br />
            Wilmington, DE 19810-4929,<br />
            United States
          </Text>

          <Phone>+1 209 318 4812 (USA)</Phone>
          <Email>info@ebizondigital.com</Email>
        </Card>

        {/* Headquarters */}
        <Card>
          <Illustration
            src="https://www.gstatic.com/webp/gallery/2.webp"
            alt="India HQ"
          />
          <Title>EbizON Digital Headquarters</Title>
          <Text>
            Logix Cyber Park, Plot No C-28/29,<br />
            Tower B, 9th Floor, Sector 62,<br />
            Noida 201301, India
          </Text>

          <Phone>+91-120-4518893</Phone>
          <Email>info@ebizondigital.com</Email>

          <Socials>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </Socials>
        </Card>

        {/* Dehradun */}
        <Card>
          <Illustration
            src="https://www.gstatic.com/webp/gallery/4.webp"
            alt="Dehradun"
          />
          <Title>Dehradun Development Center</Title>
          <Text>
            IT Park, Plot 21, Ground Floor,<br />
            SIDCUL, Sahastradhara Road,<br />
            Dehradun 248001, Uttarakhand
          </Text>

          <Email>info@ebizondigital.com</Email>
        </Card>

      </Grid>
    </Wrap>
  );
}
