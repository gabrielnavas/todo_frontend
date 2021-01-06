import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: var(--primary);
  }
  :root {
    --primary: #000;
    --secondary: #15181C;
    --gray: #202327;
    --white: #D9D9D9;
    --gray-light: #7A7A7A;
    --outline: #2F3336;
    --green: #00C06B;
    --red: #E8265E;
    --blue: #33A1F2;
    --blue-dark: #0e63a1;
    --blue-dark-hover: #011017;
    --blue-light-hover: #1375bd;
  }
`;