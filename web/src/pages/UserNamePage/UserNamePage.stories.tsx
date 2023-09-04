import type { Meta, StoryObj } from '@storybook/react'

import UserNamePage from './UserNamePage'

const meta: Meta<typeof UserNamePage> = {
  component: UserNamePage,
}

export default meta

type Story = StoryObj<typeof UserNamePage>

export const Primary: Story = {}
