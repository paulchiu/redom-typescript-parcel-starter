import 'tachyons'
import { mount } from 'redom'
import { Header } from './components/header'

const header = new Header()
mount(document.querySelector('#app'), header)
