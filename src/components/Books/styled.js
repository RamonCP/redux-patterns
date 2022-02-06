import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 992px;
  margin: 0 auto;
  gap: 44px;
`

export const Book = styled.div`
  display: grid;
  justify-items: center;

  img {
    width: 125px;
    height: 175px;
  }
`
