import { render } from '@redwoodjs/testing/web'

import ItemsPage from './ItemsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ItemsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemsPage />)
    }).not.toThrow()
  })
})
