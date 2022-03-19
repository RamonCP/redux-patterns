import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'

import { screen, render } from '../../utils/test-utils'
import Navbar from './Navbar'

const mockStore = configureStore([])

const MockStore = (mock: []) => {
  const store = mockStore({
    cart: mock
  })

  const { container } = render(
    <Provider store={store}>
      <HashRouter>
        <Navbar />
      </HashRouter>
    </Provider>
  )

  return { container }
}

describe('<Navbar />', () => {
  it('should render the navbar', () => {
    MockStore([])

    expect(screen.getByText(/books/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /cart icon/i })).toBeInTheDocument()
  })
})
