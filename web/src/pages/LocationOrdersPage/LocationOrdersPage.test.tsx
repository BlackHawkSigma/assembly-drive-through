import { render } from '@redwoodjs/testing/web'

import LocationOrdersPage from './LocationOrdersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LocationOrdersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationOrdersPage id={42} />)
    }).not.toThrow()
  })
})
