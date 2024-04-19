import { createGlobalStyle } from "styled-components";
import stars from "../images/background-stars.svg";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Antonio", sans-serif;
    background-color: #070724;
    color: #fff;
    background-image: url(${stars});
}
`;

//font-family: "League Spartan", sans-serif;
