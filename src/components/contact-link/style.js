import styled from 'styled-components'

export const LinkWrapper = styled.a`
  color: ${({ color }) => color};

  & svg {
    transform: scale(1);
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`