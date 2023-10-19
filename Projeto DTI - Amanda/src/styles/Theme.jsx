import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    purple: {
      primary: "#8257e5",
      hover: "#4811ca",
    },
    lightGrey: "#b0b0b0",
  },

  fonts: {
    montserrat: "Montserrat, sans-serif;",
    roboto: "Roboto, sans-serif;",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
