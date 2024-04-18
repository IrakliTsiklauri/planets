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

  const planetImg = planetData.images.planet;
  return (
    <Container>
      <ImgSection>
        <img src={planetImg} alt={planetData.name} />
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
            Source: <Link to={`${planetData.overview.source}`}>Wikipedia</Link>
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
  min-height: 100vh;

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
