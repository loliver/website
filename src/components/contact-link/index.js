import React from 'react'

import { LinkWrapper } from './style'

const ContactLink = ({ color, href, children }) => (
  <LinkWrapper
    color={color}
    href={href}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </LinkWrapper>
)

export default ContactLink
