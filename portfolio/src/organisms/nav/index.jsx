import React from "react";
import Nav, { Navlist } from "./style";
import ThemeButton from "../../molecules/themeButton";

const navLinks = [
  { title: "Home", path: "#" },
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Contact", path: "#contact" }
];

const Navbar = () => {
  return (
    <Nav>
      <Navlist>
        {navLinks.map(value => (
          <li key={value.path}>
            <a href={value.path} data-testid="link">
              {value.title}
            </a>
          </li>
        ))}
        <li>
          <ThemeButton />
        </li>
      </Navlist>
    </Nav>
  );
};

export default Navbar;
