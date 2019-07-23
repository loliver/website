import React from 'react'

import {
  Github,
  LinkedinSquare,
  Twitter,
  ReactLogo,
  Redux,
  Nodejs,
  Html5,
  Css3,
  Javascript,
  Angular
} from 'styled-icons/boxicons-logos'

import App from '../components/app'
import ContactLink from '../components/contact-link'

const IndexPage = () => (
  <App>
    <h1>Website of Oliver Gassman</h1>

    <p>
      I help our feature squads meet customers' and bankers' high expectations
      for quality and familiarity by implementing the core interface elements,
      icons, text styles, and uniform terminology that make up the Ocean Blue
      Design System and component library.
    </p>

    <p>
      I work across feature squads and with specialist UI designers to identify
      emerging trends, and turn them into reusable patterns; develop and
      maintain the Design Systems documentation; and advocate for UI standards
      and accessibility with designers, engineers, and stakeholders across many
      areas of ANZ.
    </p>

    <hr />

    <h2>Contact details</h2>
    <ContactLink href='https://github.com/loliver' color='#333'>
      <Github size='48' title='GitHub' />
    </ContactLink>
    <ContactLink
      href='https://www.linkedin.com/in/oliver-gassman-79193515/'
      color='#0077b5'
    >
      <LinkedinSquare size='48' title='Linkedin' />
    </ContactLink>
    <ContactLink href='https://twitter.com/lololololiver' color='#1da1f2'>
      <Twitter size='48' title='Twitter' />
    </ContactLink>

    <h2>Capabilities</h2>
    <ContactLink href='https://reactjs.org/' color='#00d8ff'>
      <ReactLogo size='48' title='React' />
    </ContactLink>
    <ContactLink href='https://redux.js.org/' color='#764abc'>
      <Redux size='48' title='Redux' />
    </ContactLink>
    <ContactLink href='https://nodejs.org/en/' color='#43853d'>
      <Nodejs size='48' title='Nodejs' />
    </ContactLink>
    <ContactLink
      href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      color='#e34f26'
    >
      <Html5 size='48' title='Html5' />
    </ContactLink>
    <ContactLink
      href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      color='rgb(32, 98, 175)'
    >
      <Css3 size='48' title='Css3' />
    </ContactLink>
    <ContactLink
      href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      color='#f7df1e'
    >
      <Javascript size='48' title='Javascript' />
    </ContactLink>
    <ContactLink href='https://angularjs.org/' color='#b52e31'>
      <Angular size='48' title='Angular' />
    </ContactLink>
  </App>
)

export default IndexPage
