import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiUsers, FiPackage, FiTrendingUp } from "react-icons/fi";

/* ----------------------------------------
   WRAPPER
---------------------------------------- */
const Wrap = styled.section`
  width: 100%;
  padding: clamp(50px, 8vw, 80px) 0;
  background: white;
`;

/* ----------------------------------------
   CONTAINER
---------------------------------------- */
const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 0 clamp(16px, 4vw, 32px);
`;

/* ----------------------------------------
   TITLE ROW
---------------------------------------- */
const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: clamp(20px, 4vw, 40px);

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftTitle = styled.h2`
  font-size: clamp(28px, 4.5vw, 42px);
  font-weight: 800;
  font-family: "Playfair Display", serif;
  line-height: 1.2;
`;

const RightDesc = styled.p`
  font-size: clamp(14px, 2vw, 16px);
  color: #444;
  max-width: 520px;
  line-height: 1.65;
  margin-top: 4px;

  @media (max-width: 900px) {
    margin: auto;
  }
`;

/* ----------------------------------------
   STATS ROW
---------------------------------------- */
const StatsRow = styled.div`
  margin-top: clamp(40px, 6vw, 70px);
  display: flex;
  justify-content: space-between;
  gap: clamp(20px, 4vw, 40px);
  padding: 0 clamp(10px, 3vw, 20px);

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
`;

/* ----------------------------------------
   STAT BOX
---------------------------------------- */
const StatBox = styled.div`
  flex: 1;
  border-left: 3px solid #e2b100;
  padding-left: clamp(12px, 2vw, 20px);
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &:hover {
    border-left: 3px solid #ffcc00;
    box-shadow: 0 0 18px rgba(255, 200, 0, 0.45);
    transform: translateY(-6px);
  }

  @media (max-width: 900px) {
    border-left: none;
    border-top: 3px solid #e2b100;
    padding-top: 20px;
    padding-left: 0;
  }
`;

const IconWrap = styled.div`
  font-size: 34px;
  color: #e2b100;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const StatNumber = styled.h3`
  color: #e2b100;
  font-size: clamp(30px, 5vw, 40px);
  font-weight: 900;
`;

const StatTitle = styled.h4`
  margin: 5px 0;
  font-size: clamp(16px, 2.5vw, 18px);
  font-weight: 700;
`;

const StatDesc = styled.p`
  font-size: clamp(13px, 2vw, 14px);
  line-height: 1.55;
  color: #444;
`;

/* ----------------------------------------
   MAIN COMPONENT
---------------------------------------- */
export default function TechnologyStats() {
  const stats = [
    { icon: <FiUsers />, end: 250, title: "Technology Experts", desc: "Skilled engineers, architects, and creators building next-gen digital ecosystems." },
    { icon: <FiPackage />, end: 2200, title: "Projects Delivered", desc: "Scalable, dependable, high-performance solutions delivered worldwide." },
    { icon: <FiTrendingUp />, end: 500, title: "Processes Modernized", desc: "Complete digital modernization with automated workflows & optimized operations." }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((item, index) => {
      let start = 0;
      const duration = 1200;
      const increment = item.end / (duration / 16);

      const animate = () => {
        start += increment;
        if (start < item.end) {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = Math.floor(start);
            return updated;
          });
          requestAnimationFrame(animate);
        } else {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = item.end;
            return updated;
          });
        }
      };

      setTimeout(() => requestAnimationFrame(animate), index * 200);
    });
  }, []);

  return (
    <Wrap>
      <Container>
        <TitleRow>
          <LeftTitle>
            Powering businesses <br /> through innovation
          </LeftTitle>

          <RightDesc>
            SoftMaxs empowers global brands, startups, and enterprises to scale through
            intelligent technology, automation, and digital transformation.
            We engineer reliable, future-ready solutions backed by deep industry
            expertise and performance-focused execution.
          </RightDesc>
        </TitleRow>

        <StatsRow>
          {stats.map((s, i) => (
            <StatBox key={i}>
              <IconWrap>{s.icon}</IconWrap>
              <StatNumber>{counts[i]}+</StatNumber>
              <StatTitle>{s.title}</StatTitle>
              <StatDesc>{s.desc}</StatDesc>
            </StatBox>
          ))}
        </StatsRow>
      </Container>
    </Wrap>
  );
}
