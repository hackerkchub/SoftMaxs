import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html,body,#root{height:100%}
  body {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI",
      Roboto, "Helvetica Neue", Arial;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    background: #fff;
    color: #111827;
    line-height: 1.4;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width:100%; display:block; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
`;

export default GlobalStyles;
