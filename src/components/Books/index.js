import * as S from './styled'

const Books = ({ books }) => (
  <S.Wrapper>
    {books.map(({ volumeInfo, id }) => (
      <S.Book key={id}>
        <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} />
        <h3>{volumeInfo.title}</h3>
      </S.Book>
    ))}
  </S.Wrapper>
)

export default Books
