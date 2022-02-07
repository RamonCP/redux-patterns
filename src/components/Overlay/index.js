import styled from 'styled-components'

const Overlay = styled.div`
  background: #000;
  height: 92.2vh;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  bottom: 0;
  transition: all 0.15s linear;
  visibility: hidden;
  width: 100%;
  z-index: 3;

  &.is-active {
    opacity: 0.5;
    visibility: visible;
  }
`

export default Overlay
