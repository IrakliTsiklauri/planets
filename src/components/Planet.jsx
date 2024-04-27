import React, { useState } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PlanetImages from "./PlanetImages";
import PlanetInformation from "./PlanetInformation";
import PlanetStats from "./PlanetStats";
import PlanetMobileBtns from "./PlanetMobileBtns";
import Header from "./Header";

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
      <Header planetData={planetData} />
      <Wrapper>
        <PlanetMobileBtns
          planetData={planetData}
          handleBtnClick={handleBtnClick}
        />
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
          />
        </Container>
        <PlanetStats planetData={planetData} />
      </Wrapper>
    </>
  );
};

export default Planet;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  /* width: 120%; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;
