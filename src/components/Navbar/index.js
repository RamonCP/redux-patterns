import Container from '../Container'
import SidebarCart from '../SidebarCart'
import * as S from './styled'

const Navbar = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <h3>Books</h3>
          <SidebarCart />
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Navbar
