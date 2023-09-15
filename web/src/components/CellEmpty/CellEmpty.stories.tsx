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

import CellEmpty from './CellEmpty'

const meta: Meta<typeof CellEmpty> = {
  component: CellEmpty,
}

export default meta

type Story = StoryObj<typeof CellEmpty>

export const Primary: Story = {}
