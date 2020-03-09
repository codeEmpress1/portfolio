import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ModeContext from "./modeContext";

const ContextProvider = props => {
  const [mode, setMode] = useState("light");

  const toogleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    sessionStorage.setItem("mode", newMode)
  };

  // useEffect(() => {
  //   let value = sessionStorage.getItem("mode");
  //   setMode(value);
  //   });
    
  return (
    <ModeContext.Provider value={{ mode, toogleMode }}>
      <ThemeProvider theme={{ mode }}>{props.children}</ThemeProvider>
    </ModeContext.Provider>
  );
}

export default ContextProvider
