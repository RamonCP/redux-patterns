import styled from 'styled-components'

export const CartList = styled.ul`
  list-style: none;
  max-height: 250px;
  overflow: auto;
  margin-bottom: 10px;

  li {
    color: #212121;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;

    &:not(:last-child) {
      border-bottom: 1px solid #efefef;
    }

    img {
      width: 60px;
      height: 80px;
    }

    p {
      font-size: 1.3rem;
    }
  }
`
