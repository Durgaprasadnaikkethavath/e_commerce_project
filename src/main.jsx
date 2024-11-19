import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import ShopContextProvider from "./Context/ShopContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <ShopContextProvider>
//       <App />
//     </ShopContextProvider>
//   </BrowserRouter>
// );
