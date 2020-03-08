import { LitElement, html, css } from 'lit-element';

// TODO use typescript
// TODO custom scrollbar

export class MainPage extends LitElement {

  static get styles() {
    return css`
      div {
        margin: 0;
        position: absolute;
        left: 240px;
        margin-left: 5vw;
      }

      @media screen and (max-width: 700px) {
        div {
          margin: 0;
          position: absolute;
          left: 0px;
          margin-left: 5vw;
        }
      }
    `;
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="main-page">
        <about-me></about-me>
      </div>
    `
  }
}

customElements.define('main-page', MainPage);
