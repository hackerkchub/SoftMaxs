import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useSwipeable } from "react-swipeable";

/* ---------------------------------------------------
   CONSTANTS
--------------------------------------------------- */
const NAV_HEIGHT = "82px"; // your navbar height

/* ---------------------------------------------------
   WRAPPER → Full Screen Height (like screenshot)
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
   FADE ANIMATION
--------------------------------------------------- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ---------------------------------------------------
   SLIDE BACKGROUND
--------------------------------------------------- */
const Slide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${p => p.bg});
  background-size: cover;
  background-position: center;
  opacity: ${p => (p.show ? 1 : 0)};
  transition: opacity 1.1s ease;
  filter: brightness(0.55); /* darker like screenshot */
  display: flex;
  align-items: center;
  padding-left: 120px;
`;

/* ---------------------------------------------------
   MAIN CONTENT (Simplified like screenshot)
--------------------------------------------------- */
const Content = styled.div`
  max-width: 540px;
  color: white;
  animation: ${fadeIn} .8s ease both;
  font-family: "Inter", sans-serif;
`;

/* Title small (Adobe Solution) */
const LineSmall = styled.h3`
  font-size: 34px;
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 12px;
`;

/* Highlighted Partner Title */
const HighlightBlock = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 14px;
`;

const HighlightBg = styled.div`
  position: absolute;
  left: -14px;
  right: -14px;
  top: 40%;
  height: 28px;
  background: #facc15;
  border-radius: 6px;
  z-index: 1;
`;

const HighlightText = styled.h1`
  font-size: 64px;
  font-weight: 800;
  position: relative;
  z-index: 2;
`;

/* Subtext */
const Desc = styled.p`
  margin-top: 10px;
  font-size: 20px;
  opacity: 0.92;
  max-width: 420px;
`;

/* CTA Button */
const CTA = styled.button`
  margin-top: 28px;
  padding: 14px 34px;
  background: #facc15;
  border: none;
  font-weight: 700;
  font-size: 17px;
  color: #111;
  border-radius: 999px;
  cursor: pointer;
  transition: .25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.3);
  }
`;

/* ---------------------------------------------------
   NAVIGATION ARROWS
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
  width: 56px;
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
   SLIDES (clean, simple like screenshot)
--------------------------------------------------- */
const slides = [
  {
    bg: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg",
    small: "Adobe Solution",
    highlight: "Bronze Partner",
    desc: "EbizON is now an Adobe Solution Partner."
  },
  {
    bg: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    small: "Digital Commerce",
    highlight: "Engineering",
    desc: "Building high-growth commerce systems worldwide."
  },
  {
    bg: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    small: "Experience Design",
    highlight: "UX Strategy",
    desc: "Human-centered design that boosts conversions."
  },
];

/* ---------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------- */
export default function HeroSlider() {

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  /* Auto Slide */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx(i => (i + 1) % slides.length);
    }, 5500);
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
