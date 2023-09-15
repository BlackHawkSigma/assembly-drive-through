import { render } from '@redwoodjs/testing/web'

import CellEmpty from './CellEmpty'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CellEmpty', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CellEmpty />)
    }).not.toThrow()
  })
})
