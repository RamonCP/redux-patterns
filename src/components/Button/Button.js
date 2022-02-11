import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ size }) => css`
    background-color: #ff6c00;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%), inset 0 -2px 0 0 rgb(0 0 0 / 20%);
    color: #fff;
    border: none;
    border-radius: 4px;
    width: ${!!size ? '100%' : '60%'};
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
  `}
`
