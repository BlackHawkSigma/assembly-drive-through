import { render } from '@redwoodjs/testing/web'

import DateRangePicker from './DateRangePicker'

const handleChange = jest.fn()

describe('DateRangePicker', () => {
  it.skip('renders successfully', () => {
    expect(() => {
      render(
        <DateRangePicker
          initialTimeframe={[new Date(), new Date()]}
          onChange={handleChange}
        />
      )
    }).not.toThrow()
  })
})
