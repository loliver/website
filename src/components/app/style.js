import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    text-align: center;
    padding: 48px;
    color: #494949;
    transition: padding 0.2s;

    @media screen and (min-width: 768px) {
      padding: 96px;
    }
  }

  a {
    text-decoration: none;
  }
`
