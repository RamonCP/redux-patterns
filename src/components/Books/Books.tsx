import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AplicationState } from 'redux/store'
import { BookType } from 'redux/ducks/books/books.types'
import { AddBook } from 'redux/ducks/cart/cart.actions'

import Container from '../Container/Container'
import Button from '../Button/Button'
import * as S from './Books.styled'

const Books = () => {
  const dispatch = useDispatch()
  const books = useSelector((state: AplicationState) => state.books.items)

  const AddToCart = (book: BookType) => {
    dispatch(AddBook(book))
  }

  return (
    <S.Wrapper role='contentinfo' aria-label='Books list'>
      <Container>
        <S.Content>
          {books &&
            books.map((book, key) => (
              <S.Book key={key}>
                <Link to={`/book/${book.id}`}>
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <h3>{book.volumeInfo.title}</h3>
                </Link>
                <Button insideList={true} onClick={() => AddToCart(book)}>
                  Add to cart
                </Button>
              </S.Book>
            ))}
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Books
