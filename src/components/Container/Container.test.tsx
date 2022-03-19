import 'jest-styled-components'

import { render } from '../../utils/test-utils'
import Container from './Container'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = render(<Container />)

    expect(container.firstChild).toHaveStyleRule('max-width', '768px')
    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  max-width: 768px;
  margin: 0 auto;
}

<div
  class="c0"
/>
`)
  })
})
