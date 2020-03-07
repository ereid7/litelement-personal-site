import { LitElement, html, css } from 'lit-element';

export class Sidebar extends LitElement {

  static get styles() {
    return css`
      .sidebar {
        height: 100%;
        width: 160px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        padding-top: 20px;
      }

      .sidebar a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
      }
    `;
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="sidebar">
        test
      </div>
    `
  }
}

customElements.define('side-bar', Sidebar);
