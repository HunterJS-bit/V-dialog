


import { shallowMount } from '@vue/test-utils'
import Vdialog from '../../lib/main'

describe('V-dialog', () => {
    test('renders props.fullscreen when passed', () => {
        const fullscreen = true
        const wrapper = shallowMount(Vdialog, {
            props: { fullscreen }
        })
        // expect(wrapper.text()).toMatch(msg)
    })
})