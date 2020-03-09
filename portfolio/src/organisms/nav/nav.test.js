import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Navbar from "./index";

describe("Link Component", () => {
  test("Renders correct component on click of link", () => {
    const { getAllByTestId } = render(<Navbar />);
    const Links = getAllByTestId("link");
    
    expect(Links[0].href).toBe('http://localhost/#')
    expect(Links[1].href).toBe('http://localhost/#about')
    
  });
});
