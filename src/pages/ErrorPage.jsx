import React from "react";
import styled from "styled-components";
import austronaut from "../images/Astronaut.png";

const ErrorPage = () => {
  return (
    <ErrorSection>
      <ErrorText>
        <h1>Page Not Found</h1>
        <Call>
          <span>🚀🐱‍🚀📢:</span>
          <Text>Houston, we have a problem...</Text>
        </Call>
      </ErrorText>
      <ErrorImg>
        <img src={austronaut} alt="austronaut" />
      </ErrorImg>
    </ErrorSection>
  );
};

export default ErrorPage;

const ErrorSection = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;

  h1 {
    font-size: 45px;
    color: #5c5454;
  }

  p {
    font-size: 20px;
    color: #7a6464;
  }
`;
const Call = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.p`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 10px;
`;
const ErrorImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  width: 100%;

  img {
    height: 500px;
    position: relative;
    animation: moveImage 4s infinite;

    @media (max-width: 1200px) {
      height: 300px;
    }
  }

  @keyframes moveImage {
    0% {
      left: 0px;
      top: 0px;
    }
    50% {
      top: -70px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`;
