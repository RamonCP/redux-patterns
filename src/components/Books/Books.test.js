import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { screen, render, userEvent, waitFor } from '../../utils/test-utils'

import { AddBook } from '../../redux/actions/cart'
import Books from './Books'

const mockStore = configureStore([])

describe('<Books />', () => {
  const renderComponent = (booksStore) => {
    const store = mockStore({
      books: booksStore
    })

    const { container } = render(
      <Provider store={store}>
        <Books />
      </Provider>
    )

    return { store, container }
  }

  it('should render with initial state', () => {
    renderComponent([])
  })

  it('should display book title', async () => {
    renderComponent([{ volumeInfo: { title: 'Introduction to React' } }])

    expect(screen.getByText('Introduction to React')).toBeInTheDocument()
  })
})
