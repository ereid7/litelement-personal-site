import { LitElement, html, css } from 'lit-element';

export class Resume extends LitElement {

  static get styles() {
    return css`
      div {
        margin: 0;
        position: relative;
      }
    `;
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="resume"> 
         <h2>Resume</h2>
      </div>
    `
  }
}

customElements.define('resume-page', Resume);
