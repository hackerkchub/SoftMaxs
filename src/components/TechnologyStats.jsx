import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  width: 100%;
  padding: 70px 0 60px;
  background: white;
`;

const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 0 30px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;

  @media(max-width:900px){
    flex-direction: column;
  }
`;

const LeftTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  font-family: "Playfair Display", serif;
`;

const RightDesc = styled.p`
  font-size: 16px;
  color: #444;
  max-width: 520px;
  line-height: 1.6;
`;

const StatsRow = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 0 20px;

  @media(max-width:900px){
    flex-direction: column;
    text-align: center;
  }
`;

const StatBox = styled.div`
  flex: 1;
  border-left: 2px solid #e2b100;
  padding-left: 20px;

  @media(max-width:900px){
    border-left: none;
    border-top: 2px solid #e2b100;
    padding-top: 20px;
  }
`;

const StatNumber = styled.h3`
  color: #e2b100;
  font-size: 40px;
  font-weight: 900;
`;

const StatTitle = styled.h4`
  margin: 8px 0;
  font-size: 18px;
  font-weight: 700;
`;

const StatDesc = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #444;
`;

export default function TechnologyStats() {
  return (
    <Wrap>
      <Container>

        <TitleRow>
          <LeftTitle>
            Powering businesses <br/> through innovation
          </LeftTitle>

          <RightDesc>
            SoftMaxs empowers global brands, startups, and enterprises to scale through
            intelligent technology, automation, and digital transformation. We engineer
            reliable, future-ready solutions backed by deep industry expertise and
            performance-focused execution.
          </RightDesc>
        </TitleRow>

        <StatsRow>

          <StatBox>
            <StatNumber>250+</StatNumber>
            <StatTitle>Technology Experts</StatTitle>
            <StatDesc>
              A skilled team of engineers, architects, and creators building
              next-generation digital ecosystems.
            </StatDesc>
          </StatBox>

          <StatBox>
            <StatNumber>2200+</StatNumber>
            <StatTitle>Projects Delivered</StatTitle>
            <StatDesc>
              Proven success in delivering scalable, dependable, and high-performance
              solutions across industries.
            </StatDesc>
          </StatBox>

          <StatBox>
            <StatNumber>500+</StatNumber>
            <StatTitle>Processes Modernized</StatTitle>
            <StatDesc>
              Driving complete digital modernization with automated workflows, optimized
              operations, and seamless integrations.
            </StatDesc>
          </StatBox>

        </StatsRow>

      </Container>
    </Wrap>
  );
}
