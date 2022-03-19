import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'

import { AplicationState } from '../../redux/store'

import Overlay from '../Overlay/Overlay'
import Button from '../Button/Button'
import * as S from './Cart.styled'
import CartList from '../CartList/CartList'

const Cart = () => {
  const cart = useSelector((state: AplicationState) => state.cart)

  return (
    <>
      <S.Wrapper>
        <S.IconCart>
          {cart.length > 0 && <span className='amount'>{cart.length}</span>}
          <FaShoppingCart role='img' aria-label='cart icon' />
          <span className='label' role='presentation'>
            Cart
          </span>
          <S.Cart>
            {cart.length > 0 ? (
              <>
                <CartList cart={cart} />
                <Button size='large'>Proceed to checkout</Button>
              </>
            ) : (
              <h3>Your cart is empty</h3>
            )}
          </S.Cart>
        </S.IconCart>
        <Overlay />
      </S.Wrapper>
    </>
  )
}

export default Cart
