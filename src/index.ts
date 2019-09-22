import 'tachyons'
import { mount, setChildren } from 'redom'
import { Layout } from './components/layout'
import { Article } from './components/article'

const layout = new Layout()
layout.useHeroHeader()
setChildren(layout.body, [new Article()])
mount(document.querySelector('#app'), layout)
