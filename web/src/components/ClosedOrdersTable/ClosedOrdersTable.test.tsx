import { render } from '@redwoodjs/testing/web'

import { standard } from '../ClosedOrdersCell/ClosedOrdersCell.mock'

import ClosedOrdersTable from './ClosedOrdersTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ClosedOrdersTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClosedOrdersTable closedOrders={standard().closedOrders} />)
    }).not.toThrow()
  })
})
