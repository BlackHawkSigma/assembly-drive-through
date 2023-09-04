import { render } from '@redwoodjs/testing/web'

import UserNamePage from './UserNamePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserNamePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserNamePage />)
    }).not.toThrow()
  })
})
