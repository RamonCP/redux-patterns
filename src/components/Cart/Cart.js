import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'

import Overlay from '../Overlay'
import { Button } from '../Button'
import * as S from './Cart.styled'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <S.Wrapper>
      <S.IconCart>
        {cart.length > 0 && <span className='count'>{cart.length}</span>}
        <FaShoppingCart />
        <span className='label'>Cart</span>
        <S.Cart>
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <img
                      src={item.volumeInfo.imageLinks?.thumbnail}
                      alt={item.volumeInfo.title}
                    />
                    <p>{item.volumeInfo.title}</p>
                  </li>
                ))}
              </ul>
              <Button size='full'>Proceed to checkout</Button>
            </>
          ) : (
            <h3>Your cart is empty</h3>
          )}
        </S.Cart>
      </S.IconCart>
      <Overlay />
    </S.Wrapper>
  )
}

export default Cart