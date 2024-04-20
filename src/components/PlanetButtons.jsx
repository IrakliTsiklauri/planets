import React from "react";
import styled from "styled-components";

const PlanetButtons = ({ handleBtnClick, planetData }) => {
  return (
    <Buttons>
      <Btn onClick={() => handleBtnClick("overview")}>
        <span style={{ fontFamily: "League Spartan" }}>01</span>{" "}
        {planetData.button.firstButton.toUpperCase()}
      </Btn>
      <Btn onClick={() => handleBtnClick("structure")}>
        <span style={{ fontFamily: "League Spartan" }}>02</span>{" "}
        {planetData.button.secondButton.toUpperCase()}
      </Btn>
      <Btn onClick={() => handleBtnClick("geology")}>
        <span style={{ fontFamily: "League Spartan" }}>03</span>{" "}
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
`;

const Btn = styled.button`
  font-family: "League Spartan", sans-serif;
  background-color: #070724;
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

  @media (max-width: 768px) {
    padding: 12px;
  }
`;
