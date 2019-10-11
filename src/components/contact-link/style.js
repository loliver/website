import styled from 'styled-components'

export const LinkWrapper = styled.a`
  background-color: ${({ color }) => color};
  color: ${({ dark }) => dark ? 'rgb(21, 32, 43)' : '#fff'};
  padding: 0.25rem 0.75rem 0.25rem 0.25rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 3rem;
  height: 3rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  & svg {
    transform: translateY(-2px);
  }
`

export const SvgLogoImg = styled.img`
  margin: 0.375rem 0.75rem 0 0.375rem;
  float: left;
  width: ${({ size }) => size ? `${size}px` : '36px'};
`
