import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import parse from 'html-react-parser'

import * as S from './BookPage.styled'
import Spinner from 'components/Spinner/Spinner'
import Container from 'components/Container/Container'
import Heading from 'components/Heading/Heading'

import { fetchOneBook } from 'redux/ducks/books/books.actions'
import { AplicationState } from 'redux/store'

const BookPage = () => {
  const book = useSelector((state: AplicationState) => state.books.actual)
  const loading = useSelector((state: AplicationState) => state.loading)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const bookId = location.pathname.split('book/')[1]
    dispatch(
      fetchOneBook(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    )
  }, [dispatch, location.pathname])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      {book && (
        <Container>
          <S.Wrapper>
            <S.Cover>
              <img
                src={book.volumeInfo.imageLinks.small}
                alt=''
                aria-label='book image'
              />
            </S.Cover>
            <S.Info>
              <Heading size='large'>{book.volumeInfo.title}</Heading>
              <Heading size='medium'>{book.volumeInfo.subtitle}</Heading>

              <div className='description'>
                {!!book.volumeInfo.description
                  ? parse(book.volumeInfo.description)
                  : 'No description'}
              </div>
            </S.Info>
          </S.Wrapper>
        </Container>
      )}
    </>
  )
}

export default BookPage
