import React, { useState } from "react";
import data from "../data.json";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import burgerImg from "../images/icon-hamburger.svg";
import cheron from "../images/icon-chevron.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

   
  };

  return (
    <HeaderSection>
      <h1>THE PLANETS</h1>
      <BurgerButton onClick={toggleMenu}>
        <img src={burgerImg} alt="burger menu" />
      </BurgerButton>
      <Navigation showmenu={menuOpen}>
        <Ul>
          {data.map((planet, index) => (
            <Li key={index}>
              <PlanetSection>
                <Circle></Circle>
                <NavLinkStyled to={`${planet.name}`} onClick={toggleMenu}>
                  {planet.name.toUpperCase()}
                </NavLinkStyled>
              </PlanetSection>
              <ImgArrow src={cheron} alt="arrow" />
            </Li>
          ))}
        </Ul>
      </Navigation>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 30px;
  border-bottom: 1px solid #37374e;

  & h1 {
    font-family: "Antonio", sans-serif;
    font-size: 28px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BurgerButton = styled.div`
  display: none;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1;
  }
`;

const Navigation = styled.nav`
  display: flex;

  @media (max-width: 400px) {
    display: ${({ showmenu }) => (showmenu ? "block" : "none")};
    position: absolute;
    top: 30%;
    left: 0;
    background: #070724;
    width: 400px;
    height: 190%;
    padding: 20px;
    z-index: 2;
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 30px;

  @media (max-width: 822px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Li = styled.li`
  list-style-type: none;

  @media (max-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #37374e;
    padding: 20px 20px;
    gap: 20px;
  }
`;

const PlanetSection = styled.div`
  display: flex;
  @media (max-width: 400px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  display: none;

  @media (max-width: 400px) {
    display: block;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: #d7d3d3;
  text-decoration: none;
  font-family: "League Spartan", sans-serif;

  &.active {
    font-weight: 700;
    color: #fff;
  }
`;

const ImgArrow = styled.img`
  display: none;

  @media (max-width: 400px) {
    display: block;
  }
`;
