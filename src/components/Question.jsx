import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.section`
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  min-height: 180px;
  padding: 45px 0;
  background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=60&fm=webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 150px;
    padding: 35px 0;
    background-position: top;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.45);
  backdrop-filter: blur(3px);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
  width: 90%;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Button = styled(Link)`
  padding: 10px 22px;
  background: #ffb400;
  color: #111;
  border: none;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;

  &:hover {
    background: #e09a00;
    transform: translateY(-3px);
    box-shadow: 0 10px 22px rgba(0,0,0,0.2);
  }
`;

const Question = () => {
  return (
    <Wrap>
      <Overlay />
      <Content>
        <Title>Have a Question? Contact Us</Title>
        <Button to="/contact">Contact Us</Button>
      </Content>
    </Wrap>
  );
};

export default Question;
