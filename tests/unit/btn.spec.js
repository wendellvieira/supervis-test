import {shallowMount} from '@vue/test-utils'
import btn from '../../src/components/btn.vue'

describe('tests the behavior of the primary button', () => {
  let wrapper
  const label = 'primary btn'
  beforeAll(() => {
    wrapper = shallowMount(btn, {
      propsData: {
        label,
      },
    })
  })

  it('checks if the text has been rendered', () => {
    expect(wrapper.text()).toContain(label)
  })

  it('checks if the btn-primary and btn classes have been created', () => {
    expect(wrapper.classes()).toContain('btn')
    expect(wrapper.classes()).toContain('btn-primary')
  })

  it('checks if the click event is being emitted', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})

describe('checks the behavior of the secondary button', () => {
  let wrapper
  const label = 'hello btn'
  const type = 'secondary'
  beforeAll(() => {
    wrapper = shallowMount(btn, {
      propsData: {
        label,
        type,
      },
    })
  })

  it('checks if the btn-secondary class have been created', () => {
    expect(wrapper.classes()).toContain('btn-secondary')
  })

  it('checks if the click event is being emitted', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})

describe('checks the behavior of the disabled button', () => {
  let wrapper
  const label = 'hello btn'
  const type = 'secondary'
  beforeAll(() => {
    wrapper = shallowMount(btn, {
      propsData: {
        label,
        type,
        disabled: true,
      },
    })
  })

  it('checks if the click event is being emitted', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeFalsy()
  })
})
