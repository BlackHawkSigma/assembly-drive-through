import type { Meta, StoryObj } from '@storybook/react'

import { standard } from '../OrderCell/OrderCell.mock'

import OrderCard from './OrderCard'

const meta: Meta<typeof OrderCard> = {
  component: OrderCard,
}

export default meta

type Story = StoryObj<typeof OrderCard>

export const Primary: Story = {
  render: () => {
    return <OrderCard {...standard()} />
  },
}
