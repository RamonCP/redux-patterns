import { useDispatch } from 'react-redux'

import { AddBook } from '../../redux/actions/cart'
import Container from '../Container'
import { Button } from '../Button'
import * as S from './styled'

const Books = ({ books }) => {
  const dispatch = useDispatch()

  const AddToCart = (book) => {
    dispatch(AddBook(book))
  }

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          {books.map((book) => (
            <S.Book key={book.id}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
              <h3>{book.volumeInfo.title}</h3>
              <Button onClick={() => AddToCart(book)}>Add to cart</Button>
            </S.Book>
          ))}
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Books
