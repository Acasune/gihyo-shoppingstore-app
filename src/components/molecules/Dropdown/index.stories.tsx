import { ComponentMeta, ComponentStory } from '@storybook/react'
import Dropdown from './index'

export default {
  title: 'Molecules/Dropdown',
  argTypes: {
    option: {
      control: { type: 'array' },
      description: 'ドロップダウンの選択肢',
      table: {
        type: {
          summary: 'array',
        },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'ドロップダウンの値',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: '値が変化したときのイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)
export const Normal = Template.bind({})
Normal.args = {
  options: [
    { value: null, label: '-' },
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
  ],
  placeholder: 'Please select items from the list',
}

// Setting initial value
export const InitialValue = Template.bind({})
InitialValue.args = {
  options: [
    { value: null, label: '-' },
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
  ],
  placeholder: 'Please select items from the list',
  value: 'one',
}

// Showing many elements
export const Many = Template.bind({})
Many.args = {
  options: Array.from(Array(20), (_v, k) => {
    return { value: k.toString(), label: k.toString() }
  }),
  placeholder: 'Please select items from the list',
}
