import { LitElement, html, css } from 'lit-element';

export class Footer extends LitElement {

  static get styles() {
    return css`
    .footer {
      margin-top: 300px;
      color: yellow;
      width: 600px;
      height: 40px;
      text-align: center;
      bottom: 0;
    }

    p {
      width: 200px;
    }
    `;
  }

  constructor() {
    super()
  }

  render() {
    return html`
    <div class="footer">
      TEST FOOTER
    </div>
    `
  }
}

customElements.define('footer-page', Footer);
