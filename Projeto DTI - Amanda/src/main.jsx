import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";

import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.StrictMode>
);
