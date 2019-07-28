import React from 'react'

import { LinkWrapper } from './style'

const ContactLink = ({ color, href, children, dark }) => (
  <LinkWrapper
    color={color}
    href={href}
    dark={dark}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </LinkWrapper>
)

export default ContactLink
