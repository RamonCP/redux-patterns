import { GlobalStyle } from './styles/global'
import Notify from './components/Notify/Notify'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <GlobalStyle />
      <Notify />
      <Home />
    </>
  )
}

export default App
