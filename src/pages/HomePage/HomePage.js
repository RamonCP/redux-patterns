import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchBooks } from '../../redux/actions/books'
import Books from '../../components/Books/Books'
import Spinner from '../../components/Spinner/Spinner'

function HomePage() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(fetchBooks('https://www.googleapis.com/books/v1/volumes?q=react'))
  }, [dispatch])

  return <>{loading ? <Spinner /> : <Books />}</>
}

export default HomePage
