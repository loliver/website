import { createGlobalStyle } from 'styled-components'
import simplificaWoff from '../../images/Simplifica.woff'
import simplificaWoff2 from '../../images/Simplifica.woff'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Simplifica';
    src: url(${simplificaWoff2}) format('woff2'),
        url(${simplificaWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: sans-serif;
    padding: 48px;
    max-width: 600px;
    color: #494949;
    margin: 0 auto;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  hr {
    border-style: none;
    height: 1px;
    background: #CCC;
    margin: 4rem -2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Simplifica', sans-serif;
    font-weight: 300;
    color: #757575;
    margin: 3rem 0 1rem;

    hgroup &,
    hr + &,
    &:first-child {
      margin: 0 0 1rem;
    }
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  h6 {
    font-size: 1rem;
    font-weight: 600;
  }
`
