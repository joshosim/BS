import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SearchProvider } from "./context/searchContext";
import { FavouriteProvider } from "./context/favouriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <FavouriteProvider>
        <App />
      </FavouriteProvider>
    </SearchProvider>
  </React.StrictMode>
);
