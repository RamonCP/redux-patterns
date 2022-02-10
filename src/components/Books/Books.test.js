import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

import { screen, render } from '../../utils/test-utils'

import { AddBook } from '../../redux/actions/cart'
import Books from './Books'

const mockStore = configureStore([])

describe('<Books />', () => {
  const renderComponent = (booksStore) => {
    const store = mockStore({
      books: booksStore
    })

    const component = renderer.create(
      <Provider store={store}>
        <Books />
      </Provider>
    )

    return { store, component }
  }

  it('should render with initial state', () => {
    renderComponent([])
  })

  it('should dispatch an action on button click', () => {
    const { store } = renderComponent([])

    store.dispatch(AddBook({}))
  })

  it('should display book title', async () => {
    render(
      <Provider
        store={mockStore({
          books: [{ volumeInfo: { title: 'Introduction to React' } }]
        })}
      >
        <Books />
      </Provider>
    )

    expect(screen.getByText('Introduction to React')).toBeInTheDocument()
  })
})
