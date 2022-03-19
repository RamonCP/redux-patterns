import { screen, render } from '../../utils/test-utils'
import CartList from './CartList'
import { mock } from '../Cart/Cart.mock'

describe('<CartList />', () => {
  it('should render list', () => {
    render(<CartList cart={mock} />)

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('should render list items inside list', () => {
    render(<CartList cart={mock} />)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems.length).toBe(2)
  })

  it('should render item img', () => {
    render(<CartList cart={mock} />)

    const img = screen.getAllByRole('img')

    expect(img[0]).toHaveAttribute('alt', 'React Quickly')
    expect(img.length).toBe(2)
  })

  it('should render item title', () => {
    render(<CartList cart={mock} />)

    const p = screen.getByText('React Quickly')
    expect(p).toBeInTheDocument()
  })
})
