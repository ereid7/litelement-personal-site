import { LitElement, html, css } from 'lit-element';

export class Footer extends LitElement {
  // TODO remove?

  // TODO footer dark mode
  static get styles() {
    return css`
    .footer {
      margin-top: 60px;
      color: #D6D9DC;
      width: 100%;
      height: 40px;
      text-align: center;
      font-size: 12px;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }
    `;
  }

  render() {
    return html`
    <div class="footer">
      © Copyright 2020, Evan Reid
    </div>
    `
  }
}

customElements.define('footer-page', Footer);
