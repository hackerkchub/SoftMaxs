import React, { useState } from "react";
import styled from "styled-components";

/* ---------------------------
    WRAPPER
----------------------------*/
const Wrap = styled.section`
  width: 100%;
  padding: clamp(50px, 7vw, 80px) 0;
  background: #ffffff;
  font-family: "Inter", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 800;
  color: #000;
`;

const Underline = styled.div`
  width: 70px;
  height: 3px;
  background: #e2b100;
  margin: 14px auto clamp(30px, 6vw, 50px) auto;
`;

/* ---------------------------
    GRID
----------------------------*/
const Grid = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(16px, 3vw, 22px);

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

/* ---------------------------
    FAQ CARD
----------------------------*/
const Card = styled.div`
  background: #eaf3ff;
  border-radius: 10px;
  padding: clamp(18px, 3vw, 22px) clamp(18px, 3vw, 26px);
  cursor: pointer;
  transition: 0.2s;
  position: relative;

  &:hover {
    background: #e2eeff;
  }
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Question = styled.h4`
  font-size: clamp(16px, 2.4vw, 18px);
  font-weight: 700;
  color: #000;
  flex: 1;

  /* To prevent text & arrow overlap on small screens */
  @media (max-width: 500px) {
    line-height: 1.35;
  }
`;

const Arrow = styled.div`
  min-width: 32px;
  min-height: 32px;
  background: #d6e9ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease;
  transform: ${(p) => (p.open ? "rotate(180deg)" : "rotate(0deg)")};

  svg {
    width: 18px;
    height: 18px;
    stroke: #000;
  }
`;

const Answer = styled.p`
  font-size: clamp(14px, 2.4vw, 15px);
  color: #333;
  margin-top: ${(p) => (p.open ? "14px" : "0")};
  line-height: 1.55;

  max-height: ${(p) => (p.open ? "600px" : "0px")};
  overflow: hidden;
  transition: max-height 0.35s ease, margin-top 0.25s ease;
`;

/* ---------------------------
    SOFTMAXS FAQ DATA
----------------------------*/
const faqs = [
  {
    q: "What does SoftMaxs do?",
    a: "SoftMaxs is a digital solutions company offering custom software development, AI automation, cloud services, and digital transformation consulting."
  },
  {
    q: "Which industries does SoftMaxs work with?",
    a: "We work with healthcare, finance, e-commerce, education, real-estate, retail, logistics, SaaS platforms, and tech startups."
  },
  {
    q: "Do you serve clients outside India?",
    a: "Yes. SoftMaxs partners with businesses in 25+ countries across the US, UK, Germany, UAE, and Australia."
  },
  {
    q: "What makes SoftMaxs different?",
    a: "We specialize in high-performance engineering, AI automation, scalable architecture, and long-term technical support."
  },
  {
    q: "What technologies does SoftMaxs work on?",
    a: "React, Next.js, Node.js, Python, Django, Laravel, Shopify, Flutter, AWS, Google Cloud, and AI frameworks."
  },
  {
    q: "Can SoftMaxs integrate AI into existing systems?",
    a: "Yes. We implement AI chatbots, workflow automation, analytics engines, OCR AI, and document processing."
  },
  {
    q: "Do you provide API development?",
    a: "Yes. We offer API development, third-party integration, microservices, and migration from legacy systems."
  },
  {
    q: "How do you ensure quality?",
    a: "We follow requirement mapping, sprint planning, UI/UX design, development, QA automation, and weekly progress reviews."
  },
  {
    q: "How long does a project take?",
    a: "A typical website or mobile app takes 4–10 weeks depending on complexity."
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer maintenance, bug fixes, server management, backups, and scaling support."
  }
];

/* ---------------------------
    MAIN COMPONENT
----------------------------*/
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <Wrap>
      <Title>Frequently Asked Questions</Title>
      <Underline />

      <Grid>
        {faqs.map((f, i) => (
          <Card key={i} onClick={() => toggle(i)}>
            <QuestionRow>
              <Question>{f.q}</Question>
              <Arrow open={openIndex === i}>
                <svg viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" fill="none" />
                </svg>
              </Arrow>
            </QuestionRow>

            <Answer open={openIndex === i}>{f.a}</Answer>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}
