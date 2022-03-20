import styled, { css } from 'styled-components'

import { HeadingProps } from './Heading'

const modifier = {
  small: () => css`
    font-size: 1.6rem;
  `,

  medium: () => css`
    font-size: 2rem;
    margin-bottom: 1rem;
  `,

  large: () => css`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  `,

  white: () => css`
    color: #fafafa;
  `,

  black: () => css`
    color: #030517;
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ size, color }) => css`
    font-weight: 500;

    ${!!size && modifier[size as keyof typeof modifier]()}
    ${!!color && modifier[color as keyof typeof modifier]()}
  `}
`
