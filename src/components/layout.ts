import { RedomComponent, RedomElement, el } from 'redom'
import { Header } from './header'
import { HeroHeader } from './hero-header'

export class Layout implements RedomComponent {
  public el: HTMLElement
  public header: Header | HeroHeader | RedomElement
  public body: RedomElement

  constructor() {
    this.el = el('div',
      this.header = el('div'),
      this.body = el('div')
    )
  }
}
