import React from "react";
import styled from "styled-components";
import shape from "../images/Shape.png";
import { NavLink } from "react-router-dom";
import PlanetButtons from "./PlanetButtons";

const PlanetInformation = ({ planetData, activeBtn, handleBtnClick }) => {
  return (
    <Information>
      <PlanetDescription>
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
      </PlanetDescription>
      <PlanetButtons handleBtnClick={handleBtnClick} planetData={planetData} />
    </Information>
  );
};

export default PlanetInformation;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  padding: 20px;
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

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 50px;

    h2 {
      font-size: 48px;
    }

    p {
      font-size: 11px;
      line-height: 22px;
    }
  }
`;

const PlanetDescription = styled.div`
  /* width: 350px; */

  @media (max-width: 768px) {
    width: 339px;
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
