// src/components/TestimonialSlider.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

/* ---------------------------
   STYLES
----------------------------*/
const Wrap = styled.section`
  width: 100%;
  padding: clamp(50px, 7vw, 90px) 0;
  background: #f6f9fc;
  font-family: "Inter", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 800;
  margin-bottom: 8px;
`;

const Underline = styled.div`
  width: 100px;
  height: 4px;
  background: #e2b100;
  margin: 0 auto 50px;
`;

/* Slider wrapper */
const SliderRow = styled.div`
  display: flex;
  gap: 26px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

/* Individual testimonial card */
const Card = styled.div`
  width: clamp(280px, 32%, 360px);
  background: white;
  padding: 26px 30px;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  opacity: ${(p) => (p.active ? 1 : 0.2)};
  transition: opacity 0.5s ease;

  @media (max-width: 950px) {
    width: 90%;
  }
`;

const Stars = styled.div`
  color: #facc15;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 15px;
  color: #444;
  line-height: 1.6;
  margin-top: 16px;
`;

const Reviewer = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

/* Name & role */
const ReviewerMeta = styled.div`
  small {
    font-size: 13px;
    color: #666;
  }
  strong {
    font-size: 15px;
    color: #111;
  }
`;

/* Slider arrows */
const Arrows = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  gap: 24px;

  button {
    width: 48px;
    height: 48px;
    background: white;
    border-radius: 50%;
    border: 2px solid #ddd;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

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

/* ---------------------------
   TESTIMONIAL SLIDER
----------------------------*/

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Beat Walder",
      role: "Manager, Forester Beauty",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
      text: "I’m the owner of Forester Beauty in Switzerland. The SoftMaxs team helped migrate the entire store smoothly and enhanced the custom UI extensively.",
    },
    {
      name: "Alexandre Salem",
      role: "eCommerce Manager, ADA Cosmetics",
      avatar: "https://randomuser.me/api/portraits/men/57.jpg",
      text: "Thanks to SoftMaxs’ solution, our platform now sells efficiently. Weekly syncs ensured accurate outcomes and faster execution.",
    },
    {
      name: "Deigh-Anna",
      role: "JoyVIVA Team",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "Super flexible and unbelievably fast team. They helped us redesign our UX and improved conversions throughout the funnel.",
    },
    {
      name: "Richard Miles",
      role: "Operations Head, StyleHub",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "SoftMaxs modernized our store, improved page speed dramatically, and automated multiple workflows for scaling.",
    },
    {
      name: "Mia Thompson",
      role: "Founder, GlowSkincare",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      text: "The redesign improved customer retention by 40%. Their UX and branding team is outstanding.",
    },
    {
      name: "Daniel Cooper",
      role: "CTO, MarketQ",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
      text: "Our integration and automation pipeline is now 2× faster. SoftMaxs helped us connect ERP + CRM flawlessly.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => next(), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Wrap>
      <Title>What Our Customers Says</Title>
      <Underline />

      <SliderRow>
        {/* Show 3 cards around active one like EbizonDigital */}
        {testimonials.map((t, i) => {
          const isActive =
            i === index ||
            i === (index + 1) % testimonials.length ||
            i === (index - 1 + testimonials.length) % testimonials.length;

          return (
            <Card key={i} active={isActive}>
              <Stars>★★★★★</Stars>

              <Reviewer>
                <Avatar src={t.avatar} />
                <ReviewerMeta>
                  <strong>{t.name}</strong>
                  <br />
                  <small>{t.role}</small>
                </ReviewerMeta>
              </Reviewer>

              <ReviewText>“{t.text}”</ReviewText>
            </Card>
          );
        })}
      </SliderRow>

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
    </Wrap>
  );
}
