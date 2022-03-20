import 'jest-styled-components'

import { render } from 'utils/test-utils'
import Overlay from './Overlay'

describe('<Overlay />', () => {
  it('should render overlay correctly', () => {
    const { container } = render(<Overlay />)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  background: #000;
  height: 92.2vh;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  bottom: 0;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
  visibility: hidden;
  width: 100%;
  z-index: 3;
}

.c0.is-active {
  opacity: 0.5;
  visibility: visible;
}

<div
  class="c0"
/>
`)
  })
})
