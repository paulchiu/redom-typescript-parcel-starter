import 'tachyons'
import { mount } from 'redom'
import { MESSAGE } from './lib/message'
import { Hello } from './components/hello'

const hello = new Hello()
mount(document.querySelector('#app'), hello)
hello.update(MESSAGE)