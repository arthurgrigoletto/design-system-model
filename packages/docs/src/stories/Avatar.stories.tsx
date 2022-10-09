import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@arthurgrigoletto/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/arthurgrigoletto.png',
    alt: 'Arthur Grigoletto',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
