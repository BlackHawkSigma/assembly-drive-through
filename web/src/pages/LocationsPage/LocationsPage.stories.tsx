import type { Meta, StoryObj } from '@storybook/react'

import LocationsPage from './LocationsPage'

const meta: Meta<typeof LocationsPage> = {
  component: LocationsPage,
}

export default meta

type Story = StoryObj<typeof LocationsPage>

export const Primary: Story = {}
