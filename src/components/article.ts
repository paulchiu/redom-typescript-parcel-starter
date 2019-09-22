import { RedomComponent, el } from 'redom'

const PARA1 = `PERFECT typography is more a science than an art. Mastery of the trade is
indispensable, but it isn't everything. Unerring taste, the hallmark of
perfection, rests also upon a clear understanding of the laws of harmonious
design. As a rule, impeccable taste springs partly from inborn sensitivity:
from feeling. But feelings remain rather unproductive unless they can inspire a
secure judgment. Feelings have to mature into knowledge about the consequences
of formal decisions. For this reason, there are no born masters of typography,
but self- education may lead in time to mastery.`

const PARA2 = `It is wrong to say that there is no arguing about taste when it is good taste
that is in question. We are not born with good taste, nor do we come into this
world equipped with a real understanding of art. Merely to recognize who or
what is represented in a picture has little to do with a real under- standing
of art. Neither has an uninformed opinion about the proportions of Roman
letters. In any case, arguing is senseless. He who wants to convince has to
do a better job than others.`

/**
 * (Left Title) Article Component
 *
 * @link https://tachyons.io/components/articles/left-title/index.html
 */

export class Article implements RedomComponent {
  public el: HTMLElement

  constructor() {
    this.el = el('article', { class: 'dt w-100 mw8 mt4 center' },
      el('header', { class: 'fn fl-ns w-50-ns pr4-ns' },
        el('h1', { class: 'mb3 mt0 lh-title' }, `Clay in a Potter's Hand`),
        el('time', { class: 'f6 ttu tracked gray' }, 'Jan Tschichold')
      ),
      el('div', { class: 'fn fl-ns w-50-ns' },
        el('p', { class: 'lh-copy measure mt4 mt0-ns' }, PARA1),
        el('p', { class: 'lh-copy measure' }, PARA2)
      )
    )
  }
}
