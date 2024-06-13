import React, { createContext, useState } from "react";

const DialogContext = createContext();

const DialogProvider = ({ children }) => {
  const [dialog, setDialog] = useState(false);

  const handleDialog = () => {
    setDialog(!dialog);
  };

  return (
    <DialogContext.Provider value={{ dialog, handleDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export { DialogContext, DialogProvider };
