// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      primary: string;
      white: string;
      dark: string;
      black: string;
      grey: string;
      error: string;
      success: string;
    };
    fonts: {
      sizes: {
        h1: string;
        p: string;
        label: string;
        placeholder: string;
      };
      weights: {
        regular: number;
        bold: number;
      };
      FontFace: {
        primary: string;
      };
    };
    border: {
      width: {
        light: string;
        normal: string;
      };
      radius: {
        sm: string;
        md: string;
      };
    };
  }
}
