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

import Barcode from './Barcode'

const meta: Meta<typeof Barcode> = {
  component: Barcode,
  args: { payload: '1234' },
}

export default meta

type Story = StoryObj<typeof Barcode>

export const Primary: Story = {}
