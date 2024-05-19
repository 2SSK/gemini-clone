import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (porps) => {
  const onSent = async (prompt) => {
    run(prompt);
  };

  onSent("What is react js");

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{porps.children}</Context.Provider>
  );
};

export default ContextProvider;
