import { LitElement, html, css } from 'lit-element';

export class Resume extends LitElement {

  static get styles() {
    return css`
    .body {
      display: inline-block;
      width: 620px;
      overflow-wrap: normal;
    }
    `;
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="resume"> 
        <div class="body">
          <h2>Resume</h2>
        </div>
      </div>
    `
  }
}

customElements.define('resume-page', Resume);
