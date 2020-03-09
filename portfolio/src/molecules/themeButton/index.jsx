import React from "react";
import Button from "./style";
import ModeContext from "../../modeContext";

const ThemeButton = () => {
  return (
    <ModeContext.Consumer>
      {({ mode, toogleMode }) => {
        return (
          <Button onClick={toogleMode} color="primary">
            {mode[0].toUpperCase() + mode.slice(1) + " />"}
          </Button>
        );
      }}
    </ModeContext.Consumer>
  );
};
export default ThemeButton;
