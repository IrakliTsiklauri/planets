import React from "react";
import data from "../data.json";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

const Planet = () => {
  const params = useParams();
  console.log(params);

  const paramsName = params.name;

  const planetData = data.find((planetObj) => planetObj.name === paramsName);
  console.log(planetData);

  // if (!planet) {
  //   return <div>Planet not found!</div>;
  // }

  const planetImg = planetData.images.planet;
  return (
    <Container>
      <ImgSection>
        <img src={planetImg} alt={planetData.name} />
      </ImgSection>

      <Information>
        <h2>{planetData.name.toUpperCase()}</h2>
        <p>{planetData.overview.content}</p>
        <span>
          Source: <Link to={`${planetData.overview.source}`}>Wikipedia</Link>
        </span>
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
    color: #b9b4b4;
  }

  span {
    font-family: "League Spartan", sans-serif;
    color: #595555;
    display: flex;
    gap: 10px;
  }
`;

const Link = styled(NavLink)`
  color: #b9b4b4;
`;
