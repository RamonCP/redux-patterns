import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { render, screen } from '../../utils/test-utils'
import Home from './Home'
import { bookFetch } from '../../redux/actions/books'

const mockStore = configureStore([])

describe('<Home />', () => {
  const renderComponent = (loading) => {
    const store = mockStore({
      books: [],
      loading,
      cart: []
    })

    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    return { container, store }
  }

  it('should dispatch a fetch action when initialize', () => {
    const { store } = renderComponent(true)

    store.dispatch(bookFetch())
  })

  it('should render Spinner when loading is true', () => {
    renderComponent(true)

    const spinnerIcon = screen.getByRole('img', {
      name: 'spinner loading icon'
    })

    expect(spinnerIcon).toBeInTheDocument()
  })

  it('should render Books when loading is false', () => {
    renderComponent(false)

    const booksComponent = screen.getByRole('contentinfo', {
      name: 'Books list'
    })

    expect(booksComponent).toBeInTheDocument()
  })

  it('should render the navbar', () => {
    renderComponent(true)

    expect(screen.getByText(/books/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /cart icon/i })).toBeInTheDocument()
  })
})
