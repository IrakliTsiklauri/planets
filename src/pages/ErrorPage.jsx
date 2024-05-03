import React from "react";
import styled from "styled-components";
import austronaut from "../images/Astronaut.png";

const ErrorPage = () => {
  return (
    <ErrorSection>
      <ErrorText>
        <h1>Page Not Found</h1>
        <p>Houston, we have a problem...</p>
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
  /* gap: 20%; */
`;

// const ErrorContent = styled.div`
//   display: flex;
//   /* flex-direction: column; */
//   align-items: center;
//   text-align: center;
// `;

const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;

  h1 {
    font-size: 45px;
  }

  p {
    font-size: 20px;
  }
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
  }

  @keyframes moveImage {
    0% {
      left: 0px;
      top: 0px;
    }
    50% {
      top: 100px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`;
