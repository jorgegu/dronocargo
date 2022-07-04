import { DefaultTheme } from "styled-components";

const breakpoints = {
  xl: "1160px",
  lg: "1024px",
  md: "768px",
  sm: "375px",
};
  
  const colors = {
    black: "#000",
    white: "#fff",
    green: "#307460",
    darkGreen: "#2a6352",
    textGray: "#808080",
    borderGray: "#d9d9d9"
  };

  export const theme: DefaultTheme = {
    breakpoints,
    colors,
    borderRadius: "4px",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  };
  