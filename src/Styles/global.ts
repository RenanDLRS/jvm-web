import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
    font-size: 16px;
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;

    input:focus{
      outline: none;
    }
    button{
      user-select: none;
      cursor: pointer;
    }
    [disabled]{
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
