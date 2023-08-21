import { render } from '@redwoodjs/testing/web'

import { standard } from '../OrderCell/OrderCell.mock'

import OrderCard from './OrderCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OrderCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderCard order={standard().order} />)
    }).not.toThrow()
  })
})
