// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* reset / box sizing */
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #111827;
    background: #fff;
    line-height: 1.45;
    -webkit-tap-highlight-color: transparent;
    /* base responsive font-size: scale with viewport but clamp for limits */
    font-size: clamp(14px, 1.6vw, 18px);
  }

  img { max-width: 100%; height: auto; display: block; }
  a { color: inherit; text-decoration: none; }
  ul { margin: 0; padding: 0; list-style: none; }

  /* utility classes */
  .container {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1280px;
  }

  /* accessible focus */
  :focus { outline: 3px solid rgba(59,130,246,0.25); outline-offset: 2px; }

  /* small helpers */
  .sr-only {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
`;

export default GlobalStyles;
