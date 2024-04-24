import React from "react";
import styled from "styled-components";

const PlanetButtons = ({ handleBtnClick, planetData, activeBtn }) => {
  const background = planetData.backgroundColor;

  return (
    <Buttons>
      <Btn
        onClick={() => handleBtnClick("overview")}
        style={{
          backgroundColor:
            activeBtn === "overview" ? `${background}` : "#070724",
        }}
      >
        <span>01</span>
        {planetData.button.firstButton.toUpperCase()}
      </Btn>
      <Btn
        onClick={() => handleBtnClick("structure")}
        style={{
          backgroundColor:
            activeBtn === "structure" ? `${background}` : "#070724",
        }}
      >
        <span>02</span>
        {planetData.button.secondButton.toUpperCase()}
      </Btn>
      <Btn
        onClick={() => handleBtnClick("geology")}
        style={{
          backgroundColor:
            activeBtn === "geology" ? `${background}` : "#070724",
        }}
      >
        <span>03</span>
        {planetData.button.thirdButton.toUpperCase()}
      </Btn>
    </Buttons>
  );
};

export default PlanetButtons;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    width: 281px;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

const Btn = styled.button`
  font-family: "League Spartan", sans-serif;
  /* background-color: #070724; */

  color: #fff;
  border: 1px solid rgb(131, 131, 145);
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  transition: 0.5s;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: #827e7e;
  }

  span {
    font-family: "League Spartan", sans-serif;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;
