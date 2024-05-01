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
  gap: 20%;
`;

const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
  }
`;
const ErrorImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
