import styled from 'styled-components'

export const LinkWrapper = styled.a`
  color: ${({ color }) => color};
  padding: 0.25rem 0.75rem 0.25rem 0.25rem;
  margin: 0.5rem;
  border: 1px solid #eee;
  border-radius: 0.25rem;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 3rem;
  transform: translateY(0);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

export const SvgLogoImg = styled.img`
  margin: 0.5rem 0 -0.5rem 0.25rem;
  width: 36px;
`
