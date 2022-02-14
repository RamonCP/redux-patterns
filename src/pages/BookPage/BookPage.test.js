import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { screen, render } from '../../utils/test-utils'
import BookPage from './BookPage'
import { mock } from './mock'

const mockStore = configureStore([])

describe('<BookPage />', () => {
  const renderComponent = ({ loading, actual }, renderOptions) => {
    const store = mockStore({
      loading,
      books: {
        actual
      }
    })

    const { container } = render(
      <HashRouter>
        <Provider store={store}>
          <BookPage />
        </Provider>
      </HashRouter>,
      renderOptions
    )

    return { store, container }
  }

  it('should render loading', () => {
    renderComponent({ loading: true })

    const spinnerIcon = screen.getByRole('img', {
      name: 'spinner loading icon'
    })

    expect(spinnerIcon).toBeInTheDocument()
  })

  it('should not render loading', () => {
    renderComponent({ loading: false })

    const spinnerIcon = screen.queryByRole('img', {
      name: 'spinner loading icon'
    })

    expect(spinnerIcon).not.toBeInTheDocument()
  })

  it('should render book img', () => {
    renderComponent({ loading: false, actual: mock })

    const img = screen.getByRole('img', { name: 'book image' })
    expect(img).toBeInTheDocument()
  })
})
