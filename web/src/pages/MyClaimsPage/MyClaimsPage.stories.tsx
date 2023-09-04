import type { Meta, StoryObj } from '@storybook/react'

import MyClaimsPage from './MyClaimsPage'

const meta: Meta<typeof MyClaimsPage> = {
  component: MyClaimsPage,
}

export default meta

type Story = StoryObj<typeof MyClaimsPage>

export const Primary: Story = {}
