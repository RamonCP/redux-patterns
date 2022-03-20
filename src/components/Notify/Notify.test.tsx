import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { render, screen } from 'utils/test-utils'
import Notify from './Notify'
import { NotifyTypes } from 'redux/ducks/notify/notify.types'

const mockStore = configureStore([])

describe('<Notify />', () => {
  const renderComponent = (notifyStore: NotifyTypes) => {
    render(
      <Provider
        store={mockStore({
          notify: notifyStore
        })}
      >
        <Notify />
      </Provider>
    )
  }

  it('should not render when notify.show is false', () => {
    renderComponent({
      show: false,
      message: '',
      type: ''
    })

    expect(
      screen.queryByText('Book added successfully')
    ).not.toBeInTheDocument()
  })

  it('should render when notify.show is true', () => {
    renderComponent({
      show: true,
      message: 'Book added successfully',
      type: ''
    })

    expect(screen.getByText('Book added successfully')).toBeInTheDocument()
  })
})
