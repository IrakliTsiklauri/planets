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
  const geologyImgWidth = planetData.geologiImgSize.geologyImgWidth;
  const geologyImgHeight = planetData.geologiImgSize.geologyImgHeight;
  console.log(geologyImgWidth, geologyImgHeight);

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
          <Img
            src={planetImgGeology}
            alt={planetData.name}
            visible={true}
            geologyImgWidth={geologyImgWidth}
            geologyImgHeight={geologyImgHeight}
          />

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

  @media (max-width: 768px) {
    margin-bottom: 150px;
  }
`;

const Image = styled.img`
  width: ${(props) => props.imgWidth};
  height: ${(props) => props.imgHeight};

  @media (max-width: 768px) {
    width: ${(props) => props.imgWidth};
    height: ${(props) => props.imgHeight};

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
  width: ${(props) => props.geologyImgWidth};
  height: ${(props) => props.geologyImgHeight};

  @media (max-width: 768) {
    width: ${(props) => props.geologyImgWidth};
    height: ${(props) => props.geologyImgHeight};
  }
`;
