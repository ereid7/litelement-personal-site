import { LitElement, html, css } from 'lit-element';

export class Application extends LitElement {

  static get styles() {
    return css`

    .outlet {
      margin: 0;
      position: absolute;
      left: 240px;
      margin-left: 5vw;
    }
    
    @media screen and (max-width: 700px) {
      .outlet {
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
      <side-bar></side-bar>
      <output class="outlet"></output>
    `
  }
}

customElements.define('application-page', Application);
