import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@arthurgrigoletto/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum, eveniet temporibus minima nulla aspernatur animi magni velit! Distinctio illo, aut animi nostrum laborum rerum vitae enim? Sed, aspernatur et.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
