import type { Meta, StoryObj } from '@storybook/react'

import LocationOrdersPage from './LocationOrdersPage'

const meta: Meta<typeof LocationOrdersPage> = {
  component: LocationOrdersPage,
  args: {
    id: 1,
  },
}

export default meta

type Story = StoryObj<typeof LocationOrdersPage>

export const Primary: Story = {}
