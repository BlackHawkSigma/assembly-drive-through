import type { Meta, StoryObj } from '@storybook/react'

import NewOrderPage from './NewOrderPage'

const meta: Meta<typeof NewOrderPage> = {
  component: NewOrderPage,
}

export default meta

type Story = StoryObj<typeof NewOrderPage>

export const Primary: Story = {}
