import React, { useState } from "react";
import styled from "styled-components";

/* ---------------------------
    WRAPPER
----------------------------*/
const Wrap = styled.section`
  width: 100%;
  padding: 80px 0;
  background: #ffffff;
  font-family: "Inter", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  color: #000;
`;

const Underline = styled.div`
  width: 70px;
  height: 3px;
  background: #e2b100;
  margin: 14px auto 50px auto;
`;

/* ---------------------------
    GRID
----------------------------*/
const Grid = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;

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
  padding: 22px 26px;
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
`;

const Question = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

const Arrow = styled.div`
  width: 32px;
  height: 32px;
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
  font-size: 15px;
  color: #333;
  margin-top: 14px;
  line-height: 1.55;
  max-height: ${(p) => (p.open ? "500px" : "0px")};
  overflow: hidden;
  transition: max-height 0.35s ease;
`;

/* ---------------------------
    SOFTMAXS FAQ DATA
----------------------------*/
const faqs = [
  {
    q: "What does SoftMaxs do?",
    a: "SoftMaxs is a digital solutions and technology innovation company offering custom software development, AI automation, cloud services, e-commerce solutions, and digital transformation consulting."
  },
  {
    q: "Which industries does SoftMaxs work with?",
    a: "We work with healthcare, finance, e-commerce, education, real-estate, retail, logistics, SaaS platforms, and fast-growing tech startups."
  },
  {
    q: "Do you serve clients outside India?",
    a: "Yes. SoftMaxs partners with businesses in the US, UK, Germany, UAE, Australia, and more than 25+ countries worldwide."
  },
  {
    q: "What makes SoftMaxs different from other agencies?",
    a: "We specialize in high-performance engineering, scalable cloud architecture, AI-enabled automation, and long-term support — backed by a highly experienced development team."
  },
  {
    q: "What technologies does SoftMaxs work on?",
    a: "React, Next.js, Node.js, Python, Django, Laravel, Magento, Shopify, Flutter, AWS, Google Cloud, OpenAI, LangChain, and enterprise-level AI frameworks."
  },
  {
    q: "Can SoftMaxs integrate AI into our existing system?",
    a: "Absolutely. We integrate AI chatbots, workflow automation, analytics engines, document processing AI, and ERP automation tailored to your business."
  },
  {
    q: "Do you provide system integration and API development?",
    a: "Yes, SoftMaxs specializes in API development, third-party system integration, microservices, and modernization of legacy systems."
  },
  {
    q: "How does SoftMaxs ensure quality in development?",
    a: "We follow a structured cycle: requirement mapping, sprint planning, UI/UX design, development, QA automation, weekly updates, and performance monitoring."
  },
  {
    q: "How long does a custom software project take?",
    a: "A typical web or mobile application takes 4–10 weeks depending on complexity, integrations, and design scope."
  },
  {
    q: "Do you offer ongoing support & maintenance?",
    a: "Yes. SoftMaxs provides performance monitoring, bug fixes, server management, updates, backups, and scalable maintenance plans."
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
