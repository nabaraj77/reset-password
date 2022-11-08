import { createContext, useState } from "react";

export const BoolContext = createContext();

export const BoolProvider = ({ children }) => {
  const [bool, setBool] = useState(0);
  return (
    <>
      <BoolContext.Provider value={{ bool, setBool }}>
        {children}
      </BoolContext.Provider>
    </>
  );
};

export default BoolProvider;
