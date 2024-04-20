import React from "react";
import styled from "styled-components";

const PlanetImages = ({
  activeBtn,
  planetData,
  activeImage,
  planetImgOverview,
  planetImgStrucure,
  planetImgGeology,
}) => {
  return (
    <ImgSection>
      {activeBtn !== "geology" && (
        <img src={activeImage} alt={planetData.name} visible={true} />
      )}
      {activeBtn === "geology" && (
        <>
          <Img src={planetImgGeology} alt={planetData.name} visible={true} />
          <img src={activeImage} alt={planetData.name} visible={false} />
        </>
      )}
    </ImgSection>
  );
};

export default PlanetImages;

const ImgSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  position: absolute;
  transform: translateY(-50%);
  top: 80%;
  width: 163px;
  height: 199px;

  @media (max-width: 768) {
    position: absolute;
    left: 39px;
  }
`;
