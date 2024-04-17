import { render } from '@redwoodjs/testing/web'

import ClosedOrdersPage from './ClosedOrdersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ClosedOrdersPage', () => {
  it.skip('renders successfully', () => {
    expect(() => {
      render(<ClosedOrdersPage />)
    }).not.toThrow()
  })
})
