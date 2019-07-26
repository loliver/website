/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import App from './src/components/app'

export const wrapPageElement = ({ element, props }) => (
  <App {...props}>{element}</App>
)
