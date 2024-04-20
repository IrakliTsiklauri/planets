import React from "react";
import styled from "styled-components";

const PlanetStats = ({ planetData }) => {
  return (
    <PlanetInfo>
      <RotaTion>
        <span>ROTATION TIME</span>
        <p>{planetData.rotation.toUpperCase()}</p>
      </RotaTion>
      <Revolution>
        <span>REVOLUTION TIME</span>
        <p>{planetData.revolution.toUpperCase()}</p>
      </Revolution>
      <Radius>
        <span>RADIUS</span>
        <p>{planetData.radius.toUpperCase()}</p>
      </Radius>
      <Temp>
        <span>AVERAGE TEMP.</span>
        <p>{planetData.temperature.toUpperCase()}</p>
      </Temp>
    </PlanetInfo>
  );
};

export default PlanetStats;

const PlanetInfo = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const RotaTion = styled.div`
  width: 255px;
  border: 1px solid rgb(131, 131, 145);
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 11px;
    font-weight: 700;
    font-family: "League Spartan", sans-serif;
    color: rgb(131, 131, 145);
  }

  p {
    font-size: 40px;
    font-weight: 400;
    font-family: "Antonio", sans-serif;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 164px;

    span {
      font-size: 8px;
    }

    p {
      font-size: 24px;
    }
  }
`;
const Revolution = styled.div`
  width: 255px;
  border: 1px solid rgb(131, 131, 145);
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 11px;
    font-weight: 700;
    font-family: "League Spartan", sans-serif;
    color: rgb(131, 131, 145);
  }

  p {
    font-size: 40px;
    font-weight: 400;
    font-family: "Antonio", sans-serif;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 164px;

    span {
      font-size: 8px;
    }

    p {
      font-size: 24px;
    }
  }
`;

const Radius = styled.div`
  width: 255px;
  border: 1px solid rgb(131, 131, 145);
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 11px;
    font-weight: 700;
    font-family: "League Spartan", sans-serif;
    color: rgb(131, 131, 145);
  }

  p {
    font-size: 40px;
    font-weight: 400;
    font-family: "Antonio", sans-serif;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 164px;

    span {
      font-size: 8px;
    }

    p {
      font-size: 24px;
    }
  }
`;
const Temp = styled.div`
  width: 255px;
  border: 1px solid rgb(131, 131, 145);
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 11px;
    font-weight: 700;
    font-family: "League Spartan", sans-serif;
    color: rgb(131, 131, 145);
  }

  p {
    font-size: 40px;
    font-weight: 400;
    font-family: "Antonio", sans-serif;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 164px;

    span {
      font-size: 8px;
    }

    p {
      font-size: 24px;
    }
  }
`;
