import { RedomComponent, el } from 'redom'
import { Header } from './header'
import { HeroHeader } from './hero-header'

export class Layout implements RedomComponent {
  public el: HTMLElement
  public header: Header | HeroHeader | HTMLElement
  public body: HTMLElement

  constructor() {
    this.el = el('div',
      this.header = el('div'),
      this.body = el('div')
    )
  }

  public useHeroHeader() {
    this.header = new HeroHeader()
  }

  public useNormalHeader() {
    this.header = new Header()
  }
}
