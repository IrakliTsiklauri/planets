import React from "react";
import styled from "styled-components";
// import { styled, keyframes } from "styled-components";

const PlanetImages = ({
  activeBtn,
  planetData,
  activeImage,
  planetImgGeology,
}) => {
  const imgwidth = planetData.size.width;
  const imgheight = planetData.size.height;
  const geologyimgwidth = planetData.geologiImgSize.geologyImgWidth;
  const geologyimgheight = planetData.geologiImgSize.geologyImgHeight;
  const tabletimgwidth = planetData.tabletSize.tabWidth;
  const tabletimgheight = planetData.tabletSize.tabHeight;
  const tabletgeowidth = planetData.tabGeologyImgSize.tabGeoImgWidth;
  const tabletgeoheight = planetData.tabGeologyImgSize.tabGeoImgHeight;
  const mobileimgwidth = planetData.mobileSize.mobWidth;
  const mobileimgheight = planetData.mobileSize.mobHeight;
  const mobilegeoimgwidth = planetData.mobileGeologyImgSize.mobGeoImgWidth;
  const mobilegeoimgheight = planetData.mobileGeologyImgSize.mobGeoImgHeight;

  return (
    <ImgSection>
      {activeBtn !== "geology" && (
        <Image
          src={activeImage}
          alt={planetData.name}
          visible="true"
          imgwidth={imgwidth}
          imgheight={imgheight}
          tabletimgwidth={tabletimgwidth}
          tabletimgheight={tabletimgheight}
          mobileimgwidth={mobileimgwidth}
          mobileimgheight={mobileimgheight}
        />
      )}
      {activeBtn === "geology" && (
        <>
          <GeologyImg
            src={planetImgGeology}
            alt={planetData.name}
            visible="true"
            geologyimgwidth={geologyimgwidth}
            geologyimgheight={geologyimgheight}
            tabletgeowidth={tabletgeowidth}
            tabletgeoheight={tabletgeoheight}
            mobilegeoimgwidth={mobilegeoimgwidth}
            mobilegeoimgheight={mobilegeoimgheight}
          />

          <Image
            src={activeImage}
            alt={planetData.name}
            visible="false"
            imgwidth={imgwidth}
            imgheight={imgheight}
            tabletimgwidth={tabletimgwidth}
            tabletimgheight={tabletimgheight}
            mobileimgwidth={mobileimgwidth}
            mobileimgheight={mobileimgheight}
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
  }

  @media (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  position: relative;
  width: 200px;
  height: auto;
  animation: flipImage 4s infinite;
  width: ${(props) => props.imgwidth};
  height: ${(props) => props.imgheight};

  @media (max-width: 768px) {
    width: ${(props) => props.tabletimgwidth};
    height: ${(props) => props.tabletimgheight};
  }
  @media (max-width: 400px) {
    width: ${(props) => props.mobileimgwidth};
    height: ${(props) => props.mobileimgheight};
  }

  @keyframes flipImage {
    0% {
      transform: perspective(800px) rotateY(0deg);
    }
    50% {
      transform: perspective(800px) rotateY(180deg);
    }
    100% {
      transform: perspective(800px) rotateY(360deg);
    }
  }
`;

const GeologyImg = styled.img`
  position: absolute;
  transform: translate(0, 90%);
  width: ${(props) => props.geologyimgwidth};
  height: ${(props) => props.geologyimgheight};
  z-index: 1;
  animation: geoImgAnim 2s infinite;

@keyframes geoImgAnim {
  0%,
  100% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  50% {
    opacity: 0.75;
  }
  25% {
    opacity: 0.5;
  }
}

  @media (max-width: 768px) {
    width: ${(props) => props.tabletgeowidth};
    height: ${(props) => props.tabletgeoheight};
  }

  @media (max-width: 400px) {
    width: ${(props) => props.mobilegeoimgwidth};
    height: ${(props) => props.mobilegeoimgheight};
  }
`;
