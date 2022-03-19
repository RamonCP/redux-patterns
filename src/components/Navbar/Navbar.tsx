import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import Cart from '../Cart/Cart'
import * as S from './Navbar.styled'

const Navbar = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <h3>
            <Link to='/'>Books</Link>
          </h3>
          <Cart />
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Navbar
