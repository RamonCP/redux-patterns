import * as S from './CartList.styled'

const CartList = ({ cart }) => (
  <S.CartList>
    {cart.map((item) => (
      <li key={item.id}>
        <img
          src={item.volumeInfo.imageLinks?.thumbnail}
          alt={item.volumeInfo.title}
        />
        <p>{item.volumeInfo.title}</p>
      </li>
    ))}
  </S.CartList>
)

export default CartList
