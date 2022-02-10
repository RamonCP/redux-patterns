import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 63px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  padding: 30px 0;
`

export const Book = styled.div`
  display: grid;
  justify-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 25px 10px;

  img {
    width: 125px;
    height: 175px;
  }

  h3 {
    font-size: 1.6rem;
    margin: 2rem 0;
  }
`
