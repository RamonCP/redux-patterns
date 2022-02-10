import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { bookFetch } from '../../redux/actions/books'
import Books from '../../components/Books/Books'
import Spinner from '../../components/Spinner'
import Navbar from '../../components/Navbar'

function Home() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(bookFetch())
  }, [dispatch])

  return (
    <>
      <Navbar />
      {loading ? <Spinner /> : <Books />}
    </>
  )
}

export default Home
