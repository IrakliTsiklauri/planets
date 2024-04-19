import React from "react";
import styled from "styled-components";
import shape from "../images/Shape.png";
import { NavLink } from "react-router-dom";
import PlanetButtons from "./PlanetButtons";

const PlanetInformation = ({ planetData, activeBtn, handleBtnClick }) => {
  return (
    

    <Information>
      <h2>{planetData.name.toUpperCase()}</h2>
      <p>
        {activeBtn === "overview"
          ? planetData.overview.content
          : activeBtn === "structure"
          ? planetData.structure.content
          : planetData.geology.content}
      </p>
      <Wikipedia>
        <span>
          Source: <Link to={`${planetData.overview.source}`}>Wikipedia</Link>
        </span>
        <img src={shape} alt="arrow" />
      </Wikipedia>

      <PlanetButtons handleBtnClick={handleBtnClick} planetData={planetData} />
    </Information>
  );
};

export default PlanetInformation;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 310px;
  gap: 30px;
  height: 100vh;

  h2 {
    font-size: 80px;
    font-weight: 400;
    line-height: 103.52px;
    color: #fff;
  }

  p {
    font-family: "League Spartan", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    color: rgb(131, 131, 145);
  }

  span {
    font-family: "League Spartan", sans-serif;
    color: #595555;
    display: flex;
    gap: 10px;
  }
`;

const Wikipedia = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Link = styled(NavLink)`
  color: rgb(131, 131, 145);
`;
