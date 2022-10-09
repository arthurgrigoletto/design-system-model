import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@arthurgrigoletto/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum, eveniet temporibus minima nulla aspernatur animi magni velit! Distinctio illo, aut animi nostrum laborum rerum vitae enim? Sed, aspernatur et.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
