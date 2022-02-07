import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { bookFetch } from '../../redux/actions/books'
import Books from '../../components/Books'
import Navbar from '../../components/Navbar'

function Home() {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books)
  const loading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(bookFetch())
  }, [dispatch])

  return (
    <>
      <Navbar />
      {loading ? 'Carregando...' : <Books books={books} />}
    </>
  )
}

export default Home