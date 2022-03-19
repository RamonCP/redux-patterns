import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { screen, render } from '../../utils/test-utils'
import Books from './Books'

const mockStore = configureStore([])

describe('<Books />', () => {
  const renderComponent = (booksStore: Object) => {
    const store = mockStore({
      books: booksStore
    })

    const { container } = render(
      <HashRouter>
        <Provider store={store}>
          <Books />
        </Provider>
      </HashRouter>
    )

    return { store, container }
  }

  it('should render with initial state', () => {
    renderComponent([])

    const h3 = screen.queryByRole('heading', { level: 3 })
    expect(h3).not.toBeInTheDocument()
  })

  it('should display book title', async () => {
    renderComponent({
      items: [{ volumeInfo: { title: 'Introduction to React' } }]
    })

    expect(screen.getByText('Introduction to React')).toBeInTheDocument()
  })
})
