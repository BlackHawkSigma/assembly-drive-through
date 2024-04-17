// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import { standard } from '../ClosedOrdersCell/ClosedOrdersCell.mock'

import ClosedOrdersTable from './ClosedOrdersTable'

const meta: Meta<typeof ClosedOrdersTable> = {
  component: ClosedOrdersTable,
  args: standard(),
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ClosedOrdersTable>

export const Primary: Story = {}
