import React from "react";
import styled from "styled-components";

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
  border-left: 2px solid #e2b100;
  padding-left: clamp(12px, 2vw, 20px);

  @media (max-width: 900px) {
    border-left: none;
    border-top: 2px solid #e2b100;
    padding-top: 20px;
    padding-left: 0;
  }
`;

const StatNumber = styled.h3`
  color: #e2b100;
  font-size: clamp(30px, 5vw, 40px);
  font-weight: 900;
`;

const StatTitle = styled.h4`
  margin: 8px 0;
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

          <StatBox>
            <StatNumber>250+</StatNumber>
            <StatTitle>Technology Experts</StatTitle>
            <StatDesc>
              Skilled engineers, architects, and creators building next-gen digital ecosystems.
            </StatDesc>
          </StatBox>

          <StatBox>
            <StatNumber>2200+</StatNumber>
            <StatTitle>Projects Delivered</StatTitle>
            <StatDesc>
              Scalable, dependable, high-performance solutions delivered worldwide.
            </StatDesc>
          </StatBox>

          <StatBox>
            <StatNumber>500+</StatNumber>
            <StatTitle>Processes Modernized</StatTitle>
            <StatDesc>
              Complete digital modernization with automated workflows & optimized operations.
            </StatDesc>
          </StatBox>

        </StatsRow>

      </Container>
    </Wrap>
  );
}
