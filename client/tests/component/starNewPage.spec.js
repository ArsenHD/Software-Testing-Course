import { shallowMount } from '@vue/test-utils'
import StarNewPage from '../../src/view/views/StarNewPage.vue'
import expect from '../setup.js'

describe('StarNewPage', () => {
    it('Adds new star into the stars list on the main page', () => {
        const wrapper = shallowMount(StarNewPage, {
            data() {
                return {
                    name: 'Vega',
                    distance: 25.04,
                    age: 0.455,
                    mass: 2.135,
                    imageUrl: "https://skyandtelescope.org/wp-content/uploads/2017-09-26_59ca59ed7c8cc_04_Vega_20170922_400mm_10exp_280seg_3200iso_PI_PS.jpg"
                }
            }
        })

        // check if all the properties are displayed
        expect(wrapper.find('.name').text()).toEqual('Vega')
        expect(wrapper.find('.distance').text()).toEqual(25.04)
        expect(wrapper.find('.age').text()).toEqual(0.455)
        expect(wrapper.find('.mass').text()).toEqual(2.135)
        expect(wrapper.find('.image-url').text()).toEqual('https://skyandtelescope.org/wp-content/uploads/2017-09-26_59ca59ed7c8cc_04_Vega_20170922_400mm_10exp_280seg_3200iso_PI_PS.jpg')

        // set the distance field to a negative value which is an error
        wrapper.setData({ distance: -10 })

        // check if an error message appears
        expect(wrapper.find('.distance-error').exists()).toBeTruthy()

        // set the distance field back to normal value
        wrapper.setData({ distance: 25.04 })

        // check if an error message disappears
        expect(wrapper.find('.distance-error').exists()).toBeFalsy()
    })
})