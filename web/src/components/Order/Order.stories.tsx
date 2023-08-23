import type { Meta, StoryObj } from '@storybook/react'

import { standard } from '../OrderCell/OrderCell.mock'

import Order from './Order'

const meta: Meta<typeof Order> = {
  component: Order,
}

export default meta

type Story = StoryObj<typeof Order>

export const Primary: Story = {
  render: () => {
    return <Order {...standard()} />
  },
}
