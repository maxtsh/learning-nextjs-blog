import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #fff;
  font-size: 16px;
  font-family: Tahoma;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyles;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
