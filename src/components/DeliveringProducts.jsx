import React from "react";
import styled from "styled-components";

/* -------------------------------------------
   STYLES
------------------------------------------- */

const Wrap = styled.section`
  width: 100%;
  padding: 70px 0;
  background: #ffffff;
  font-family: "Inter", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  color: #000;
  margin-bottom: 10px;
`;

const Underline = styled.div`
  width: 70px;
  height: 3px;
  background: #e2b100;
  border-radius: 6px;
  margin: 0 auto 40px auto;
`;

const Grid = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  text-align: center;
`;

const VideoFrame = styled.div`
  width: 100%;
  height: 390px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Name = styled.h4`
  font-size: 19px;
  font-weight: 800;
  margin-top: 14px;
  color: #000;
`;

const Role = styled.p`
  font-size: 14px;
  color: #444;
  margin-top: 5px;
`;

/* -------------------------------------------
   DATA (dummy YouTube shorts — 100% loadable)
------------------------------------------- */

const videos = [
  {
    url: "https://www.youtube.com/embed/m14GxNzAl3Q",
    name: "Bailey Beykirch",
    role: "CEO, KenzKustomz",
  },
  {
    url: "https://www.youtube.com/embed/uelHwf8o7_U",
    name: "Belinda",
    role: "CEO, Hestia Magic",
  },
  {
    url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    name: "Janelle",
    role: "CEO, Fly VSJ",
  },
  {
    url: "https://www.youtube.com/embed/oUFJJNQGwhk",
    name: "Daniella Park",
    role: "CEO, DoingItSober",
  },
];

/* -------------------------------------------
   MAIN COMPONENT
------------------------------------------- */

export default function DeliveringProducts() {
  return (
    <Wrap>
      <Title>Delivering Excellent Products</Title>
      <Underline />

      <Grid>
        {videos.map((v, i) => (
          <Card key={i}>
            <VideoFrame>
              <iframe
                src={v.url}
                title="Testimonial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoFrame>

            <Name>{v.name}</Name>
            <Role>{v.role}</Role>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}
