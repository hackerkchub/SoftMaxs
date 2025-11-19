import React from "react";
import styled from "styled-components";

/* ---------------------------
   WRAPPER
----------------------------*/
const Wrap = styled.section`
  width: 100%;
  padding: clamp(50px, 10vw, 80px) 0;
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
  gap: clamp(22px, 5vw, 40px);
  text-align: center;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

/* ---------------------------
   CARD → FLEX COLUMN
----------------------------*/
const Card = styled.div`
  padding: clamp(10px, 3vw, 22px);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* ---------------------------
   IMAGE — Centered
----------------------------*/
const Illustration = styled.img`
  width: clamp(200px, 40vw, 260px);
  height: clamp(130px, 25vw, 180px);
  object-fit: contain;
  margin: 0 auto 18px auto;
  display: block;
`;

/* ---------------------------
   TITLE/TEXT
----------------------------*/
const Title = styled.h3`
  font-size: clamp(18px, 3.5vw, 22px);
  font-weight: 800;
  margin-bottom: 14px;
`;

const Text = styled.p`
  font-size: clamp(14px, 2.8vw, 15px);
  line-height: 1.55;
  color: #222;
`;

const Email = styled.p`
  margin-top: 10px;
  font-weight: 600;
  color: #000;
  font-size: clamp(14px, 3vw, 15px);
`;

const Phone = styled.p`
  margin: 12px 0 6px 0;
  font-weight: 500;
  font-size: clamp(14px, 3vw, 15px);
`;

/* ---------------------------
   SOCIAL ICONS — ALWAYS LAST
----------------------------*/
const Socials = styled.div`
  margin-top: auto; /* Push to bottom */
  padding-top: 20px;

  display: flex;
  justify-content: center;
  gap: clamp(12px, 3vw, 18px);

  a {
    width: clamp(36px, 8vw, 42px);
    height: clamp(36px, 8vw, 42px);
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: clamp(16px, 4vw, 20px);
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

        {/* USA OFFICE */}
        <Card>
          <Illustration
            src="https://www.gstatic.com/webp/gallery/1.webp"
            alt="SoftMaxs USA Office"
          />
          <Title>SoftMaxs USA Office</Title>
          <Text>
            2345 Sentry Park West,<br />
            Suite 120, Blue Bell, PA 19422,<br />
            United States
          </Text>

          <Phone>+1 (213) 652-4471 (USA)</Phone>
          <Email>contact@softmaxs.com</Email>
        </Card>

        {/* INDIA HQ */}
        <Card>
          <Illustration
            src="https://www.gstatic.com/webp/gallery/2.webp"
            alt="SoftMaxs India Headquarters"
          />
          <Title>SoftMaxs Headquarters</Title>
          <Text>
            Logix Cyber Park, Tower B, 8th Floor,<br />
            Sector 62, Noida, Uttar Pradesh 201301<br />
            India
          </Text>

          <Phone>+91 98715 44221 (IND)</Phone>
          <Email>contact@softmaxs.com</Email>

          {/* Social Icons at very bottom now */}
          <Socials>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </Socials>
        </Card>

        {/* DEVELOPMENT CENTER */}
        <Card>
          <Illustration
            src="https://www.gstatic.com/webp/gallery/4.webp"
            alt="SoftMaxs R&D Center"
          />
          <Title>SoftMaxs R&D Development Center</Title>
          <Text>
            IT Park, Sahastradhara Road,<br />
            Plot 21, Ground Floor,<br />
            Dehradun, Uttarakhand 248001
          </Text>

          <Email>contact@softmaxs.com</Email>
        </Card>

      </Grid>
    </Wrap>
  );
}
