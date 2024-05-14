import React, { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <SearchContext.Provider value={{ searchValue, handleSearchChange }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
