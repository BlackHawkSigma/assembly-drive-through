import { render } from '@redwoodjs/testing/web'

import { standard } from '../OrderCell/OrderCell.mock'

import Order from './Order'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Order', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Order {...standard()} />)
    }).not.toThrow()
  })
})
