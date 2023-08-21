import { render } from '@redwoodjs/testing/web'

import Barcode from './Barcode'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Barcode', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Barcode />)
    }).not.toThrow()
  })
})
