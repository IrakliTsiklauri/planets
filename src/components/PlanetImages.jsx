import React from "react";
import styled from "styled-components";

const PlanetImages = ({
  activeBtn,
  planetData,
  activeImage,
  planetImgGeology,
}) => {
  const imgwidth = planetData.size.width;
  const imgheight = planetData.size.height;
  const geologyImgWidth = planetData.geologiImgSize.geologyImgWidth;
  const geologyImgHeight = planetData.geologiImgSize.geologyImgHeight;

  return (
    <ImgSection>
      {activeBtn !== "geology" && (
        <Image
          src={activeImage}
          alt={planetData.name}
          visible="true"
          imgwidth={imgwidth}
          imgheight={imgheight}
        />
      )}
      {activeBtn === "geology" && (
        <>
          <Img
            src={planetImgGeology}
            alt={planetData.name}
            visible="true"
            geologyImgWidth={geologyImgWidth}
            geologyImgHeight={geologyImgHeight}
          />

          <Image
            src={activeImage}
            alt={planetData.name}
            visible="false"
            imgwidth={imgwidth}
            imgheight={imgheight}
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

  @media (max-width: 768px) {
    margin-bottom: 150px;
  }

  @media (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  width: ${(props) => props.imgwidth};
  height: ${(props) => props.imgheight};

  @media (max-width: 768px) {
    width: ${(props) => props.imgwidth};
    height: ${(props) => props.imgheight};

    @media (max-width: 400px) {
      width: 111px;
      height: 111px;
    }
  }
`;

const Img = styled.img`
  position: absolute;
  transform: translate(0, 90%);
  /* top: 83%; */
  width: ${(props) => props.geologyimgwidth};
  height: ${(props) => props.geologyimgheight};

  @media (max-width: 768) {
    width: ${(props) => props.geologyimgwidth};
    height: ${(props) => props.geologyimgheight};
  }
`;
