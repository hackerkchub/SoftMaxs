// src/components/Testimonials.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

/* ------------------------------------------
   STYLES (Matches exact UI like screenshot)
------------------------------------------- */
const Wrap = styled.section`
  width: 100%;
  padding: 80px 0;
  background: #f6f9fc;
  font-family: "Inter", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Underline = styled.div`
  width: 110px;
  height: 4px;
  background: #e2b100;
  margin: 0 auto 60px;
`;

/* Cards row */
const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
  flex-wrap: wrap;
`;

/* Single Card */
const Card = styled.div`
  width: clamp(290px, 30%, 370px);
  background: #fff;
  padding: 28px 32px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: 0.35s;

  /* fade inactive cards */
  opacity: ${(p) => (p.active ? 1 : 0.25)};
  transform: ${(p) => (p.active ? "scale(1)" : "scale(0.95)")};

  @media (max-width: 950px) {
    width: 90%;
    opacity: 1;
    transform: scale(1);
  }
`;

const Stars = styled.div`
  color: #facc15;
  font-size: 20px;
  margin-bottom: 6px;
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 14px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const Meta = styled.div`
  strong {
    font-size: 15px;
    color: #111;
  }
  small {
    font-size: 13px;
    color: #777;
  }
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 15px;
  color: #444;
  line-height: 1.6;
`;

/* Arrows */
const Arrows = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 22px;

  button {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: white;
    border: 2px solid #ddd;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s;

    &:hover {
      background: #fff9d3;
      border-color: #e2b100;
      transform: translateY(-3px);
    }

    svg {
      width: 22px;
      height: 22px;
      stroke: #000;
      stroke-width: 2;
    }
  }
`;

/* ------------------------------------------
   MAIN COMPONENT
------------------------------------------- */
export default function Testimonials() {
  const testimonials = [
    {
      name: "Beat Walder",
      role: "Manager, Forester Beauty",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
      text: "I'm the owner of Forester Beauty in Switzerland. SoftMaxs guided the entire Shopify migration and improved custom elements for a better user experience.",
    },
    {
      name: "Alexandre Salem",
      role: "eCommerce Manager, ADA Cosmetic",
      avatar: "https://randomuser.me/api/portraits/men/57.jpg",
      text: "Thanks to SoftMaxs' solution, we now operate efficiently with accurate, sprint-based weekly execution.",
    },
    {
      name: "Deigh-Anna",
      role: "JoyVIVA Team",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The team was flexible, fast, and extremely detail-oriented. They made the entire project smooth!",
    },
    {
      name: "Richard Miles",
      role: "Operations Head, StyleHub",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "SoftMaxs modernized our store, improved speed, and automated workflows end-to-end.",
    },
    {
      name: "Mia Thompson",
      role: "Founder, GlowSkincare",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      text: "Their redesign increased customer retention by 40%. Amazing UI/UX work!",
    },
    {
      name: "Daniel Cooper",
      role: "CTO, MarketQ",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
      text: "Our entire automation + ERP pipeline improved drastically with their engineering support.",
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  /* Auto Slide */
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  /* Helper: Show 3 testimonials around index */
  const getVisible = () => {
    const total = testimonials.length;

    return [
      testimonials[index],
      testimonials[(index + 1) % total],
      testimonials[(index + 2) % total],
    ];
  };

  return (
    <Wrap>
      <Title>What Our Customers Says</Title>
      <Underline />

      <Row>
        {getVisible().map((t, i) => (
          <Card key={i} active={i === 1}>
            <Stars>★★★★★</Stars>

            <Reviewer>
              <Avatar src={t.avatar} />
              <Meta>
                <strong>{t.name}</strong><br />
                <small>{t.role}</small>
              </Meta>
            </Reviewer>

            <Text>“{t.text}”</Text>
          </Card>
        ))}
      </Row>

      {/* Arrows */}
      <Arrows>
        <button onClick={prev}>
          <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <button onClick={next}>
          <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </Arrows>
    </Wrap>
  );
}
