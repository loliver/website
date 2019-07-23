import React from 'react'
import { Normalize } from 'styled-normalize'

import { GlobalStyle } from './style'

const App = ({ children }) => (
  <React.Fragment>
    <Normalize />
    <GlobalStyle />
    {children}
  </React.Fragment>
)

export default App
