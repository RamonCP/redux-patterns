import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { render, screen } from 'utils/test-utils'
import Cart from './Cart'
import { mock } from './Cart.mock'
import { CartTypes } from 'redux/ducks/cart/cart.types'

const mockStore = configureStore([])

const MockStore = (mock: CartTypes) => {
  const store = mockStore({
    cart: mock
  })

  const { container } = render(
    <Provider store={store}>
      <Cart />
    </Provider>
  )

  return { container }
}

describe('<Cart />', () => {
  test('should render cart svg', () => {
    MockStore([])

    const svg = screen.getByRole('img', { name: 'cart icon' })
    expect(svg).toBeInTheDocument()
  })

  test('span should have a class label', () => {
    MockStore([])

    const span = screen.getByRole('presentation')
    expect(span).toHaveClass('label')
  })

  test('should render cart amount and all books on a list when cart.length > 0', () => {
    MockStore(mock)

    const bookTitle = screen.getByText(/React Aprenda Praticando/i)
    expect(bookTitle).toBeInTheDocument()
  })

  test('should render heading message in cart when cart is empty', () => {
    MockStore([])

    const h3 = screen.getByText(/Your cart is empty/i)
    expect(h3).toBeInTheDocument()
  })
})
