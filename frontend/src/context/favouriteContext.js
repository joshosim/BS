import React, { createContext, useState } from "react";

const FavouriteContext = createContext();

//a true or false value gotten from the database
let value = false;

const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useState(value);

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  return (
    <FavouriteContext.Provider value={{ favourite, handleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteContext, FavouriteProvider };
