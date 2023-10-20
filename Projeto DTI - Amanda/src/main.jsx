import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";

import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
    />
    ;
  </React.StrictMode>
);
