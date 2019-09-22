import { RedomComponent, el } from 'redom'

export class Hello implements RedomComponent{
    public el: HTMLElement

    constructor() {
        this.el = el('h1');
    }

    update(data: string) {
        this.el.textContent = 'Hello ' + data + '!';
    }
}