import React, { useState } from "react";
import styled from "styled-components";

/* -------------------------------------------
   WRAPPER
------------------------------------------- */
const Wrap = styled.section`
  width: 100%;
  padding: 80px 0 40px 0;
  background: #ffffff;
  font-family: "Inter", sans-serif;
`;

/* -------------------------------------------
   TOP TITLE
------------------------------------------- */
const Title = styled.h2`
  font-size: clamp(26px, 5vw, 42px);
  font-weight: 800;
  margin-bottom: 40px;
  color: #000;
  text-align: left;
  padding-left: 120px;

  @media (max-width: 900px) {
    padding-left: 20px;
    text-align: center;
  }
`;

/* -------------------------------------------
   MAIN SLIDER BOX
------------------------------------------- */
const SliderBox = styled.div`
  width: 88%;
  margin: 0 auto;
  background: #eaf2ff;
  border-radius: 14px;

  display: flex;
  padding: clamp(20px, 4vw, 50px);
  gap: 40px;

  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
  position: relative;

  /* Keep image on right even on small screens */
  @media (max-width: 650px) {
    gap: 20px;
    padding: 18px;
  }
`;

/* -------------------------------------------
   LEFT CONTENT
------------------------------------------- */
const Left = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/* Titles & Content */
const CaseTitle = styled.h3`
  font-size: clamp(20px, 3.5vw, 26px);
  font-weight: 800;
  margin-bottom: 15px;
  color: #000;
`;

const Desc = styled.p`
  font-size: clamp(14px, 2.2vw, 17px);
  line-height: 1.6;
  color: #333;
  margin-bottom: 25px;
`;

const BulletTitle = styled.h4`
  font-size: clamp(17px, 2.5vw, 18px);
  font-weight: 800;
  margin-bottom: 10px;
  color: #000;
`;

const BulletList = styled.ul`
  padding-left: 22px;
  margin-bottom: 32px;

  li {
    margin-bottom: 8px;
    font-size: clamp(14px, 2vw, 16px);
    color: #000;
  }
`;

/* -------------------------------------------
   BUTTON
------------------------------------------- */
const Button = styled.button`
  padding: 12px 28px;
  background: #facc15;
  color: #111;
  font-size: clamp(15px, 2.3vw, 17px);
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s ease;
  display: flex;
  gap: 10px;
  align-items: center;
  width: fit-content;

  &:hover {
    background: #ffdd36;
    transform: translateY(-3px);
  }
`;

const BtnArrow = () => (
  <svg width="20" height="20" stroke="#111" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* -------------------------------------------
   RIGHT IMAGE — Fully Responsive
------------------------------------------- */
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: clamp(180px, 40vw, 350px);
  border-radius: 12px;
  object-fit: cover;
`;

/* -------------------------------------------
   TOP RIGHT ARROWS
------------------------------------------- */
const Arrows = styled.div`
  position: absolute;
  top: -55px;
  right: 20px;
  display: flex;
  gap: 16px;

  button {
    width: 48px;
    height: 48px;
    background: #ffffff;
    border-radius: 50%;
    border: 2px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.25s ease;

    svg {
      width: 22px;
      height: 22px;
      stroke: #111;
      stroke-width: 2.4;
      fill: none;
    }

    &:hover {
      background: #fef3c7;
      border-color: #facc15;
      transform: translateY(-2px);
    }
  }

  @media(max-width: 650px){
    top: -45px;
    right: 10px;
  }
`;

/* -------------------------------------------
   BOTTOM CTA
------------------------------------------- */
const BottomBar = styled.div`
  width: 88%;
  margin: 40px auto 0 auto;
  background: #facc15;
  padding: 16px 28px;
  border-radius: 10px;
  font-weight: 700;
  font-size: clamp(15px, 2.5vw, 18px);
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;

  &:hover {
    background: #ffdd32;
  }
`;

const ArrowRight = () => (
  <svg width="24" height="24" stroke="#111" strokeWidth="2" fill="none" viewBox="0 0 24 24">
    <path d="M5 12h14M13 18l6-6-6-6" />
  </svg>
);

/* -------------------------------------------
   DATA – FAST UNSPLASH IMAGES
------------------------------------------- */
const slides = [
  {
    title: "ADA Cosmetics",
    desc: "Global leader in hotel cosmetics. We built B2C + B2B Shopify storefronts with modern CX.",
    bullets: ["Higher Engagement", "Faster Navigation", "Better Conversions", "Performance Gains"],
    img: "https://images.pexels.com/photos/3182368/pexels-photo-3182368.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200"
  },
  {
    title: "Joy Viva Clinic",
    desc: "Built a subscription-based storefront with a fully optimized checkout experience.",
    bullets: ["Boosted Retention", "Improved Checkout", "Better SEO Performance", "Modern UX Upgrade"],
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200"
  },
  {
    title: "FedEx Automation",
    desc: "Streamlined logistics automation and order processing for enterprise operations.",
    bullets: ["Faster Workflows", "Reduced Manual Errors", "Better User Experience"],
    img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200"
  }
];



/* -------------------------------------------
   MAIN COMPONENT
------------------------------------------- */
export default function SuccessStories() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const s = slides[index];

  return (
    <Wrap>
      <Title>Success Stories</Title>

      <SliderBox>
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

        <Left>
          <div>
            <CaseTitle>{s.title}</CaseTitle>
            <Desc>{s.desc}</Desc>

            <BulletTitle>Results</BulletTitle>
            <BulletList>
              {s.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </BulletList>
          </div>

          <Button>
            View Case Study
            <BtnArrow />
          </Button>
        </Left>

        <Right>
          <Image src={s.img} alt="case" />
        </Right>
      </SliderBox>

      <BottomBar>
        <svg width="32" height="32" fill="#111" viewBox="0 0 24 24">
          <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
        </svg>
        Fuel your digital idea with our transformation experts. Contact Us
        <ArrowRight />
      </BottomBar>
    </Wrap>
  );
}
