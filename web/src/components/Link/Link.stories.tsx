import type { Meta, StoryObj } from '@storybook/react'

import Link from './Link'

const meta: Meta<typeof Link> = {
  component: Link,
  args: {
    children: 'follow me',
  },
}

export default meta

type Story = StoryObj<typeof Link>

export const Primary: Story = {}
