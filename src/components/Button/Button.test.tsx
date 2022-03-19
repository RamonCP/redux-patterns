import React from 'react'
import 'jest-styled-components'

import { render, waitFor, userEvent, screen } from '../../utils/test-utils'
import Button from './Button'

describe('<Button />', () => {
  it('should dispatch function on click', async () => {
    const mockFunction = jest.fn()
    render(<Button onClick={mockFunction}>Add to cart</Button>)

    expect(mockFunction).not.toHaveBeenCalledTimes(1)

    const button = screen.getByRole('button', { name: 'Add to cart' })
    userEvent.click(button)

    await waitFor(() => {
      expect(mockFunction).toHaveBeenCalledTimes(1)
    })
  })

  it('should render correctly', () => {
    const { container } = render(<Button>hello world</Button>)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  background-color: #ff6c00;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%),inset 0 -2px 0 0 rgb(0 0 0 / 20%);
  color: #fff;
  border: none;
  border-radius: 4px;
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
  width: 60%;
}

.c0:hover {
  background-color: #e66100;
  color: #fff;
  outline: none;
}

<button
  class="c0"
>
  hello world
</button>
`)
  })
})
