import { RedomComponent, el } from 'redom'
import { ArticleRecord } from '../data/articles'

/**
 * (Left Title) Article Component
 *
 * @link https://tachyons.io/components/articles/left-title/index.html
 */

export class Article implements RedomComponent {
  public el: HTMLElement

  constructor(content: ArticleRecord) {
    const paras = content.content
      .split('\n')
      .map(p => el('p', { class: 'lh-copy measure ' }, p))
    if (paras[0]) {
      paras[0].classList.add('mt4', 'mt0-ns')
    }

    this.el = el('article', { class: 'dt w-100 mw8 mt4 center' },
      el('header', { class: 'fn fl-ns w-50-ns pr4-ns' },
        el('h1', { class: 'mb3 mt0 lh-title' }, content.title),
        el('time', { class: 'f6 ttu tracked gray' }, 'Jan Tschichold')
      ),
      el('div', { class: 'fn fl-ns w-50-ns' }, paras),
    )
  }
}
