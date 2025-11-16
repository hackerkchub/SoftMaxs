import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSwipeable } from "react-swipeable";

/* ---------------------------------------------------
   CONSTANTS
--------------------------------------------------- */
const NAV_HEIGHT = "82px";

/* ---------------------------------------------------
   WRAPPER (full height without navbar overlap)
--------------------------------------------------- */
const SliderWrap = styled.section`
  width: 100%;
  height: calc(100vh - ${NAV_HEIGHT});
  position: relative;
  overflow: hidden;
  background: #000;
  margin-top: ${NAV_HEIGHT};
`;

/* ---------------------------------------------------
   ANIMATION
--------------------------------------------------- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ---------------------------------------------------
   SLIDE IMAGE LAYER
--------------------------------------------------- */
const Slide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${p => p.bg});
  background-size: cover;
  background-position: center;
  opacity: ${p => (p.show ? 1 : 0)};
  transition: opacity 1.1s ease;
  filter: brightness(0.55);
  display: flex;
  align-items: center;
  padding-left: 120px;
`;

/* ---------------------------------------------------
   TEXT CONTENT
--------------------------------------------------- */
const Content = styled.div`
  max-width: 540px;
  color: white;
  animation: ${fadeIn} .7s ease both;
  font-family: "Inter", sans-serif;
`;

const LineSmall = styled.h3`
  font-size: 32px;
  font-weight: 300;
  opacity: 0.9;
`;

const HighlightBlock = styled.div`
  display: inline-block;
  position: relative;
  margin: 10px 0 12px 0;
`;

const HighlightBg = styled.div`
  position: absolute;
  left: -14px;
  right: -14px;
  top: 48%;
  height: 26px;
  background: #facc15;
  border-radius: 6px;
  z-index: 1;
`;

const HighlightText = styled.h1`
  font-size: 62px;
  font-weight: 800;
  position: relative;
  z-index: 2;
`;

const Desc = styled.p`
  margin-top: 10px;
  font-size: 20px;
  opacity: 0.92;
  max-width: 440px;
`;

const CTA = styled.button`
  margin-top: 26px;
  padding: 14px 34px;
  background: #facc15;
  border: none;
  font-weight: 700;
  font-size: 17px;
  color: #111;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.3);
  }
`;

/* ---------------------------------------------------
   NAVIGATION BUTTONS
--------------------------------------------------- */
const Controls = styled.div`
  position: absolute;
  right: 45px;
  bottom: 32px;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const ArrowBtn = styled.button`
  width: 58px;
  height: 50px;
  border-radius: 10px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.35);
  color: white;
  font-size: 28px;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    background: white;
    color: #111;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 36px;
  background: rgba(255,255,255,0.5);
  margin: 0 12px;
`;

/* ---------------------------------------------------
   SLIDES (SoftMaxx Branding + load-safe Pexels URLs)
--------------------------------------------------- */
const slides = [
  {
    bg: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    small: "SoftMaxs | Adobe Cloud",
    highlight: "Bronze Partner",
    desc: "SoftMaxs is now an official Adobe Solution Bronze Partner."
  },
  {
    bg: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg",
    small: "SoftMaxs | Digital Commerce",
    highlight: "E-Commerce",
    desc: "High-performance online store architecture & optimization."
  },
  {
    bg: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    small: "SoftMaxs | Experience Design",
    highlight: "Smart UX",
    desc: "Human-centered design that drives conversions and engagement."
  },
  {
    bg: "https://images.pexels.com/photos/3184643/pexels-photo-3184643.jpeg",
    small: "SoftMaxs | Cloud Services",
    highlight: "DevOps",
    desc: "Secure, scalable cloud deployment and automation pipelines."
  },
  {
    bg: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    small: "SoftMaxs | AI Solutions",
    highlight: "AI Tools",
    desc: "AI-driven automation, chatbots and workflow enhancement."
  }
];

/* ---------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------- */
export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  /* Auto-slide */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx(i => (i + 1) % slides.length);
    }, 5200);
    return () => clearInterval(t);
  }, [paused]);

  /* Swipe */
  const swipe = useSwipeable({
    onSwipedLeft: () => setIdx(i => (i + 1) % slides.length),
    onSwipedRight: () => setIdx(i => (i - 1 + slides.length) % slides.length)
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
              <HighlightBg />
              <HighlightText>{s.highlight}</HighlightText>
            </HighlightBlock>

            <Desc>{s.desc}</Desc>

            <CTA>Know More</CTA>
          </Content>
        </Slide>
      ))}

      <Controls>
        <ArrowBtn onClick={() => setIdx(i => (i - 1 + slides.length) % slides.length)}>‹</ArrowBtn>
        <Divider />
        <ArrowBtn onClick={() => setIdx(i => (i + 1) % slides.length)}>›</ArrowBtn>
      </Controls>

    </SliderWrap>
  );
}
