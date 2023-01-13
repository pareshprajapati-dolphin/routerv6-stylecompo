import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    ::-webkit-scrollbar{
  width: 7px;
  height: 10px;
}
::-webkit-scrollbar-track{
  box-shadow: inset 0 0 5px #a5aaad;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb{
  background: #a5aaad;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
  background: #3ea175;
}
  `;

export default GlobalStyles;
