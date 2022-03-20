import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { screen, render } from 'utils/test-utils'
import BookPage from './BookPage'
import { mock } from './mock'
import { BookType } from 'redux/ducks/books/books.types'

const mockStore = configureStore([])

describe('<BookPage />', () => {
  const renderComponent = (loading: boolean, actual?: BookType) => {
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
      </HashRouter>
    )

    return { store, container }
  }

  it('should render loading', () => {
    const loading = true
    renderComponent(loading)

    const spinnerIcon = screen.getByRole('img', {
      name: 'spinner loading icon'
    })

    expect(spinnerIcon).toBeInTheDocument()
  })

  it('should not render loading', () => {
    const loading = false

    renderComponent(loading)

    const spinnerIcon = screen.queryByRole('img', {
      name: 'spinner loading icon'
    })

    expect(spinnerIcon).not.toBeInTheDocument()
  })

  it('should render book img', () => {
    const loading = false
    const actual = mock

    renderComponent(loading, actual)

    const img = screen.getByRole('img', { name: 'book image' })
    expect(img).toBeInTheDocument()
  })

  it('should render book title', () => {
    const loading = false
    const actual = mock

    renderComponent(loading, actual)

    const heading = screen.getByRole('heading', {
      name: /React Aprenda Praticando/i
    })
    expect(heading).toBeInTheDocument()
  })
})
