import { LitElement, html } from 'lit-element';

// TODO use typescript

export class MainApplication extends LitElement {

  constructor() {
    super()
  }

  render() {
    return html`

      <h1>I'm the main application!!!</h1>
    `
  }
}

customElements.define('main-application', MainApplication);
