import * as S from './CartList.styled'

const CartList = ({ cart }) => (
  <S.CartList>
    {cart.map((item, idx) => (
      <li key={idx}>
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
