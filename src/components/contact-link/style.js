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
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`

export const SvgLogoImg = styled.img`
  margin: 0.5rem 0 -0.5rem 0.375rem;
  width: 36px;
`
