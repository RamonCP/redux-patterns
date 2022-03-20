import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AplicationState } from 'redux/store'
import { fetchBooks } from 'redux/ducks/books/books.actions'
import Books from 'components/Books/Books'
import Spinner from 'components/Spinner/Spinner'

function HomePage() {
  const dispatch = useDispatch()
  const loading = useSelector((state: AplicationState) => state.loading)

  useEffect(() => {
    dispatch(
      fetchBooks(
        'https://www.googleapis.com/books/v1/volumes?q=redux:computer&maxResults=40'
      )
    )
  }, [dispatch])

  return <>{loading ? <Spinner /> : <Books />}</>
}

export default HomePage
