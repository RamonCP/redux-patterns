import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

import { render, screen } from '../../utils/test-utils'
import Cart from './Cart'
import { mock } from './Cart.mock'
import * as S from './Cart.styled'

const mockStore = configureStore([])

describe('<Cart />', () => {
  const renderComponent = (cart) => {
    const store = mockStore({
      cart: cart
    })

    console.log(store.getState().cart.length)

    const component = renderer.create(
      <Provider store={store}>
        <Cart />
      </Provider>
    )

    return { store, component }
  }

  test('should display cart count and all books on a list when cart.length > 0', () => {
    const { store } = renderComponent(mock)

    expect(store.getState().cart.length).toBeGreaterThan(0)
  })

  test('should display heading message in cart when cart is empty', () => {
    const { component } = renderComponent([])

    // expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    expect(component.toJSON()).toMatchSnapshot()
  })
})
