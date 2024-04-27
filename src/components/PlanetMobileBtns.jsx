import React from "react";
import styled from "styled-components";

const PlanetMobileBtns = ({ planetData, handleBtnClick }) => {
  //   const btnsName = planetData.MobileBtns.overview;
  //   console.log(btnsName);

  return (
    <MobileBtns>
      <MobileBtn onClick={() => handleBtnClick("overview")}>
        {planetData.mobileBtns.overview.toUpperCase()}
      </MobileBtn>
      <MobileBtn onClick={() => handleBtnClick("structure")}>
        {planetData.mobileBtns.structure.toUpperCase()}
      </MobileBtn>
      <MobileBtn onClick={() => handleBtnClick("geology")}>
        {planetData.mobileBtns.surface.toUpperCase()}
      </MobileBtn>
    </MobileBtns>
  );
};

export default PlanetMobileBtns;

const MobileBtns = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 400px) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    border-bottom: 1px solid #37374e;
    padding: 20px 30px;
  }
`;

const MobileBtn = styled.div`
  font-family: "League Spartan", sans-serif;
  background-color: #070724;
  color: #fff;
  font-size: 9px;
  line-height: 10.08px;
  cursor: pointer;
`;
