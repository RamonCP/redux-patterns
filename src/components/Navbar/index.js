import Container from '../Container'
import Cart from '../Cart/Cart'
import * as S from './styled'

const Navbar = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <h3>Books</h3>
          <Cart />
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Navbar
