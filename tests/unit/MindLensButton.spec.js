import {mount} from "@vue/test-utils"
import MindLensButton from "@/components/MindLensButton";

describe('Button component unit tests: ', ()=> {
  const wrapper = mount(MindLensButton, {
    props: {
      task: {
        name: 'showLeftIcon',
      }
    }
  })
  expect(wrapper.isVueInstance()).toBeTruthy()
})
