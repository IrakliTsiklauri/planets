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
            Source:{" "}
            <Link
              to={
                activeBtn === "overview"
                  ? `${planetData.overview.source}`
                  : activeBtn === "structure"
                  ? `${planetData.structure.source}`
                  : planetData.geology.source
              }
            >
              Wikipedia
            </Link>
          </span>
          <img src={shape} alt="arrow" />
        </Wikipedia>
      </PlanetDescription>
      <PlanetButtons
        handleBtnClick={handleBtnClick}
        planetData={planetData}
        activeBtn={activeBtn}
      />
    </Information>
  );
};

export default PlanetInformation;

const Information = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  /* padding: 296px; */

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
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    width: 100%;

    h2 {
      font-size: 48px;
    }

    p {
      font-size: 11px;
      line-height: 22px;
      color: #fff;
    }
  }
`;

const PlanetDescription = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 10px; */

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 11px;
      line-height: 22px;
      color: #fff;
      text-align: center;
    }
  }
`;

const Wikipedia = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 15px;

  @media (max-width: 768px) {
    margin: 15px 0;

    span {
      font-size: 12px;
    }
  }
`;

const Link = styled(NavLink)`
  color: rgb(131, 131, 145);
`;
