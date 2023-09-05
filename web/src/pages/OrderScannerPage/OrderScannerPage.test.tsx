import { render } from '@redwoodjs/testing/web'

import OrderScannerPage from './OrderScannerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrderScannerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderScannerPage />)
    }).not.toThrow()
  })
})
