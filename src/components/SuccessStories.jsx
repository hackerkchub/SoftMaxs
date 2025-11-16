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
  font-size: 42px;
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
  padding: 50px 50px;
  gap: 50px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
  position: relative;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

/* -------------------------------------------
   LEFT CONTENT (updated)
------------------------------------------- */
const Left = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;   /* 🔥 Button bottom पर fix */
`;

const CaseTitle = styled.h3`
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 15px;
  color: #000;
`;

const Desc = styled.p`
  font-size: 17px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 25px;
  max-width: 90%;
`;

const BulletTitle = styled.h4`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 10px;
  color: #000;
`;

const BulletList = styled.ul`
  padding-left: 22px;
  margin-bottom: 32px;

  li {
    margin-bottom: 8px;
    font-size: 16px;
    color: #000;
  }
`;

/* -------------------------------------------
   BUTTON UPDATED with ARROW
------------------------------------------- */
const Button = styled.button`
  padding: 14px 32px;
  background: #facc15;
  color: #111;
  font-size: 17px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s ease;
  display: flex;
  gap: 12px;
  align-items: center;
  width: fit-content;

  &:hover {
    background: #ffdd36;
    transform: translateY(-3px);
  }
`;

const BtnArrow = () => (
  <svg
    width="20"
    height="20"
    stroke="#111"
    fill="none"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* -------------------------------------------
   RIGHT IMAGE AUTO SIZE
------------------------------------------- */
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;       /* 🔥 Slide के height के हिसाब से image resize */
  max-height: 350px;  /* ✔ Control to match ebizon view */
  border-radius: 12px;
  object-fit: cover;
`;

/* -------------------------------------------
   TOP RIGHT ARROWS SAME
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
  font-size: 18px;
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
   DATA
------------------------------------------- */
const slides = [
  {
    title: "ADA Cosmetics",
    desc:
      "ADA Cosmetics, a global leader in hotel cosmetics, partnered with EbizON to modernize its digital commerce by developing separate Shopify platforms for B2C and B2B customers.",
    bullets: [
      "Higher Engagement",
      "Faster Navigation",
      "Better Conversions",
      "Performance Gains",
      "Stronger Brand Perception"
    ],
    img: "https://images.pexels.com/photos/3182368/pexels-photo-3182368.jpeg"
  },
  {
    title: "Joy Viva Clinic",
    desc:
      "Helping JoyViva launch a modern wellness storefront & subscription-based customer system.",
    bullets: ["Boosted Retention", "Improved Checkout", "Better SEO Performance", "Modern UX Upgrade"],
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  },
  {
    title: "FedEx Automation",
    desc:
      "A complete digital transformation strategy to streamline order processing and logistics automation.",
    bullets: ["Faster Workflows", "Reduced Manual Errors", "Better User Experience"],
    img: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg"
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

          {/* Button at BOTTOM with arrow */}
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
