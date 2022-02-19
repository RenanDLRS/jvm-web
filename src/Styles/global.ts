import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
    font-size: 16px;
    /* font-size: 1.4rem; */
    --lato-font-family: 'Lato', sans-serif;
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
    font-family: var(--lato-font-family);
   
	
  }
`;
