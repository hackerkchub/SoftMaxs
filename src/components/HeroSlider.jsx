import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

/* ---------------------------------------------------
   CONSTANTS
--------------------------------------------------- */
const NAV_HEIGHT = "82px";

/* ---------------------------------------------------
   WRAPPER
--------------------------------------------------- */
const SliderWrap = styled.section`
  width: 100%;
  height: calc(100vh - ${NAV_HEIGHT});
  min-height: 480px;
  position: relative;
  overflow: hidden;
  background: #000;
  margin: 0;
  padding-top: ${NAV_HEIGHT};

  @media (max-width: 480px) {
    height: calc(75vh - ${NAV_HEIGHT});
  }
`;

/* ---------------------------------------------------
   ANIMATION
--------------------------------------------------- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ---------------------------------------------------
   SLIDE
--------------------------------------------------- */
const Slide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
  opacity: ${(p) => (p.show ? 1 : 0)};
  transition: opacity 1.1s ease;
  filter: brightness(0.75);
  display: flex;
  align-items: center;
  padding-left: clamp(20px, 10vw, 120px);

  /* ⭐ Layer + Click Fix */
  z-index: ${(p) => (p.show ? 5 : 0)};
  pointer-events: ${(p) => (p.show ? "auto" : "none")};

  /* Overlay */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.15)
    );
    z-index: 1;
  }

  @media (max-width: 600px) {
    filter: brightness(0.65);
  }
`;

/* ---------------------------------------------------
   TEXT
--------------------------------------------------- */
const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 540px;
  color: white;
  animation: ${fadeIn} 0.7s ease both;
  font-family: "Inter", sans-serif;

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

const LineSmall = styled.h3`
  font-size: clamp(18px, 3.5vw, 32px);
  font-weight: 300;
  opacity: 0.9;
`;

const HighlightBlock = styled.div`
  position: relative;
  margin: 6px 0 12px 0;
`;

const HighlightText = styled.h1`
  font-size: clamp(32px, 7vw, 62px);
  font-weight: 800;
  line-height: 1.1;
  text-shadow: 0 3px 14px rgba(0, 0, 0, 0.7);
`;

const Desc = styled.p`
  margin-top: 10px;
  font-size: clamp(14px, 2.8vw, 20px);
  opacity: 0.92;
  max-width: 440px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

const CTA = styled.button`
  margin-top: 26px;
  padding: clamp(10px, 2vw, 14px) clamp(22px, 4vw, 34px);
  background: #facc15;
  border: none;
  font-weight: 700;
  font-size: clamp(14px, 3.1vw, 17px);
  color: #111;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }
`;

/* ---------------------------------------------------
   CONTROLS
--------------------------------------------------- */
const Controls = styled.div`
  position: absolute;
  right: clamp(18px, 5vw, 45px);
  bottom: clamp(16px, 4vw, 32px);
  display: flex;
  align-items: center;
  z-index: 20;
`;

const ArrowBtn = styled.button`
  width: clamp(40px, 10vw, 58px);
  height: clamp(36px, 9vw, 50px);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: white;
  font-size: clamp(20px, 5vw, 28px);
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    background: white;
    color: #111;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: clamp(24px, 6vw, 36px);
  background: rgba(255, 255, 255, 0.5);
  margin: 0 clamp(8px, 2vw, 12px);
`;

/* ---------------------------------------------------
   SLIDES DATA
--------------------------------------------------- */
const slides = [
  {
    bg: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    small: "SoftMaxs | Adobe Cloud",
    highlight: "Mobile Applications",
    desc: "SoftMaxs is now an official Adobe Solution Bronze Partner.",
    link: "/offerings",
  },
  {
    bg: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg",
    small: "SoftMaxs | Digital Commerce",
    highlight: "E-Commerce",
    desc: "High-performance online store architecture & optimization.",
    link: "/ecommerce",
  },
  {
    bg: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    small: "SoftMaxs | Experience Design",
    highlight: "Smart UX",
    desc: "Human-centered design that drives conversions and engagement.",
    link: "/ui-ux",
  },
  {
    bg: "https://images.pexels.com/photos/3184643/pexels-photo-3184643.jpeg",
    small: "SoftMaxs | Cloud Services",
    highlight: "DevOps",
    desc: "Secure, scalable cloud deployment and automation pipelines.",
    link: "/cloud-devops",
  },
  {
    bg: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    small: "SoftMaxs | AI Solutions",
    highlight: "AI Tools",
    desc: "AI-driven automation, chatbots and workflow enhancement.",
    link: "/ai-automation",
  },
];

/* ---------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------- */
export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();

  /* Auto-slide */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 5200);
    return () => clearInterval(t);
  }, [paused]);

  /* Swipe */
  const swipe = useSwipeable({
    onSwipedLeft: () => setIdx((i) => (i + 1) % slides.length),
    onSwipedRight: () => setIdx((i) => (i - 1 + slides.length) % slides.length),
  });

  return (
    <SliderWrap
      {...swipe}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <Slide key={i} bg={s.bg} show={i === idx}>
          <Content>
            <LineSmall>{s.small}</LineSmall>

            <HighlightBlock>
              <HighlightText>{s.highlight}</HighlightText>
            </HighlightBlock>

            <Desc>{s.desc}</Desc>

            <CTA onClick={() => navigate(slides[idx].link)}>
              Know More
            </CTA>
          </Content>
        </Slide>
      ))}

      <Controls>
        <ArrowBtn onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)}>
          ‹
        </ArrowBtn>
        <Divider />
        <ArrowBtn onClick={() => setIdx((i) => (i + 1) % slides.length)}>
          ›
        </ArrowBtn>
      </Controls>
    </SliderWrap>
  );
}
