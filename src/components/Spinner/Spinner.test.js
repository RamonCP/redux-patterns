import 'jest-styled-components'

import { render } from '../../utils/test-utils'
import Spinner from './Spinner'

describe('<Spinner />', () => {
  it('should render correctly', () => {
    const { container } = render(<Spinner />)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999rem;
  border-top: 1.1rem solid rgb(106 27 96 / 20%);
  border-right: 1.1rem solid rgb(106 27 96 / 20%);
  border-bottom: 1.1rem solid rgb(106 27 96 / 20%);
  border-left: 1.1rem solid #6a1b60;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
}

.c0:after {
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
}

<div
  aria-label="spinner loading icon"
  class="c0"
  role="img"
/>
`)
  })
})
