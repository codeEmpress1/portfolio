import theme from "styled-theming";

export const fixedColor = {
  A: "#E0DFF2",
  B: "#D1E1F0",
  C: "#ADD9C5",
  D: "#9E9D70",
  E: "#8A683A"
};

export const color = theme.variants("mode", "color", {
  primary: { light: "#ADD9C5", dark: "#c7ce9f" },
  secondary: { light: "#c7ce9f", dark: "#ADD9C5" },
  bg: { light: "#fff", dark: "#87966e" },
  txt: { light: "#4a4539", dark: "#4a4539" }
});

export default color;

// #E0DFF2
// #D1E1F0
// #ADD9C5
// #9E9D70
// #8A683A
// #87966e

// export const color = theme.variants('mode',
// 'color', {
//     primary: { light: '#ADD9C5', dark: '#c7ce9f' },
//     secondary: { light: '#c7ce9f', dark: '#ADD9C5' },
//     bg: { light: '#ffffff', dark: '#000000'},
//     txt: { light: '#4a4539', dark: '#4a4539'}
// })
