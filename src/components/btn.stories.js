import btn from './btn.vue'

export default {
  title: 'Btn',
  component: btn,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

const Template = (args, {argTypes}) => ({
  components: {btn},
  props: Object.keys(argTypes),
  template: `<div>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
    <btn v-bind="$props" />
  </div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'secondary',
  type: 'secondary',
}

export const Iconed = Template.bind({})
Iconed.args = {
  icon: 'save',
  round: true,
}
