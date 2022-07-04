import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
    };
    colors: {
      black: string;
      white: string;
      green: string;
      darkGreen: string;
      textGray: string;
      borderGray: string;
    };
    borderRadius: string;
    boxShadow: string;
  }
}
