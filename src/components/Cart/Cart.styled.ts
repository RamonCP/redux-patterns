import styled from 'styled-components'
import Overlay from '../Overlay/Overlay'

export const Wrapper = styled.div`
  position: relative;
`

export const Cart = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 26px;
  width: 280px;
  z-index: 21;
  height: auto;
  background: #fff;
  padding: 10px;
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 20%);
  border: 1px solid #efefef;
  border-radius: 4px;

  h3 {
    color: #212121;
    font-size: 1.6rem;
  }
`

export const IconCart = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 21;

  svg {
    font-size: 2.5rem;
  }

  .label {
    font-size: 1.6rem;
    margin-left: 1rem;
  }

  .amount {
    background: #ff6c00;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -9px;
    left: 17px;
  }

  &:hover {
    ${Cart} {
      display: block;
    }

    ~ ${Overlay} {
      opacity: 0.5;
      visibility: visible;
    }
  }
`
