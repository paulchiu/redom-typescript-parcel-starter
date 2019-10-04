import { RedomComponent, el, svg } from 'redom'

export interface MenuItem {
  title: string
  url: string
}

export interface HeaderProps {
  menuItems: MenuItem[]
}

/**
 * Header Component
 *
 * Based on Startup Hero Header Component
 *
 * @link https://tachyons.io/components/headers/startup-hero/index.html
 */
export class Header implements RedomComponent {
  public el: HTMLElement
  public menu: HTMLElement[]

  constructor(props: HeaderProps) {
    this.el = el('header.sans-serif',
      el('div', { class: 'cover bg-left bg-center-l' },
        el('div', { class: 'bg-black-80 h3' },
          el('nav', { class: 'dt w-100 mw8 center' },
            el('div', { class: 'dtc w2 v-mid ' },
              el('a', { href: '/', class: 'dib w2 h2 pa1 ba b--white-90 grow-large border-box' },
                svg('svg', { class:'link white-90 hover-white', 'data-icon': 'skull', viewBox: '0 0 32 32', style: 'fill:currentcolor' },
                  svg('title', 'skull icon'),
                  svg('path', { d: 'M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12' })
                )
              )
            ),
            el('div', { class: 'dtc v-mid tr pa3' },
              this.menu = props.menuItems.map(i => {
                return el('a', { href: i.url, class: 'f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3' }, i.title);
              }),
            )
          )
        )
      )
    )
  }
}
