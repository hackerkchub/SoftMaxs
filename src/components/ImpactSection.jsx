import React from "react";
import styled, { keyframes } from "styled-components";

/* -------------------- ANIMATIONS ---------------------- */
const slideLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const slideRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

/* -------------------- SECTION WRAPPER ---------------------- */
const Wrap = styled.section`
  width: 100%;
  background: #faf4df;
  padding: clamp(60px, 10vw, 110px) 0;
  font-family: "Inter", sans-serif;
  overflow: hidden;
`;

/* -------------------- TITLE ---------------------- */
const Title = styled.h2`
  text-align: center;
  font-size: clamp(26px, 5vw, 42px);
  font-weight: 800;
  color: #111;
`;

const Underline = styled.div`
  width: 80px;
  height: 4px;
  background: #e2b100;
  margin: 14px auto clamp(30px, 8vw, 70px) auto;
  border-radius: 6px;
`;

/* -------------------- ROW WRAPPER ---------------------- */
const RowWrapper = styled.div`
  width: 100%;
  overflow: visible;
  margin: clamp(30px, 6vw, 60px) 0;
`;

/* -------------------- ROW ---------------------- */
const Row = styled.div`
  display: flex;
  gap: clamp(40px, 8vw, 126px);
  animation: ${(p) => (p.reverse ? slideRight : slideLeft)} 18s linear infinite;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }
`;

/* -------------------- DIAMOND CARD ---------------------- */
const Card = styled.div`
  width: clamp(68px, 14vw, 108px);
  height: clamp(68px, 14vw, 108px);
  transform: rotate(45deg);
  background: white;
  border-radius: 10px;
  box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.12);

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease;

  &:hover {
    transform: rotate(45deg) translateY(-10px);
    box-shadow: 0px 16px 28px rgba(0, 0, 0, 0.18);
  }
`;

const Logo = styled.img`
  width: clamp(40px, 8vw, 65px);
  height: clamp(40px, 8vw, 65px);
  object-fit: contain;
  transform: rotate(-45deg);
`;

/* -------------------- LOGOS ---------------------- */
const logos = [
  "https://images.weserv.nl/?url=logo.clearbit.com/fedex.com&h=120.webp",
  "https://images.weserv.nl/?url=logo.clearbit.com/tata.com&h=120.webp",
  "https://images.weserv.nl/?url=logo.clearbit.com/ndtv.com&h=120.webp",
  "https://images.weserv.nl/?url=logo.clearbit.com/macmillan.com&h=120.webp",
  "https://images.weserv.nl/?url=logo.clearbit.com/microsoft.com&h=120.webp",
  "https://images.weserv.nl/?url=logo.clearbit.com/joyviva.ca&h=120.webp",
  "https://images.weserv.nl/?url=logo.clearbit.com/cranimals.com&h=120.webp",
  "https://images.weserv.nl/?url=logo.clearbit.com/americord.com&h=120.webp",
  "https://images.weserv.nl/?url=logo.clearbit.com/softwarekeep.com&h=120.webp",
  "https://images.weserv.nl/?url=logo.clearbit.com/smithsonianmag.com&h=120.webp"
];

const fullRow = [...logos, ...logos];

/* -------------------- MAIN ---------------------- */
export default function ImpactSectionAuto() {
  return (
    <Wrap>
      <Title>We’ve Driven Impact At</Title>
      <Underline />

      <RowWrapper>
        <Row>
          {fullRow.map((logo, i) => (
            <Card key={`row1-${i}`}>
              <Logo src={logo} alt="brand" />
            </Card>
          ))}
        </Row>
      </RowWrapper>

      <RowWrapper>
        <Row reverse>
          {fullRow.map((logo, i) => (
            <Card key={`row2-${i}`}>
              <Logo src={logo} alt="brand" />
            </Card>
          ))}
        </Row>
      </RowWrapper>
    </Wrap>
  );
}
