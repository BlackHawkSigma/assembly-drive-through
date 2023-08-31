import { render } from '@redwoodjs/testing/web'

import BarcodeDetection from './BarcodeDetection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BarcodeDetection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BarcodeDetection />)
    }).not.toThrow()
  })
})
