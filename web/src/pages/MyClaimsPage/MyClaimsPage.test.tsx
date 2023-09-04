import { render } from '@redwoodjs/testing/web'

import MyClaimsPage from './MyClaimsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyClaimsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyClaimsPage />)
    }).not.toThrow()
  })
})
