import styled from 'styled-components'

export const Wrapper = styled.nav`
  background: #6a1b60;
  color: #fff;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 2rem;
  }
`
