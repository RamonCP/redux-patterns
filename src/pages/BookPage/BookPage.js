import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import * as S from './BookPage.styled'
import Spinner from '../../components/Spinner/Spinner'
import { fetchOneBook } from '../../redux/actions/books'

const BookPage = (props) => {
  const book = useSelector((state) => state.books.actual)
  const loading = useSelector((state) => state.loading)
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
        <S.Wrapper>
          <img
            src={book.volumeInfo?.imageLinks.thumbnail}
            alt=''
            aria-label='book image'
          />
        </S.Wrapper>
      )}
    </>
  )
}

export default BookPage
