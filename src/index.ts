import 'tachyons'
import page from 'page'
import { mount, setChildren } from 'redom'
import { Layout } from './components/layout'
import { Article } from './components/article'
import { Header, MenuItem } from './components/header'
import { HeroHeader } from './components/hero-header'
import { HomePageArticle, AboutArticle } from './data/articles'

// App data
const menu: MenuItem[] = [
  { title: 'About', url: '/about' }
]

// Create layout
const layout = new Layout()
mount(document.querySelector('#app'), layout)

// Start router
page('/', () => {
  setChildren(layout.header, [new HeroHeader({
    heroImage: '//mrmrs.github.io/photos/u/011.jpg',
    menuItems: menu
  })])
  setChildren(layout.body, [new Article(HomePageArticle)])
})
page('/about', () => {
  setChildren(layout.header, [
    new Header({ menuItems: menu })
  ])
  setChildren(layout.body, [new Article(AboutArticle)])
})
page()
