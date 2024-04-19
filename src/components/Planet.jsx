import React, { useState } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PlanetImages from "./PlanetImages";
import PlanetInformation from "./PlanetInformation";
import PlanetStats from "./PlanetStats";

const Planet = () => {
  const params = useParams();
  const paramsName = params.name;
  const planetData = data.find((planetObj) => planetObj.name === paramsName);

  const [activeBtn, setActiveBtn] = useState("overview");

  const handleBtnClick = (btnName) => {
    setActiveBtn(btnName);
  };

  const planetImgOverview = planetData.images.planet;
  const planetImgStrucure = planetData.images.internal;
  const planetImgGeology = planetData.images.geology;

  const activeImage =
    activeBtn === "overview"
      ? planetImgOverview
      : activeBtn === "structure"
      ? planetImgStrucure
      : planetImgOverview;

  return (
    <>
      <Container>
        <PlanetImages
          activeImage={activeImage}
          activeBtn={activeBtn}
          planetData={planetData}
          planetImgOverview={planetImgOverview}
          planetImgStrucure={planetImgStrucure}
          planetImgGeology={planetImgGeology}
        />

        <PlanetInformation
          planetData={planetData}
          activeBtn={activeBtn}
          handleBtnClick={handleBtnClick}
        ></PlanetInformation>
      </Container>
      <PlanetStats planetData={planetData} />
    </>
  );
};

export default Planet;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;
