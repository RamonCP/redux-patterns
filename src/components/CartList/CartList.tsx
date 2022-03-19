import { CartTypes } from '../../redux/ducks/cart/cart.types'
import * as S from './CartList.styled'

const CartList = ({ cart }: { cart: CartTypes }) => (
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
