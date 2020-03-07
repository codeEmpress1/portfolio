import React from "react";
import Renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Button from "./index";

const theme = {
  mode: "light"
};

it("shows difference between 2 buttons", () => {
  const btn = Renderer.create(
    <ThemeProvider theme={theme}>
      <Button color="primary" />
    </ThemeProvider>
  ).toJSON();
  expect(btn).toMatchSnapshot();
});
