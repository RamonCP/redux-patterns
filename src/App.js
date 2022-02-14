import { HashRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import Navbar from './components/Navbar/Navbar'
import Notify from './components/Notify/Notify'
import HomePage from './pages/HomePage/HomePage'
import BookPage from './pages/BookPage/BookPage'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Notify />
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/book/:id' element={<BookPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
