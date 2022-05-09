import { createGlobalStyle } from 'styled-components'
import { primaryColor } from '../styles/theme';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%; 
    margin: 0;
    box-sizing: border-box;
    background-color: ${primaryColor};
  }
  input{
    outline: none;
  }
`

export default GlobalStyles