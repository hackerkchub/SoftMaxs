import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  width: 90%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
`;

const AwardCard = styled.div`
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transition: 0.3s;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }

  img {
    width: 70%;
    height: auto;
  }
`;

const AwardsRecognition = () => {
  const awards = [
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/clutch.svg",
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/goodfirms.svg",
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg",
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg",
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg",
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/magento.svg",
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/woocommerce.svg",
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/firebase.svg",
  ];

  return (
    <Wrap>
      <Grid>
        {awards.map((src, i) => (
          <AwardCard key={i}>
            <img src={src} alt="award badge" loading="lazy" />
          </AwardCard>
        ))}
      </Grid>
    </Wrap>
  );
};

export default AwardsRecognition;
