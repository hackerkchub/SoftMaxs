import React, { useState } from "react";
import styled from "styled-components";

/* -------------------------------------------
   WRAPPER
------------------------------------------- */
const Wrap = styled.section`
  width: 100%;
  padding: clamp(50px, 7vw, 80px) 0;
  background: #ffffff;
  font-family: "Inter", sans-serif;
`;

/* -------------------------------------------
   TITLE + UNDERLINE
------------------------------------------- */
const Title = styled.h2`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 800;
  padding-left: clamp(0px, 10vw, 120px);
  color: #000;

  @media (max-width: 900px) {
    text-align: center;
    padding-left: 0;
  }
`;

const Underline = styled.div`
  width: 80px;
  height: 4px;
  background: #facc15;
  border-radius: 5px;
  margin-left: clamp(0px, 10vw, 120px);
  margin-top: 10px;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

/* -------------------------------------------
   ARROWS
------------------------------------------- */
const Arrows = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  padding-right: clamp(0px, 12vw, 140px);
  margin-bottom: 20px;
  margin-top: -40px;

  @media (max-width: 900px) {
    justify-content: center;
    padding-right: 0;
    margin-top: 10px;
  }

  button {
    width: clamp(40px, 8vw, 48px);
    height: clamp(40px, 8vw, 48px);
    background: #facc15;
    border-radius: 50%;
    border: 3px solid #444;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: translateY(-3px);
      background: #ffdd33;
    }

    svg {
      width: clamp(18px, 4vw, 22px);
      height: clamp(18px, 4vw, 22px);
      stroke: #000;
      stroke-width: 2.5;
      fill: none;
    }
  }
`;

/* -------------------------------------------
   GRID
------------------------------------------- */
const Grid = styled.div`
  width: 88%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: clamp(16px, 4vw, 24px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* -------------------------------------------
   CARDS
------------------------------------------- */
const CardBig = styled.div`
  background: #eaf2ff;
  border-radius: 12px;
  padding: clamp(25px, 5vw, 45px) clamp(20px, 4vw, 40px);
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardSmall = styled(CardBig)`
  transform: scale(0.9);
  opacity: 0.85;

  @media (max-width: 900px) {
    transform: scale(1);
    opacity: 1;
  }
`;

const Quote = styled.p`
  font-size: clamp(15px, 2.4vw, 18px);
  line-height: 1.55;
  color: #222;
  font-style: italic;
  margin-bottom: 25px;
`;

/* -------------------------------------------
   FOOTER ROW
------------------------------------------- */
const FooterRow = styled.div`
  margin-top: 20px;
  border-top: 1px solid #d8e0ef;
  padding-top: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Pic = styled.img`
  width: clamp(38px, 8vw, 48px);
  height: clamp(38px, 8vw, 48px);
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h4`
  font-size: clamp(16px, 3vw, 18px);
  font-weight: 800;
`;

const Role = styled.p`
  font-size: clamp(12px, 2.5vw, 13px);
  color: #555;
  margin-top: -2px;
`;

const Logo = styled.img`
  height: clamp(30px, 6vw, 40px);
  opacity: 0.9;
  
  @media (max-width: 500px) {
    align-self: flex-start;
  }
`;

/* -------------------------------------------
   TESTIMONIAL DATA
------------------------------------------- */
const testimonials = [
  {
    text:
      "Working with SoftMaxs has been a fantastic experience. Their team demonstrates impressive technical expertise and maintains excellent communication throughout all meetings.",
    name: "Chetan Shah",
    role: "Project Stakeholder, Micebook",
    pic: "https://randomuser.me/api/portraits/men/32.jpg",
    logo: "https://i.ibb.co/Q6mj8CT/micebook.png",
  },
  {
    text:
      "Thank you to the SoftMaxs team for their smooth communication and excellent attention throughout the project. They made everything super easy!",
    name: "Deigh-Anna",
    role: "JoyVIVA Team",
    pic: "https://randomuser.me/api/portraits/women/21.jpg",
    logo: "https://i.ibb.co/VCZyx2z/joyviva.png",
  },
  {
    text:
      "Their strategic thinking and deep technical knowledge helped us deliver a high-performing and scalable digital solution.",
    name: "Michael John",
    role: "CTO, TechWorks",
    pic: "https://randomuser.me/api/portraits/men/45.jpg",
    logo: "https://i.ibb.co/nM1R3gQ/techworks.png",
  },
];

/* -------------------------------------------
   MAIN COMPONENT
------------------------------------------- */
export default function HappyCustomers() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];
  const nextOne = testimonials[(index + 1) % testimonials.length];

  return (
    <Wrap>
      <Title>Hundreds of Happy Customers</Title>
      <Underline />

      <Arrows>
        <button onClick={prev}>
          <svg viewBox="0 0 24 24">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <button onClick={next}>
          <svg viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </Arrows>

      <Grid>
        {/* LEFT — BIG CARD */}
        <CardBig>
          <Quote>“{current.text}”</Quote>

          <FooterRow>
            <Profile>
              <Pic src={current.pic} />
              <div>
                <Name>{current.name}</Name>
                <Role>{current.role}</Role>
              </div>
            </Profile>

            <Logo src={current.logo} />
          </FooterRow>
        </CardBig>

        {/* RIGHT — SMALL NEXT CARD */}
        <CardSmall>
          <Quote>“{nextOne.text.substring(0, 140)}...”</Quote>

          <FooterRow>
            <Profile>
              <Pic src={nextOne.pic} />
              <div>
                <Name>{nextOne.name}</Name>
                <Role>{nextOne.role}</Role>
              </div>
            </Profile>

            <Logo src={nextOne.logo} />
          </FooterRow>
        </CardSmall>
      </Grid>
    </Wrap>
  );
}
