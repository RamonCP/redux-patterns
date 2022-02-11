import 'jest-styled-components'

import { render } from '../../utils/test-utils'
import { Button } from './Button'

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Button />)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  background-color: #ff6c00;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%),inset 0 -2px 0 0 rgb(0 0 0 / 20%);
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 60%;
  cursor: pointer;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
}

.c0:hover {
  background-color: #e66100;
  color: #fff;
  outline: none;
}

<button
  class="c0"
/>
`)
  })
})
