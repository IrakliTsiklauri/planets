import React from "react";
import styled from "styled-components";

const PlanetImages = ({
  activeBtn,
  planetData,
  activeImage,
  planetImgGeology,
}) => {
  const imgWidth = planetData.size.width;
  const imgHeight = planetData.size.height;

  console.log(imgWidth, imgHeight);
  return (
    <ImgSection>
      {activeBtn !== "geology" && (
        <Image
          src={activeImage}
          alt={planetData.name}
          visible={true}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        />
      )}
      {activeBtn === "geology" && (
        <>
          <Img src={planetImgGeology} alt={planetData.name} visible={true} />

          <Image
            src={activeImage}
            alt={planetData.name}
            visible={false}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
          />
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

const Image = styled.img`
  width: ${(props) => props.imgWidth};
  height: ${(props) => props.imgHeight};

  @media (max-width: 768px) {
    width: 184px;
  }
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
