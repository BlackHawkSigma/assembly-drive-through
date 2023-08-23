import type { Meta, StoryObj } from '@storybook/react'

import OrderPage from './OrderPage'

const meta: Meta<typeof OrderPage> = {
  component: OrderPage,
  args: {
    id: 42,
  },
}

export default meta

type Story = StoryObj<typeof OrderPage>

export const Primary: Story = {}
