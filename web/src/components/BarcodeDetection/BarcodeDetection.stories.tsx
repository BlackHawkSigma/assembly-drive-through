// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import BarcodeDetection from './BarcodeDetection'

const meta: Meta<typeof BarcodeDetection> = {
  component: BarcodeDetection,
}

export default meta

type Story = StoryObj<typeof BarcodeDetection>

export const Primary: Story = {}