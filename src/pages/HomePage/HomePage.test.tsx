import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { render, screen } from '../../utils/test-utils'
import HomePage from './HomePage'
import { fetchBooks } from '../../redux/ducks/books/books.actions'

const mockStore = configureStore([])

describe('<HomePage />', () => {
  const renderComponent = (loading: boolean) => {
    const store = mockStore({
      books: [],
      loading,
      cart: []
    })

    const { container } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    )

    return { container, store }
  }

  it('should dispatch a fetch action when initialize', () => {
    const { store } = renderComponent(true)

    store.dispatch(fetchBooks('url'))
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
})
