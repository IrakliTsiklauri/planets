import React from "react";
import data from "../data.json";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderSection>
      <h1>THE PLANETS</h1>
      <Navigation>
        <Ul>
          {data.map((planet, index) => {
            return (
              <Li key={index}>
                <Link to={`${planet.name}`}>{planet.name.toUpperCase()}</Link>
              </Li>
            );
          })}
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
  padding: 30px;
  border-bottom: 1px solid #37374e;

  &h1 {
    font-family: "Antonio", sans-serif;
    font-size: 28px;
    font-weight: 400;
  }
`;

const Navigation = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  gap: 40px;
`;

const Li = styled.li`
  list-style-type: none;
`;

const Link = styled(NavLink)`
  color: #d7d3d3;
  text-decoration: none;

  &.active {
    font-weight: 700;
    color: #fff;
  }
`;
