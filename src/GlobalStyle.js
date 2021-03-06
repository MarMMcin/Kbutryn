import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`   
@import url("https://fonts.googleapis.com/css?family=Montserrat:500");

* {
  box-sizing: border-box;
  font-size: 100%;
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
}
body {
  height: 100vh;
  background: rgba(255, 253, 253, 1);
  overflow-x: hidden;
}
`;
