import Container from '../Container'
import * as S from './styled'

const Books = ({ books }) => (
  <S.Wrapper>
    <Container>
      <S.Content>
        {books.map(({ volumeInfo, id }) => (
          <S.Book key={id}>
            <img
              src={volumeInfo.imageLinks?.thumbnail}
              alt={volumeInfo.title}
            />
            <h3>{volumeInfo.title}</h3>
            <S.Button>Add to cart</S.Button>
          </S.Book>
        ))}
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default Books
