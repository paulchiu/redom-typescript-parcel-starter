import { RedomComponent, el, svg } from 'redom'

/**
 * Start Hero Header Component
 *
 * @link https://tachyons.io/components/headers/startup-hero/index.html
 */
export class HeroHeader implements RedomComponent {
  public el: HTMLElement

  constructor() {
    this.el = el('header.sans-serif',
      el('div', { class: 'cover bg-left bg-center-l', style: 'background-image: url(http://mrmrs.github.io/photos/u/011.jpg)' },
        el('div', { class: 'bg-black-80 pb5 pb6-m pb7-l' },
          el('nav', { class: 'dt w-100 mw8 center' },
            el('div', { class: 'dtc w2 v-mid' },
              el('a', { href: '/', class: 'dib w2 h2 pa1 ba b--white-90 grow-large border-box' },
                svg('svg', { class:'link white-90 hover-white', 'data-icon': 'skull', viewBox: '0 0 32 32', style: 'fill:currentcolor' },
                  svg('title', 'skull icon'),
                  svg('path', { d: 'M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12' })
                )
              )
            ),
            el('div', { class: 'dtc v-mid tr pa3' },
              el('a', { href: '/', class: 'f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3' }, 'How it Works'),
              el('a', { href: '/', class: 'f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3' }, 'Pricing'),
              el('a', { href: '/', class: 'f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3' }, 'About'),
              el('a', { href: '/', class: 'f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3' }, 'Careers'),
              el('a', { href: '/', class: 'f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba' }, 'Sign Up')
            )
          ),
          el('div', { class: 'tc-l mt4 mt5-m mt6-l ph3' },
            el('h1', { class: 'f2 f1-l fw2 white-90 mb0 lh-title' }, 'This is your super impressive headline'),
            el('h2', { class: 'fw1 f3 white-80 mt3 mb4' }, 'Now a subheadline where explain your wonderful new startup even more'),
            el('a', { href: '/', class: 'f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3' }, 'Call to Action'),
            el('span', { class: 'dib v-mid ph3 white-70 mb3' }, 'or'),
            el('a', { href: '', class: 'f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3' }, 'Secondary call to action')
          )
        )
      )
    )
  }
}
