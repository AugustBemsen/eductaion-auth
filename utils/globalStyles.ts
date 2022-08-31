import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.FontFace.primary};
  }

  body {
    background: ${({ theme }) => theme.colors.bg};
    position: relative;
    overflow-x: hidden;    
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    color: ${({ theme }) => theme.colors.black};
  }
  

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    font-size: ${({ theme }) => theme.fonts.sizes.h1};    
    color: ${({ theme }) => theme.colors.dark};
  }

  button, input {
    outline: none;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
