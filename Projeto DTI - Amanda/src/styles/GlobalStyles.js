import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: ${(props) => props.theme.fonts.montserrat}, sans-serif;
  font-size: 1.4rem;
  background: black;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 100%;
}

html,
body,
#root {
  height: 100%;
  width: 100%;
}

html {
  scroll-behavior: smooth;
  @media (prefers-reduced-motion: reduce) {
	  scroll-behavior:auto;
  }
}
`;
