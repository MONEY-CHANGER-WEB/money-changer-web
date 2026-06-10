import { createContext, useState, useContext } from "react";

export const BrokerContext = createContext();

export const BrokerProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("Home");
  const value = {
    logo: "https://globalmoneychanger.com/images/0/21244655/logoglobalMCTransparan-MsQrhtNz7oc7OEM1moYVtw.png",
    navLinks: ["Home", "About", "Services", "Contact"],
    activePage,
    setActivePage
  };
  return (
    <BrokerContext.Provider value={value}>
      {children}
    </BrokerContext.Provider>
  );
};
