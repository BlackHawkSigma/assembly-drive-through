import type { Meta, StoryObj } from '@storybook/react'

import ClosedOrdersPage from './ClosedOrdersPage'

const meta: Meta<typeof ClosedOrdersPage> = {
  component: ClosedOrdersPage,
}

export default meta

type Story = StoryObj<typeof ClosedOrdersPage>

export const Primary: Story = {}
