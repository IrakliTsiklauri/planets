import React, { useState } from "react";
import data from "../data.json";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import burgerImg from "../images/icon-hamburger.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderSection>
      <h1>THE PLANETS</h1>
      <BurgerButton onClick={toggleMenu}>
        <img src={burgerImg} alt="burger menu" />
      </BurgerButton>
      <Navigation showMenu={menuOpen}>
        <Ul>
          {data.map((planet, index) => (
            <Li key={index}>
              <NavLinkStyled to={`${planet.name}`} onClick={toggleMenu}>
                {planet.name.toUpperCase()}
              </NavLinkStyled>
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
    /* flex-direction: column; */
    gap: 30px;
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

    /* div {
      width: 30px;
      height: 4px;
      background: #fff;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    } */
  }
`;

const Navigation = styled.nav`
  display: flex;

  @media (max-width: 400px) {
    display: ${({ showMenu }) => (showMenu ? "block" : "none")};
    position: absolute;
    top: 30%;
    left: 0;
    background: #070724;
    width: 555px;
    height: 190%;
    padding: 20px;
    z-index: 2;
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Li = styled.li`
  list-style-type: none;
`;

const NavLinkStyled = styled(NavLink)`
  color: #d7d3d3;
  text-decoration: none;

  &.active {
    font-weight: 700;
    color: #fff;
  }
`;
