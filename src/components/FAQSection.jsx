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
    FAQ DATA
----------------------------*/
const faqs = [
  {
    q: "What does EbizON do?",
    a: "EbizON is a global e-commerce and digital activation agency helping brands and retailers transform their business. From strategy and consulting to development and marketing, we deliver end-to-end solutions."
  },
  {
    q: "What industries do you serve?",
    a: "We serve healthcare, fashion, hospitality, e-commerce, tech startups, and large-scale enterprise companies across multiple sectors."
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! We work with clients across 30+ countries including the US, UK, Australia, and Europe."
  },
  {
    q: "What makes EbizON different from other digital agencies?",
    a: "Our deep domain expertise, dedicated teams, and long-term client retention rate make us stand out."
  },
  {
    q: "What technologies and AI frameworks do you work with?",
    a: "We work with React, Node.js, Shopify, Magento, Python, TensorFlow, OpenAI, LangChain, and more."
  },
  {
    q: "Can you integrate AI into our existing software or ERP system?",
    a: "Absolutely! We integrate AI automation, chatbots, data processors, and workflow optimization tools into existing systems."
  },
  {
    q: "Can you help integrate new software with our existing systems?",
    a: "Yes, we specialize in API development, platform migration, and automation integrations."
  },
  {
    q: "How do you ensure project quality and success?",
    a: "Our process involves planning, design sprints, QA testing, weekly reviews, and performance monitoring."
  },
  {
    q: "How long does it take to develop an e-commerce website?",
    a: "Standard projects take 4–8 weeks depending on complexity and integrations."
  },
  {
    q: "Do you offer annual maintenance and support?",
    a: "Yes! We provide ongoing support, maintenance, monitoring, backups, and security updates."
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
