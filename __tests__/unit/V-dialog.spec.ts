


import { shallowMount } from '@vue/test-utils'
import Vdialog from '../../lib/main'

describe('V-dialog', () => {

    test('should render default slot', () => {
        const wrapper = shallowMount(Vdialog, {
            slots: {
                default: 'Dialog Content'
            }
        })

        expect(wrapper.html()).toContain('Dialog Content')
    })

    test('should renders props.fullscreen when passed', () => {
        const fullscreen = true
        const wrapper = shallowMount(Vdialog, {
            props: { fullscreen }
        })
        expect(wrapper.props('fullscreen')).toBeTruthy();
    })

    test('should emit click event', () => {
        const wrapper = shallowMount(Vdialog, {
            slots: {
                default: 'Dialog Content'
            }
        })

        wrapper.trigger('click')

        expect(wrapper.emitted()).toHaveProperty('click')
    })
})