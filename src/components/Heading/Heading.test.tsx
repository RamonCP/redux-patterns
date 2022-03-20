import { screen, render } from 'utils/test-utils'

import Heading from './Heading'

describe('<Heading>', () => {
  it('should render a heading with default props', () => {
    render(<Heading>Books</Heading>)

    expect(screen.getByRole('heading')).toHaveStyle({
      'font-size': '2rem'
    })
  })

  it('should render a heading with small size', () => {
    render(<Heading size='small'>Books</Heading>)

    expect(screen.getByRole('heading')).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it('should render a heading with medium size', () => {
    render(<Heading size='medium'>Books</Heading>)

    expect(screen.getByRole('heading')).toHaveStyle({
      'font-size': '2rem'
    })
  })

  it('should render a heading with large size', () => {
    render(<Heading size='large'>Books</Heading>)

    expect(screen.getByRole('heading')).toHaveStyle({
      'font-size': '2.5rem'
    })
  })

  it('should render a heading with white color', () => {
    render(<Heading color='white'>Books</Heading>)

    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a heading with black color', () => {
    render(<Heading color='black'>Books</Heading>)

    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#030517'
    })
  })
})
