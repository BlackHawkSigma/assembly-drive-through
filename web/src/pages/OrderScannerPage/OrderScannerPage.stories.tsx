import type { Meta, StoryObj } from '@storybook/react'

import OrderScannerPage from './OrderScannerPage'

const meta: Meta<typeof OrderScannerPage> = {
  component: OrderScannerPage,
}

export default meta

type Story = StoryObj<typeof OrderScannerPage>

export const Primary: Story = {}
