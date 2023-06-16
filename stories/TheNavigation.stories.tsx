import type { Meta, StoryObj } from '@storybook/react'
import '../app/globals.css'
import TheNavigation from '../components/TheNavigation'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TheNavigation> = {
  title: 'Example/TheNavigation',
  component: TheNavigation,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof TheNavigation>
export const DefaultUsage: Story = {}
