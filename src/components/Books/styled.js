import styled from 'styled-components'

export const Wrapper = styled.section``

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px 44px;
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

export const Button = styled.button`
  background-color: #ff6c00;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%), inset 0 -2px 0 0 rgb(0 0 0 / 20%);
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 60%;
  cursor: pointer;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;

  &:hover {
    background-color: #e66100;
    color: #fff;
    outline: none;
  }
`
