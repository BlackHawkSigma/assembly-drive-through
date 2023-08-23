import { render } from '@redwoodjs/testing/web'

import NewOrderPage from './NewOrderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewOrderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewOrderPage />)
    }).not.toThrow()
  })
})
