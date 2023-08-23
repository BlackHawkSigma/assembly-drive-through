import type { Meta, StoryObj } from '@storybook/react'

import ItemsPage from './ItemsPage'

const meta: Meta<typeof ItemsPage> = {
  component: ItemsPage,
}

export default meta

type Story = StoryObj<typeof ItemsPage>

export const Primary: Story = {}
