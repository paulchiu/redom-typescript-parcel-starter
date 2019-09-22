import 'tachyons'
import { el, mount } from 'redom'
import { Header } from './components/header'
import { Article } from './components/article'

mount(document.querySelector('#app'), el('div', new Header(), new Article()))
