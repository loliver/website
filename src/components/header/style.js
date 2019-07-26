import styled from 'styled-components'

import profile from '../../images/profile.jpg'

export const Heading = styled.h1`
  color: #037BA0;
  transition: font-size 0.2s;

  @media screen and (min-width: 768px) {
    font-size: 6rem;
  }
`

export const HeadingWrapper = styled.hgroup`
  margin: 0 0 4rem;
`

export const Profile = styled.img.attrs(() => ({
  src: profile
}))`
  float: right;
  margin-left: 2rem;
  height: 4.8rem;
  border-radius: 1rem;
  transition: height 0.2s;

@media screen and (min-width: 768px) {
  height: 7.2rem;
}
`