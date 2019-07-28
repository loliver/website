import styled from 'styled-components'

import profile from '../../images/profile.jpg'

export const Heading = styled.h1`
  color: #037ba0;
  transition: font-size 0.2s;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    font-size: 6rem;
  }
`

export const HeadingWrapper = styled.hgroup`
  margin: 0 0 4rem;
`

export const Profile = styled.img.attrs(() => ({
  src: profile,
  alt: 'Profile photo of Oliver Gassman'
}))`
  float: right;
  margin-left: 2rem;
  height: 4.8rem;
  border-radius: 1rem;
  transition: height 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    height: 7.2rem;
  }
`
