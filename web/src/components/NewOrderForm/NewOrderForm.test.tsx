import { render } from '@redwoodjs/testing/web'

import NewOrderForm from './NewOrderForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewOrderForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewOrderForm onSubmit={(_data) => {}} />)
    }).not.toThrow()
  })
})
