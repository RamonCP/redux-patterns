import styled, { css } from 'styled-components'

import { ButtonProps } from './Button'

const modifier = {
  small: () => css`
    width: 60%;
  `,

  large: () => css`
    width: 100%;
  `,

  insideList: () => css`
    position: absolute;
    bottom: 18px;
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ size, insideList }) => css`
    background-color: #ff6c00;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%), inset 0 -2px 0 0 rgb(0 0 0 / 20%);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    user-select: none;
    white-space: nowrap;

    &:hover {
      background-color: #e66100;
      color: #fff;
      outline: none;
    }

    ${!!size && modifier[size as keyof typeof modifier]()}
    ${!!insideList && modifier.insideList()}
  `}
`
