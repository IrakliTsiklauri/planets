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
  const tabletGeoWidth = planetData.tabGeologyImgSize.tabGeoImgWidth;
  const tabletGeoHeight = planetData.tabGeologyImgSize.tabGeoImgHeight;
  const mobileImgWidth = planetData.mobileSize.mobWidth;
  const mobileImgHeight = planetData.mobileSize.mobHeight;
  const mobileGeoImgWidth = planetData.mobileGeologyImgSize.mobGeoImgWidth;
  const mobileGeoImgHeight = planetData.mobileGeologyImgSize.mobGeoImgHeight;

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
          mobileImgWidth={mobileImgWidth}
          mobileImgHeight={mobileImgHeight}
        />
      )}
      {activeBtn === "geology" && (
        <>
          <Img
            src={planetImgGeology}
            alt={planetData.name}
            visible="true"
            geologyimgwidth={geologyimgwidth}
            geologyimgheight={geologyimgheight}
            tabletGeoWidth={tabletGeoWidth}
            tabletGeoHeight={tabletGeoHeight}
            mobileGeoImgWidth={mobileGeoImgWidth}
            mobileGeoImgHeight={mobileGeoImgHeight}
          />

          <Image
            src={activeImage}
            alt={planetData.name}
            visible="false"
            imgwidth={imgwidth}
            imgheight={imgheight}
            tabletimgwidth={tabletimgwidth}
            tabletimgheight={tabletimgheight}
            mobileImgWidth={mobileImgWidth}
            mobileImgHeight={mobileImgHeight}
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
  width: ${(props) => props.imgwidth};
  height: ${(props) => props.imgheight};

  @media (max-width: 768px) {
    width: ${(props) => props.tabletimgwidth};
    height: ${(props) => props.tabletimgheight};
  }
  @media (max-width: 400px) {
    width: ${(props) => props.mobileImgWidth};
    height: ${(props) => props.mobileImgHeight};
  }
`;

const Img = styled.img`
  position: absolute;
  transform: translate(0, 90%);
  width: ${(props) => props.geologyimgwidth};
  height: ${(props) => props.geologyimgheight};

  @media (max-width: 768px) {
    width: ${(props) => props.tabletGeoWidth};
    height: ${(props) => props.tabletGeoHeight};
  }

  @media (max-width: 400px) {
    width: ${(props) => props.mobileGeoImgWidth};
    height: ${(props) => props.mobileGeoImgHeight};
  }
`;
