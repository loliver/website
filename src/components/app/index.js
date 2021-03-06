import React from 'react'
import { Normalize } from 'styled-normalize'
import { Helmet } from 'react-helmet'

import Header from '../header'

import { GlobalStyle } from './style'

const App = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <html lang="en" />
      <meta charSet='utf-8' />
      <title>Oliver Gassman</title>
      <link rel='canonical' href='http://olivergassman.net/' />
    </Helmet>
    <Normalize />
    <GlobalStyle />
    <Header />
    <hr />
    {children}
  </React.Fragment>
)

export default App
