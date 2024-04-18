import React, { useState } from "react";
import data from "../data.json";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import shape from "../images/Shape.png";

const Planet = () => {
  const params = useParams();
  const paramsName = params.name;
  const planetData = data.find((planetObj) => planetObj.name === paramsName);

  const [activeBtn, setActiveBtn] = useState("overview");

  // if (!planet) {
  //   return <div>Planet not found!</div>;
  // }

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
      : planetImgGeology;

  return (
    <>
      <Container>
        <ImgSection>
          <img src={activeImage} alt={planetData.name} />
        </ImgSection>

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
              Source:{" "}
              <Link to={`${planetData.overview.source}`}>Wikipedia</Link>
            </span>
            <img src={shape} alt="arrow" />
          </Wikipedia>

          <Buttons>
            <button onClick={() => handleBtnClick("overview")}>
              <span style={{ fontFamily: "League Spartan" }}>01</span>{" "}
              {planetData.button.firstButton.toUpperCase()}
            </button>
            <button onClick={() => handleBtnClick("structure")}>
              <span style={{ fontFamily: "League Spartan" }}>02</span>{" "}
              {planetData.button.secondButton.toUpperCase()}
            </button>
            <button onClick={() => handleBtnClick("geology")}>
              <span style={{ fontFamily: "League Spartan" }}>03</span>{" "}
              {planetData.button.thirdButton.toUpperCase()}
            </button>
          </Buttons>
        </Information>
      </Container>
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
    </>
  );
};

export default Planet;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

const ImgSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 320px;

  button {
    font-family: "League Spartan", sans-serif;
    background-color: #070724;
    color: #fff;
    border: 1px solid rgb(131, 131, 145);
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
  }
`;

const PlanetInfo = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-around;
  padding: 0 280px;
  margin-bottom: 60px;
`;

const RotaTion = styled.div`
  width: 255px;
  border: 1px solid rgb(131, 131, 145);
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
`;
const Revolution = styled.div`
  width: 255px;
  border: 1px solid rgb(131, 131, 145);
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
`;
const Radius = styled.div`
  width: 255px;
  border: 1px solid rgb(131, 131, 145);
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
`;
const Temp = styled.div`
  width: 255px;
  border: 1px solid rgb(131, 131, 145);
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
`;
