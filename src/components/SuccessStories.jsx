import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
   POPUP MODAL
------------------------------------------- */
const ModalBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 650px;
  background: #fff;
  border-radius: 18px;
  padding: 25px;
  animation: fade 0.3s ease;
  overflow-y: auto;
  max-height: 90vh;
  position: relative;

  @keyframes fade {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
  position: absolute;
  right: 18px;
  top: 12px;
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
   SLIDER STRUCTURE
------------------------------------------- */
const SliderOuter = styled.div`
  width: 88%;
  margin: 0 auto;
  position: relative;
`;

const SliderViewport = styled.div`
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
  background: #eaf2ff;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.4s ease;
  transform: translateX(-${({ index }) => index * 100}%);
`;

const Slide = styled.div`
  min-width: 100%;
  padding: clamp(20px, 4vw, 50px);
  display: flex;
  gap: 40px;

  @media (max-width: 650px) {
    gap: 20px;
    padding: 18px;
    flex-direction: column-reverse;
  }
`;

/* -------------------------------------------
   LEFT CONTENT (INSIDE SLIDE)
------------------------------------------- */
const Left = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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

/* -------------------------------------------
   RIGHT IMAGE
------------------------------------------- */
const Image = styled.img`
  flex: 1;
  width: 100%;
  height: clamp(180px, 40vw, 350px);
  border-radius: 12px;
  object-fit: cover;
`;

/* -------------------------------------------
   ARROWS & DOTS
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

  @media (max-width: 650px) {
    top: -45px;
    right: 10px;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
`;

const Dot = styled.button`
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${({ active }) => (active ? "#111827" : "#d1d5db")};
  transform: ${({ active }) => (active ? "scale(1.1)" : "scale(1)")};
  transition: 0.2s;
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

/* -------------------------------------------
   SLIDE DATA
------------------------------------------- */
const slides = [
  {
    title: "ADA Cosmetics",
    desc: "Global leader in hotel cosmetics. We built B2C + B2B Shopify storefronts with modern CX.",
    bullets: [
      "Higher Engagement",
      "Faster Navigation",
      "Better Conversions",
      "Performance Gains",
    ],
    img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&w=800&q=60",
    details:
      "We redesigned ADA Cosmetics' digital commerce experience with new UX flows, optimized Shopify storefronts for both retail and wholesale, improved SEO structure, and integrated a subscription engine. The result was a smoother customer journey, faster product discovery, and measurable uplift in conversion rate and AOV.",
  },
  {
    title: "Joy Viva Clinic",
    desc: "Built a subscription-based storefront with a fully optimized healthcare checkout experience.",
    bullets: [
      "Boosted Retention",
      "Improved Checkout",
      "Better SEO Performance",
      "Modern UX Upgrade",
    ],
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&w=800&q=60",
    details:
      "Joy Viva Clinic needed a scalable system to manage recurring packages and tele-consultation bookings. We implemented subscription billing, synced patient data with CRM, and redesigned the information architecture for treatments. Conversion rate increased while support tickets around booking confusion dropped significantly.",
  },
  {
    title: "SoftMax Commerce Suite",
    desc: "Multi-store ecommerce automation with unified inventory & marketing analytics.",
    bullets: [
      "Centralized Inventory",
      "Automated Order Routing",
      "Marketing Attribution Dashboard",
      "Reduced Operational Overhead",
    ],
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&w=1000&q=70",
    details:
      "SoftMax Commerce Suite connects multiple storefronts and marketplaces into a single backend. We built automated inventory sync, order routing rules, and a unified analytics layer for marketing and sales teams. The platform helped reduce stock-outs, improved decision making, and provided a real-time view of performance across channels.",
  },
];

/* -------------------------------------------
   MAIN COMPONENT
------------------------------------------- */
export default function SuccessStories() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const autoplayRef = useRef(null);
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // autoplay
  useEffect(() => {
    if (open) return; // pause when modal open

    autoplayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [open]);

  // touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  // mouse swipe (basic)
  const mouseDownX = useRef(null);

  const handleMouseDown = (e) => {
    mouseDownX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (mouseDownX.current === null) return;
    const diff = e.clientX - mouseDownX.current;

    if (Math.abs(diff) > 50) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
    mouseDownX.current = null;
  };

  const s = slides[index];

  return (
    <Wrap>
      <Title>Success Stories</Title>

      <SliderOuter>
        {/* ARROWS */}
        <Arrows>
          <button onClick={prevSlide} aria-label="Previous case study">
            <svg viewBox="0 0 24 24">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button onClick={nextSlide} aria-label="Next case study">
            <svg viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </Arrows>

        {/* SLIDER */}
        <SliderViewport
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <SliderTrack index={index}>
            {slides.map((slide, i) => (
              <Slide key={i}>
                <Left>
                  <div>
                    <CaseTitle>{slide.title}</CaseTitle>
                    <Desc>{slide.desc}</Desc>

                    <BulletTitle>Results</BulletTitle>
                    <BulletList>
                      {slide.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </BulletList>
                  </div>

                  <Button onClick={() => setOpen(true)}>
                    View Case Study →
                  </Button>
                </Left>

                <Image src={slide.img} alt={slide.title} loading="lazy" />
              </Slide>
            ))}
          </SliderTrack>
        </SliderViewport>

        {/* DOTS */}
        <Dots>
          {slides.map((_, i) => (
            <Dot
              key={i}
              active={i === index}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </Dots>
      </SliderOuter>

      {/* CONTACT CTA */}
      <BottomBar onClick={() => navigate("/contact")}>
        Fuel your digital idea with our transformation experts. Contact Us →
      </BottomBar>

      {/* MODAL – CASE STUDY DETAIL */}
      {open && (
        <ModalBG onClick={() => setOpen(false)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={() => setOpen(false)}>×</CloseBtn>
            <h2 style={{ marginBottom: 10 }}>{s.title}</h2>
            <p style={{ margin: "10px 0 16px 0", fontSize: 14 }}>{s.details}</p>
            <img
              src={s.img}
              alt={s.title}
              style={{ width: "100%", borderRadius: 12, marginBottom: 16 }}
            />

            <Button
              onClick={() => {
                nextSlide();
              }}
            >
              Next Case →
            </Button>
          </ModalBox>
        </ModalBG>
      )}
    </Wrap>
  );
}
