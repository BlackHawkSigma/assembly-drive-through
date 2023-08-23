import type { Meta, StoryObj } from '@storybook/react'

import NewOrderForm from './NewOrderForm'

const meta: Meta<typeof NewOrderForm> = {
  component: NewOrderForm,
}

export default meta

type Story = StoryObj<typeof NewOrderForm>

export const Primary: Story = {}
